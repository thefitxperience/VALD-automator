# Handoff: UDRA Posture Correction Program — one-sheet client PDF

## Overview
A single landscape sheet (11 × 8.5 in) that presents one client's posture assessment
and their prescribed corrective programme. It is generated per client from the output
of an existing algorithm that already knows each marker's measured value, its normal
range, and whether it falls inside that range.

The sheet is an **exception report**: the markers that are OUT of range get the page's
attention (name, value, a range bar, and how far off they are); the in-range markers
collapse into a compact name/value list at the bottom. A navy identity rail down the
left carries branding, the client, and the headline counts.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype of the
intended look, not production code to ship as-is. The task is to **recreate this design
in the target codebase's environment** (React, Vue, a server-side PDF renderer, etc.)
using its established patterns, component library, and styling approach.

`udra-posture-sheet.html` is deliberately written as a *runnable, data-driven reference*:
open it in a browser and it renders the real sheet from the `PROGRAM` object at the top
of its `<script>`. Swap that object for your algorithm's output and the sheet redraws.
Use it to verify your port pixel-for-pixel, and copy the `derive()` function's maths
exactly — the bar geometry is the one non-obvious part of this design.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and geometry. Recreate it
pixel-perfectly. Every value in this document was measured from the approved design.

---

## Page geometry

| | |
|---|---|
| Sheet | 1056 × 816 px = **11 × 8.5 in at 96 dpi** (US Letter, landscape) |
| Print | `@page { size: 11in 8.5in; margin: 0 }`, sheet `overflow: hidden` |
| Structure | horizontal flex: fixed 272px rail + `flex:1` field |

The sheet is a **fixed page box**. Content must never exceed 816px tall — it will be
silently clipped. If a future client has more than 12 flagged markers or more than
10 exercises in a block, see **Overflow rules** below.

---

## Screens / Views

There is one view: **the sheet**. Two regions.

### Region 1 — Identity rail (left)

- **Position/size**: `width: 272px`, `flex-shrink: 0`, full 816px height.
- **Background**: navy `#122649`.
- **Padding**: `30px 28px`. Vertical flex, `gap: 26px`.
- **Contents, top to bottom**:

| Element | Spec |
|---|---|
| Wordmark | `assets/udra-wordmark-white.png`, **81 × 26px**, `object-fit: contain`, `align-self: flex-start` |
| Eyebrow | "POSTURE CORRECTION PROGRAM" — 9px, 700, `letter-spacing: .09em`, cyan `#64E0FF`, `white-space: nowrap`. **One line** — tracking is tuned to fit the rail's 216px content width with ~6px slack; do not widen it |
| Client name | 29px, 700, `letter-spacing: -.025em`, white, `line-height: 1.08`. Wraps naturally; the mock breaks "Simon / abi ramia" |
| Date | 10px JetBrains Mono, cyan `#64E0FF`, `padding-top: 2px`. Format `08 SEP 2026` |
| Divider | 1px, `rgba(255,255,255,.2)` |
| Stat — out of range | numeral 58px, 800, red `#FF403C`, `line-height: .82`, `letter-spacing: -.04em`; label "OUT OF / RANGE" 10px, 800, `.14em`, white. Row is flex, `gap: 14px`. Group gap 18px |
| Stat — within range | same, numeral lime `#CDFF20`, label "WITHIN / RANGE" |
| Divider | 1px, `rgba(255,255,255,.2)` |
| Totals | two lines, 10px JetBrains Mono, white at `opacity: .85`, `gap: 5px` — "22 markers assessed", "26 exercises prescribed" |
| Footer | pushed down with `margin-top: auto`. Logomark `assets/udra-mark-white.png` **26 × 26px**, then "UDRA PERFORMANCE" 9.5px, 600, `.18em`, white `opacity: .78`. `gap: 12px` |

> **Both logos must have explicit width AND height.** They sit in a flex *column*, whose
> default `align-items: stretch` will distort an `width:auto` image. Also set
> `align-self: flex-start` and `object-fit: contain`.

### Region 2 — Findings field (right)

- **Position/size**: `flex: 1`, `min-width: 0`.
- **Background**: linen `#EFECE6` (inherited from the sheet).
- **Padding**: `28px 32px`. Vertical flex, `gap: 13px`.

**2.1 Section header** — flex row, `space-between`, `align-items: baseline`,
`border-bottom: 1.5px solid #122649`, `padding-bottom: 7px`.
- Title "Priority findings" — 17px, 700, navy, `letter-spacing: -.015em`
- Caption "MEASURED VALUE VS NORMAL RANGE" — 9px, 600, `.12em`, navy `opacity: .72`

**2.2 Flagged marker grid** — `display: grid`, `grid-template-columns: 1fr 1fr 1fr`,
`gap: 0 22px`. One cell per out-of-range marker, in **descending severity** order.

Each cell: `padding: 9px 0`, `border-bottom: 1px solid rgba(18,38,73,.13)`,
vertical flex, `gap: 6px`, three stacked lines:

