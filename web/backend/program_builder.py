"""
Fills a .xlsm program template with patient data using openpyxl,
then converts to PDF via LibreOffice headless.
No Excel/xlwings required — runs on Linux (Render.com).
"""
import io
import os
import re
import shutil
import subprocess
import tempfile
from datetime import datetime
from openpyxl import load_workbook

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
WORKSPACE_DIR = os.path.abspath(os.path.join(BASE_DIR, "..", ".."))

TEMPLATE_MAP = {
    ("Body Masters", "upper"): os.path.join(WORKSPACE_DIR, "Body Masters", "Body Masters Upper Body.xlsm"),
    ("Body Masters", "lower"): os.path.join(WORKSPACE_DIR, "Body Masters", "Body Masters Lower Body.xlsm"),
    ("Body Masters", "full"):  os.path.join(WORKSPACE_DIR, "Body Masters", "Body Masters Full Body.xlsm"),
    ("Body Motions", "upper"): os.path.join(WORKSPACE_DIR, "Body Motions", "Body Motions Upper Body.xlsm"),
    ("Body Motions", "lower"): os.path.join(WORKSPACE_DIR, "Body Motions", "Body Motions Lower Body.xlsm"),
    ("Body Motions", "full"):  os.path.join(WORKSPACE_DIR, "Body Motions", "Body Motions Full Body.xlsm"),
}

BODY_PART_MAP = {
    "shoulder":      "Shoulder / الكتف",
    "rotator_cuff":  "Rotator cuff/ الكُمّ",
    "chest":         "Chest/ الصدر",
    "back":          "Back/ الظهر",
    "triceps":       "Triceps /التراي سيبس",
    "biceps":        "Biceps /الباي سيبس",
    "hand":          "Hand/ اليد",
    "quadriceps":    "Quadriceps / الفخذ الأمامي",
    "hamstring":     "Hamstring / الفخذ الخلفي",
    "hip_abductors": "Hip Abductors / الفخذ  الخارجي",
    "hip_adductors": "Hip Adductors / الفخذ الداخلي",
    "hip_flexors":   "Hip Flexors / عضلات ثني الورك",
    "hip_extensors": "Hip Extensors/عضلات بسط الورك",
    "trunk":         "Trunk / الجذع",
}

ORDERED_PARTS = {
    "upper": ["shoulder", "rotator_cuff", "chest", "back", "triceps", "biceps", "hand"],
    "lower": ["quadriceps", "hamstring", "hip_abductors", "hip_adductors", "hip_flexors", "hip_extensors", "trunk"],
    "full":  ["shoulder", "rotator_cuff", "triceps", "biceps", "hamstring", "quadriceps", "hip_abductors", "hip_adductors"],
}

PERCENTAGE_REMARK_PAIRS = [
    ("D21", "D22"), ("D23", "D24"), ("D25", "D26"), ("D27", "D28"),
    ("P21", "P22"), ("P23", "P24"), ("P25", "P26"), ("P27", "P28"),
    ("AB21", "AB22"), ("AB23", "AB24"), ("AB25", "AB26"), ("AB27", "AB28"),
    ("AH21", "AH22"), ("AH23", "AH24"), ("AH25", "AH26"), ("AH27", "AH28"),
]


def _get_remark(pct_fraction):
    if pct_fraction is None:
        return ""
    pct = abs(pct_fraction) * 100
    if 0.1 <= pct <= 3.9:   return "Perfect Symmetry / \nتناظر مثالي"
    elif 4 <= pct <= 7.9:   return "Normal Symmetry / \nتناظر طبيعي"
    elif 8 <= pct <= 14.9:  return "Weakness / \nضعف"
    elif 15 <= pct <= 19.9: return "Problem / \nمشكلة"
    elif 20 <= pct <= 29.9: return "Major Problem / \nمشكلة كبيرة"
    elif pct >= 30:         return "Risk Of Injury / \nخطر الإصابة"
    return ""


def _body_parts_present(movements, test_type):
    """Given movements list of [movement, region], return set of body part keys."""
    present = set()
    for movement, region in movements:
        m, r = movement.lower().strip(), region.lower().strip()
        if test_type in ("upper", "full"):
            if r == "shoulder":
                if m in ("external rotation", "internal rotation"):
                    present.add("rotator_cuff")
                elif m in ("flexion", "abduction"):
                    present.add("shoulder")
                elif m == "push":
                    present.add("chest")
                elif m == "pull":
                    present.add("back")
            elif r == "elbow":
                present.add("triceps" if m == "extension" else "biceps")
            elif r == "hand":
                present.add("hand")
        if test_type in ("lower", "full"):
            if r == "knee":
                present.add("quadriceps" if m == "extension" else "hamstring")
            elif r == "hip":
                if m == "adduction":   present.add("hip_adductors")
                elif m == "abduction": present.add("hip_abductors")
                elif m == "flexion":   present.add("hip_flexors")
                elif m == "extension": present.add("hip_extensors")
            elif r == "trunk":
                present.add("trunk")
    return present


