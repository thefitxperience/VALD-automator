import sys
import os
import shutil
from openpyxl import load_workbook
import subprocess
import xlwings as xw

TEMPLATE_SHEET = "Body Masters"


def detect_test_type(patient_rows, src_ws):
    """
    Analyze the actual movements and regions in the data to determine test type.
    Returns: 'upper', 'lower', 'full', or list like ['upper', 'lower']
    """
    movements_regions = set()
    
    for row in patient_rows:
        movement = nz_str(src_ws[f"F{row}"].value).lower().strip()
        region = nz_str(src_ws[f"H{row}"].value).lower().strip()
        if movement and region:
            movements_regions.add((movement, region))
    
    # Categorize movements
    upper_indicators = {
        ('external rotation', 'shoulder'),
        ('internal rotation', 'shoulder'),
        ('flexion', 'shoulder'),
        ('abduction', 'shoulder'),
        ('push', 'shoulder'),
        ('pull', 'shoulder'),
        ('grip squeeze', 'hand')
    }
    
    elbow_indicators = {
        ('extension', 'elbow'),
        ('flexion', 'elbow')
    }
    
    lower_indicators = {
        ('lateral flexion', 'trunk'),
        ('flexion', 'hip'),
        ('extension', 'hip')
    }
    
    knee_indicators = {
        ('extension', 'knee'),
        ('flexion', 'knee')
    }
    
    hip_abd_add_indicators = {
        ('abduction', 'hip'),
        ('adduction', 'hip')
    }
    
    # Check what's present
    has_upper = any(mr in movements_regions for mr in upper_indicators)
    has_elbow = any(mr in movements_regions for mr in elbow_indicators)
    has_knee = any(mr in movements_regions for mr in knee_indicators)
    has_hip_abd_add = any(mr in movements_regions for mr in hip_abd_add_indicators)
    has_lower_specific = any(mr in movements_regions for mr in lower_indicators)
    
    # Detection logic
    test_types = []
    
    # Full Body: Has upper (shoulder) + elbow + knee + hip abduction/adduction
    if has_upper and has_elbow and has_knee and has_hip_abd_add and not has_lower_specific:
        test_types.append('full')
    
    # Upper Body: Has shoulder/hand movements and/or elbow, but no knee/hip
    if (has_upper or has_elbow) and not has_knee and not has_hip_abd_add and not has_lower_specific:
        test_types.append('upper')
    
    # Lower Body: Has knee and/or hip movements with lower-specific tests
    if (has_knee or has_hip_abd_add or has_lower_specific):
        # If it also has upper, it's both tests
        if not has_upper and not test_types:  # Only lower body movements
            test_types.append('lower')
        elif 'full' not in test_types:  # Has lower movements but not full body
            test_types.append('lower')
    
    # If we have both upper and lower indicators but not full, it's multiple tests
    if not test_types:
        if has_upper or has_elbow:
            test_types.append('upper')
        if has_knee or has_hip_abd_add or has_lower_specific:
            test_types.append('lower')
    
    # Return single type if only one, otherwise return list
    if len(test_types) == 1:
        return test_types[0]
    return test_types if test_types else 'upper'  # Default to upper


def get_template_for_test_type(test_type, gym_folder, base_dir):
    """
    Get the template path for a specific test type.
    """
    body_type_map = {
        'upper': 'Upper Body',
        'lower': 'Lower Body',
        'full': 'Full Body'
    }
    body_type = body_type_map.get(test_type, 'Upper Body')
    template_filename = f"{gym_folder} {body_type}.xlsm"
    return os.path.join(base_dir, gym_folder, template_filename)


