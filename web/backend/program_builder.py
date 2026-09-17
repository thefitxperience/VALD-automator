"""
Program HTML/PDF builder.

Reads a VALD test's cells, works out each movement's left/right asymmetry, the
band it falls in and the exercises it prescribes, then renders the UDRA
bilateral program sheet (see udra_sheet.py) and writes it to PDF via WeasyPrint.

The programme logic here is the original; only the presentation changed.
"""
import os
import re
from datetime import datetime

import udra_sheet

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


# Remark logic

def _get_remark(pct_fraction: float) -> str:
    pct = abs(float(pct_fraction)) * 100
    if 0.1  <= pct <= 3.9:   return "Perfect Symmetry"
    if 4    <= pct <= 7.9:   return "Normal Symmetry"
    if 8    <= pct <= 14.9:  return "Weakness"
    if 15   <= pct <= 19.9:  return "Problem"
    if 20   <= pct <= 29.9:  return "Major Problem"
    if pct  >= 30:           return "Risk Of Injury"
    return ""

_REMARK_AR = {
    "Perfect Symmetry": "تناظر مثالي",
    "Normal Symmetry":  "تناظر طبيعي",
    "Weakness":         "ضعف",
    "Problem":          "مشكلة",
    "Major Problem":    "مشكلة كبيرة",
    "Risk Of Injury":   "خطر الإصابة",
}

# Arabic for asymmetry label names (first part before " / ") — from process_dynamo.py
_LABEL_AR = {
    "Knee Extension Asymmetry":               "عدم تناسق تمديد الركبة",
    "Knee Flexion Asymmetry":                 "عدم تناسق انثناء الركبة",
    "Hip Adduction Asymmetry":                "عدم تناسق تقريب الورك",
    "Hip Abduction Asymmetry":                "عدم تناسق إبعاد الورك",
    "Trunk Lateral Flexion":                  "الثني الجانبي للجذع",
    "Hip Flexion Asymmetry":                  "عدم تناسق ثني الورك",
    "Hip Extension Asymmetry":                "عدم تناسق مدّ الورك",
    "Shoulder External Rotation Asymmetry":   "عدم توازن الدوران الخارجي للكتف",
    "Shoulder Abduction Asymmetry":           "عدم توازن إبعاد الكتف",
    "Shoulder IR Standing Asymmetry":         "عدم توازن دوران الكتف الداخلي",
    "Shoulder Flexion Asymmetry":             "عدم تناسق انثناء الكتف",
    "Shoulder Push Asymmetry":                "عدم توازن في دفع الكتف",
    "Shoulder Pull Asymmetry":                "عدم توازن في سحب الكتف",
    "Elbow Extension Asymmetry":              "عدم توازن تمديد الكوع",
    "Elbow Flexion Asymmetry":                "عدم توازن انثناء الكوع",
    "Grip Squeeze Asymmetry":                 "عدم توازن ضغط القبضة",
}

# Arabic for region labels (second part after " / ") — from process_dynamo.py
_REGION_AR = {
    "Quadriceps":         "عضلات الفخذ الأمامية",
    "Hamstring":          "عضلات الفخذ الخلفية",
    "Adductors":          "عضلات الفخذ الداخلي",
    "Abductors":          "عضلات الفخذ الخارجية",
    "Trunk":              "الجذع",
    "Hip Flexors":        "عضلات مثنية الورك",
    "Hip Extensors":      "عضلات باسطة الورك",
    "External Rotation":  "الدوران الخارجي",
    "Shoulder Abduction": "إبعاد الكتف",
    "Internal Rotation":  "الدوران الداخلي",
    "Chest Push":         "دفع الكتف",
    "Back Pull":          "سحب الكتف",
    "Triceps":            "عضلات التراي سيبس",
    "Biceps":             "عضلة الباي سيبس",
    "Grip":               "ضغط القبضة",
}

