"""
UDRA bilateral program sheet — the presentation layer for VALD programs.

One A3 landscape page (1587 x 1123px = 420 x 297mm @ 96dpi) per the
`design_handoff_udra_bilateral_sheet` bundle. A navy identity bar runs across
the top; below it the findings sit on a single left-to-right diverging axis with
UDRA's clinical thresholds drawn as gridlines, and the prescribed exercises fill
a band of four blocks at the bottom with per-side sets x reps.

The same design covers all three programs — UPPER, LOWER and FULL BODY. They
differ only in data: the measure list, the treatment-area chips and the exercise
blocks. Layout, geometry, type, colour and the axis maths are identical.

This module only draws. Everything about *what* is on the sheet — which
asymmetries were measured, what they mean and which exercises they prescribe at
what sets and reps — stays in program_builder.py and arrives here fully derived.

Spacing is constant for every client — the approved values, never squeezed. What
flexes is the PAGE HEIGHT: the sheet is as tall as its content and the @page
follows, so a light client gets a short sheet and a heavy one a tall sheet, both
with the same margins. A3 width (420mm) is fixed; 297mm is the design's height,
not a ceiling.

WeasyPrint notes (it renders this, not a browser):
  * No JavaScript, so the layout pass is a Python loop — see fit_and_render().
  * `margin-top: auto` in a flex column is ignored; nothing here relies on it.
  * It re-lays out a flex container for every nested flex LEVEL. The design's
    chain (sheet > body > chart > rows) cost 21 seconds a render as nested flex;
    block layout with content-driven heights brings it under a second, so flex is
    used only for single-level rows.
  * Fonts are self-hosted, as the handoff asks, and referenced by file:// for
    WeasyPrint (far cheaper) or inlined as base64 for the browser preview.
  * A shared FontConfiguration is essential: without one, every render re-parses
    all 14 faces.
"""
import base64
import json
import math
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FONTS_DIR = os.path.join(BASE_DIR, "fonts")
ASSETS_DIR = os.path.join(BASE_DIR, "udra_assets")

# ── Design tokens ───────────────────────────────────────────────────────────
NAVY = "#122649"
BLUE = "#005EFF"        # LEFT deficit bars, exercise prescriptions
ORANGE = "#FF6A2C"      # RIGHT deficit bars
CYAN = "#64E0FF"
MUTED = "#5A6474"       # unmeasured rows only
LINEN = "#EFECE6"
WHITE = "#FFFFFF"

HAIR_ROW = "rgba(18,38,73,.14)"
HAIR_EX = "rgba(18,38,73,.1)"
TRACK = "rgba(18,38,73,.09)"
GRIDLINE_OPACITY = ".16"
HATCH = ("repeating-linear-gradient(135deg, rgba(18,38,73,.20) 0 4px, "
         "rgba(18,38,73,0) 4px 9px)")

SHEET_W = 1587
SHEET_H = 1123
# The identity bar is a fixed band: its tallest child is the 72px divider rule
# plus 22px of padding either side.
IDBAR_H = 116
BODY_PAD_TOP = 22
BODY_PAD_BOTTOM = 18

# Column grid — the same four widths govern the header and every row.
W_MEASURE = 330
W_REGION = 74
W_DIFF = 74
W_READING = 186
W_DOSE = 46

# UDRA's asymmetry scale. `up_to` is the EXCLUSIVE upper edge; the band is the
# first one the value falls under. Deliberately words only — the approved design
# dropped colour-coded severity, because the axis position already carries it.
BANDS = [
    (4.0, "PERFECT SYMMETRY", "تناظر مثالي"),
    (8.0, "NORMAL SYMMETRY", "تناظر طبيعي"),
    (15.0, "WEAKNESS", "ضعف"),
    (20.0, "PROBLEM", "مشكلة"),
    (30.0, "MAJOR PROBLEM", "مشكلة كبيرة"),
    (float("inf"), "RISK OF INJURY", "خطر الإصابة"),
]

EDGES = [4, 8, 15, 20, 30]   # threshold gridlines — FIXED, never scaled
TICK_MIN_GAP_PCT = 3.2       # closest two tick LABELS may sit, in axis %
GRIDLINE_MIN_GAP_PCT = 1.6   # same for the gridlines, which need less room
AXIS_MIN = 40                # axis half-width in percentage points

