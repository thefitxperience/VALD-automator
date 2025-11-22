import sys
import os
import shutil
from openpyxl import load_workbook
import subprocess

TEMPLATE_NAME = "Body Motions Upper Body Template3.xlsm"  # Use the macro-enabled template
TEMPLATE_SHEET = "Body Masters"


def nz_str(v):
    if v is None:
        return ""
    return str(v)


def nz_float(v):
    if v is None or v == "":
        return 0.0
    try:
        return float(v)
    except Exception:
        return 0.0


def parse_asymmetry(raw):
    """
    raw example: '9.0% L' or '3% R'
    returns: (pct_value, side_char) → (9.0, 'L')
    """
    if raw is None:
        return None, None
    s = str(raw).strip()
    if not s:
        return None, None

    if "%" not in s:
        return None, None

    percent_index = s.index("%")
    num_part = s[:percent_index].strip()   # e.g. "9.0"

    # side is last non-space character
    side_char = None
    for ch in reversed(s):
        if ch != " ":
            side_char = ch
            break

    try:
        pct_val = float(num_part.replace(",", "."))
    except ValueError:
        return None, None

    return pct_val, side_char


def get_target_info(movement, region):
    """
    Returns:
      (pct_cell_address, side_cell_address, right_text, left_text)
    or (None, None, None, None) if not relevant
    """
    m = movement.lower().strip()
    r = region.lower().strip()

    # HAND – Grip Squeeze
    if r == "hand" and m == "grip squeeze":
        pct_cell = "AH21"
        side_cell = "AG22"
        right_text = "Right Grip Squeeze/\nضغط القبضة باليد اليمنى"
        left_text  = "Left Grip Squeeze/\nضغط القبضة باليد اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # ELBOW – Extension (Triceps)
    if r == "elbow" and m == "extension":
        pct_cell = "AB21"
        side_cell = "AA22"
        right_text = "Right Triceps /\n عضلات التراي سيبس اليمنى"
        left_text  = "Left Triceps /\n عضلات التراي سيبس اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # ELBOW – Flexion (Biceps)
    if r == "elbow" and m == "flexion":
        pct_cell = "AB23"
        side_cell = "AA24"
        right_text = "Right Biceps /\nعضلة الباي سيبس اليمنى"
        left_text  = "Left Biceps /\n عضلة الباي سيبس اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # SHOULDER – Push
    if r == "shoulder" and m == "push":
        pct_cell = "P21"
        side_cell = "O22"
        right_text = "Right Shoulder Push/\nدفع الكتف الأيمن"
        left_text  = "Left Shoulder Push/\nدفع الكتف الأيسر"
        return pct_cell, side_cell, right_text, left_text

    # SHOULDER – Pull
    if r == "shoulder" and m == "pull":
        pct_cell = "P23"
        side_cell = "O24"
        right_text = "Right Shoulder Pull/\nسحب الكتف الأيمن"
        left_text  = "Left Shoulder Pull/\nسحب الكتف الأيسر"
        return pct_cell, side_cell, right_text, left_text

    # SHOULDER – External Rotation (ER)
    if r == "shoulder" and m == "external rotation":
        pct_cell = "D21"
        side_cell = "C22"
        right_text = "Right External Rotation /\nالدوران الخارجي الأيمن "
        left_text  = "Left External Rotation /\nالدوران الخارجي الأيسر "
        return pct_cell, side_cell, right_text, left_text

    # SHOULDER – Internal Rotation (IR)
    if r == "shoulder" and m == "internal rotation":
        pct_cell = "D23"
        side_cell = "C24"
        right_text = "Right Internal Rotation /\n الدوران الداخلي الأيمن"
        left_text  = "Left Internal Rotation / \nالدوران الداخلي الأيسر"
        return pct_cell, side_cell, right_text, left_text

    # SHOULDER – Flexion
    if r == "shoulder" and m == "flexion":
        pct_cell = "D25"
        side_cell = "C26"
        right_text = "Right shoulder flexion /\n ثني الكتف الأيمن"
        left_text  = "Left shoulder flexion /\n ثني الكتف الأيسر"
        return pct_cell, side_cell, right_text, left_text

    # SHOULDER – Abduction
    if r == "shoulder" and m == "abduction":
        pct_cell = "D27"
        side_cell = "C28"
        right_text = "Right shoulder abductor /\nعضلة فتح الكتف الأيمن"
        left_text  = "Left shoulder abductor /\nعضلة فتح الكتف الأيسر "
        return pct_cell, side_cell, right_text, left_text

    return None, None, None, None