# Arabic for full side strings — from process_dynamo.py
_SIDE_AR = {
    "Left Grip Squeeze":        "ضغط القبضة باليد اليسرى",
    "Right Grip Squeeze":       "ضغط القبضة باليد اليمنى",
    "Left Triceps":             "عضلات التراي سيبس اليسرى",
    "Right Triceps":            "عضلات التراي سيبس اليمنى",
    "Left Biceps":              "عضلة الباي سيبس اليسرى",
    "Right Biceps":             "عضلة الباي سيبس اليمنى",
    "Left Shoulder Push":       "دفع الكتف الأيسر",
    "Right Shoulder Push":      "دفع الكتف الأيمن",
    "Left Shoulder Pull":       "سحب الكتف الأيسر",
    "Right Shoulder Pull":      "سحب الكتف الأيمن",
    "Left External Rotation":   "الدوران الخارجي الأيسر",
    "Right External Rotation":  "الدوران الخارجي الأيمن",
    "Left Internal Rotation":   "الدوران الداخلي الأيسر",
    "Right Internal Rotation":  "الدوران الداخلي الأيمن",
    "Left shoulder abductor":   "عضلة فتح الكتف الأيسر",
    "Right shoulder abductor":  "عضلة فتح الكتف الأيمن",
    "Left shoulder flexion":    "ثني الكتف الأيسر",
    "Right shoulder flexion":   "ثني الكتف الأيمن",
    "Left Quadriceps":          "عضلات الفخذ الأمامية اليسرى",
    "Right Quadriceps":         "عضلات الفخذ الأمامية اليمنى",
    "Left Hamstring":           "عضلات الفخذ الخلفية اليسرى",
    "Right Hamstring":          "عضلات الفخذ الخلفية اليمنى",
    "Left Adductors":           "عضلات الفخذ الداخلي اليسرى",
    "Right Adductors":          "عضلات الفخذ الداخلي اليمنى",
    "Left Abductors":           "عضلات الفخذ الخارجية اليسرى",
    "Right Abductors":          "عضلات الفخذ الخارجية اليمنى",
    "Left Hip Flexors":         "عضلات مثنية الورك اليسرى",
    "Right Hip Flexors":        "عضلات مثنية الورك اليمنى",
    "Left Hip Extensors":       "عضلات باسطة الورك اليسرى",
    "Right Hip Extensors":      "عضلات باسطة الورك اليمنى",
    "Right Sides":              "الجانب الأيمن",
    "Left Sides":               "الجانب الأيسر",
}

def _bilingual(s: str) -> str:
    """Convert 'English / Arabic' → 'English /<br>Arabic' for cell display."""
    if " / " in s:
        en, ar = s.split(" / ", 1)
        return f"{en} /<br>{ar}"
    return s

def _has_arabic(s: str) -> bool:
    return any('\u0600' <= c <= '\u06FF' for c in s)

def _split_slash(s: str):
    """Split on '/' handling optional surrounding whitespace and newlines."""
    s = s.replace('\n', ' ')
    if '/' in s:
        idx = s.index('/')
        return s[:idx].strip(), s[idx+1:].strip()
    return s.strip(), ''

def _bilingual_label(s: str) -> str:
    """Format label for bilingual display.
    Real data:  'Knee Extension Asymmetry / عدم تناسق تمديد الركبة'  → show as-is
    Demo data:  'Knee Extension Asymmetry / Quadriceps'               → lookup Arabic
    """
    en, rest = _split_slash(s)
    _STRIP_ASYMMETRY = {
        "Shoulder IR Standing Asymmetry",
        "Shoulder External Rotation Asymmetry",
    }
    en_disp = en.replace(" Asymmetry", "") if en in _STRIP_ASYMMETRY else en
    if rest:
        if _has_arabic(rest):
            # Already bilingual — just format
            return f"{en_disp} /<br>{rest}"
        else:
            # English region — replace with Arabic lookup, drop the English region
            ar = _LABEL_AR.get(en, '')
            return f"{en_disp} /<br>{ar}" if ar else f"{en_disp} / {rest}"
    ar = _LABEL_AR.get(en, '')
    return f"{en_disp}<br>{ar}" if ar else en_disp

def _bilingual_side(s: str) -> str:
    """Format side string for bilingual display.
    Real data:  'Left Quadriceps / عضلات الفخذ...'  → show as-is
    Demo data:  'Left Quadriceps'                    → lookup Arabic
    """
    en, rest = _split_slash(s)
    if rest and _has_arabic(rest):
        return f"{en} /<br>{rest}"
    # Fall back to lookup using English part
    ar = _SIDE_AR.get(en, '')
    return f"{en}<br>{ar}" if ar else en

def _fmt_remark(remark_str: str, color: str) -> str:
    """Return bilingual remark as HTML (no color)."""
    en = remark_str.split(" / ")[0].strip() if " / " in remark_str else remark_str.strip()
    ar = _REMARK_AR.get(en, "")
    text = f"{en} /<br>{ar}" if ar else en
    return f"<span style='font-size:5pt'>{text}</span>"


# Body parts for sidebar

_BODY_PART_MAP = {
    "shoulder":      "Shoulder / الكتف",
    "rotator_cuff":  "Rotator cuff / الكُمّ",
    "chest":         "Chest / الصدر",
    "back":          "Back / الظهر",
    "triceps":       "Triceps / التراي سيبس",
    "biceps":        "Biceps / الباي سيبس",
    "hand":          "Hand / اليد",
    "quadriceps":    "Quadriceps / الفخذ الأمامي",
    "hamstring":     "Hamstring / الفخذ الخلفي",
    "hip_abductors": "Hip Abductors / الفخذ الخارجي",
    "hip_adductors": "Hip Adductors / الفخذ الداخلي",
    "hip_flexors":   "Hip Flexors / عضلات ثني الورك",
    "hip_extensors": "Hip Extensors / عضلات بسط الورك",
    "trunk":         "Trunk / الجذع",
}

_ORDERED_PARTS = {
    "upper": ["shoulder", "rotator_cuff", "chest", "back", "triceps", "biceps", "hand"],
    "lower": ["quadriceps", "hamstring", "hip_abductors", "hip_adductors",
              "hip_flexors", "hip_extensors", "trunk"],
    "full":  ["shoulder", "rotator_cuff", "triceps", "biceps",
              "hamstring", "quadriceps", "hip_abductors", "hip_adductors"],
}

def _get_body_parts(movements: list, test_type: str) -> list:
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
                if m == "adduction":    present.add("hip_adductors")
                elif m == "abduction":  present.add("hip_abductors")
                elif m == "flexion":    present.add("hip_flexors")
                elif m == "extension":  present.add("hip_extensors")
            elif r == "trunk":
                present.add("trunk")
    ordered = _ORDERED_PARTS.get(test_type, [])
    return [_BODY_PART_MAP[p] for p in ordered if p in present]


# Exercise mappings (from VBA)