1. **Name / value row** — flex, `space-between`, `align-items: baseline`, `gap: 8px`
   - name: 11px, 600, navy, `line-height: 1.25`
   - value: 12px JetBrains Mono, 500, **`#C7231F`** (darker red than the dot, for text contrast), `flex-shrink: 0`
2. **Range bar** — `position: relative`, `height: 5px`, track `rgba(18,38,73,.1)`
   - normal-range band: absolutely positioned, `background: #005EFF`, `left: bandLeft`, `width: bandWidth`
   - client dot: 11 × 11px circle, `background: #FF403C`, `border: 2px solid #EFECE6`, `top: -3px`, `margin-left: -5.5px`, `left: markLeft`
3. **Caption row** — flex, `space-between`, `align-items: baseline`, `gap: 8px`
   - "NORMAL 0 to 30°" — 9.5px JetBrains Mono, navy `opacity: .7`
   - delta "12.5° over" — 9.5px JetBrains Mono, 500, `#C7231F`

**2.3 Within-range panel** — `background: #FFFFFF`, `padding: 10px 14px`, vertical flex, `gap: 8px`.
- Heading row: 7px blue `#005EFF` dot + "WITHIN RANGE · 10" (10px, 700, `.12em`, navy), `gap: 8px`
- List: `display: grid`, `grid-template-columns: 1fr auto 1fr auto 1fr auto`, `gap: 6px 16px`
  with `gap: 4px 16px` — i.e. **three name/value pairs per row**. Name 10.5px navy `opacity: .8`; value 10px JetBrains Mono, 500, navy, right-aligned.
  This panel is the height buffer: if a client overflows the sheet, tighten or drop it first.

**2.4 Programme band** — `margin-top: auto` (pins it to the bottom of the field),
vertical flex, `gap: 13px`. Two parts:

*Section header* — same construction as 2.1, so the sheet reads as two titled halves:
flex row, `space-between`, `align-items: baseline`, `border-bottom: 1.5px solid #122649`,
`padding-bottom: 7px`.
- Title "The Program" — 17px, 700, navy, `letter-spacing: -.015em`
- Caption "26 EXERCISES" — 9px, 600, `.12em`, navy `opacity: .72`. Count derived.

*Columns row* — flex row, `gap: 14px`, `align-items: flex-start`. One column per block,
each `flex: 1`, `min-width: 0`.

Each column:
- **Header**: `background: #122649`, `padding: 8px 13px`, flex `space-between` baseline.
  Title 10px, 700, `.1em`, white. Unit label ("sets × reps" / "sets × duration")
  9px JetBrains Mono, cyan `#64E0FF`.
- **Rows**: `background: #FFFFFF`, `padding: 3px 13px 5px`. Each row flex `space-between`,
  `align-items: center`, `gap: 10px`, `padding: 5.5px 0`,
  `border-bottom: 1px solid rgba(18,38,73,.08)`.
  Exercise name 10.5px navy `line-height: 1.25`; prescription 10px JetBrains Mono, 500,
  blue `#005EFF`, `flex-shrink: 0`, formatted **`sets × reps`** (e.g. `3 × 10`, `4 × 30s`).

---

## The bar geometry (copy this exactly)

This is the only real computation in the design and the easiest thing to get subtly wrong.
Each bar has its **own** axis — scaled to that marker, not to a shared global scale.

```js
const ok    = value >= min && value <= max;
const over  = value > max, under = value < min;
const dev   = over ? value - max : under ? min - value : 0;

// Axis spans the union of {normal range, client value}, plus padding.
const d0  = Math.min(min, value);
const d1  = Math.max(max, value);
const pad = Math.max((d1 - d0) * 0.18, Math.max((max - min) * 0.12, 1.5));
const a = d0 - pad, b = d1 + pad;
const pct = (x) => ((x - a) / (b - a)) * 100;

bandLeft  = pct(min) + '%';
bandWidth = (pct(max) - pct(min)) + '%';
markLeft  = pct(value) + '%';
```

Why the padding term: it guarantees the dot is never flush against the bar's edge, and
that a very narrow normal range (e.g. `-2 to 2`) still renders a visible band.

**Sort order** for the flagged grid — descending `severity`, where
`severity = dev / Math.max(max - min, 1)`. This is *relative* deviation, so being 12° out
on a 10°-wide range outranks being 27° out on a 70°-wide range.

**Number formatting** — integers print bare, everything else to 1 decimal:
`fmt = x => Number.isInteger(x) ? String(x) : x.toFixed(1)`.
Deltas always print to 1 decimal. The unit is appended with no space except `cm`,
which carries a leading space in its unit string (`" cm"`), and is `.trim()`ed inside
range/delta strings.

---

## Overflow rules

The sheet is a fixed page box with `overflow: hidden`, so anything too tall is **clipped
silently**. With the current dataset (12 flagged / 10 cleared / 26 exercises) the field's
natural height is comfortably under its 760px budget, but this is per-client data.