# The identity bar's name slot. 40px fits roughly 24 characters; a longer name is
# scaled down to keep it on the one line the design calls for, never below the floor.
NAME_SIZE = 40
NAME_SIZE_MIN = 20
NAME_CHIP_GAP = 30   # breathing room the name must leave before the chips

# The treatment-area chips get a fixed column and wrap onto a second row rather
# than running as one ever-widening line — that is what used to squeeze the name.
CHIPS_W = 430

_font_css_cache = {}
_asset_cache = {}

# WeasyPrint re-parses every @font-face on each render unless it is handed a
# FontConfiguration to reuse. Without this a single layout took 23 SECONDS; with
# it, and with file:// sources instead of base64, it is ~20ms.
_FONT_CONFIG = None


def font_config():
    global _FONT_CONFIG
    if _FONT_CONFIG is None:
        from weasyprint.text.fonts import FontConfiguration
        _FONT_CONFIG = FontConfiguration()
    return _FONT_CONFIG


def band_for(pct: float):
    for up_to, en, ar in BANDS:
        if pct < up_to:
            return en, ar
    return BANDS[-1][1], BANDS[-1][2]


def _font_css(embed: bool = False) -> str:
    """
    @font-face block for the three brand faces.

    `embed=False` points at the files on disk — far cheaper for WeasyPrint, which
    is what renders the PDF. `embed=True` inlines them as base64 so the HTML
    preview is self-contained for a browser, which cannot read file:// from a
    served page.
    """
    if embed in _font_css_cache:
        return _font_css_cache[embed]
    path = os.path.join(FONTS_DIR, "manifest.json")
    if not os.path.exists(path):
        _font_css_cache[embed] = ""
        return ""
    out = []
    for m in json.load(open(path, encoding="utf-8")):
        fp = os.path.abspath(os.path.join(FONTS_DIR, m["file"]))
        if not os.path.exists(fp):
            continue
        fmt = "woff2" if m["file"].endswith(".woff2") else "woff"
        if embed:
            b64 = base64.b64encode(open(fp, "rb").read()).decode()
            src = f"url(data:font/{fmt};base64,{b64}) format('{fmt}')"
        else:
            src = f"url(file://{fp}) format('{fmt}')"
        rng = f"unicode-range:{m['range']};" if m.get("range") else ""
        out.append(f"@font-face{{font-family:'{m['family']}';font-style:normal;"
                   f"font-weight:{m['weight']};src:{src};{rng}}}")
    _font_css_cache[embed] = "".join(out)
    return _font_css_cache[embed]


def _asset_b64(name: str) -> str:
    if name not in _asset_cache:
        with open(os.path.join(ASSETS_DIR, name), "rb") as f:
            _asset_cache[name] = base64.b64encode(f.read()).decode()
    return _asset_cache[name]


def _asset_src(name: str, embed: bool) -> str:
    """file:// keeps WeasyPrint fast; base64 keeps the HTML preview self-contained."""
    if embed:
        return f"data:image/png;base64,{_asset_b64(name)}"
    return "file://" + os.path.abspath(os.path.join(ASSETS_DIR, name))


def _mm(px: float) -> str:
    """px -> mm for @page, always rounded UP so the box can never be short."""
    return f"{math.ceil(px / 96 * 25.4 * 100) / 100:.2f}mm"


def esc(s) -> str:
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


# ── Density ladder ──────────────────────────────────────────────────────────
# The page box is fixed. Measure rows are flex:1 so extra measures shorten rows
# rather than pushing the programme off the sheet — but only to a floor. Past
# that, tighten in the order the handoff prescribes: drop the region-tag column
# (frees 84px of the measure cell) BEFORE shrinking type, then the exercise rows.
# Spacing, all constant. Every gap on the sheet is the approved value and stays
# there for every client; the PAGE HEIGHT is what flexes, exactly as the Bodydot
# posture sheet does. A3 width is fixed; 1123px (297mm) is the design's height,
# not a ceiling.
SPEC = dict(row_min=40, m_name=13, m_ar=11, diff=15, read_en=11, read_ar=10,
            ex_pad=3.0, ex_name=12, ex_ar=10.5, ex_dose=12.5, blk_pad=9,
            body_gap=18, sec_gap=12)