def get_template_info(export_filename):
    """
    Determine which gym and body type based on the export filename.
    Returns: (gym_folder, template_filename)
    
    Expected filename patterns:
    - "motions" or "Motions" in name = Body Motions
    - "masters" or "Masters" in name = Body Masters
    
    - "upper" or "Upper" = Upper Body
    - "lower" or "Lower" = Lower Body
    - "full" or "Full" = Full Body
    """
    filename_lower = export_filename.lower()
    
    # Determine gym
    if "motions" in filename_lower:
        gym_folder = "Body Motions"
    elif "masters" in filename_lower:
        gym_folder = "Body Masters"
    else:
        # Default to Body Motions if not specified
        gym_folder = "Body Motions"
    
    # Determine body type
    if "upper" in filename_lower:
        body_type = "Upper Body"
    elif "lower" in filename_lower:
        body_type = "Lower Body"
    elif "full" in filename_lower:
        body_type = "Full Body"
    else:
        # Default to Upper Body if not specified
        body_type = "Upper Body"
    
    template_filename = f"{gym_folder} {body_type}.xlsm"
    
    return gym_folder, template_filename



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

    # ==================== UPPER BODY ====================
    
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

    # ==================== LOWER BODY ====================
    
    # KNEE – Extension (Quadriceps)
    if r == "knee" and m == "extension":
        pct_cell = "AA21"  # Lower body: C21, Full body: AA21
        side_cell = "AA22"
        right_text = "Right Quadriceps /\nعضلات الفخذ الأمامية اليمنى"
        left_text  = "Left Quadriceps /\nعضلات الفخذ الأمامية اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # KNEE – Flexion (Hamstring)
    if r == "knee" and m == "flexion":
        pct_cell = "AA23"  # Lower body: C23, Full body: AA23
        side_cell = "AA24"
        right_text = "Right Hamstring /\nعضلات الفخذ الخلفية اليمنى"
        left_text  = "Left Hamstring /\nعضلات الفخذ الخلفية اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # HIP – Adduction
    if r == "hip" and m == "adduction":
        pct_cell = "AG23"  # Lower body: O21, Full body: AG23
        side_cell = "AG24"
        right_text = "Right Adductors /\nعضلات الفخذ الداخلي اليمنى"
        left_text  = "Left Adductors /\nعضلات الفخذ الداخلي اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # HIP – Abduction
    if r == "hip" and m == "abduction":
        pct_cell = "AG21"  # Lower body: O23, Full body: AG21
        side_cell = "AG22"
        right_text = "Right Abductors /\nعضلات الفخذ الخارجية اليمنى"
        left_text  = "Left Abductors /\nعضلات الفخذ  الخارجية اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # TRUNK – Lateral Flexion (Lower Body only)
    if r == "trunk" and m == "lateral flexion":
        pct_cell = "AA21"
        side_cell = "AA22"
        right_text = "Right Sides /\nالجانب الأيمن"
        left_text  = "Left Sides /\nالجانب الأيسر"
        return pct_cell, side_cell, right_text, left_text

    # HIP – Flexion (Lower Body only)
    if r == "hip" and m == "flexion":
        pct_cell = "AG21"
        side_cell = "AG22"
        right_text = "Right Hip Flexors /\nعضلات مثنية الورك اليمنى"
        left_text  = "Left Hip Flexors /\nعضلات مثنية الورك اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # HIP – Extension (Lower Body only)
    if r == "hip" and m == "extension":
        pct_cell = "AG23"
        side_cell = "AG24"
        right_text = "Right Hip Extensors /\nعضلات باسطة الورك اليمنى"
        left_text  = "Left Hip Extensors /\nعضلات باسطة الورك اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # ==================== FULL BODY SPECIFIC ====================
    
    # ELBOW – Extension in Full Body (different position than upper body)
    # In Full Body: O21/O22, In Upper Body: AB21/AA22
    # We'll handle this by checking context later
    
    # ELBOW – Flexion in Full Body (different position than upper body)
    # In Full Body: O23/O24, In Upper Body: AB23/AA24
    # We'll handle this by checking context later

    return None, None, None, None


def get_target_info_full_body(movement, region):
    """
    Special handling for Full Body tests where some movements map to different cells.
    Returns same format as get_target_info.
    """
    m = movement.lower().strip()
    r = region.lower().strip()
    
    # ELBOW – Extension (Triceps) - Full Body position
    if r == "elbow" and m == "extension":
        pct_cell = "O21"
        side_cell = "O22"
        right_text = "Right Triceps /\n عضلات التراي سيبس اليمنى"
        left_text  = "Left Triceps /\n عضلات التراي سيبس اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # ELBOW – Flexion (Biceps) - Full Body position
    if r == "elbow" and m == "flexion":
        pct_cell = "O23"
        side_cell = "O24"
        right_text = "Right Biceps /\nعضلة الباي سيبس اليمنى"
        left_text  = "Left Biceps /\n عضلة الباي سيبس اليسرى"
        return pct_cell, side_cell, right_text, left_text
    
    # For all other movements in full body, use standard mapping
    return get_target_info(movement, region)


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


