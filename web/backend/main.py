"""
FastAPI backend for VALD Automator web app.
v2 — paginated Supabase fetch, server-side PDF generation.
"""
import os
import io
import traceback
from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))
from datetime import date, datetime
from typing import Optional

from contextlib import asynccontextmanager
from fastapi import FastAPI, File, UploadFile, HTTPException, Form, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse, JSONResponse, HTMLResponse
from pydantic import BaseModel

from supabase import create_client, Client

from check_processor import process_check_file, parse_all_programs
from report_generator import generate_report
from payment_report_generator import generate_payment_report
from trainers_data import get_branches, get_trainers, get_trainer_whatsapp, TRAINERS
from program_builder import generate_program_pdf, generate_program_html

# ── Supabase ──────────────────────────────────────────────────────────────────

SUPABASE_URL = os.environ["SUPABASE_URL"]
SUPABASE_KEY = os.environ["SUPABASE_SERVICE_KEY"]
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

STORAGE_BUCKET = "program-pdfs"

# ── Startup migration ─────────────────────────────────────────────────────────

def _run_migration():
    """Create trainer_overrides table if it does not exist."""
    try:
        # Ping the table; if it exists we're done
        supabase.table("trainer_overrides").select("id").limit(1).execute()
    except Exception:
        # Table missing — tell Railway logs to run the SQL manually
        import logging
        logging.warning(
            "trainer_overrides table not found. "
            "Run the SQL in supabase_schema.sql in the Supabase SQL editor."
        )

@asynccontextmanager
async def lifespan(app_: FastAPI):
    _run_migration()
    yield

# ── App ───────────────────────────────────────────────────────────────────────

app = FastAPI(title="VALD Automator API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # tighten in production to your frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["Content-Disposition"],
)


@app.exception_handler(Exception)
async def unhandled_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"detail": str(exc), "traceback": traceback.format_exc()},
        headers={"Access-Control-Allow-Origin": "*"},
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
    asymmetry_values: Optional[dict] = None  # movement_key -> pct (0-100)


class AssignPayload(BaseModel):
    branch: Optional[str] = None
    trainer_name: Optional[str] = None
    dispatch_date: Optional[str] = None


class IgnorePayload(BaseModel):
    gym: str
    client_name: str
    test_type: str
    test_date: str
    movements: int
    external_id: Optional[str] = None


# ── Routes ────────────────────────────────────────────────────────────────────

@app.get("/")
def root():
    return {"status": "ok"}

@app.get("/api/version")
def version():
    return {"version": "2.0", "pagination": True, "pdf_generation": True}


# -- Trainers --

def _overrides_for(gym: str, branch: str = None) -> list[dict]:
    """Fetch trainer_overrides rows from Supabase. Returns [] on any error."""
    try:
        q = supabase.table("trainer_overrides").select("*").eq("gym", gym)
        if branch:
            q = q.eq("branch", branch)
        return q.execute().data or []
    except Exception:
        return []


@app.get("/api/branches")
def api_branches(gym: str = Query(...)):
    static = get_branches(gym)
    overrides = _overrides_for(gym)
    extra = [o["branch"] for o in overrides if o["branch"] not in static]
    # Deduplicate while preserving order
    seen = set(static)
    result = list(static)
    for b in extra:
        if b not in seen:
            seen.add(b)
            result.append(b)
    return result


@app.get("/api/trainers")
def api_trainers(gym: str = Query(...), branch: str = Query(...)):
    static = [t["name"] for t in get_trainers(gym, branch)]
    overrides = _overrides_for(gym, branch)
    seen = set(static)
    result = list(static)
    for o in overrides:
        if o["trainer_name"] not in seen:
            seen.add(o["trainer_name"])
            result.append(o["trainer_name"])
    return result


@app.get("/api/trainer-whatsapp")
def api_trainer_whatsapp(gym: str = Query(...), branch: str = Query(...), trainer: str = Query(...)):
    # DB override takes priority over hardcoded value
    overrides = _overrides_for(gym, branch)
    for o in overrides:
        if o["trainer_name"] == trainer and o.get("whatsapp"):
            return {"whatsapp": o["whatsapp"]}
    return {"whatsapp": get_trainer_whatsapp(gym, branch, trainer)}


# -- Trainer management --

class TrainerOverridePayload(BaseModel):
    gym: str
    branch: str
    trainer_name: str
    whatsapp: str = ""


@app.get("/api/trainer-overrides")
def api_list_overrides(gym: str = Query(...), branch: Optional[str] = Query(None)):
    return _overrides_for(gym, branch)