def clear_fields(ws):
    """
    Clears only the cells we are controlling.
    """
    addresses = [
        "AH21", "AG22",
        "AB21", "AA22", "AB23", "AA24",
        "P21", "O22", "P23", "O24",
        "D21", "C22", "D23", "C24", "D25", "C26", "D27", "C28",
        "A6", "A21"
    ]
    for addr in addresses:
        ws[addr].value = None


def make_safe_filename(name):
    """
    Remove characters that are illegal in file names and trim.
    """
    invalid = '<>:"/\\|?*'
    safe = "".join("_" if c in invalid else c for c in name)
    safe = safe.strip()
    if not safe:
        safe = "Report"
    return safe + ".xlsm"


def fill_template_with_openpyxl(template_path, out_path, patient_name, patient_data):
    """
    Use openpyxl to copy template and fill with data.
    This preserves VBA macros when copying .xlsm files.
    """
    try:
        # Copy the template file to preserve macros
        shutil.copy2(template_path, out_path)
        
        # Open the copied file with keep_vba=True
        wb = load_workbook(out_path, keep_vba=True)
        
        # Find the correct sheet
        if TEMPLATE_SHEET not in wb.sheetnames:
            available_sheets = wb.sheetnames
            wb.close()
            raise Exception(f"Sheet '{TEMPLATE_SHEET}' not found. Available sheets: {available_sheets}")
        
        ws = wb[TEMPLATE_SHEET]
        
        # Set name in A6
        ws['A6'] = patient_name
        
        # Set date in A21
        if patient_data.get('date'):
            ws['A21'] = patient_data['date']
        
        # Set all other cells
        for cell_addr, cell_value in patient_data.get('cells', {}).items():
            ws[cell_addr] = cell_value
        
        # Determine which body parts are present and populate A11-A17
        body_parts_present = set()
        for cell_addr in patient_data.get('cells', {}).keys():
            # Check which body part this cell belongs to
            if cell_addr.startswith('D2'):  # Shoulder rotation (D21-D28)
                body_parts_present.add('rotator_cuff')
            elif cell_addr.startswith('P2'):  # Shoulder push/pull (P21-P24)
                if cell_addr in ['P21', 'O22']:
                    body_parts_present.add('chest')
                elif cell_addr in ['P23', 'O24']:
                    body_parts_present.add('back')
            elif cell_addr.startswith('AB2'):  # Elbow (AB21-AB24)
                if cell_addr in ['AB21', 'AA22']:
                    body_parts_present.add('triceps')
                elif cell_addr in ['AB23', 'AA24']:
                    body_parts_present.add('biceps')
            elif cell_addr.startswith('AH2'):  # Hand (AH21)
                body_parts_present.add('hand')
        
        # Map body parts to their bilingual text
        body_part_map = {
            'shoulder': "Shoulder / الكتف",
            'rotator_cuff': "Rotator cuff/ الكُمّ",
            'chest': "Chest/ الصدر",
            'back': "Back/ الظهر",
            'triceps': "Triceps /التراي سيبس",
            'biceps': "Biceps /الباي سيبس",
            'hand': "Hand/ اليد"
        }
        
        # Fill A11-A17 with the body parts present
        body_parts_list = []
        # Maintain a specific order
        ordered_parts = ['shoulder', 'rotator_cuff', 'chest', 'back', 'triceps', 'biceps', 'hand']
        for part in ordered_parts:
            if part in body_parts_present:
                body_parts_list.append(body_part_map[part])
        
        # Write to cells A11-A17
        for i, body_part_text in enumerate(body_parts_list):
            if i < 7:  # Max 7 slots (A11-A17)
                ws[f'A{11+i}'] = body_part_text
        
        # Save the file
        wb.save(out_path)
        wb.close()
        
        # Now trigger the macros by opening in Excel and simulating a change
        trigger_macros(out_path)
        
        return True
        
    except Exception as e:
        print(f"Error with openpyxl: {e}")
        return False