PAGE_SLACK = 6      # px of headroom in the page box; invisible, prevents a sliver page

# A block holding one or two exercises would otherwise collapse to a stub and drag
# the whole sheet down with it, which reads as unfinished. Give the exercise panels
# a floor — roughly five rows — and accept the white space below a short list.
MIN_BLOCK_BODY_H = 260


def derive(measures: list) -> dict:
    """
    The one real computation in this design. Unlike the posture sheet every row
    shares ONE axis, so bar lengths are comparable down the column.

    `measures` is a list of dicts: {en, ar, pct (None = not measured), side, region}.
    """
    shown = [m["pct"] for m in measures if m.get("pct") is not None]
    # The axis never clips: 40% by default, stepping out to the next 10% above
    # the largest MEASURED value, so a 55% finding draws its true length.
    # Unmeasured rows are excluded — they must not stretch the axis.
    axis_max = max(AXIS_MIN, int(-(-(max(shown) if shown else 0) // 10) * 10))

    def axis_pos(v):
        v = max(-axis_max, min(axis_max, v))
        return 50 + (v / axis_max) * 50

    rows = []
    for m in measures:
        done = m.get("pct") is not None
        if not done:
            rows.append(dict(m, done=False, ink=MUTED, ar_opacity="1", track=HATCH,
                             bar_left="50%", bar_w="0%", bar_color="transparent",
                             pct_text="n/a", status_en="NOT MEASURED", status_ar="لم يُقَس"))
            continue
        pct = float(m["pct"])
        en, ar = band_for(pct)
        half = min(pct / axis_max, 1.0) * 50
        left = str(m.get("side", "L")).upper().startswith("L")
        rows.append(dict(m, done=True, ink=NAVY, ar_opacity=".72", track=TRACK,
                         bar_left=f"{(50 - half) if left else 50:.2f}%",
                         bar_w=f"{half:.2f}%",
                         bar_color=BLUE if left else ORANGE,
                         pct_text=f"{pct:.1f}%", status_en=en, status_ar=ar))

    inner = [e for e in EDGES if e < axis_max]

    # The thresholds are fixed percentages, so a client with a very large finding
    # stretches the axis and crowds them toward the centre — at a 150% axis the
    # 4/8/15/20 labels collide into an unreadable smear. Decide which magnitudes
    # survive once, then mirror, so the axis stays symmetric. At the design's 40%
    # axis nothing is dropped.
    def keep(min_gap):
        kept, last = [], axis_pos(0)
        end = axis_pos(axis_max)
        for e in inner:                       # ascending
            pos = axis_pos(e)
            if pos - last < min_gap or end - pos < min_gap:
                continue
            kept.append(e)
            last = pos
        return kept

    tick_inner = keep(TICK_MIN_GAP_PCT)
    grid_inner = keep(GRIDLINE_MIN_GAP_PCT)
    tick_vals = ([-axis_max] + [-e for e in reversed(tick_inner)] + [0]
                 + tick_inner + [axis_max])

    return {
        "rows": rows,
        "axis_max": axis_max,
        "ticks": [{"label": str(abs(v)), "left": f"{axis_pos(v):.2f}%"} for v in tick_vals],
        "gridlines": [{"left": f"{axis_pos(v):.2f}%"}
                      for e in grid_inner for v in (-e, e)],
        "done": sum(1 for r in rows if r["done"]),
    }


def _css(L: dict, embed_fonts: bool = False) -> str:
    return f"""
{_font_css(embed_fonts)}
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
@page {{ size: {L['page_css']}; margin: 0; }}
html, body {{ width: {SHEET_W}px; background: {LINEN}; }}
body {{ font-family: 'Sora', sans-serif; color: {NAVY}; }}
/* Block layout down the vertical chain, flex only for single-level rows.
   WeasyPrint re-lays a flex container out for every nested flex level, and this
   sheet's chain (sheet > body > chart > rows) cost 21 SECONDS a render; block
   layout with content-driven heights brings it under a second.

   No fixed height: the sheet is as tall as its content, and the @page follows. */
.sheet {{ width: {SHEET_W}px; {L['sheet_h_css']} background: {LINEN}; }}
/* The programme table will split itself across pages over a fraction of a pixel
   if not told otherwise. Scoped to the table and the rows — putting it on the
   sheet or the whole band makes WeasyPrint push the band to a second page
   instead of fitting it. */
.blocks, .block, .row, .ex {{ break-inside: avoid; }}
.ar {{ font-family: 'IBM Plex Sans Arabic', sans-serif; direction: rtl; }}
.mono {{ font-family: 'JetBrains Mono', monospace; direction: ltr; unicode-bidi: isolate; }}

/* ── 1. Identity bar ─────────────────────────────────────────────────── */
/* One flat flex row, not nested groups: WeasyPrint sizes a nested flex
   container from its children's MIN-content, which measured the date at ~36px
   instead of 92px and pushed it off the sheet. At one level it measures right. */
.idbar {{ background: {NAVY}; min-height: {IDBAR_H}px; padding: 22px 34px; display: flex;
          align-items: center; gap: 30px; }}
.wordmark {{ width: 126px; height: 40px; display: block; flex-shrink: 0; }}
.vrule {{ width: 1px; height: 72px; background: rgba(255,255,255,.24); flex-shrink: 0; }}
.id-name {{ flex: 1; min-width: 0; overflow: hidden; }}
.kicker {{ font-size: 12px; font-weight: 700; letter-spacing: .14em; color: {CYAN}; white-space: nowrap; }}
.cname {{ font-size: {L['name_size']}px; font-weight: 700; letter-spacing: -.025em; color: {WHITE};
          line-height: 1.02; padding-top: 6px; white-space: nowrap; }}
.area-lbl {{ font-size: 11px; font-weight: 700; letter-spacing: .14em; color: {CYAN};
             text-align: right; padding-bottom: 8px; white-space: nowrap; }}
.chips {{ display: flex; gap: 6px; justify-content: flex-end; {L['chips_wrap']} }}
/* Normally the chips run on one line at their natural width. Only when a long
   client name would otherwise collide with them are they given a fixed column to
   wrap inside — see fit_and_render. */
.id-areas {{ flex-shrink: 0; {L['areas_w']} }}
.chip {{ font-size: 12px; font-weight: 600; color: {NAVY}; background: {WHITE};
         padding: 5px 9px; white-space: nowrap; }}
.iddate {{ font-size: 14px; color: {WHITE}; white-space: nowrap;
           flex-shrink: 0; min-width: 96px; text-align: right; }}

/* ── 2. Body ─────────────────────────────────────────────────────────── */
.body {{ padding: {BODY_PAD_TOP}px 34px {BODY_PAD_BOTTOM}px; }}
.colhead, .rows {{ margin-top: {L['sec_gap']}px; }}
.prog {{ margin-top: {L['body_gap']}px; }}
.chart + .prog {{ margin-top: {L['body_gap']}px; }}
.body > .prog:first-child {{ margin-top: 0; }}
.sec-head {{ display: flex; align-items: baseline; justify-content: space-between; gap: 14px;
             border-bottom: 2px solid {NAVY}; padding-bottom: 7px; }}
.sec-titles {{ display: flex; align-items: baseline; gap: 13px; }}
.sec-en {{ font-size: 22px; font-weight: 700; letter-spacing: -.02em; white-space: nowrap; }}
.sec-ar {{ font-size: 14px; opacity: .75; white-space: nowrap; }}
.sec-cap {{ font-size: 10.5px; font-weight: 700; letter-spacing: .14em; opacity: .72;
            direction: ltr; unicode-bidi: isolate; white-space: nowrap; }}

/* Column header — the four widths here are the grid for every row below. */
.colhead {{ display: flex; align-items: flex-end; gap: 16px; }}
.c-measure {{ width: {W_MEASURE}px; flex-shrink: 0; }}
.c-axis {{ flex: 1; min-width: 0; }}
.c-diff {{ width: {W_DIFF}px; flex-shrink: 0; text-align: right; }}
.c-read {{ width: {W_READING}px; flex-shrink: 0; text-align: right; }}
.collbl {{ font-size: 10.5px; font-weight: 700; letter-spacing: .12em; opacity: .72; white-space: nowrap; }}
.axis-head {{ display: flex; flex-direction: column; gap: 5px; min-width: 0; }}
.axis-legend {{ display: flex; align-items: baseline; justify-content: space-between; }}
.legend-side {{ display: flex; align-items: center; gap: 7px; }}
.swatch {{ width: 11px; height: 11px; flex-shrink: 0; }}
.legend-t {{ font-size: 11.5px; font-weight: 800; letter-spacing: .14em; white-space: nowrap; }}
.legend-mid {{ font-size: 10.5px; font-weight: 700; letter-spacing: .1em; opacity: .72; white-space: nowrap; }}
.tickrow {{ position: relative; height: 15px; }}
.tick {{ position: absolute; top: 0; font-size: 11px; opacity: .72;
         transform: translateX(-50%); white-space: nowrap; }}

/* Rows take their natural height — the bilingual measure name sets it at roughly
   the handoff's 40px — and the page grows or shrinks to suit. */
.rows {{ }}
.row {{ min-height: {L['row_min']}px; display: flex; align-items: center; gap: 16px;
        padding: 4px 0; border-top: 1px solid {HAIR_ROW}; }}
.rows-end {{ border-top: 1px solid {HAIR_ROW}; }}
.m-cell {{ width: {W_MEASURE}px; flex-shrink: 0; display: flex; align-items: baseline;
           gap: 10px; min-width: 0; }}
.m-region {{ font-size: 11px; opacity: .6; width: {W_REGION}px; flex-shrink: 0; white-space: nowrap; }}
.m-names {{ min-width: 0; }}
.m-en {{ font-size: {L['m_name']}px; font-weight: 600; line-height: 1.2; }}
.m-ar {{ font-size: {L['m_ar']}px; line-height: 1.25; padding-top: 2px; }}
.axis-cell {{ flex: 1; position: relative; height: 26px; min-width: 0; }}
.gridline {{ position: absolute; top: 2px; bottom: 2px; width: 1px; background: {NAVY};
             opacity: {GRIDLINE_OPACITY}; }}
.track {{ position: absolute; top: 10px; left: 0; right: 0; height: 6px; }}
.bar {{ position: absolute; top: 8px; height: 10px; }}
.centre {{ position: absolute; top: 1px; bottom: 1px; left: 50%; width: 2px;
           margin-left: -1px; background: {NAVY}; }}
.diff {{ width: {W_DIFF}px; flex-shrink: 0; font-size: {L['diff']}px; font-weight: 500;
         text-align: right; white-space: nowrap; }}
.read {{ width: {W_READING}px; flex-shrink: 0; text-align: right; }}
.read-en {{ font-size: {L['read_en']}px; font-weight: 600; letter-spacing: .02em; }}
.read-ar {{ font-size: {L['read_ar']}px; padding-top: 2px; }}

/* ── 2.4 Programme band ──────────────────────────────────────────────── */
/* Table, not flex: four equal columns cost half as much to lay out this way,
   and WeasyPrint's table sizing is both faster and more predictable. The width
   and negative margin cancel border-spacing's outer gap so the blocks still line
   up with the section rule above them. */
.blocks {{ display: table; table-layout: fixed; width: calc(100% + 32px);
           margin: {L['sec_gap']}px 0 0 -16px;
           border-collapse: separate; border-spacing: 16px 0; }}
.block {{ display: table-cell; vertical-align: top; background: {WHITE}; }}
.blk-head {{ background: {NAVY}; padding: {L['blk_pad']}px 14px; display: flex;
             align-items: center; justify-content: space-between; gap: 10px; }}
.blk-titles {{ min-width: 0; }}
.blk-en {{ font-size: 12px; font-weight: 700; letter-spacing: .1em; color: {WHITE}; white-space: nowrap; }}
.blk-ar {{ font-size: 10.5px; color: {CYAN}; padding-top: 2px; }}
.doses {{ display: flex; gap: 6px; flex-shrink: 0; }}
.dose-h {{ font-size: 11px; font-weight: 500; color: {CYAN}; width: {W_DOSE}px;
           text-align: center; white-space: nowrap; }}
.blk-body {{ padding: 3px 14px 6px; min-height: {MIN_BLOCK_BODY_H}px; }}
.ex {{ display: flex; align-items: center; justify-content: space-between; gap: 10px;
       padding: {L['ex_pad']}px 0; border-bottom: 1px solid {HAIR_EX}; }}
.ex-names {{ min-width: 0; }}
.ex-en {{ font-size: {L['ex_name']}px; line-height: 1.22; }}
.ex-ar {{ font-size: {L['ex_ar']}px; opacity: .68; line-height: 1.25; padding-top: 1px; }}
.dose {{ font-size: {L['ex_dose']}px; font-weight: 500; color: {BLUE}; width: {W_DOSE}px;
         text-align: center; white-space: nowrap; }}
/* An empty block says so, in both languages, sitting in the middle of the panel
   rather than as a bare dash in the corner. */
.ex-none {{ text-align: center; padding: {(MIN_BLOCK_BODY_H - 40) // 2}px 6px; }}
.ex-none-en {{ font-size: 11px; font-weight: 500; color: {MUTED}; }}
.ex-none-ar {{ font-size: 10px; color: {MUTED}; padding-top: 3px; }}
.ex-empty {{ font-size: 11px; opacity: .5; padding: 10px 0; }}
"""


def _row_html(f: dict, grid_html: str, L: dict) -> str:
    region = f'<div class="m-region mono">{esc(f.get("region_tag", ""))}</div>'
    return f"""<div class="row">
  <div class="m-cell">{region}
    <div class="m-names">
      <div class="m-en" style="color:{f['ink']}">{esc(f['en'])}</div>
      <div class="m-ar ar" style="color:{f['ink']};opacity:{f['ar_opacity']}">{esc(f['ar'])}</div>
    </div>
  </div>
  <div class="axis-cell">{grid_html}
    <div class="track" style="background:{f['track']}"></div>
    <div class="bar" style="left:{f['bar_left']};width:{f['bar_w']};background:{f['bar_color']}"></div>
    <div class="centre"></div>
  </div>
  <div class="diff mono" style="color:{f['ink']}">{esc(f['pct_text'])}</div>
  <div class="read">
    <div class="read-en" style="color:{f['ink']}">{esc(f['status_en'])}</div>
    <div class="read-ar ar" style="color:{f['ink']};opacity:{f['ar_opacity']}">{esc(f['status_ar'])}</div>
  </div>
</div>"""


def render(data: dict, name_size: float = NAME_SIZE, embed_fonts: bool = False,
           page_h: float = None, chips_w: float = None) -> str:
    """
    Render the sheet. `data` follows the handoff's BilateralSheet contract.

    `page_h` pins the page box to a measured height. Left None the sheet sizes
    itself to its content, which is the measuring pass fit_and_render uses.

    `chips_w` constrains the treatment-area column so its chips wrap onto a second
    row. Left None they stay on one line, which is the normal case.
    """
    L = dict(SPEC, name_size=round(name_size, 2),
             chips_wrap="flex-wrap: wrap;" if chips_w else "flex-wrap: nowrap;",
             areas_w=(f"width: {chips_w:.0f}px;" if chips_w else ""))
    if page_h:
        # The sheet fills the page so the linen reaches the edge, but the page box
        # is a pixel taller than the sheet: pinning both to the same value leaves
        # the px -> mm conversion no rounding room, and the band drops to page 2.
        L["page_css"] = f"{_mm(SHEET_W)} {_mm(page_h + 1)}"
        L["sheet_h_css"] = f"min-height: {page_h:.2f}px;"
    else:
        L["page_css"] = f"{_mm(SHEET_W)} {_mm(SHEET_H)}"
        L["sheet_h_css"] = ""

    d = derive(data["measures"])
    total = len(d["rows"])
    pending = total - d["done"]
    count_text = (f"{d['done']} OF {total} MEASURED &middot; {pending} UNMEASURED"
                  if pending else f"{total} MEASURE{'' if total == 1 else 'S'}")

    grid_html = "".join(f'<div class="gridline" style="left:{g["left"]}"></div>'
                        for g in d["gridlines"])
    ticks = "".join(f'<div class="tick mono" style="left:{t["left"]}">{t["label"]}</div>'
                    for t in d["ticks"])
    rows = "".join(_row_html(r, grid_html, L) for r in d["rows"])
    if not d["rows"]:
        rows = '<div class="ex-empty">No measures captured for this test</div>'

    chips = "".join(f'<div class="chip">{esc(a["en"])}</div>' for a in data.get("areas", []))

    blocks = ""
    ex_count = 0
    for b in data["blocks"]:
        ex_count += len(b["items"])
        items = "".join(f"""<div class="ex">
        <div class="ex-names">
          <div class="ex-en">{esc(it['en'])}</div>
          <div class="ex-ar ar">{esc(it['ar'])}</div>
        </div>
        <div class="doses">
          <div class="dose mono">{esc(it['setsL'])}&times;{esc(it['repsL'])}</div>
          <div class="dose mono">{esc(it['setsR'])}&times;{esc(it['repsR'])}</div>
        </div>
      </div>""" for it in b["items"])
        if not b["items"]:
            items = ('<div class="ex-none">'
                     '<div class="ex-none-en">No exercises prescribed</div>'
                     '<div class="ex-none-ar ar">لا توجد تمارين موصوفة</div>'
                     '</div>')
        blocks += f"""<div class="block">
      <div class="blk-head">
        <div class="blk-titles">
          <div class="blk-en">{esc(b['titleEn'])}</div>
          <div class="blk-ar ar">{esc(b['titleAr'])}</div>
        </div>
        <div class="doses"><div class="dose-h mono">L</div><div class="dose-h mono">R</div></div>
      </div>
      <div class="blk-body">{items}</div>
    </div>"""

    c = data["client"]
    idbar = f"""  <div class="idbar">
    <img class="wordmark" src="{_asset_src('udra-wordmark-white.png', embed_fonts)}" alt="udra">
    <div class="vrule"></div>
    <div class="id-name">
      <div class="kicker">{esc(c['program'])}</div>
      <div class="cname">{esc(c['name'])}</div>
    </div>
    <div class="id-areas">
      <div class="area-lbl">TREATMENT AREA &middot; <span class="ar">منطقة العلاج</span></div>
      <div class="chips">{chips}</div>
    </div>
    <div class="vrule"></div>
    <div class="iddate mono">{esc(c['date'])}</div>
  </div>"""

    chart_html = f"""    <div class="chart">
      <div class="sec-head">
        <div class="sec-titles">
          <div class="sec-en">Left / right imbalance</div>
          <div class="sec-ar ar">عدم التوازن بين الجانبين</div>
        </div>
        <div class="sec-cap">{count_text}</div>
      </div>

      <div class="colhead">
        <div class="c-measure collbl">MEASURE &middot; <span class="ar">القياس</span></div>
        <div class="c-axis axis-head">
          <div class="axis-legend">
            <div class="legend-side">
              <div class="swatch" style="background:{BLUE}"></div>
              <div class="legend-t">&#9664; LEFT DEFICIT</div>
            </div>
            <div class="legend-mid">BALANCED</div>
            <div class="legend-side">
              <div class="legend-t">RIGHT DEFICIT &#9654;</div>
              <div class="swatch" style="background:{ORANGE}"></div>
            </div>
          </div>
          <div class="tickrow">{ticks}</div>
        </div>
        <div class="c-diff collbl">DIFF</div>
        <div class="c-read collbl">READING &middot; <span class="ar">التقييم</span></div>
      </div>

      <div class="rows">{rows}<div class="rows-end"></div></div>
    </div>"""

    prog_html = f"""    <div class="prog">
      <div class="sec-head">
        <div class="sec-titles">
          <div class="sec-en">The Program</div>
          <div class="sec-ar ar">التمارين</div>
        </div>
        <div class="sec-cap">{ex_count} EXERCISES &middot; SETS &times; REPS PER SIDE</div>
      </div>
      <div class="blocks">{blocks}</div>
    </div>"""

    sheet = (f'<div class="sheet">\n{idbar}\n  <div class="body">\n'
             f'{chart_html}{prog_html}\n  </div>\n</div>\n')

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>{esc(c.get('title') or c['name'])}</title>
<style>{_css(L, embed_fonts)}</style>
</head>
<body>
{sheet}</body>
</html>"""


def _boxes(doc):
    """Map of class name -> list of boxes on page 1, plus the page extent."""
    found = {}
    extent = [0.0, 0.0]

    def walk(b):
        extent[0] = max(extent[0], (b.position_x or 0) + (b.width or 0))
        extent[1] = max(extent[1], (b.position_y or 0) + (b.height or 0))
        try:
            classes = (b.element.get("class") or "").split() if b.element is not None else []
        except Exception:
            classes = []
        for c in classes:
            found.setdefault(c, []).append(b)
        for ch in getattr(b, "children", []):
            walk(ch)

    walk(doc.pages[0]._page_box)
    return found, extent


def _text_extent(cname_boxes):
    """Left and right edge of the glyphs inside the name, not of its flex box."""
    if not cname_boxes:
        return 0.0, 0.0
    runs = []

    def walk(b):
        if type(b).__name__ == "TextBox" and b.text.strip():
            runs.append((b.position_x, b.position_x + (b.width or 0)))
        for ch in getattr(b, "children", []):
            walk(ch)

    for b in cname_boxes:
        walk(b)
    if not runs:
        return 0.0, 0.0
    return min(a for a, _ in runs), max(z for _, z in runs)


def _chips_left(boxes):
    got = boxes.get("chips")
    return got[0].position_x if got else 0.0


def _h(boxes, cls, default=0.0):
    got = boxes.get(cls)
    return (got[0].height or default) if got else default


def fit_and_render(data: dict):
    """
    WeasyPrint runs no JavaScript, so this is the layout pass in Python.

    Width: an over-long client name is the only thing that can push the sheet
    sideways. The correction is exact — measure how far over it ran and scale the
    name by that ratio, so one extra render fixes it.

    Height: every gap on the sheet is the approved constant, so instead of
    squeezing content the PAGE flexes. Measure what the sheet came to, pin the
    @page to it and render once more. Returns (html, weasyprint_document).
    """
    from weasyprint import HTML as WP

    def build(name_size, chips_w=None, page_h=None):
        html = render(data, name_size, page_h=page_h, chips_w=chips_w)
        return html, WP(string=html).render(font_config=font_config())

    def clash(boxes):
        """Does the name's text run into the treatment-area chips?"""
        limit = _chips_left(boxes)
        left, right = _text_extent(boxes.get("cname"))
        return left, right, limit, bool(right and limit and right > limit - NAME_CHIP_GAP)

    name_size, chips_w = NAME_SIZE, None
    html, doc = build(name_size, chips_w)
    boxes, extent = _boxes(doc)

    # The name is set on one line and does not wrap, so a long one paints straight
    # over the chips — and the flex box around it reports its reserved width, not
    # the glyphs', so nothing downstream notices. Measure the real text run.
    #
    # Wrapping the chips onto a second row costs the sheet less than shrinking the
    # client's name, so try that first and only shrink if it is still not enough.
    left, right, limit, bad = clash(boxes)
    if bad:
        chips_w = CHIPS_W
        html, doc = build(name_size, chips_w)
        boxes, extent = _boxes(doc)
        left, right, limit, bad = clash(boxes)
    if bad:
        room, span = (limit - NAME_CHIP_GAP) - left, right - left
        if span > 0 and room > 0:
            name_size = max(NAME_SIZE_MIN, name_size * (room / span))
            html, doc = build(name_size, chips_w)
            boxes, extent = _boxes(doc)

    sheet_h = _h(boxes, "sheet") or SHEET_H
    page_h = math.ceil(sheet_h) + PAGE_SLACK
    html, doc = build(name_size, chips_w, page_h)
    # The measured content height is a pixel or two under what the page box
    # actually needs, so rather than tune a constant, correct until it holds.
    for _ in range(3):
        if len(doc.pages) == 1:
            break
        page_h += 8
        html, doc = build(name_size, chips_w, page_h)
    return html, doc