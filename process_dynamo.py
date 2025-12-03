import sys
import os
import shutil
import re
from openpyxl import load_workbook
import subprocess
import xlwings as xw


def get_movement_test_type(movement, region):
    """
    Determine which test type a specific movement belongs to.
    Returns: 'upper', 'lower', or 'full'
    """
    m = movement.lower().strip()
    r = region.lower().strip()
    
    # Upper body movements
    upper_movements = [
        (r == "shoulder"),
        (r == "hand"),
        (r == "elbow" and m in ["extension", "flexion"])
    ]
    
    # Lower body movements
    lower_movements = [
        (r == "trunk"),
        (r == "knee"),
        (r == "hip" and m in ["flexion", "extension", "abduction", "adduction"])
    ]
    
    if any(upper_movements):
        return 'upper'
    elif any(lower_movements):
        return 'lower'
    
    return None


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
    
    # Full Body: Has upper (shoulder) + elbow + knee + hip abduction/adduction (but NOT hip flexion/extension or trunk)
    if has_upper and has_elbow and has_knee and has_hip_abd_add and not has_lower_specific:
        return 'full'
    
    # Check if we have upper movements
    has_any_upper = has_upper or has_elbow
    
    # Check if we have lower movements
    has_any_lower = has_knee or has_hip_abd_add or has_lower_specific
    
    # If we have both upper and lower, return both as separate tests
    if has_any_upper and has_any_lower:
        return ['upper', 'lower']
    
    # If only upper
    if has_any_upper:
        return 'upper'
    
    # If only lower
    if has_any_lower:
        return 'lower'
    
    # Default
    return 'upper'


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