_EXERCISES = {
    "Shoulder IR Standing Asymmetry": [
        "Internal rotation / كتف دوران للداخل",
    ],
    "Shoulder External Rotation Asymmetry": [
        "External rotation / كتف دوران للخارج",
    ],
    "Shoulder Flexion Asymmetry": [
        "Front raise / رفرفة أمامي دنبل",
        "Front press / كتف أمامي دنبل",
    ],
    "Shoulder Abduction Asymmetry": [
        "Lateral raise 90 degree / أكتاف رفرفة جانبي 90",
        "Lateral raise Cable / أكتاف رفرفة جانبي كيبل",
        "Lateral raise / أكتاف رفرفة جانبي مستقيم",
    ],
    "Shoulder Push Asymmetry": [
        "Chest Press DB / تمرين الضغط على الصدر دنبل",
        "Chest Press Cable / تمرين الضغط على الصدر الكابل",
        "Chest Flies DB / دامبل فلاي بنش",
        "Chest Flies Cable / دامبل فلاي الكابل",
    ],
    "Shoulder Pull Asymmetry": [
        "Rowing Back DB / تجديف ظهر دنبل",
        "Rowing Back Cable / تمرين السحب الخلفي بالكابل",
        "Rowing Back Machine Single Hand / آلة التجديف الخلفية يد واحدة",
        "Reverse Flies Cable / تمارين الطيران العكسي بالكابل",
    ],
    "Elbow Extension Asymmetry": [
        "Triceps Overhead press DB / تراي سيبس اوفر هيد بريس دنبل",
        "Triceps Single Hand Cable / تراي سيبس كيبل فردي",
        "Triceps French Press DB / تراي سيبس فرينش بريس دنبل",
        "Triceps Kick Back DB / تراي سيبس كيك باك دنبل",
    ],
    "Elbow Flexion Asymmetry": [
        "Concentration Biceps Curl / تمرين الثني المركز للعضلة",
        "Single Hand Biceps Cable / باي سيبس كيبل تبادل",
        "Preacher Curls Single Hand / باي سيبس باستخدام المقعد المنحدر",
    ],
    "Grip Squeeze Asymmetry": [
        "Grip Squeeze / شد اليد",
        "Wrist Curls / تمارين لف المعصم",
        "Reverse Wrist Curls / تمارين لف المعصم العكسي",
    ],
    "Knee Extension Asymmetry": [
        "Step up / استيب اسكوات",
        "Single Leg Press / دفش ماشين مفرد",
        "Single Leg Extension / رفرفة أمامي مفرد",
        "Single Leg Squat / أسكوات مفرد",
    ],
    "Knee Flexion Asymmetry": [
        "Hamstring Curl Seated / رفرفة خلفي جالس ماشين",
        "Hamstring Curl Lying / رفرفة خلفي",
        "Hamstring Curl Cable / رفرفة خلفي واقف كيبل",
        "Single Leg Deadlift / ديد ليفت قدم واحدة",
    ],
    "Hip Adduction Asymmetry": [
        "Inner Cable Machine / أرجل رفرفة داخلي كيبل",
        "Side lying leg adduction / تقريب الساق أثناء الاستلقاء على الجانب",
    ],
    "Hip Abduction Asymmetry": [
        "Outer Cables Machine / أرجل رفرفة خارجي كيبل",
        "Side-Lying Leg Lift Elastic / تمرين رفع الساق أثناء الاستلقاء الجانبي بالحزام المطاطي",
    ],
    "Hip Flexion Asymmetry": [
        "Cable Kick Forward / ركلة الكابل إلى الأمام",
        "Single leg banded High Knee / رفع الركبة مع شريط المقاومة",
    ],
    "Hip Extension Asymmetry": [
        "Single Leg Glute Bridge / تمرين الجسر الأحادي للساق",
        "Cable Kick Back / ركلة الكابل للخلف",
    ],
    "Trunk Lateral Flexion": [
        "Cable Twist / التواء الكابل",
        "Side On Lower back machine / تمارين الجانبين على جهاز أسفل الظهر",
    ],
}


# Section headers per test type

_SECTION_HEADERS = {
    "full":  [("SHOULDER","الكتف"),  ("ELBOW","الكوع"),   ("KNEE","الركبة"),  ("HIP","الحوض")],
    "upper": [("SHOULDER","الكتف"),  ("SHOULDER","الكتف"), ("ELBOW","الكوع"),  ("Hand","اليد")],
    "lower": [("KNEE","الركبة"),     ("HIP","الحوض"),      ("Trunk","الجذع"),  ("HIP","الحوض")],
}

_CELL_GROUPS = [("C","D"), ("O","P"), ("AA","AB"), ("AG","AH")]


# Sets / Reps logic

def _get_sets_reps(remark_str: str, side_str: str):
    remark = remark_str.split(" / ")[0].strip() if " / " in str(remark_str) else str(remark_str).strip()
    side   = str(side_str).lower()
    if remark in ("Perfect Symmetry", "Normal Symmetry"):
        return (2, 2, 15, 15)
    right_map = {
        "Weakness":      (2, 2, 15, 10), "Problem":        (3, 2, 15, 15),
        "Major Problem": (3, 2, 15, 10), "Risk Of Injury":  (4, 2, 15, 10),
    }
    left_map = {
        "Weakness":      (2, 2, 10, 15), "Problem":        (2, 3, 15, 15),
        "Major Problem": (2, 3, 10, 15), "Risk Of Injury":  (2, 4, 10, 15),
    }
    if "right" in side: return right_map.get(remark, ("","","",""))
    if "left"  in side: return left_map.get(remark,  ("","","",""))
    return ("","","","")


# Extract section data