def trigger_macros(file_path):
    """
    Open the file in Excel, trigger cell changes to run macros, then close.
    """
    applescript = f'''
tell application "Microsoft Excel"
    set theFile to POSIX file "{file_path}"
    open theFile
    set theWorkbook to active workbook
    set theSheet to sheet "Body Masters" of theWorkbook
    
    -- Trigger the Worksheet_Change event by modifying percentage cells
    tell theSheet
        set percentageCells to {{"D21", "D23", "D25", "D27", "P21", "P23", "AB21", "AB23", "AH21"}}
        repeat with cellAddr in percentageCells
            set currentVal to value of cell cellAddr
            if currentVal is not missing value and currentVal is not "" then
                -- Trigger change event by setting to same value
                set value of cell cellAddr to currentVal
            end if
        end repeat
    end tell
    
    save theWorkbook
    close theWorkbook saving yes
end tell
'''
    
    try:
        subprocess.run(['osascript', '-e', applescript], 
                      capture_output=True, text=True, check=False)
    except Exception:
        pass  # Silent fail if AppleScript doesn't work


def main():
    if len(sys.argv) < 2:
        print("Usage: process_dynamo.py <export_file.xlsx>")
        sys.exit(1)

    export_path = sys.argv[1]
    if not os.path.isfile(export_path):
        print(f"File not found: {export_path}")
        sys.exit(1)

    base_dir = os.path.dirname(os.path.abspath(__file__))
    template_path = os.path.join(base_dir, TEMPLATE_NAME)

    if not os.path.isfile(template_path):
        print(f"Template not found: {template_path}")
        sys.exit(1)

    # Load export workbook once
    src_wb = load_workbook(export_path, data_only=True)
    src_ws = src_wb.active
    max_row = src_ws.max_row

    # 1) Collect rows per patient name
    patients = {}  # name -> list of row indices
    for row in range(2, max_row + 1):  # assuming row 1 is header
        name_val = nz_str(src_ws[f"A{row}"].value).strip()
        if not name_val:
            continue
        if name_val not in patients:
            patients[name_val] = []
        patients[name_val].append(row)

    if not patients:
        print("No names found in column A. Nothing to do.")
        sys.exit(0)

    num_patients = len(patients)
    export_base = os.path.splitext(os.path.basename(export_path))[0]

    # 2) Always save to Desktop, no folders
    desktop_path = os.path.expanduser("~/Desktop")
    out_base_dir = desktop_path

    print(f"Found {num_patients} patient(s).")

    # 3) Process each patient separately
    for patient_name, rows in patients.items():
        print(f"Processing: {patient_name} ({len(rows)} row(s))")

        # Collect all data for this patient
        patient_data = {
            'date': None,
            'cells': {}
        }
        
        date_set = False

        # For each row belonging to this patient
        for row in rows:
            date_val = src_ws[f"C{row}"].value
            movement = nz_str(src_ws[f"F{row}"].value)
            region = nz_str(src_ws[f"H{row}"].value)
            asym_raw = src_ws[f"S{row}"].value

            # Date - first non-empty for this patient
            if not date_set and date_val not in (None, ""):
                patient_data['date'] = date_val
                date_set = True

            if not movement.strip() or not region.strip() or asym_raw in (None, ""):
                continue

            pct_value, side_char = parse_asymmetry(asym_raw)
            if pct_value is None or side_char is None:
                continue

            side_char = side_char.upper()
            if side_char == "L":
                weak_side = "Right"
            elif side_char == "R":
                weak_side = "Left"
            else:
                continue

            pct_cell_addr, side_cell_addr, right_text, left_text = get_target_info(movement, region)
            if pct_cell_addr is None:
                continue

            # Keep only largest absolute asymmetry
            existing = patient_data['cells'].get(pct_cell_addr)
            if existing is None:
                should_update = True
            else:
                should_update = abs(pct_value) > abs(nz_float(existing))

            if should_update:
                # Store numeric value divided by 100 (Excel will format as percentage)
                patient_data['cells'][pct_cell_addr] = pct_value / 100
                if weak_side == "Right":
                    patient_data['cells'][side_cell_addr] = right_text
                else:
                    patient_data['cells'][side_cell_addr] = left_text

        # Determine output path for this patient
        safe_name = make_safe_filename(patient_name)
        out_path = os.path.join(out_base_dir, safe_name)
        
        # Use openpyxl to fill template (no Excel needed!)
        success = fill_template_with_openpyxl(template_path, out_path, patient_name, patient_data)
        
        if success:
            print(f"  Saved: {out_path}")
        else:
            print(f"  Failed to save: {out_path}")

    print("All reports generated.")


if __name__ == "__main__":
    main()
