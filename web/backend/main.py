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
from growth_tracker_generator import generate_growth_tracker
from bodydot_report_generator import generate_bodydot_report
import bodydot_api

from program_builder import generate_program_pdf, generate_program_html

# ── Supabase ──────────────────────────────────────────────────────────────────

SUPABASE_URL = os.environ["SUPABASE_URL"]
SUPABASE_KEY = os.environ["SUPABASE_SERVICE_KEY"]
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

STORAGE_BUCKET = "program-pdfs"

# ── Startup migration ─────────────────────────────────────────────────────────

def _run_migration():
    """Verify trainers table exists."""
    try:
        supabase.table("trainers").select("id").limit(1).execute()
    except Exception:
        import logging
        logging.warning("trainers table not found. Run trainers_migration.sql in Supabase SQL Editor.")

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


class BodydotApprovePayload(BaseModel):
    gym: str                       # 'Body Motions' | 'Body Masters' | 'Body Coach'
    org_id: str
    client_id: str
    client_name: str
    session_id: str
    test_date: str                 # YYYY-MM-DD (session UTC date)
    valid: Optional[bool] = None
    trainer_name: Optional[str] = None   # None = missing; free-text allowed
    dispatch_date: Optional[str] = None
    sent: bool = False


class BodydotPatchPayload(BaseModel):
    # Any subset; sent explicitly (booleans can't use "truthy" filtering).
    trainer_name: Optional[str] = None
    dispatch_date: Optional[str] = None
    sent: Optional[bool] = None
    approved: Optional[bool] = None
    ignored: Optional[bool] = None
    trainer_name_set: bool = False   # allow clearing trainer to NULL


class BodydotIgnorePayload(BaseModel):
    gym: str
    org_id: str
    client_id: str
    client_name: str
    session_id: str
    test_date: str
    valid: Optional[bool] = None


# ── Routes ────────────────────────────────────────────────────────────────────

@app.get("/")
def root():
    return {"status": "ok"}

@app.get("/api/version")
def version():
    return {"version": "2.0", "pagination": True, "pdf_generation": True}


# -- Trainers --

def _trainers_for(gym: str, branch: str = None) -> list[dict]:
    """Fetch trainers from the trainers table, ordered by sort_order."""
    try:
        q = supabase.table("trainers").select("*").eq("gym", gym)
        if branch:
            q = q.eq("branch", branch)
        q = q.order("sort_order")
        return q.execute().data or []
    except Exception:
        return []


@app.get("/api/branches")
def api_branches(gym: str = Query(...)):
    from report_generator import BRANCH_ORDER
    rows = _trainers_for(gym)
    seen = set()
    db_branches = []
    for r in rows:
        b = r["branch"]
        if b not in seen:
            seen.add(b)
            db_branches.append(b)
    order = BRANCH_ORDER.get(gym, [])
    ordered = [b for b in order if b in seen]
    # append any branches in DB but not in BRANCH_ORDER (e.g. newly added)
    for b in db_branches:
        if b not in ordered:
            ordered.append(b)
    return ordered


@app.get("/api/trainers")
def api_trainers(gym: str = Query(...), branch: str = Query(...)):
    return [r["name"] for r in _trainers_for(gym, branch)]


@app.get("/api/trainer-whatsapp")
def api_trainer_whatsapp(gym: str = Query(...), branch: str = Query(...), trainer: str = Query(...)):
    rows = _trainers_for(gym, branch)
    for r in rows:
        if r["name"] == trainer:
            return {"whatsapp": r.get("whatsapp") or ""}
    return {"whatsapp": ""}


@app.get("/api/trainers-full")
def api_trainers_full(gym: str = Query(...), branch: str = Query(...)):
    """Returns trainers for a branch: [{id, name, whatsapp, sort_order}]"""
    return _trainers_for(gym, branch)


@app.get("/api/trainers/all")
def api_trainers_all(gym: str = Query(...)):
    """Returns all trainers grouped by branch: {branch: [{id, name, whatsapp, sort_order}]}"""
    rows = _trainers_for(gym)
    result: dict = {}
    for r in rows:
        result.setdefault(r["branch"], []).append(r)
    return result


