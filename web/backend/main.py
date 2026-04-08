"""
FastAPI backend for VALD Automator web app.
"""
import os
import io
from datetime import date, datetime
from typing import Optional

from fastapi import FastAPI, File, UploadFile, HTTPException, Form, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from supabase import create_client, Client

from check_processor import process_check_file
from report_generator import generate_report
from trainers_data import get_branches, get_trainers, get_trainer_whatsapp, TRAINERS

# ── Supabase ──────────────────────────────────────────────────────────────────

SUPABASE_URL = os.environ["SUPABASE_URL"]
SUPABASE_KEY = os.environ["SUPABASE_SERVICE_KEY"]
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

STORAGE_BUCKET = "program-pdfs"

# ── App ───────────────────────────────────────────────────────────────────────

app = FastAPI(title="VALD Automator API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # tighten in production to your frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Models ────────────────────────────────────────────────────────────────────

class ApprovePayload(BaseModel):
    gym: str
    branch: str
    client_id: Optional[str] = None
    client_name: str
    test_type: str
    movements: int
    test_date: str          # YYYY-MM-DD
    trainer_name: Optional[str] = None
    dispatch_date: Optional[str] = None  # YYYY-MM-DD
    check_status: str = "NEW"


class AssignPayload(BaseModel):
    branch: Optional[str] = None
    trainer_name: Optional[str] = None
    dispatch_date: Optional[str] = None


# ── Routes ────────────────────────────────────────────────────────────────────

@app.get("/")
def root():
    return {"status": "ok"}


# -- Trainers --

@app.get("/api/branches")
def api_branches(gym: str = Query(...)):
    return get_branches(gym)


@app.get("/api/trainers")
def api_trainers(gym: str = Query(...), branch: str = Query(...)):
    return [t["name"] for t in get_trainers(gym, branch)]


@app.get("/api/trainer-whatsapp")
def api_trainer_whatsapp(gym: str = Query(...), branch: str = Query(...), trainer: str = Query(...)):
    number = get_trainer_whatsapp(gym, branch, trainer)
    return {"whatsapp": number}


# -- Check file --

@app.post("/api/check")
async def api_check(
    gym: str = Form(...),
    file: UploadFile = File(...),
):
    content = await file.read()

    # Fetch existing approved programs for this gym from Supabase
    res = (
        supabase.table("programs")
        .select("client_name,test_type,test_date,movements")
        .eq("gym", gym)
        .eq("approved", True)
        .execute()
    )
    existing = res.data or []

    results = process_check_file(content, gym, existing)
    return results


# -- Programs CRUD --

@app.get("/api/programs")
def api_list_programs(
    gym: str = Query(...),
    approved: Optional[bool] = Query(None),
    year: Optional[int] = Query(None),
    month: Optional[int] = Query(None),
):
    query = supabase.table("programs").select("*").eq("gym", gym)
    if approved is not None:
        query = query.eq("approved", approved)
    if year and month:
        from_date = f"{year}-{month:02d}-01"
        if month == 12:
            to_date = f"{year + 1}-01-01"
        else:
            to_date = f"{year}-{month + 1:02d}-01"
        query = query.gte("dispatch_date", from_date).lt("dispatch_date", to_date)
    res = query.order("created_at").execute()
    return res.data or []


@app.post("/api/programs/approve")
def api_approve(payload: ApprovePayload):
    record = {
        "gym": payload.gym,
        "branch": payload.branch,
        "client_id": payload.client_id,
        "client_name": payload.client_name,
        "test_type": payload.test_type,
        "movements": payload.movements,
        "test_date": payload.test_date,
        "trainer_name": payload.trainer_name,
        "dispatch_date": payload.dispatch_date,
        "check_status": payload.check_status,
        "approved": True,
        "approved_at": datetime.utcnow().isoformat(),
    }

    # Upsert by (gym, client_name, test_type, test_date)
    res = (
        supabase.table("programs")
        .upsert(record, on_conflict="gym,client_name,test_type,test_date")
        .execute()
    )
    if res.data:
        return res.data[0]
    raise HTTPException(status_code=500, detail="Failed to approve program")


@app.patch("/api/programs/{program_id}")
def api_patch_program(program_id: str, payload: AssignPayload):
    updates = {k: v for k, v in payload.dict().items() if v is not None}
    if not updates:
        raise HTTPException(status_code=400, detail="Nothing to update")
    res = (
        supabase.table("programs")
        .update(updates)
        .eq("id", program_id)
        .execute()
    )
    if res.data:
        return res.data[0]
    raise HTTPException(status_code=404, detail="Program not found")


# -- PDF upload --

@app.post("/api/programs/{program_id}/upload-pdf")
async def api_upload_pdf(
    program_id: str,
    pdf_type: str = Form(...),   # "program" or "results"
    file: UploadFile = File(...),
):
    content = await file.read()
    ext = os.path.splitext(file.filename or "file.pdf")[1] or ".pdf"
    path = f"{program_id}/{pdf_type}{ext}"

    supabase.storage.from_(STORAGE_BUCKET).upload(
        path, content, {"content-type": file.content_type or "application/pdf"}
    )

    # Get public URL
    url_res = supabase.storage.from_(STORAGE_BUCKET).get_public_url(path)
    public_url = url_res if isinstance(url_res, str) else url_res.get("publicURL", "")

    field = "program_pdf_url" if pdf_type == "program" else "results_pdf_url"
    supabase.table("programs").update({field: public_url}).eq("id", program_id).execute()

    return {"url": public_url}


@app.get("/api/programs/{program_id}/pdf/{pdf_type}")
def api_get_pdf_url(program_id: str, pdf_type: str):
    res = supabase.table("programs").select("program_pdf_url,results_pdf_url").eq("id", program_id).execute()
    if not res.data:
        raise HTTPException(status_code=404, detail="Program not found")
    field = "program_pdf_url" if pdf_type == "program" else "results_pdf_url"
    return {"url": res.data[0].get(field)}


# -- Report generation --

@app.post("/api/report/generate")
def api_generate_report(
    gym: str = Form(...),
    period_type: str = Form(...),    # monthly | weekly
    year: int = Form(...),
    month: int = Form(...),
    week_number: Optional[int] = Form(None),
):
    # Fetch all approved programs for this gym
    res = supabase.table("programs").select("*").eq("gym", gym).eq("approved", True).execute()
    all_programs = res.data or []

    try:
        report_bytes = generate_report(
            gym=gym,
            programs=all_programs,
            period_type=period_type,
            year=year,
            month=month,
            week_number=week_number,
            report_date=date.today(),
        )
    except FileNotFoundError as e:
        raise HTTPException(status_code=500, detail=str(e))

    period_label = f"Week{week_number}_{year}{month:02d}" if period_type == "weekly" else f"{year}{month:02d}"
    filename = f"{gym.replace(' ', '_')}_{period_label}_Report.xlsx"

    return StreamingResponse(
        io.BytesIO(report_bytes),
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )
