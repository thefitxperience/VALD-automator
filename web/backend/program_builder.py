"""
Program HTML/PDF builder.

Generates a Workout Planner Sheet as HTML matching the original Excel design,
then renders to PDF via weasyprint.  No xlsm/LibreOffice/xlwings needed.
"""
import base64
import os
import re
from datetime import datetime

BASE_DIR    = os.path.dirname(os.path.abspath(__file__))
HEADERS_DIR = os.path.join(BASE_DIR, "headers")


# Header image

def _header_b64(gym: str, test_type: str) -> str:
    if gym == "Body Masters":
        fname = "Masters.png"
    elif test_type == "lower":
        fname = "Motions LOWER.png"
    else:
        fname = "Motions FULL + UPPER.png"
    with open(os.path.join(HEADERS_DIR, fname), "rb") as f:
        return base64.b64encode(f.read()).decode()


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
    if rest:
        if _has_arabic(rest):
            # Already bilingual — just format
            return f"{en} /<br>{rest}"
        else:
            # English region — replace with Arabic lookup, drop the English region
            ar = _LABEL_AR.get(en, '')
            return f"{en} /<br>{ar}" if ar else f"{en} / {rest}"
    ar = _LABEL_AR.get(en, '')
    return f"{en}<br>{ar}" if ar else en

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


# HTML generation