class TrainerPayload(BaseModel):
    gym: str
    branch: str
    name: str
    whatsapp: str = ""
    sort_order: Optional[int] = None


class TrainerUpdatePayload(BaseModel):
    name: Optional[str] = None
    whatsapp: Optional[str] = None
    branch: Optional[str] = None
    sort_order: Optional[int] = None


@app.post("/api/trainers")
def api_add_trainer(payload: TrainerPayload):
    # Default sort_order = max + 1 for the branch
    if payload.sort_order is None:
        rows = _trainers_for(payload.gym, payload.branch)
        sort_order = max((r["sort_order"] for r in rows), default=-1) + 1
    else:
        sort_order = payload.sort_order
    record = {
        "gym": payload.gym,
        "branch": payload.branch,
        "name": payload.name,
        "whatsapp": payload.whatsapp,
        "sort_order": sort_order,
    }
    res = supabase.table("trainers").insert(record).execute()
    if res.data:
        return res.data[0]
    raise HTTPException(status_code=500, detail="Failed to add trainer")


@app.put("/api/trainers/{trainer_id}")
def api_update_trainer(trainer_id: str, payload: TrainerUpdatePayload):
    update = {k: v for k, v in payload.model_dump().items() if v is not None}
    if not update:
        raise HTTPException(status_code=400, detail="Nothing to update")
    res = supabase.table("trainers").update(update).eq("id", trainer_id).execute()
    if res.data:
        return res.data[0]
    raise HTTPException(status_code=404, detail="Trainer not found")