def generate_program_xlsm(gym: str, test_type: str, patient_name: str,
                           test_date: str, cells_data: dict) -> bytes:
    """
    Fill the .xlsm template for a patient and return the file as bytes.

    cells_data: dict with keys:
        "cells"     - {cell_addr: value} from check_processor
        "movements" - [[movement, region], ...] list
    """
    template_path = TEMPLATE_MAP.get((gym, test_type))
    if not template_path or not os.path.isfile(template_path):
        raise FileNotFoundError(f"Template not found for {gym} / {test_type} at {template_path}")

    wb = load_workbook(template_path, keep_vba=True)

    # Find the sheet (named after the gym)
    ws = None
    for sheet in wb.sheetnames:
        if sheet.lower() == gym.lower():
            ws = wb[sheet]
            break
    if ws is None:
        ws = wb.active  # fallback

    # Patient name → A6
    normalized_name = re.sub(r"\s+", " ", patient_name.strip())
    ws["A6"] = normalized_name

    # Test date → A21 (display as DD/MM/YYYY)
    if test_date:
        try:
            d = datetime.strptime(str(test_date)[:10], "%Y-%m-%d")
            ws["A21"] = d.strftime("%d/%m/%Y")
        except Exception:
            ws["A21"] = test_date

    # Fill all asymmetry cells
    cells = cells_data.get("cells", {})
    for cell_addr, value in cells.items():
        ws[cell_addr] = value

    # Remarks for percentage cells
    for pct_cell, remark_cell in PERCENTAGE_REMARK_PAIRS:
        pct_value = ws[pct_cell].value
        if pct_value is not None and pct_value != "":
            remark = _get_remark(pct_value)
            if remark:
                ws[remark_cell] = remark

    # Body parts list → A11–A18
    movements = cells_data.get("movements", [])
    present_parts = _body_parts_present(movements, test_type)
    ordered = ORDERED_PARTS.get(test_type, [])
    parts_to_write = [BODY_PART_MAP[p] for p in ordered if p in present_parts]
    for i, label in enumerate(parts_to_write[:8]):
        ws[f"A{11 + i}"] = label

    buf = io.BytesIO()
    wb.save(buf)
    wb.close()
    return buf.getvalue()


def generate_program_pdf(gym: str, test_type: str, patient_name: str,
                         test_date: str, cells_data: dict) -> bytes:
    """
    Generate a filled program and convert to PDF via LibreOffice.
    Falls back to returning the xlsm if LibreOffice is unavailable.
    Returns (bytes, content_type, filename).
    """
    xlsm_bytes = generate_program_xlsm(gym, test_type, patient_name, test_date, cells_data)

    safe_name = re.sub(r'[^\w\s-]', '', patient_name).strip().replace(' ', '_')
    type_label = {"upper": "Upper_Body", "lower": "Lower_Body", "full": "Full_Body"}.get(test_type, test_type)
    base_filename = f"{safe_name}_-_{type_label}"

    # Try LibreOffice conversion
    soffice = shutil.which("soffice") or shutil.which("libreoffice")
    if soffice:
        with tempfile.TemporaryDirectory() as tmpdir:
            xlsm_path = os.path.join(tmpdir, f"{base_filename}.xlsm")
            pdf_path   = os.path.join(tmpdir, f"{base_filename}.pdf")
            with open(xlsm_path, "wb") as f:
                f.write(xlsm_bytes)
            result = subprocess.run(
                [soffice, "--headless", "--convert-to", "pdf", "--outdir", tmpdir, xlsm_path],
                capture_output=True, timeout=60,
            )
            if result.returncode == 0 and os.path.isfile(pdf_path):
                with open(pdf_path, "rb") as f:
                    return f.read(), "application/pdf", f"{base_filename}.pdf"

    # Fallback: return xlsm
    return xlsm_bytes, "application/vnd.ms-excel.sheet.macroEnabled.12", f"{base_filename}.xlsm"


def generate_program_pdf(gym: str, test_type: str, patient_name: str,
                         test_date: str, cells_data: dict) -> bytes:
    """
    Generate a filled program and convert to PDF via LibreOffice.
    Falls back to returning the xlsm if LibreOffice is unavailable.
    Returns (bytes, content_type, filename).
    """
    xlsm_bytes = generate_program_xlsm(gym, test_type, patient_name, test_date, cells_data)

    safe_name = re.sub(r'[^\w\s-]', '', patient_name).strip().replace(' ', '_')
    type_label = {"upper": "Upper_Body", "lower": "Lower_Body", "full": "Full_Body"}.get(test_type, test_type)
    base_filename = f"{safe_name}_-_{type_label}"

    # Try LibreOffice conversion
    soffice = shutil.which("soffice") or shutil.which("libreoffice")
    if soffice:
        with tempfile.TemporaryDirectory() as tmpdir:
            xlsm_path = os.path.join(tmpdir, f"{base_filename}.xlsm")
            pdf_path   = os.path.join(tmpdir, f"{base_filename}.pdf")
            with open(xlsm_path, "wb") as f:
                f.write(xlsm_bytes)
            result = subprocess.run(
                [soffice, "--headless", "--convert-to", "pdf", "--outdir", tmpdir, xlsm_path],
                capture_output=True, timeout=60,
            )
            if result.returncode == 0 and os.path.isfile(pdf_path):
                with open(pdf_path, "rb") as f:
                    return f.read(), "application/pdf", f"{base_filename}.pdf"

    # Fallback: return xlsm
    return xlsm_bytes, "application/vnd.ms-excel.sheet.macroEnabled.12", f"{base_filename}.xlsm"
