"""
Server-side check file processor.
Extracted from process_dynamo.py — pure openpyxl, no xlwings.
"""
import re
from datetime import datetime
from openpyxl import load_workbook


# ── helpers ──────────────────────────────────────────────────────────────────

def nz_str(v):
    return "" if v is None else str(v)


def nz_float(v):
    if v is None or v == "":
        return 0.0
    try:
        return float(v)
    except Exception:
        return 0.0


def normalize_test_date(test_date):
    if test_date is None:
        return None
    if isinstance(test_date, datetime):
        return test_date.strftime("%Y-%m-%d")
    s = str(test_date).strip()
    for fmt in ("%Y-%m-%d", "%d/%m/%Y", "%m/%d/%Y", "%d-%m-%Y"):
        try:
            return datetime.strptime(s, fmt).strftime("%Y-%m-%d")
        except ValueError:
            pass
    # Try ISO prefix (e.g. "2026-04-01 00:00:00")
    if len(s) >= 10:
        try:
            return datetime.strptime(s[:10], "%Y-%m-%d").strftime("%Y-%m-%d")
        except ValueError:
            pass
    return s


def parse_asymmetry(raw):
    if raw is None:
        return None, None
    s = str(raw).strip().lower()
    if not s:
        return None, None
    if s in ("n/a", "na", "n.a.", "n.a"):
        return None, None
    if "%" not in s:
        try:
            return float(s.replace(",", ".")), None
        except ValueError:
            return None, None
    percent_index = s.index("%")
    num_part = s[:percent_index].strip()
    if num_part.lower() in ("n/a", "na", "n.a.", "n.a"):
        return None, None
    side_char = None
    for ch in reversed(s):
        if ch != " ":
            side_char = ch
            break
    try:
        return float(num_part.replace(",", ".")), side_char
    except ValueError:
        return None, None


def get_movement_test_type(movement, region):
    m = movement.lower().strip()
    r = region.lower().strip()
    upper = [
        r == "shoulder" and m in ("external rotation", "internal rotation", "flexion", "abduction", "push", "pull"),
        r == "hand",
        r == "elbow" and m in ("extension", "flexion"),
    ]
    lower = [
        r == "trunk",
        r == "knee",
        r == "hip" and m in ("flexion", "extension", "abduction", "adduction"),
    ]
    if any(upper):
        return "upper"
    if any(lower):
        return "lower"
    return None


def detect_test_type(patient_rows, src_ws):
    movements_regions = set()
    for row in patient_rows:
        movement = nz_str(src_ws[f"F{row}"].value).lower().strip()
        region = nz_str(src_ws[f"H{row}"].value).lower().strip()
        if movement and region:
            movements_regions.add((movement, region))

    upper_indicators = {
        ("external rotation", "shoulder"), ("internal rotation", "shoulder"),
        ("flexion", "shoulder"), ("abduction", "shoulder"),
        ("push", "shoulder"), ("pull", "shoulder"), ("grip squeeze", "hand"),
    }
    elbow_indicators = {("extension", "elbow"), ("flexion", "elbow")}
    lower_indicators = {("lateral flexion", "trunk"), ("flexion", "hip"), ("extension", "hip")}
    knee_indicators = {("extension", "knee"), ("flexion", "knee")}
    hip_abd_add_indicators = {("abduction", "hip"), ("adduction", "hip")}

    has_upper = any(mr in movements_regions for mr in upper_indicators)
    has_elbow = any(mr in movements_regions for mr in elbow_indicators)
    has_knee = any(mr in movements_regions for mr in knee_indicators)
    has_hip_abd_add = any(mr in movements_regions for mr in hip_abd_add_indicators)
    has_lower_specific = any(mr in movements_regions for mr in lower_indicators)

    # Full body: shoulder + elbow + knee, no hip flex/ext or trunk
    if has_upper and has_elbow and has_knee and not has_lower_specific:
        return "full"

    has_any_upper = has_upper or has_elbow
    has_any_lower = has_knee or has_hip_abd_add or has_lower_specific

    if has_any_upper and has_any_lower:
        return ["upper", "lower"]
    if has_any_upper:
        return "upper"
    if has_any_lower:
        return "lower"
    return "upper"


def calculate_trunk_asymmetry(patient_rows, src_ws):
    trunk_data = {}
    for row in patient_rows:
        movement = nz_str(src_ws[f"F{row}"].value).lower().strip()
        region = nz_str(src_ws[f"H{row}"].value).lower().strip()
        if region == "trunk" and "lateral flexion" in movement:
            force = nz_float(src_ws[f"O{row}"].value)
            if "right" in movement:
                trunk_data["right"] = force
            elif "left" in movement:
                trunk_data["left"] = force
    if "right" not in trunk_data or "left" not in trunk_data:
        return None, None
    r, l = trunk_data["right"], trunk_data["left"]
    if r <= 0 or l <= 0:
        return None, None
    avg = (l + r) / 2
    pct = abs(((l - r) / avg) * 100)
    weak = "Right" if r < l else "Left"
    return pct, weak


# ── main check function ───────────────────────────────────────────────────────