@app.delete("/api/trainers/{trainer_id}")
def api_delete_trainer(trainer_id: str):
    res = supabase.table("trainers").delete().eq("id", trainer_id).execute()
    if res.data:
        return {"deleted": True}
    raise HTTPException(status_code=404, detail="Trainer not found")


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
    # Fetch all approved, non-ignored programs for this gym (paginated — Supabase default limit is 1000)
    page_size = 1000
    all_programs = []
    offset = 0
    while True:
        res = (
            supabase.table("programs")
            .select("*")
            .eq("gym", gym)
            .eq("approved", True)
            .neq("ignored", True)
            .range(offset, offset + page_size - 1)
            .execute()
        )
        batch = res.data or []
        all_programs.extend(batch)
        if len(batch) < page_size:
            break
        offset += page_size

    # Fetch trainer order from DB: {branch: [name, ...]} ordered by sort_order
    trainer_rows = _trainers_for(gym)
    trainer_order_by_branch: dict = {}
    for r in trainer_rows:
        trainer_order_by_branch.setdefault(r["branch"], []).append(r["name"])

    try:
        report_bytes = generate_report(
            gym=gym,
            programs=all_programs,
            period_type=period_type,
            year=year,
            month=month,
            week_number=week_number,
            trainer_order_by_branch=trainer_order_by_branch,
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


@app.post("/api/report/growth")
def api_generate_growth_tracker(
    gym: str = Form(...),
    year: int = Form(...),
    month: int = Form(...),
):
    """Test Growth Tracker: selected month vs previous month, by dispatch_date."""
    page_size = 1000
    all_programs = []
    offset = 0
    while True:
        res = (
            supabase.table("programs")
            .select("branch,trainer_name,dispatch_date,approved,ignored")
            .eq("gym", gym)
            .eq("approved", True)
            .neq("ignored", True)
            .range(offset, offset + page_size - 1)
            .execute()
        )
        batch = res.data or []
        all_programs.extend(batch)
        if len(batch) < page_size:
            break
        offset += page_size

    trainer_rows = _trainers_for(gym)
    trainer_order_by_branch: dict = {}
    for r in trainer_rows:
        trainer_order_by_branch.setdefault(r["branch"], []).append(r["name"])

    try:
        report_bytes = generate_growth_tracker(
            gym=gym,
            programs=all_programs,
            year=year,
            month=month,
            trainer_order_by_branch=trainer_order_by_branch,
            report_date=date.today(),
        )
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

    import calendar
    prev_y, prev_m = (year - 1, 12) if month == 1 else (year, month - 1)
    prev_abbr = calendar.month_abbr[prev_m].upper()
    curr_abbr = calendar.month_abbr[month].upper()
    if prev_y == year:
        span = f"{prev_abbr}-{curr_abbr} {year % 100:02d}"
    else:  # comparison spans a year boundary (e.g. Dec 25 → Jan 26)
        span = f"{prev_abbr} {prev_y % 100:02d}-{curr_abbr} {year % 100:02d}"
    filename = f"Test Growth Tracker - {gym} - {span}.xlsx"
    return StreamingResponse(
        io.BytesIO(report_bytes),
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )


# ── Bodydot tests (trainer assignment + approval/sent state) ────────────────────

@app.get("/api/bodydot/tests")
def api_bodydot_tests(gym: str = Query(...)):
    """All stored Bodydot test rows for a gym, keyed by session_id on the client
    so the Bodydot page can overlay approval/trainer/sent status onto the live list."""
    res = (
        supabase.table("bodydot_tests")
        .select("*")
        .eq("gym", gym)
        .order("test_date", desc=True)
        .execute()
    )
    return res.data or []


# Cache of the expensive API sweep, per (gym, days). DB status is merged fresh on
# every request, so approvals reflect instantly — only the ~1-min sweep is cached.
_recent_sweep_cache: dict = {}

@app.get("/api/bodydot/recent")
def api_bodydot_recent(
    gym: str = Query(...),
    days: int = Query(10),
    refresh: bool = Query(False),
):
    """Sweep the last `days` days of Bodydot tests (live, deduped, with validity) and
    merge in the stored approval/trainer status. Cached — pass refresh=true to re-sweep."""
    if gym not in bodydot_api.ORG_TO_GYM.values():
        raise HTTPException(status_code=400, detail=f"Unknown gym '{gym}'")
    org_id = bodydot_api.GYM_TO_ORG[gym]

    key = (gym, days)
    cached = _recent_sweep_cache.get(key)
    if refresh or cached is None:
        try:
            summary = bodydot_api.recent_summary(org_id, days=days)
        except Exception as e:
            traceback.print_exc()
            raise HTTPException(status_code=502, detail=f"Bodydot API sweep failed: {e}")
        cached = {"ts": datetime.utcnow().isoformat(), "summary": summary}
        _recent_sweep_cache[key] = cached

    # Merge fresh DB status onto a shallow copy of the cached sweep.
    try:
        rows = supabase.table("bodydot_tests").select("*").eq("gym", gym).execute().data or []
    except Exception:
        rows = []  # table not created yet — treat everything as unapproved
    stored = {r["session_id"]: r for r in rows}
    tests = [
        {**t, "stored": stored.get(t["session_id"])}
        for t in cached["summary"]["tests"]
    ]
    tests.sort(key=lambda t: t.get("created_at") or "", reverse=True)
    s = cached["summary"]
    return {"total": s["total"], "valid": s["valid"], "invalid": s["invalid"],
            "tests": tests, "swept_at": cached["ts"]}


@app.post("/api/bodydot/auto-record-invalid")
def api_bodydot_auto_record_invalid(
    gym: str = Form(...),
    year: int = Form(...),
    month: int = Form(...),
):
    """Sweep a month and bulk-record every INVALID test as approved (valid=false),
    so the DB-based report counts them without you clicking each one. Slow (one API
    sweep) — run once per month. Never touches tests you've already approved/ignored."""
    if gym not in bodydot_api.ORG_TO_GYM.values():
        raise HTTPException(status_code=400, detail=f"Unknown gym '{gym}'")
    org_id = bodydot_api.GYM_TO_ORG[gym]
    try:
        summary = bodydot_api.month_test_summary(org_id, year, month)
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=502, detail=f"Bodydot API sweep failed: {e}")

    invalids = [t for t in summary["tests"] if not t["valid"]]
    existing = {
        r["session_id"]: r
        for r in (supabase.table("bodydot_tests").select("session_id,approved,ignored")
                  .eq("gym", gym).execute().data or [])
    }
    records = []
    for t in invalids:
        ex = existing.get(t["session_id"])
        if ex and (ex.get("approved") or ex.get("ignored")):
            continue  # already handled — don't overwrite
        clean_name, real_id = _split_client(t["client_name"])
        records.append({
            "gym": gym, "org_id": org_id,
            "client_id": t["client_id"], "client_name": clean_name, "real_client_id": real_id,
            "session_id": t["session_id"], "test_date": t["test_date"],
            "valid": False, "approved": True,
            "approved_at": datetime.utcnow().isoformat(), "ignored": False,
        })
    if records:
        supabase.table("bodydot_tests").upsert(records, on_conflict="session_id").execute()
    return {"invalid_found": len(invalids), "recorded": len(records)}