Add a guard in your implementation, and pick a documented strategy:
- **12 flagged markers = 4 grid rows.** Each cell is ~61px. Past ~16 flagged markers
  (6 rows) the programme band will be pushed off the sheet.
- **10 exercises per block** is the tallest column at ~185px.
- Options when a client exceeds this: go to a 4-column flagged grid (the approved `4a`
  variant does this), spill to a second page, or shrink the within-range panel first —
  it is the least load-bearing element.

A cheap regression test: assert no descendant's `getBoundingClientRect().bottom`
exceeds the sheet's own bottom.

---

## Design tokens

### Colors
| Token | Hex | Used for |
|---|---|---|
| Navy | `#122649` | rail + programme headers, all body text |
| Blue | `#005EFF` | normal-range band, prescriptions, accent dots |
| Cyan | `#64E0FF` | eyebrow + unit labels on navy |
| Lime | `#CDFF20` | within-range count numeral |
| Red | `#FF403C` | out-of-range count numeral, client dot on bars |
| Red ink | `#C7231F` | **red text only** — darker, for 4.5:1 contrast |
| Linen | `#EFECE6` | field background, dot ring |
| White | `#FFFFFF` | panels, programme rows |
| Sand | `#DAD6CE` | desk background (screen only, not printed) |

Hairlines: `rgba(18,38,73,.13)` between marker cells, `rgba(18,38,73,.08)` between
exercise rows, `rgba(18,38,73,.1)` bar track, `rgba(255,255,255,.2)` rail dividers.

### Typography
- **Sora** — everything except numerics. Weights used: 500, 600, 700, 800.
- **JetBrains Mono** — every number, range, date, unit label. Weights 400, 500.
- Scale in use: 9, 9.5, 10, 10.5, 11, 12, 17, 29, 58px.
- **9px is the floor.** Nothing smaller — it is already fine print at this page size.
- Tracking: display/numerals negative (`-.015em` to `-.04em`); all-caps labels
  positive (`.1em` to `.2em`).

### Spacing
4px base. Observed: 5, 6, 7, 8, 10, 12, 13, 14, 16, 18, 22, 26, 28, 30, 32.

### Other
- **Border radius: 0 everywhere** except the circular bar dots. This is deliberate —
  no rounded cards.
- **No shadows on the printed sheet.** The `box-shadow` in the reference is a
  screen-only desk effect and is removed in the print stylesheet.

---

## Interactions & Behavior
None — this is a static, print-destined document. No hover, focus, or active states.
If you render it in a web view first, keep the sheet non-interactive so what the client
sees on screen is exactly what prints.

## State Management
None. The sheet is a pure function of one `PROGRAM` object. No fetching inside the
component — pass fully-derived data in.

## Data contract

```ts
type Program = {
  client: { name: string; date: string };   // date pre-formatted, e.g. "08 SEP 2026"
  measures: Array<{
    shortName: string;   // display label, e.g. "Forward head posture (R)"
                         // side MUST be included where the measure is sided
    value: number;
    unit: string;        // "°" or " cm" (leading space intentional)
    min: number;         // normal range lower bound
    max: number;         // normal range upper bound
  }>;
  blocks: Array<{        // exactly 3 — the layout is a 3-column band
    title: string;       // ALL CAPS
    unitLabel: string;   // "sets × reps" | "sets × duration"
    items: Array<{ name: string; sets: number; reps: string }>;  // reps is a string: "10", "30s"
  }>;
};
```

`ok`, `severity`, and all `*Text` / `band*` / `mark*` values are **derived** — do not
pass them in. The counts in the rail are derived too (`flagged.length`, `cleared.length`,
`measures.length`, sum of block item counts), so they can never disagree with the lists.

### Open data question
`Pelvic tilt (L)` is treated as the **left** side, value `0.2°`, normal range `-2 to 2°`.
Confirm against the source algorithm — the original PDF only said "Left 0.2".

## Assets
| File | Size | Notes |
|---|---|---|
| `assets/udra-wordmark-white.png` | 2323 × 750 | white horizontal logo, transparent. Render at 81 × 26 |
| `assets/udra-mark-white.png` | 1825 × 1800 | white logomark, transparent. Render at 26 × 26 |

Both supplied by the client from the UDRA brand kit (Brand Guidelines v4.0). Colored
variants exist for light backgrounds but are not used on this sheet — the rail is navy.
Prefer SVG if the brand kit has it; these PNGs are large enough for print either way.

Fonts load from Google Fonts in the reference. For a server-side PDF renderer, self-host
Sora and JetBrains Mono instead so output is deterministic.

## Files
| File | What it is |
|---|---|
| `udra-posture-sheet.html` | **Start here.** Runnable, data-driven reference implementation — vanilla JS, no build. Edit `PROGRAM` at the top of the script to test with real data. |
| `assets/udra-wordmark-white.png` | White wordmark |
| `assets/udra-mark-white.png` | White logomark |