def _movement_key(label_cell_value: str) -> str:
    """Derive region|movement key from a label like 'Knee Extension Asymmetry / ...' """
    _LABEL_TO_KEY = {
        "Knee Extension Asymmetry":             "knee|extension",
        "Knee Flexion Asymmetry":               "knee|flexion",
        "Hip Adduction Asymmetry":              "hip|adduction",
        "Hip Abduction Asymmetry":              "hip|abduction",
        "Trunk Lateral Flexion":                "trunk|lateral flexion",
        "Hip Flexion Asymmetry":                "hip|flexion",
        "Hip Extension Asymmetry":              "hip|extension",
        "Shoulder External Rotation Asymmetry": "shoulder|external rotation",
        "Shoulder Abduction Asymmetry":         "shoulder|abduction",
        "Shoulder IR Standing Asymmetry":       "shoulder|internal rotation",
        "Shoulder Flexion Asymmetry":           "shoulder|flexion",
        "Shoulder Push Asymmetry":              "shoulder|push",
        "Shoulder Pull Asymmetry":              "shoulder|pull",
        "Elbow Extension Asymmetry":            "elbow|extension",
        "Elbow Flexion Asymmetry":              "elbow|flexion",
        "Grip Squeeze Asymmetry":               "hand|grip squeeze",
    }
    en = label_cell_value.split(" /")[0].strip()
    return _LABEL_TO_KEY.get(en, "")


def _extract_sections(cells_data: dict, test_type: str, prev_asymmetries: dict = None) -> list:
    cells   = cells_data.get("cells", {})
    headers = _SECTION_HEADERS.get(test_type, _SECTION_HEADERS["full"])
    prev    = prev_asymmetries or {}
    sections = []
    for idx, (lbl_col, pct_col) in enumerate(_CELL_GROUPS):
        header  = headers[idx]
        exs     = []
        remarks = []
        seen    = set()
        for row in (21, 23, 25, 27):
            lv = str(cells.get(f"{lbl_col}{row}",   "")).strip()
            pv = cells.get(f"{pct_col}{row}")
            sv = str(cells.get(f"{lbl_col}{row+1}", "")).strip()
            rv = str(cells.get(f"{pct_col}{row+1}", "")).strip()
            if not lv or pv is None:
                continue
            pf = float(pv)
            if not rv or rv == "None":
                rv = _get_remark(pf)
            # Comparison color
            mk = _movement_key(lv)
            current_pct = abs(pf) * 100
            if mk and prev:
                if mk in prev:
                    cmp_color = "#16a34a" if current_pct < float(prev[mk]) else "#dc2626"
                else:
                    cmp_color = "#dc2626" if current_pct > 8 else None
            else:
                cmp_color = None
            remarks.append({"label": lv, "pct_display": f"{abs(pf)*100:.1f}%",
                             "pct": current_pct,
                             "side": sv, "remark_str": rv, "cmp_color": cmp_color})
            key = lv.split(" /")[0].strip()
            rs, ls, rr, lr = _get_sets_reps(rv, sv)
            for ex in _EXERCISES.get(key, []):
                if ex not in seen:
                    seen.add(ex)
                    exs.append({"name": ex, "r_sets": rs, "l_sets": ls,
                                "r_reps": rr, "l_reps": lr})
        sections.append({"header": header, "exercises": exs, "remarks": remarks})
    return sections



# ── UDRA bilateral sheet mapping ────────────────────────────────────────────
# Everything below only reshapes what _extract_sections() already produced into
# the handoff's BilateralSheet contract. No programme logic lives here.

_PROGRAM_TITLE = {
    "upper": "UPPER BODY PROGRAM",
    "lower": "LOWER BODY PROGRAM",
    "full":  "FULL BODY PROGRAM",
}

_MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
           "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]


def _sheet_date(test_date) -> str:
    """The identity bar's mono date, e.g. '14 SEP 2026'."""
    try:
        d = datetime.strptime(str(test_date)[:10], "%Y-%m-%d")
        return f"{d.day:02d} {_MONTHS[d.month - 1]} {d.year}"
    except Exception:
        return str(test_date)


_STRIP_ASYMMETRY_LABELS = {"Shoulder IR Standing Asymmetry",
                           "Shoulder External Rotation Asymmetry"}