def generate_program_html(gym: str, test_type: str, patient_name: str,
                          test_date: str, cells_data: dict,
                          prev_asymmetries: dict = None) -> str:
    try:
        h_b64 = _header_b64(gym, test_type)
        hdr_html = f'<img src="data:image/png;base64,{h_b64}" class="hdr-img">'
    except Exception:
        hdr_html = f'<div class="hdr-fallback">{gym} — WORKOUT PLANNER SHEET</div>'

    display_date = test_date
    try:
        display_date = datetime.strptime(str(test_date)[:10], "%Y-%m-%d").strftime("%d/%m/%Y")
    except Exception:
        pass

    movements  = cells_data.get("movements", [])
    body_parts = _get_body_parts(movements, test_type)
    part_rows  = [f"<tr><td class='part'>{p}</td></tr>" for p in body_parts]
    part_rows += ["<tr><td class='part'>&nbsp;</td></tr>"] * max(0, 8 - len(part_rows))
    parts_html = "".join(part_rows[:8])

    sections  = _extract_sections(cells_data, test_type, prev_asymmetries)
    secs_html = ""
    for sec in sections:
        en, ar = sec["header"]

        ex_rows = ""
        for ex in sec["exercises"]:
            nm = _bilingual(ex["name"])
            ex_rows += (f"<tr class='ex-row'><td class='en'>{nm}</td>"
                        f"<td>{ex['r_sets']}</td><td>{ex['l_sets']}</td>"
                        f"<td>{ex['r_reps']}</td><td>{ex['l_reps']}</td></tr>")
        empty_row = "<tr class='ex-row'><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>"
        ex_rows += empty_row * max(0, 14 - len(sec["exercises"]))

        # Remarks: 2-col table with paired rows (label+%, side+status)
        rem_pairs = ""
        for r in sec["remarks"]:
            cc = r.get("cmp_color")
            style = f" style='color:{cc}'" if cc else ""
            rem_pairs += (
                f"<tr class='ra'>"
                f"<td class='rl'{style}>{_bilingual_label(r['label'])}</td>"
                f"<td class='rp'{style}>{r['pct_display']}</td>"
                f"</tr>"
                f"<tr class='rb'>"
                f"<td class='rs'{style}>{_bilingual_side(r['side'])}</td>"
                f"<td class='rrk'{style}>{_fmt_remark(r['remark_str'], None)}</td>"
                f"</tr>"
            )
        empty_pair = "<tr class='ra'><td>&nbsp;</td><td></td></tr><tr class='rb'><td>&nbsp;</td><td></td></tr>"
        rem_pairs += empty_pair * max(0, 4 - len(sec["remarks"]))

        secs_html += f"""
<div class="sec">
  <table class="ex-table">
    <colgroup>
      <col class="cx"><col class="cn"><col class="cn"><col class="cn"><col class="cn">
    </colgroup>
    <thead>
      <tr class="sh">
        <th class="sn">{en}<br><span class="sa">{ar}</span></th>
        <th colspan="2">Sets</th><th colspan="2" class="sep-l">Reps</th>
      </tr>
      <tr class="ch">
        <th class="exh">EXERCISES</th>
        <th>R</th><th>L</th><th>R</th><th>L</th>
      </tr>
    </thead>
    <tbody>
      {ex_rows}
    </tbody>
  </table>
  <div class="rem-hdr"><span>REMARKS</span><span>ملاحظات</span></div>
  <table class="rem-table">
    <tbody>
      {rem_pairs}
    </tbody>
  </table>
</div>"""

    accent = "#E9BD5C" if "masters" in gym.lower() else "#59848D"

    css = f"""
@page {{ size: 320mm 205mm; margin: 0; }}
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
body {{ font-family: Arial, Helvetica, sans-serif; width: 320mm; background: #fff; color: #111; }}
.hdr-img {{ width: 900px; max-height: auto; display: block; margin-right: auto; padding-left: 3mm; padding-top:3mm; }}
.hdr-fallback {{ background:#1d5c6b;color:#fff;padding:8mm 5mm;font-size:16pt;font-weight:bold; }}
.content {{ display:flex; gap:0; padding:2.5mm 3mm 2mm 3mm; }}
.sidebar {{ width:146px; flex-shrink:0; display:flex; flex-direction:column; gap:0; margin-right:13px; padding-top:6mm; }}
.sb  {{ border:1px solid #DD5647; border-collapse:collapse; width:100%; }}
.sb-grow {{ flex:1; }}
.mb-lg {{ margin-bottom:4mm; }}
.mb-sm {{ margin-bottom:3mm; }}
.mb-xl {{ margin-bottom:6mm; }}
.sl  {{ background:#DD5647;color:#fff;padding:3px 4px;font-size:7.5pt;font-weight:bold;line-height:1.5; height:16px; box-sizing:border-box; }}
.slr {{ background:#DD5647;color:#fff;padding:3px 4px;font-size:7.5pt;font-weight:bold;line-height:1.5; height:25px; box-sizing:border-box; }}
.sl-ar  {{ background:#DD5647;color:#fff;padding:2px 4px;font-size:7.5pt;font-weight:normal;text-align:right;border-top:1px solid #fff; height:16px; box-sizing:border-box; }}
.slr-ar {{ background:#DD5647;color:#fff;padding:2px 4px;font-size:7.5pt;font-weight:normal;text-align:right;border-top:1px solid #fff; height:25px; box-sizing:border-box; }}
.sv  {{ padding:3px 4px;font-size:7.5pt;height:10mm; }}
.sm  {{ padding:0; }}
.part{{ padding:2px 4px;font-size:7.5pt;line-height:1.4;height:6mm;box-sizing:border-box; }}
.sd  {{ padding:3px 4px;font-size:7.5pt;text-align:right; height:8mm; }}
.sno {{ height:8mm;padding:3px 4px; }}
/* ── Section layout ── */
.sections {{ display:flex; gap:2mm; align-items:stretch; }}
.sec {{ flex:0 0 230px; width:230px; display:flex; flex-direction:column; }}
/* ── Exercise table ── */
.ex-table {{ width:100%; border-collapse:separate; border-spacing:1px; background:#fff; table-layout:fixed; }}
col.cx {{ width:122px; }}
col.cn {{ width:20px; }}
.sh {{ }}
.sn {{ text-align:left; padding:3px 4px; font-size:9pt; font-weight:bold; line-height:1.2; color:{accent}; }}
.sa {{ font-size:6.5pt; font-weight:bold; display:block; margin-top:1px; }}
.sh th:not(.sn) {{ text-align:center; font-size:7pt; padding:2px 1px; color:#111; font-weight:normal; }}
.sep-l {{ border-left:1px solid #bbb; }}
.ch {{ background:{accent}; color:#fff; }}
.ch th {{ text-align:center; padding:2px 1px; font-size:6pt; font-weight:bold; }}
.exh {{ text-align:left !important; padding-left:4px !important; font-size:6pt; }}
.ex-table tbody tr.ex-row {{ height:6mm; background:#F2F2F2; }}
.ex-table tbody tr td {{ border:none; padding:1px 2px; vertical-align:middle; }}
.ex-table tbody tr td:not(.en){{ text-align:center; font-size:6pt; font-weight:normal; }}
.en {{ font-size:6pt; line-height:1.35; white-space:normal; vertical-align:middle; padding:2px 3px; }}
/* ── Remarks table ── */
.rem-hdr {{ display:flex; justify-content:space-between; font-weight:bold; font-size:6.5pt;
           padding:2px 4px; }}
.rem-table {{ width:100%; border-collapse:collapse; table-layout:fixed;
             border:1px solid #DD5647; margin-top:1px; }}
/* pair row A: label | % */
.ra {{ height:7mm; }}
.ra td {{ padding:2px 4px; font-size:5.5pt; line-height:1.4; border-bottom:1px dashed #DD5647; vertical-align:top; }}
/* pair row B: side | status — dashed red bottom */
.rb {{ height:7mm; }}
.rb td {{ padding:2px 4px; font-size:5.5pt; line-height:1.4;
         border-bottom:1px dashed #DD5647; vertical-align:top; }}
.rl  {{ }}
.rp  {{ text-align:left; font-weight:normal; }}
.rs  {{ }}
.rrk {{ }}
"""

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Workout Planner</title>
  <style>{css}</style>