@app.post("/api/bodydot/tests/ignore")
def api_bodydot_ignore(payload: BodydotIgnorePayload):
    clean_name, real_id = _split_client(payload.client_name)
    record = {
        "gym": payload.gym, "org_id": payload.org_id,
        "client_id": payload.client_id, "client_name": clean_name, "real_client_id": real_id,
        "session_id": payload.session_id, "test_date": payload.test_date,
        "valid": payload.valid, "ignored": True, "approved": False,
    }
    res = supabase.table("bodydot_tests").upsert(record, on_conflict="session_id").execute()
    if res.data:
        return res.data[0]
    raise HTTPException(status_code=500, detail="Failed to ignore Bodydot test")


import re as _re

def _split_client(name: str, real_id: str | None = None):
    """Split a Bodydot client name into (clean_name, real_client_id). Trainers often
    type the gym's id into the name ('Sabrina 12345'); we store the id in its own
    column and keep the name clean. A provided real_id wins over one parsed from the name."""
    real_id = (real_id or "").strip()
    if not real_id:
        nums = _re.findall(r"\d{4,}", name or "")
        real_id = max(nums, key=len) if nums else ""
    clean = _re.sub(r"\s*\d{4,}\s*", " ", name or "").strip() or (name or "")
    return clean, (real_id or None)


@app.post("/api/bodydot/tests/approve")
def api_bodydot_approve(payload: BodydotApprovePayload):
    clean_name, real_id = _split_client(payload.client_name)
    record = {
        "gym": payload.gym,
        "org_id": payload.org_id,
        "client_id": payload.client_id,
        "client_name": clean_name,
        "real_client_id": real_id,
        "session_id": payload.session_id,
        "test_date": payload.test_date,
        "valid": payload.valid,
        "trainer_name": payload.trainer_name,   # None = missing/unassigned
        "dispatch_date": payload.dispatch_date,
        "sent": payload.sent,
        "approved": True,
        "approved_at": datetime.utcnow().isoformat(),
        "ignored": False,
    }
    res = (
        supabase.table("bodydot_tests")
        .upsert(record, on_conflict="session_id")
        .execute()
    )
    if res.data:
        return res.data[0]
    raise HTTPException(status_code=500, detail="Failed to approve Bodydot test")


@app.post("/api/bodydot/tests/{session_id}/unapprove")
def api_bodydot_unapprove(session_id: str):
    res = (
        supabase.table("bodydot_tests")
        .update({"approved": False, "approved_at": None})
        .eq("session_id", session_id)
        .execute()
    )
    if res.data:
        return res.data[0]
    raise HTTPException(status_code=404, detail="Bodydot test not found")


