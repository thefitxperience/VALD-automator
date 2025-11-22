# DynaMo Excel Report Generator

This tool processes DynaMo export files and generates client reports using the Body Motions template.

## What it does

- **Reads** your DynaMo export (`.xlsx`)
- **Groups** data by client name (column A)
- **Fills** the template with:
  - Client name → cell A6
  - First date found → cell A21
  - Force asymmetry data → various cells based on movement/body region
- **Outputs** macro-enabled reports (`.xlsm`)

### Smart output logic

- **1 client** → Single file named `ClientName.xlsm` in the same folder
- **Multiple clients** → Creates folder `ExportFileName_Reports/` with one `.xlsm` per client

## Setup Instructions

### 1. Install Python dependencies

Open Terminal and run:

```bash
pip3 install openpyxl
```

### 2. Make the script executable

```bash
cd "/Users/andyayas/Desktop/untitled folder"
chmod +x run_dynamo.sh
```

### 3. Create macOS Automator App (drag-and-drop icon)

1. Open **Automator**
2. Create new **Application**
3. Add action: **Run Shell Script**
4. Configure:
   - **Shell:** `/bin/bash`
   - **Pass input:** `as arguments`
5. Paste this code:

```bash
SCRIPT_DIR="/Users/andyayas/Desktop/untitled folder"

for f in "$@"; do
    python3 "$SCRIPT_DIR/process_dynamo.py" "$f"
done
```

6. Save as **Process DynaMo.app** (anywhere you want)

### 4. Usage

Just **drag your DynaMo export file** onto the **Process DynaMo.app** icon!

## Supported Movements & Regions

The script recognizes these combinations:

| Body Region | Movement           | Cells Updated     |
|-------------|--------------------|-------------------|
| Hand        | Grip Squeeze       | AH21, AG22        |
| Elbow       | Extension (Triceps)| AB21, AA22        |
| Elbow       | Flexion (Biceps)   | AB23, AA24        |
| Shoulder    | Push               | P21, O22          |
| Shoulder    | Pull               | P23, O24          |
| Shoulder    | External Rotation  | D21, C22          |
| Shoulder    | Internal Rotation  | D23, C24          |
| Shoulder    | Flexion            | D25, C26          |
| Shoulder    | Abduction          | D27, C28          |

### Data mapping

- **Column A** (Name) → Groups clients
- **Column C** (Date) → First date per client → A21
- **Column F** (Movement) → Determines which cells to fill
- **Column H** (Body Region) → Works with Movement
- **Column S** (Force Asymmetry) → Format: `9.0% L` or `3% R`
  - Percentage → Goes to asymmetry cell
  - Side (L/R) → Determines which text label to use

## Troubleshooting

**"openpyxl not found"**  
Run: `pip3 install openpyxl`

**"Template not found"**  
Make sure `Body Motions Upper Body Template.xltm` is in the same folder as the script.

**No output files**  
Check that column A has client names in your export file.

**Macros missing in output**  
The script uses `keep_vba=True` - if the template has VBA macros, they should be preserved in the `.xlsm` output.