def fill_template_with_xlwings(template_path, out_path, patient_name, patient_data):
    """
    Use xlwings to fill data while preserving all Excel features like data validation.
    """
    app = None
    wb = None
    try:
        # Copy the template to the output location first
        shutil.copy2(template_path, out_path)
        
        # Open Excel invisibly
        app = xw.App(visible=False, add_book=False)
        app.display_alerts = False
        app.screen_updating = False
        
        # Open the copied file
        wb = xw.Book(out_path)
        
        # Find the correct sheet
        ws = None
        for sheet in wb.sheets:
            if sheet.name == TEMPLATE_SHEET:
                ws = sheet
                break
        
        if ws is None:
            available_sheets = [s.name for s in wb.sheets]
            wb.close()
            app.quit()
            raise Exception(f"Sheet '{TEMPLATE_SHEET}' not found. Available sheets: {available_sheets}")
        
        # Disable events during data entry
        app.api.EnableEvents = False
        
        # Set name in A6
        ws.range('A6').value = patient_name
        
        # Set date in A21
        if patient_data.get('date'):
            ws.range('A21').value = patient_data['date']
        
        # Set all other cells
        for cell_addr, cell_value in patient_data.get('cells', {}).items():
            ws.range(cell_addr).value = cell_value
        
        # Determine which body parts are present and populate A11-A17 (or A11-A18)
        body_parts_present = set()
        for cell_addr in patient_data.get('cells', {}).keys():
            # UPPER BODY & FULL BODY
            if cell_addr.startswith('D2'):  # Shoulder rotation (D21-D28)
                # D21-D24: rotator cuff (ER, IR)
                # D25-D28: shoulder (flexion, abduction)
                if cell_addr in ['D21', 'C22', 'D23', 'C24']:
                    body_parts_present.add('rotator_cuff')
                elif cell_addr in ['D25', 'C26', 'D27', 'C28']:
                    body_parts_present.add('shoulder')
            elif cell_addr.startswith('P2'):  # Shoulder push/pull OR Full Body Chest/Back
                if cell_addr in ['P21', 'O22']:
                    body_parts_present.add('chest')
                elif cell_addr in ['P23', 'O24']:
                    body_parts_present.add('back')
            elif cell_addr.startswith('AB2'):  # Upper Body Elbow only
                if cell_addr in ['AB21', 'AA22']:
                    body_parts_present.add('triceps')
                elif cell_addr in ['AB23', 'AA24']:
                    body_parts_present.add('biceps')
            elif cell_addr.startswith('AH2'):  # Hand (Upper Body only)
                body_parts_present.add('hand')
            
            # LOWER BODY SPECIFIC
            if cell_addr.startswith('C2') and cell_addr not in ['C22', 'C24', 'C26', 'C28']:  # Knee (Lower Body: C21-C24)
                if cell_addr in ['C21', 'C22']:
                    body_parts_present.add('quadriceps')
                elif cell_addr in ['C23', 'C24']:
                    body_parts_present.add('hamstring')
            
            # FULL BODY SPECIFIC
            elif cell_addr.startswith('O2') and cell_addr not in ['P21', 'P23']:  # Full Body: Elbow
                if cell_addr in ['O21', 'O22']:
                    body_parts_present.add('triceps')
                elif cell_addr in ['O23', 'O24']:
                    body_parts_present.add('biceps')
            elif cell_addr.startswith('AA2'):  # Full Body: Knee OR Lower Body: Trunk
                if cell_addr in ['AA21', 'AA22']:
                    # Could be quadriceps OR trunk - need to check context
                    # For now, assume knee in full body, trunk in lower
                    body_parts_present.add('quadriceps')
                elif cell_addr in ['AA23', 'AA24']:
                    body_parts_present.add('hamstring')
            elif cell_addr.startswith('AG2'):  # Full Body: Hip OR Lower Body: Hip
                if cell_addr in ['AG21', 'AG22']:
                    # Full Body: Abductors, Lower Body: Flexors
                    body_parts_present.add('hip_abductors')
                elif cell_addr in ['AG23', 'AG24']:
                    # Full Body: Adductors, Lower Body: Extensors
                    body_parts_present.add('hip_adductors')
        
        # Map body parts to their bilingual text
        body_part_map = {
            # Upper Body
            'shoulder': "Shoulder / الكتف",
            'rotator_cuff': "Rotator cuff/ الكُمّ",
            'chest': "Chest/ الصدر",
            'back': "Back/ الظهر",
            'triceps': "Triceps /التراي سيبس",
            'biceps': "Biceps /الباي سيبس",
            'hand': "Hand/ اليد",
            # Lower Body
            'quadriceps': "Quadriceps /الفخذ الأمامي",
            'hamstring': "Hamstring /الفخذ الخلفي",
            'hip_abductors': "Abductors /الفخذ  الخارجي",
            'hip_adductors': "Adductors /الفخذ الداخلي",
            'hip_flexors': "Hip Flexors / عضلات ثني الورك",
            'hip_extensors': "Hip Extensors/عضلات بسط الورك",
            'trunk': "Trunk / الجذع"
        }
        
        # Fill A11-A18 with the body parts present
        body_parts_list = []
        # Order for upper body
        upper_parts = ['shoulder', 'rotator_cuff', 'chest', 'back', 'triceps', 'biceps', 'hand']
        # Order for lower body
        lower_parts = ['quadriceps', 'hamstring', 'hip_abductors', 'hip_adductors', 'hip_flexors', 'hip_extensors', 'trunk']
        # Order for full body
        full_parts = ['shoulder', 'rotator_cuff', 'triceps', 'biceps', 'hamstring', 'quadriceps', 'hip_abductors', 'hip_adductors']
        
        # Determine which list to use based on what's present
        # Check if this is full body by looking for knee in AA cells
        has_knee_in_aa = any(addr.startswith('AA2') for addr in patient_data.get('cells', {}).keys())
        has_shoulder = 'shoulder' in body_parts_present or 'rotator_cuff' in body_parts_present
        
        if has_knee_in_aa and has_shoulder:
            # Full body - has both upper and lower in specific positions
            ordered_parts = full_parts
            max_slots = 8
        elif any(part in body_parts_present for part in ['quadriceps', 'hamstring', 'hip_flexors', 'hip_extensors', 'trunk']):
            # Lower body
            ordered_parts = lower_parts
            max_slots = 8
        else:
            # Upper body
            ordered_parts = upper_parts
            max_slots = 7
        
        for part in ordered_parts:
            if part in body_parts_present:
                body_parts_list.append(body_part_map[part])
        
        # Write to cells A11-A17 or A11-A18
        for i, body_part_text in enumerate(body_parts_list):
            if i < max_slots:
                ws.range(f'A{11+i}').value = body_part_text
        
        # Re-enable events to trigger macros
        app.api.EnableEvents = True
        
        # Trigger macros by simulating cell changes
        for cell_addr in ['D21', 'D23', 'D25', 'D27', 'P21', 'P23', 'AB21', 'AB23', 'AH21']:
            try:
                current_val = ws.range(cell_addr).value
                if current_val is not None and current_val != "":
                    ws.range(cell_addr).value = current_val
            except:
                pass
        
        # Save and close
        wb.save()
        wb.close()
        app.quit()
        
        return True
        
    except Exception as e:
        print(f"Error: {e}")
        if wb:
            try:
                wb.close()
            except:
                pass
        if app:
            try:
                app.quit()
            except:
                pass
        return False