def calculate_trunk_asymmetry(patient_rows, src_ws):
    """
    Calculate trunk asymmetry from Lateral Flexion Right and Left.
    Returns: (percentage, weak_side) or (None, None) if not enough data.
    Formula: Asymmetry(%) = ((L - R) / ((L + R) / 2)) * 100
    """
    trunk_data = {}
    
    for row in patient_rows:
        movement = nz_str(src_ws[f"F{row}"].value).lower().strip()
        region = nz_str(src_ws[f"H{row}"].value).lower().strip()
        
        # Look for trunk lateral flexion movements
        if region == "trunk" and "lateral flexion" in movement:
            force = nz_float(src_ws[f"R{row}"].value)  # N Avg Force (N)
            
            if "right" in movement:
                trunk_data['right'] = force
            elif "left" in movement:
                trunk_data['left'] = force
    
    # Need both right and left to calculate
    if 'right' not in trunk_data or 'left' not in trunk_data:
        return None, None
    
    right_force = trunk_data['right']
    left_force = trunk_data['left']
    
    # Skip if either is zero or invalid
    if right_force <= 0 or left_force <= 0:
        return None, None
    
    # Calculate asymmetry using the formula: ((L - R) / ((L + R) / 2)) * 100
    avg_force = (left_force + right_force) / 2
    asymmetry_pct = ((left_force - right_force) / avg_force) * 100
    
    # Determine weak side (smaller force value)
    if right_force < left_force:
        weak_side = "Right"
    else:
        weak_side = "Left"
    
    # Return absolute value of percentage
    return abs(asymmetry_pct), weak_side


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
        pct_cell = "D21"
        side_cell = "C22"
        right_text = "Right Quadriceps /\nعضلات الفخذ الأمامية اليمنى"
        left_text  = "Left Quadriceps /\nعضلات الفخذ الأمامية اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # KNEE – Flexion (Hamstring)
    if r == "knee" and m == "flexion":
        pct_cell = "D23"
        side_cell = "C24"
        right_text = "Right Hamstring /\nعضلات الفخذ الخلفية اليمنى"
        left_text  = "Left Hamstring /\nعضلات الفخذ الخلفية اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # HIP – Adduction
    if r == "hip" and m == "adduction":
        pct_cell = "P21"
        side_cell = "O22"
        right_text = "Right Adductors /\nعضلات الفخذ الداخلي اليمنى"
        left_text  = "Left Adductors /\nعضلات الفخذ الداخلي اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # HIP – Abduction
    if r == "hip" and m == "abduction":
        pct_cell = "P23"
        side_cell = "O24"
        right_text = "Right Abductors /\nعضلات الفخذ الخارجية اليمنى"
        left_text  = "Left Abductors /\nعضلات الفخذ  الخارجية اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # TRUNK – Lateral Flexion (Lower Body only)
    if r == "trunk" and m == "lateral flexion":
        pct_cell = "AB21"
        side_cell = "AA22"
        right_text = "Right Sides /\nالجانب الأيمن"
        left_text  = "Left Sides /\nالجانب الأيسر"
        return pct_cell, side_cell, right_text, left_text

    # HIP – Flexion (Lower Body only)
    if r == "hip" and m == "flexion":
        pct_cell = "AH21"
        side_cell = "AG22"
        right_text = "Right Hip Flexors /\nعضلات مثنية الورك اليمنى"
        left_text  = "Left Hip Flexors /\nعضلات مثنية الورك اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # HIP – Extension (Lower Body only)
    if r == "hip" and m == "extension":
        pct_cell = "AH23"
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
        pct_cell = "P21"
        side_cell = "O22"
        right_text = "Right Triceps /\n عضلات التراي سيبس اليمنى"
        left_text  = "Left Triceps /\n عضلات التراي سيبس اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # ELBOW – Flexion (Biceps) - Full Body position
    if r == "elbow" and m == "flexion":
        pct_cell = "P23"
        side_cell = "O24"
        right_text = "Right Biceps /\nعضلة الباي سيبس اليمنى"
        left_text  = "Left Biceps /\n عضلة الباي سيبس اليسرى"
        return pct_cell, side_cell, right_text, left_text
    
    # KNEE – Extension (Quadriceps) - Full Body position
    if r == "knee" and m == "extension":
        pct_cell = "AB21"
        side_cell = "AA22"
        right_text = "Right Quadriceps /\nعضلات الفخذ الأمامية اليمنى"
        left_text  = "Left Quadriceps /\nعضلات الفخذ الأمامية اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # KNEE – Flexion (Hamstring) - Full Body position
    if r == "knee" and m == "flexion":
        pct_cell = "AB23"
        side_cell = "AA24"
        right_text = "Right Hamstring /\nعضلات الفخذ الخلفية اليمنى"
        left_text  = "Left Hamstring /\nعضلات الفخذ الخلفية اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # HIP – Abduction - Full Body position
    if r == "hip" and m == "abduction":
        pct_cell = "AH21"
        side_cell = "AG22"
        right_text = "Right Abductors /\nعضلات الفخذ الخارجية اليمنى"
        left_text  = "Left Abductors /\nعضلات الفخذ  الخارجية اليسرى"
        return pct_cell, side_cell, right_text, left_text

    # HIP – Adduction - Full Body position
    if r == "hip" and m == "adduction":
        pct_cell = "AH23"
        side_cell = "AG24"
        right_text = "Right Adductors /\nعضلات الفخذ الداخلي اليمنى"
        left_text  = "Left Adductors /\nعضلات الفخذ الداخلي اليسرى"
        return pct_cell, side_cell, right_text, left_text
    
    # For all other movements in full body, use standard mapping
    return get_target_info(movement, region)