@app.patch("/api/bodydot/tests/{session_id}")
def api_bodydot_patch(session_id: str, payload: BodydotPatchPayload):
    updates: dict = {}
    # trainer_name can be set to a real name, or explicitly cleared to NULL
    if payload.trainer_name_set:
        updates["trainer_name"] = payload.trainer_name
    if payload.dispatch_date is not None:
        updates["dispatch_date"] = payload.dispatch_date
    if payload.sent is not None:
        updates["sent"] = payload.sent
    if payload.approved is not None:
        updates["approved"] = payload.approved
        updates["approved_at"] = datetime.utcnow().isoformat() if payload.approved else None
    if payload.ignored is not None:
        updates["ignored"] = payload.ignored
    if not updates:
        raise HTTPException(status_code=400, detail="Nothing to update")
    res = (
        supabase.table("bodydot_tests")
        .update(updates)
        .eq("session_id", session_id)
        .execute()
    )
    if res.data:
        return res.data[0]
    raise HTTPException(status_code=404, detail="Bodydot test not found")


@app.post("/api/report/bodydot")
def api_generate_bodydot_report(
    gym: str = Form(...),
    year: int = Form(...),
    month: int = Form(...),
    period_type: str = Form("monthly"),   # monthly | weekly
    week_number: Optional[int] = Form(None),
    start_day: Optional[int] = Form(None),
    end_day: Optional[int] = Form(None),
):
    """Bodydot report — read entirely from the DB (no live sweep, which is slow).
    Supports monthly / weekly / custom-day-range periods, mirroring the VALD report.
    Validity totals come from approved rows by test date within the period; the
    per-trainer breakdown + data sheet come from approved VALID rows by dispatch date.
    Approve both valid and invalid tests on the Bodydot page so this stays complete."""
    if gym not in bodydot_api.REPORT_GYMS:
        raise HTTPException(status_code=400, detail=f"No Bodydot report for gym '{gym}'")

    import calendar
    last_day = calendar.monthrange(year, month)[1]
    if period_type == "weekly":
        if not week_number:
            raise HTTPException(status_code=400, detail="week_number required for weekly report")
        s = (week_number - 1) * 7 + 1
        period_start = date(year, month, s)
        period_end = date(year, month, min(s + 6, last_day))
    else:  # monthly (frontend also sends monthly for custom, with start/end days)
        period_start = date(year, month, max(1, start_day or 1))
        period_end = date(year, month, min(last_day, end_day or last_day))
    is_partial = period_type == "weekly" or bool(start_day or end_day)

    approved = (
        supabase.table("bodydot_tests")
        .select("*")
        .eq("gym", gym)
        .eq("approved", True)
        .eq("ignored", False)
        .execute()
        .data or []
    )

    # TEST VALIDITY — tests conducted within the period (by test_date), valid vs invalid.
    def _in_window(d):
        if not isinstance(d, str):
            return False
        try:
            td = date.fromisoformat(d[:10])
        except ValueError:
            return False
        return period_start <= td <= period_end
    in_window = [r for r in approved if _in_window(r.get("test_date"))]
    valid_ct = sum(1 for r in in_window if r.get("valid"))
    validity = {"total": len(in_window), "valid": valid_ct, "invalid": len(in_window) - valid_ct}

    # Data sheet / per-trainer — only VALID tests (invalid ones have no program).
    valid_rows = [r for r in approved if r.get("valid")]

    branch = bodydot_api.GYM_TO_BRANCH.get(gym)
    roster = [r["name"] for r in _trainers_for(gym, branch)] if branch else []

    try:
        report_bytes = generate_bodydot_report(
            gym=gym, period_start=period_start, period_end=period_end,
            validity=validity, approved_tests=valid_rows,
            trainer_roster=roster,
            report_date=(period_end if is_partial else date.today()),
        )
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

    month_name = calendar.month_name[month]
    month_abbr = calendar.month_abbr[month]
    if period_type == "weekly":
        filename = f"Bodydot {month_abbr} {year} - Week {week_number} - {gym}.xlsx"
    elif start_day or end_day:
        filename = f"Bodydot {month_name} {year} (Day {period_start.day}-{period_end.day}) - {gym}.xlsx"
    else:
        filename = f"Bodydot {month_name} {year} - {gym}.xlsx"
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
            .select("gym,branch,client_id,client_name,test_type,trainer_name,test_date,dispatch_date")
            .eq("approved", True)
            .neq("ignored", True)
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