def _label_parts(s: str):
    """Measure label -> (english, arabic). Mirrors _bilingual_label's rules."""
    en, rest = _split_slash(s)
    en_disp = en.replace(" Asymmetry", "") if en in _STRIP_ASYMMETRY_LABELS else en
    if rest and _has_arabic(rest):
        return en_disp, rest
    return en_disp, _LABEL_AR.get(en, "")


def _side_code(side_str: str) -> str:
    """'Left Quadriceps / ...' -> 'L'. The deficient side drives the bar's direction."""
    en, _ = _split_slash(str(side_str))
    return "L" if en.strip().lower().startswith("left") else "R"


def _name_parts(s: str):
    """Exercise or body-part 'English / Arabic' -> (english, arabic)."""
    en, ar = _split_slash(s)
    return en, (ar if _has_arabic(ar) else "")


# The full protocol each program runs, in assessment order, mapped to the section
# it belongs to. VALD does not always capture every movement — trunk lateral
# flexion shows up in only ~47% of lower-body tests — and the handoff is explicit
# that a missing measure KEEPS ITS ROW so a partial sheet and a complete one stay
# comparable line-for-line. Without this roster a skipped movement would simply
# vanish and the rows would shift.
#
# Counts confirmed against the asymmetry history: upper 9, lower 7, full 10, with
# no other movement appearing in any test.
_MEASURE_ROSTER = {
    "upper": [   # SHOULDER | SHOULDER (push/pull) | ELBOW | HAND
        (0, "Shoulder External Rotation Asymmetry"),
        (0, "Shoulder IR Standing Asymmetry"),
        (0, "Shoulder Flexion Asymmetry"),
        (0, "Shoulder Abduction Asymmetry"),
        (1, "Shoulder Push Asymmetry"),
        (1, "Shoulder Pull Asymmetry"),
        (2, "Elbow Extension Asymmetry"),
        (2, "Elbow Flexion Asymmetry"),
        (3, "Grip Squeeze Asymmetry"),
    ],
    "lower": [   # KNEE | HIP | TRUNK | HIP
        (0, "Knee Extension Asymmetry"),
        (0, "Knee Flexion Asymmetry"),
        (1, "Hip Abduction Asymmetry"),
        (1, "Hip Adduction Asymmetry"),
        (2, "Trunk Lateral Flexion"),
        (3, "Hip Flexion Asymmetry"),
        (3, "Hip Extension Asymmetry"),
    ],
    "full": [    # SHOULDER | ELBOW | KNEE | HIP
        (0, "Shoulder External Rotation Asymmetry"),
        (0, "Shoulder IR Standing Asymmetry"),
        (0, "Shoulder Flexion Asymmetry"),
        (0, "Shoulder Abduction Asymmetry"),
        (1, "Elbow Extension Asymmetry"),
        (1, "Elbow Flexion Asymmetry"),
        (2, "Knee Extension Asymmetry"),
        (2, "Knee Flexion Asymmetry"),
        (3, "Hip Abduction Asymmetry"),
        (3, "Hip Adduction Asymmetry"),
    ],
}


def _raw_label(s: str) -> str:
    """The label as the roster keys it — English part, before display shortening."""
    en, _ = _split_slash(s)
    return en.strip()