def process_check_file(file_bytes: bytes, gym: str, existing_programs: list[dict]) -> list[dict]:
    """
    Process an uploaded check Excel file (bytes) and compare against existing
    approved programs from the database.

    existing_programs: list of dicts with keys:
        client_name, test_type, test_date (YYYY-MM-DD), movements

    Returns list of dicts:
        status, patient, external_id, test_type, date, movement_count, old_count
    """
    import io
    wb = load_workbook(io.BytesIO(file_bytes), data_only=True)
    src_ws = wb.active

    # Build lookup from existing approved programs
    # key: (normalized_client_name, test_type, date_str) → movement_count
    existing_lookup = {}
    for p in existing_programs:
        key = (
            re.sub(r"\s+", " ", str(p["client_name"]).strip()),
            p["test_type"],
            normalize_test_date(p["test_date"]),
        )
        existing_lookup[key] = p.get("movements", 0)

    # Collect rows per patient
    patients_rows = {}
    patient_external_ids = {}
    for row in range(2, src_ws.max_row + 1):
        name_val = re.sub(r"\s+", " ", nz_str(src_ws[f"A{row}"].value).strip())
        if not name_val:
            continue
        if name_val not in patients_rows:
            patients_rows[name_val] = []
            ext_id = nz_str(src_ws[f"B{row}"].value).strip()
            patient_external_ids[name_val] = ext_id if ext_id else "N/A"
        patients_rows[name_val].append(row)

    new_tests = []

    for patient_name, rows in patients_rows.items():
        test_types = detect_test_type(rows, src_ws)
        if isinstance(test_types, str):
            test_types = [test_types]

        for test_type in test_types:
            movements_present = {}
            movements_stored = {}
            rows_with_stored_movements = set()

            for row in rows:
                movement = nz_str(src_ws[f"F{row}"].value).lower().strip()
                region = nz_str(src_ws[f"H{row}"].value).lower().strip()
                asym_raw = src_ws[f"S{row}"].value

                if not movement or not region:
                    continue

                # Trunk is calculated separately for lower body
                if test_type == "lower" and region == "trunk":
                    trunk_pct, _ = calculate_trunk_asymmetry(rows, src_ws)
                    if trunk_pct is not None:
                        if ("lateral flexion", "trunk") not in movements_stored:
                            movements_stored[("lateral flexion", "trunk")] = trunk_pct
                    continue

                if asym_raw in (None, ""):
                    continue
                pct_value, _ = parse_asymmetry(asym_raw)
                if pct_value is None:
                    continue

                if len(test_types) > 1:
                    row_test_type = get_movement_test_type(movement, region)
                    if row_test_type and row_test_type != test_type:
                        continue

                would_be_stored = False
                if test_type == "lower":
                    if region == "knee" and movement in ("extension", "flexion"):
                        would_be_stored = True
                    elif region == "hip" and movement in ("abduction", "adduction", "flexion", "extension"):
                        would_be_stored = True
                elif test_type == "upper":
                    if region == "shoulder" and movement in ("external rotation", "internal rotation", "flexion", "abduction", "push", "pull"):
                        would_be_stored = True
                    elif region == "elbow" and movement in ("extension", "flexion"):
                        would_be_stored = True
                    elif region == "hand" and movement == "grip squeeze":
                        would_be_stored = True
                elif test_type == "full":
                    if region == "shoulder" and movement in ("external rotation", "internal rotation", "flexion", "abduction"):
                        would_be_stored = True
                    elif region == "elbow" and movement in ("extension", "flexion"):
                        would_be_stored = True
                    elif region == "knee" and movement in ("extension", "flexion"):
                        would_be_stored = True
                    elif region == "hip" and movement in ("abduction", "adduction"):
                        would_be_stored = True

                if not would_be_stored:
                    continue

                key = (movement, region)
                if key not in movements_present:
                    movements_present[key] = []
                movements_present[key].append((abs(pct_value), row))

            for key, value_row_pairs in movements_present.items():
                max_value, max_row = max(value_row_pairs, key=lambda x: x[0])
                movements_stored[key] = max_value
                rows_with_stored_movements.add(max_row)

            if len(movements_stored) == 0:
                continue

            date_val = None
            for row in sorted(rows_with_stored_movements):
                date_val = src_ws[f"C{row}"].value
                if date_val:
                    break

            if not date_val:
                continue

            date_str = normalize_test_date(date_val)
            movement_count = len(movements_stored)

            lookup_key = (patient_name, test_type, date_str)
            if lookup_key in existing_lookup:
                old_count = existing_lookup[lookup_key]
                if movement_count > old_count:
                    new_tests.append({
                        "status": "UPDATED",
                        "patient": patient_name,
                        "external_id": patient_external_ids.get(patient_name, "N/A"),
                        "test_type": test_type,
                        "date": date_str,
                        "movement_count": movement_count,
                        "old_count": old_count,
                    })
            else:
                new_tests.append({
                    "status": "NEW",
                    "patient": patient_name,
                    "external_id": patient_external_ids.get(patient_name, "N/A"),
                    "test_type": test_type,
                    "date": date_str,
                    "movement_count": movement_count,
                    "old_count": 0,
                })

    wb.close()
    return new_tests