</head>
<body>
  {hdr_html}
  <div class="content">
    <div class="sidebar">
      <table class="sb mb-lg">
        <thead>
          <tr><td class="sl">CLIENT NAME</td></tr>
          <tr><td class="sl-ar">اسم العميل</td></tr>
        </thead>
        <tbody><tr><td class="sv">{patient_name}</td></tr></tbody>
      </table>
      <table class="sb mb-sm">
        <thead>
          <tr><td class="slr">MEDICAL CASE OR TREATMENT AREA</td></tr>
          <tr><td class="slr-ar">الحالة الطبيّة أو منطقة العلاج</td></tr>
        </thead>
        <tbody>{parts_html}</tbody>
      </table>
      <table class="sb mb-xl">
        <thead><tr><td class="sl">DATE | التاريخ</td></tr></thead>
        <tbody><tr><td class="sd">{display_date}</td></tr></tbody>
      </table>
      <table class="sb sb-grow">
        <thead><tr><td class="sl">NOTE | ملاحظة</td></tr></thead>
        <tbody><tr><td class="sno"></td></tr></tbody>
      </table>
    </div>
    <div class="sections">
      {secs_html}
    </div>
  </div>
</body>
</html>"""


# PDF generation

def generate_program_pdf(gym: str, test_type: str, patient_name: str,
                         test_date: str, cells_data: dict,
                         prev_asymmetries: dict = None):
    from weasyprint import HTML as WP
    html      = generate_program_html(gym, test_type, patient_name, test_date, cells_data,
                                      prev_asymmetries=prev_asymmetries)
    pdf_bytes = WP(string=html).write_pdf()
    safe   = re.sub(r'[^\w\s-]', '', patient_name).strip().replace(' ', '_')
    label  = {"upper": "Upper_Body", "lower": "Lower_Body", "full": "Full_Body"}.get(test_type, test_type)
    return pdf_bytes, "application/pdf", f"{safe}_-_{label}.pdf"


# Demo data

_DEMO_CELLS_DATA = {
    "upper": {
        "cells": {
            "C21": "Shoulder External Rotation Asymmetry / External Rotation",
            "D21": 0.150, "C22": "Left External Rotation",
            "C23": "Shoulder Abduction Asymmetry / Shoulder Abduction",
            "D23": 0.090, "C24": "Left shoulder abductor",
            "C25": "Shoulder IR Standing Asymmetry / Internal Rotation",
            "D25": 0.083, "C26": "Right Internal Rotation",
            "O21": "Shoulder Push Asymmetry / Chest Push",
            "P21": 0.210, "O22": "Right Shoulder Push",
            "O23": "Shoulder Pull Asymmetry / Back Pull",
            "P23": 0.074, "O24": "Right Shoulder Pull",
            "AA21": "Elbow Extension Asymmetry / Triceps",
            "AB21": 0.015, "AA22": "Right Triceps",
            "AA23": "Elbow Flexion Asymmetry / Biceps",
            "AB23": 0.090, "AA24": "Left Biceps",
            "AG21": "Grip Squeeze Asymmetry / Grip",
            "AH21": 0.310, "AG22": "Left Grip Squeeze",
        },
        "movements": [
            ["external rotation", "shoulder"], ["abduction", "shoulder"],
            ["internal rotation", "shoulder"], ["push", "shoulder"], ["pull", "shoulder"],
            ["extension", "elbow"], ["flexion", "elbow"], ["grip squeeze", "hand"],
        ],
    },
    "lower": {
        "cells": {
            "C21": "Knee Extension Asymmetry / Quadriceps",
            "D21": 0.200, "C22": "Left Quadriceps",
            "C23": "Knee Flexion Asymmetry / Hamstring",
            "D23": 0.049, "C24": "Right Hamstring",
            "O21": "Hip Adduction Asymmetry / Adductors",
            "P21": 0.150, "O22": "Left Adductors",
            "O23": "Hip Abduction Asymmetry / Abductors",
            "P23": 0.310, "O24": "Left Abductors",
            "AA21": "Trunk Lateral Flexion / Trunk",
            "AB21": 0.342, "AA22": "Right Sides",
            "AG21": "Hip Flexion Asymmetry / Hip Flexors",
            "AH21": 0.047, "AG22": "Left Hip Flexors",
            "AG23": "Hip Extension Asymmetry / Hip Extensors",
            "AH23": 0.034, "AG24": "Left Hip Extensors",
        },
        "movements": [
            ["extension", "knee"], ["flexion", "knee"],
            ["adduction", "hip"], ["abduction", "hip"],
            ["lateral flexion", "trunk"], ["flexion", "hip"], ["extension", "hip"],
        ],
    },
    "full": {
        "cells": {
            "C21": "Shoulder External Rotation Asymmetry / External Rotation",
            "D21": 0.150, "C22": "Left External Rotation",
            "C23": "Shoulder Abduction Asymmetry / Shoulder Abduction",
            "D23": 0.090, "C24": "Left shoulder abductor",
            "O21": "Elbow Extension Asymmetry / Triceps",
            "P21": 0.015, "O22": "Right Triceps",
            "O23": "Elbow Flexion Asymmetry / Biceps",
            "P23": 0.074, "O24": "Right Biceps",
            "AA21": "Knee Extension Asymmetry / Quadriceps",
            "AB21": 0.200, "AA22": "Left Quadriceps",
            "AA23": "Knee Flexion Asymmetry / Hamstring",
            "AB23": 0.049, "AA24": "Right Hamstring",
            "AG21": "Hip Abduction Asymmetry / Abductors",
            "AH21": 0.310, "AG22": "Left Abductors",
            "AG23": "Hip Adduction Asymmetry / Adductors",
            "AH23": 0.210, "AG24": "Right Adductors",
        },
        "movements": [
            ["external rotation", "shoulder"], ["abduction", "shoulder"],
            ["extension", "elbow"], ["flexion", "elbow"],
            ["extension", "knee"], ["flexion", "knee"],
            ["abduction", "hip"], ["adduction", "hip"],
        ],
    },
}