def clear_fields(ws):
    """
    Clears only the cells we are controlling.
    """
    addresses = [
        "AH21", "AH22", "AH23", "AH24",
        "AB21", "AB22", "AB23", "AB24",
        "P21", "P22", "P23", "P24",
        "D21", "C22", "D23", "C24", "D25", "C26", "D27", "C28",
        "AA21", "AA22", "AA23", "AA24",
        "AG21", "AG22", "AG23", "AG24",
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


def fill_template_with_xlwings(template_path, out_path, patient_name, patient_data, gym_folder):
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
        
        # Determine sheet name based on gym folder
        template_sheet = gym_folder  # "Body Masters" or "Body Motions"
        
        # Find the correct sheet
        ws = None
        for sheet in wb.sheets:
            if sheet.name == template_sheet:
                ws = sheet
                break
        
        if ws is None:
            available_sheets = [s.name for s in wb.sheets]
            wb.close()
            app.quit()
            raise Exception(f"Sheet '{template_sheet}' not found. Available sheets: {available_sheets}")
        
        # Disable events during data entry
        app.api.EnableEvents = False
        
        # Normalize patient name - remove extra spaces
        normalized_name = re.sub(r'\s+', ' ', patient_name).strip()
        
        # Set name in A6
        ws.range('A6').value = normalized_name
        
        # Set date in A21
        if patient_data.get('date'):
            ws.range('A21').value = patient_data['date']
        
        # Set all other cells
        for cell_addr, cell_value in patient_data.get('cells', {}).items():
            ws.range(cell_addr).value = cell_value
        
        # Determine which body parts are present and populate A11-A17 (or A11-A18)
        body_parts_present = set()
        test_type = patient_data.get('test_type', 'upper')
        
        for cell_addr in patient_data.get('cells', {}).keys():
            if test_type == 'lower':
                # LOWER BODY CELLS
                if cell_addr in ['D21', 'C22']:
                    body_parts_present.add('quadriceps')
                elif cell_addr in ['D23', 'C24']:
                    body_parts_present.add('hamstring')
                elif cell_addr in ['P21', 'O22']:
                    body_parts_present.add('hip_adductors')
                elif cell_addr in ['P23', 'O24']:
                    body_parts_present.add('hip_abductors')
                elif cell_addr in ['AB21', 'AA22']:
                    body_parts_present.add('trunk')
                elif cell_addr in ['AH21', 'AG22']:
                    body_parts_present.add('hip_flexors')
                elif cell_addr in ['AH23', 'AG24']:
                    body_parts_present.add('hip_extensors')
                    
            elif test_type == 'upper':
                # UPPER BODY CELLS
                if cell_addr in ['D21', 'C22', 'D23', 'C24']:
                    body_parts_present.add('rotator_cuff')
                elif cell_addr in ['D25', 'C26', 'D27', 'C28']:
                    body_parts_present.add('shoulder')
                elif cell_addr in ['P21', 'O22']:
                    body_parts_present.add('chest')
                elif cell_addr in ['P23', 'O24']:
                    body_parts_present.add('back')
                elif cell_addr in ['AB21', 'AA22']:
                    body_parts_present.add('triceps')
                elif cell_addr in ['AB23', 'AA24']:
                    body_parts_present.add('biceps')
                elif cell_addr in ['AH21', 'AG22']:
                    body_parts_present.add('hand')
                    
            elif test_type == 'full':
                # FULL BODY CELLS
                if cell_addr in ['D21', 'C22', 'D23', 'C24']:
                    body_parts_present.add('rotator_cuff')
                elif cell_addr in ['D25', 'C26', 'D27', 'C28']:
                    body_parts_present.add('shoulder')
                elif cell_addr in ['P21', 'O22']:
                    body_parts_present.add('triceps')
                elif cell_addr in ['P23', 'O24']:
                    body_parts_present.add('biceps')
                elif cell_addr in ['AB21', 'AA22']:
                    body_parts_present.add('quadriceps')
                elif cell_addr in ['AB23', 'AA24']:
                    body_parts_present.add('hamstring')
                elif cell_addr in ['AH21', 'AG22']:
                    body_parts_present.add('hip_abductors')
                elif cell_addr in ['AH23', 'AG24']:
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
            'quadriceps': "Quadriceps / الفخذ الأمامي",
            'hamstring': "Hamstring / الفخذ الخلفي",
            'hip_abductors': "Hip Abductors / الفخذ  الخارجي",
            'hip_adductors': "Hip Adductors / الفخذ الداخلي",
            'hip_flexors': "Hip Flexors / عضلات ثني الورك",
            'hip_extensors': "Hip Extensors/عضلات بسط الورك",
            'trunk': "Trunk / الجذع"
        }
        
        # Fill A11-A18 with the body parts present
        body_parts_list = []
        
        # Use test_type from patient_data to determine correct order
        test_type = patient_data.get('test_type', 'upper')
        
        if test_type == 'upper':
            # Order for upper body
            ordered_parts = ['shoulder', 'rotator_cuff', 'chest', 'back', 'triceps', 'biceps', 'hand']
            max_slots = 7
        elif test_type == 'lower':
            # Order for lower body
            ordered_parts = ['quadriceps', 'hamstring', 'hip_abductors', 'hip_adductors', 'hip_flexors', 'hip_extensors', 'trunk']
            max_slots = 8
        else:  # full body
            # Order for full body
            ordered_parts = ['shoulder', 'rotator_cuff', 'triceps', 'biceps', 'hamstring', 'quadriceps', 'hip_abductors', 'hip_adductors']
            max_slots = 8
        
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
    
    # Request automation permissions upfront to avoid repeated prompts
    try:
        subprocess.run([
            'osascript', '-e',
            'tell application "System Events" to get name of every process'
        ], capture_output=True, timeout=5)
    except:
        pass  # If this fails, xlwings will handle permissions itself

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
                'cells': {},
                'test_type': test_type  # Store test type for body parts detection
            }
            
            date_set = False
            
            # Special handling for trunk - calculate asymmetry from force values
            if test_type == 'lower':
                trunk_pct, trunk_weak_side = calculate_trunk_asymmetry(rows, src_ws)
                if trunk_pct is not None:
                    print(f"    Calculated trunk asymmetry: {trunk_pct:.1f}% (weak side: {trunk_weak_side})")
                    # Store trunk data
                    patient_data['cells']['AB21'] = trunk_pct / 100  # Convert to decimal for Excel
                    if trunk_weak_side == "Right":
                        patient_data['cells']['AA22'] = "Right Sides /\nالجانب الأيمن"
                    else:
                        patient_data['cells']['AA22'] = "Left Sides /\nالجانب الأيسر"

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

                if not movement.strip() or not region.strip():
                    continue
                
                # Skip trunk for normal processing since we handle it specially
                if region.lower().strip() == "trunk":
                    continue
                
                if asym_raw in (None, ""):
                    continue
                
                # Filter rows by test type if multiple test types exist
                if len(test_types) > 1:
                    row_test_type = get_movement_test_type(movement, region)
                    # Skip if this movement doesn't belong to current test type
                    if row_test_type and row_test_type != test_type:
                        print(f"    Skipping {region} {movement} (belongs to {row_test_type}, processing {test_type})")
                        continue

                pct_value, side_char = parse_asymmetry(asym_raw)
                if pct_value is None:
                    continue

                # Special handling for 0% asymmetry
                if pct_value == 0:
                    pct_value = 0.1
                    weak_side = None  # Leave weak side empty
                else:
                    if side_char is None:
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
                    
                    # Only set weak side if it's not None (i.e., not a 0% asymmetry case)
                    if weak_side is not None:
                        if weak_side == "Right":
                            patient_data['cells'][side_cell_addr] = right_text
                        else:
                            patient_data['cells'][side_cell_addr] = left_text

            # Create subfolder for this test type
            test_type_folder = os.path.join(programs_folder, test_type.capitalize())
            os.makedirs(test_type_folder, exist_ok=True)
            
            # Determine output path for this patient
            # If multiple test types, add test type to filename for clarity
            if len(test_types) > 1:
                safe_name = make_safe_filename(f"{patient_name} - {test_type.capitalize()} Body")
            else:
                safe_name = make_safe_filename(patient_name)
            out_path = os.path.join(test_type_folder, safe_name)
            
            # Use xlwings to fill template
            success = fill_template_with_xlwings(template_path, out_path, patient_name, patient_data, gym_folder)
            
            if success:
                print(f"    Saved: {out_path}")
            else:
                print(f"    Failed to save: {out_path}")

    print("All reports generated.")


if __name__ == "__main__":
    main()