@app.post("/api/trainer-overrides")
def api_upsert_override(payload: TrainerOverridePayload):
    record = {
        "gym": payload.gym,
        "branch": payload.branch,
        "trainer_name": payload.trainer_name,
        "whatsapp": payload.whatsapp,
    }
    res = (
        supabase.table("trainer_overrides")
        .upsert(record, on_conflict="gym,branch,trainer_name")
        .execute()
    )
    if res.data:
        return res.data[0]
    raise HTTPException(status_code=500, detail="Failed to save trainer override")


@app.delete("/api/trainer-overrides/{override_id}")
def api_delete_override(override_id: str):
    res = (
        supabase.table("trainer_overrides")
        .delete()
        .eq("id", override_id)
        .execute()
    )
    if res.data:
        return {"deleted": True}
    raise HTTPException(status_code=404, detail="Override not found")


@app.get("/api/trainers-full")
def api_trainers_full(gym: str = Query(...), branch: str = Query(...)):
    """
    Returns every trainer for a branch with their effective WhatsApp number.
    DB overrides take priority over hardcoded numbers.
    Response: [{name, whatsapp, override_id, is_static}]
    """
    static = get_trainers(gym, branch)           # list[dict] with name + whatsapp
    overrides = _overrides_for(gym, branch)      # list[dict] with trainer_name + whatsapp + id
    override_map = {o["trainer_name"]: o for o in overrides}

    result = []
    seen = set()

    for t in static:
        name = t["name"]
        seen.add(name)
        ov = override_map.get(name)
        result.append({
            "name": name,
            "whatsapp": ov["whatsapp"] if ov and ov.get("whatsapp") else (t.get("whatsapp") or ""),
            "override_id": ov["id"] if ov else None,
            "is_static": True,
        })

    # DB-only trainers (added via UI)
    for ov in overrides:
        if ov["trainer_name"] not in seen:
            result.append({
                "name": ov["trainer_name"],
                "whatsapp": ov.get("whatsapp") or "",
                "override_id": ov["id"],
                "is_static": False,
            })

    return result


# -- Check file --

@app.post("/api/check")
async def api_check(
    gym: str = Form(...),
    file: UploadFile = File(...),
):
    content = await file.read()

    page_size = 1000

    # Fetch ALL existing approved programs for this gym from Supabase (paginated)
    existing = []
    offset = 0
    while True:
        res = (
            supabase.table("programs")
            .select("client_name,test_type,test_date,movements,asymmetry_values,branch,trainer_name,dispatch_date")
            .eq("gym", gym)
            .eq("approved", True)
            .range(offset, offset + page_size - 1)
            .execute()
        )
        batch = res.data or []
        existing.extend(batch)
        if len(batch) < page_size:
            break
        offset += page_size

    # Fetch ignored programs so the processor can suppress them
    ignored = []
    offset = 0
    while True:
        res = (
            supabase.table("programs")
            .select("client_name,test_type,test_date,movements")
            .eq("gym", gym)
            .eq("ignored", True)
            .range(offset, offset + page_size - 1)
            .execute()
        )
        batch = res.data or []
        ignored.extend(batch)
        if len(batch) < page_size:
            break
        offset += page_size

    results = process_check_file(content, gym, existing, ignored)
    return results


# -- Quick generate (no DB) --

@app.post("/api/quick-generate")
async def api_quick_generate(
    gym: str = Form(...),
    file: UploadFile = File(...),
):
    content = await file.read()
    results = parse_all_programs(content, gym)
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
    if payload.asymmetry_values:
        record["asymmetry_values"] = payload.asymmetry_values

    # Upsert by (gym, client_name, test_type, test_date)
    res = (
        supabase.table("programs")
        .upsert(record, on_conflict="gym,client_name,test_type,test_date")
        .execute()
    )
    if res.data:
        return res.data[0]
    raise HTTPException(status_code=500, detail="Failed to approve program")


@app.post("/api/programs/ignore")
def api_ignore(payload: IgnorePayload):
    # Don't ignore if an approved record already exists for this key
    existing_res = (
        supabase.table("programs")
        .select("id,approved")
        .eq("gym", payload.gym)
        .eq("client_name", payload.client_name)
        .eq("test_type", payload.test_type)
        .eq("test_date", payload.test_date)
        .execute()
    )
    if existing_res.data and existing_res.data[0].get("approved"):
        raise HTTPException(status_code=400, detail="Cannot ignore an already approved program")

    record = {
        "gym": payload.gym,
        "client_name": payload.client_name,
        "client_id": payload.external_id,
        "test_type": payload.test_type,
        "test_date": payload.test_date,
        "movements": payload.movements,
        "check_status": "NEW",
        "approved": False,
        "ignored": True,
    }
    res = (
        supabase.table("programs")
        .upsert(record, on_conflict="gym,client_name,test_type,test_date")
        .execute()
    )
    if res.data:
        return res.data[0]
    raise HTTPException(status_code=500, detail="Failed to ignore program")