def main():
    if len(sys.argv) < 2:
        print("Usage: process_dynamo.py <export_file.xlsx>")
        sys.exit(1)

    export_path = sys.argv[1]
    if not os.path.isfile(export_path):
        print(f"File not found: {export_path}")
        sys.exit(1)

    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Determine which template to use based on export filename
    export_filename = os.path.basename(export_path)
    gym_folder, template_filename = get_template_info(export_filename)
    
    # Determine body type for proper cell mapping
    is_full_body = "full" in export_filename.lower()
    
    template_path = os.path.join(base_dir, gym_folder, template_filename)
    
    print(f"Using template: {gym_folder}/{template_filename}")

    if not os.path.isfile(template_path):
        print(f"Template not found: {template_path}")
        print(f"Make sure the file exists in the '{gym_folder}' folder.")
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

    # 2) Create main Programs folder on Desktop
    desktop_path = os.path.expanduser("~/Desktop")
    programs_folder = os.path.join(desktop_path, "Programs")
    os.makedirs(programs_folder, exist_ok=True)

    print(f"Found {num_patients} patient(s).")

    # 3) Process each patient separately
    for patient_name, rows in patients.items():
        print(f"Processing: {patient_name} ({len(rows)} row(s))")

        # Detect which test type(s) this patient has
        test_types = detect_test_type(rows, src_ws)
        if isinstance(test_types, str):
            test_types = [test_types]
        
        print(f"  Detected test type(s): {', '.join(test_types)}")
        
        # Process each test type for this patient
        for test_type in test_types:
            print(f"  Creating {test_type} body report...")
            
            # Determine if this is full body for proper cell mapping
            is_full_body = (test_type == 'full')
            
            # Get the appropriate template
            template_path = get_template_for_test_type(test_type, gym_folder, base_dir)
            
            if not os.path.isfile(template_path):
                print(f"    Template not found: {template_path}")
                continue
            
            # Collect all data for this patient and test type
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

                # Use the appropriate mapping function based on body type
                if is_full_body:
                    pct_cell_addr, side_cell_addr, right_text, left_text = get_target_info_full_body(movement, region)
                else:
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

            # Create subfolder for this test type
            test_type_folder = os.path.join(programs_folder, test_type.capitalize())
            os.makedirs(test_type_folder, exist_ok=True)
            
            # Determine output path for this patient
            safe_name = make_safe_filename(patient_name)
            out_path = os.path.join(test_type_folder, safe_name)
            
            # Use xlwings to fill template
            success = fill_template_with_xlwings(template_path, out_path, patient_name, patient_data)
            
            if success:
                print(f"    Saved: {out_path}")
            else:
                print(f"    Failed to save: {out_path}")

    print("All reports generated.")


if __name__ == "__main__":
    main()