def build_sheet_data(gym: str, test_type: str, patient_name: str, test_date: str,
                     cells_data: dict, prev_asymmetries: dict = None) -> dict:
    """Assemble the UDRA bilateral sheet's data object from a VALD test."""
    sections = _extract_sections(cells_data, test_type, prev_asymmetries)
    movements = cells_data.get("movements", [])

    areas = []
    for part in _get_body_parts(movements, test_type):
        en, ar = _name_parts(part)
        areas.append({"en": en, "ar": ar})

    # Rows stay in anatomical protocol order — the order the assessment runs in.
    # Never sorted by severity.
    captured = {}
    for si, sec in enumerate(sections):
        for r in sec["remarks"]:
            captured[_raw_label(r["label"])] = (si, r)

    def row(section_idx, raw, r=None):
        header_en = sections[section_idx]["header"][0] if section_idx < len(sections) else ""
        if r is None:
            # Not captured this visit: the row stays, with no value and no bar.
            return {"en": raw.replace(" Asymmetry", "") if raw in _STRIP_ASYMMETRY_LABELS else raw,
                    "ar": _LABEL_AR.get(raw, ""), "pct": None, "side": "L",
                    "region_tag": header_en.upper()}
        en, ar = _label_parts(r["label"])
        return {"en": en, "ar": ar, "pct": r.get("pct"),
                "side": _side_code(r.get("side", "")), "region_tag": header_en.upper()}

    measures = []
    roster = _MEASURE_ROSTER.get(test_type)
    if roster:
        for section_idx, raw in roster:
            hit = captured.pop(raw, None)
            measures.append(row(section_idx, raw, hit[1] if hit else None))
        # Anything the test produced that the roster does not know about still shows.
        for raw, (si, r) in captured.items():
            measures.append(row(si, raw, r))
    else:
        for si, sec in enumerate(sections):
            for r in sec["remarks"]:
                measures.append(row(si, _raw_label(r["label"]), r))

    blocks = []
    for sec in sections:
        header_en, header_ar = sec["header"]
        items = []
        for ex in sec["exercises"]:
            en, ar = _name_parts(ex["name"])
            items.append({"en": en, "ar": ar,
                          "setsL": ex["l_sets"], "setsR": ex["r_sets"],
                          "repsL": ex["l_reps"], "repsR": ex["r_reps"]})
        blocks.append({"titleEn": header_en.upper(), "titleAr": header_ar, "items": items})

    label = {"upper": "Upper Body", "lower": "Lower Body", "full": "Full Body"}.get(test_type, test_type)
    return {
        "client": {
            "name": patient_name,
            "date": _sheet_date(test_date),
            "program": _PROGRAM_TITLE.get(test_type, f"{test_type.upper()} BODY PROGRAM"),
            "title": f"{patient_name} - {label}",
        },
        "areas": areas,
        "measures": measures,
        "blocks": blocks,
    }

# HTML / PDF generation — UDRA bilateral sheet
#
# The programme logic above is unchanged; this only renders it. See udra_sheet.py
# for the design itself (design_handoff_udra_bilateral_sheet).

def generate_program_html(gym: str, test_type: str, patient_name: str,
                          test_date: str, cells_data: dict,
                          prev_asymmetries: dict = None) -> str:
    """
    The workout sheet as HTML, for the live preview. Runs the same layout pass
    the PDF does so the preview shows exactly what will print, then re-emits it
    with the fonts and logo inlined, since a browser cannot read file:// from a
    served page.
    """
    data = build_sheet_data(gym, test_type, patient_name, test_date,
                            cells_data, prev_asymmetries)
    try:
        _html, doc = udra_sheet.fit_and_render(data)
        boxes, _ = udra_sheet._boxes(doc)
        page_h = udra_sheet.math.ceil(udra_sheet._h(boxes, "sheet") or udra_sheet.SHEET_H)
        return udra_sheet.render(data, page_h=page_h + udra_sheet.PAGE_SLACK, embed_fonts=True)
    except Exception:
        # A preview must not fail just because the layout probe could not run.
        return udra_sheet.render(data, embed_fonts=True)


def generate_program_pdf(gym: str, test_type: str, patient_name: str,
                         test_date: str, cells_data: dict,
                         prev_asymmetries: dict = None):
    data = build_sheet_data(gym, test_type, patient_name, test_date,
                            cells_data, prev_asymmetries)
    _html, doc = udra_sheet.fit_and_render(data)
    if len(doc.pages) > 1:
        print(f"[udra] {patient_name} ({test_type}): sheet spilled to {len(doc.pages)} pages "
              f"({len(data['measures'])} measures, "
              f"{sum(len(b['items']) for b in data['blocks'])} exercises).")
    pdf_bytes = doc.write_pdf()
    safe = re.sub(r'[^\w\s-]', '', patient_name).strip().replace(' ', '_')
    label = {"upper": "Upper_Body", "lower": "Lower_Body", "full": "Full_Body"}.get(test_type, test_type)
    return pdf_bytes, "application/pdf", f"{safe}_-_{label}.pdf"