@app.post("/api/programs/unignore")
def api_unignore(payload: IgnorePayload):
    res = (
        supabase.table("programs")
        .update({"ignored": False})
        .eq("gym", payload.gym)
        .eq("client_name", payload.client_name)
        .eq("test_type", payload.test_type)
        .eq("test_date", payload.test_date)
        .execute()
    )
    if res.data:
        return res.data[0]
    raise HTTPException(status_code=404, detail="Record not found")


@app.post("/api/programs/unapprove")
def api_unapprove(payload: IgnorePayload):
    res = (
        supabase.table("programs")
        .update({"approved": False, "approved_at": None})
        .eq("gym", payload.gym)
        .eq("client_name", payload.client_name)
        .eq("test_type", payload.test_type)
        .eq("test_date", payload.test_date)
        .execute()
    )
    if res.data:
        return res.data[0]
    raise HTTPException(status_code=404, detail="Record not found")


# -- On-demand program PDF generation --

class GeneratePayload(BaseModel):
    gym: str
    test_type: str
    patient_name: str
    test_date: str
    cells_data: dict
    prev_asymmetries: Optional[dict] = None


@app.post("/api/programs/generate-pdf")
def api_generate_pdf(payload: GeneratePayload):
    """
    Generate a filled program PDF for a patient and return it as a file download.
    Does NOT save anything to the database — call /api/programs/approve separately.
    """
    pdf_bytes, content_type, filename = generate_program_pdf(
        gym=payload.gym,
        test_type=payload.test_type,
        patient_name=payload.patient_name,
        test_date=payload.test_date,
        cells_data=payload.cells_data,
        prev_asymmetries=payload.prev_asymmetries,
    )
    return StreamingResponse(
        io.BytesIO(pdf_bytes),
        media_type=content_type,
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )


@app.post("/api/programs/preview")
def api_preview_html(payload: GeneratePayload):
    """Return the workout planner sheet as HTML for live preview."""
    html = generate_program_html(
        gym=payload.gym,
        test_type=payload.test_type,
        patient_name=payload.patient_name,
        test_date=payload.test_date,
        cells_data=payload.cells_data,
        prev_asymmetries=payload.prev_asymmetries,
    )
    return HTMLResponse(content=html)



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
    start_day: Optional[int] = Form(None),
    end_day: Optional[int] = Form(None),
):
    # Fetch all approved, non-ignored programs for this gym
    res = supabase.table("programs").select("*").eq("gym", gym).eq("approved", True).neq("ignored", True).execute()
    all_programs = res.data or []

    try:
        report_bytes = generate_report(
            gym=gym,
            programs=all_programs,
            period_type=period_type,
            year=year,
            month=month,
            week_number=week_number,
            start_day=start_day,
            end_day=end_day,
            report_date=date.today(),
        )
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

    import calendar
    if period_type == "weekly":
        month_abbr = calendar.month_abbr[month].upper()
        filename = f"{month_abbr} {year} - Week {week_number} - {gym}.xlsx"
    else:
        month_name = calendar.month_name[month]
        filename = f"{month_name} {year} - {gym}.xlsx"

    return StreamingResponse(
        io.BytesIO(report_bytes),
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )


@app.post("/api/report/payment")
def api_generate_payment_report(
    month: int = Form(...),
    year: int = Form(...),
):
    """Append a month's programs to the cumulative payment Excel file."""
    # Fetch ALL approved programs (paginated — same pattern as report generator)
    page_size = 1000
    all_programs = []
    offset = 0
    while True:
        res = (
            supabase.table("programs")
            .select("gym,branch,client_id,client_name,trainer_name,test_date,dispatch_date")
            .eq("approved", True)
            .range(offset, offset + page_size - 1)
            .execute()
        )
        batch = res.data or []
        all_programs.extend(batch)
        if len(batch) < page_size:
            break
        offset += page_size

    try:
        result_bytes = generate_payment_report(
            programs=all_programs,
            month=month,
            year=year,
            report_date=date.today(),
        )
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

    import calendar
    month_name = calendar.month_name[month]
    filename = f"Payment - {month_name} {year}.xlsx"

    return StreamingResponse(
        io.BytesIO(result_bytes),
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )
