"""
Generates the monthly / weekly Excel report from the template files.
Fills each branch sheet starting at row 7 with approved programs.
"""
import io
import os
from datetime import date, timedelta
from openpyxl import load_workbook
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side
from copy import copy

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Template files live two levels up (workspace root)
WORKSPACE_DIR = os.path.abspath(os.path.join(BASE_DIR, "..", ".."))

TEMPLATE_MAP = {
    "Body Masters": os.path.join(WORKSPACE_DIR, "Month YEAR - Body Masters.xlsx"),
    "Body Motions": os.path.join(WORKSPACE_DIR, "Month YEAR - Body Motions.xlsx"),
}

TEST_TYPE_LABELS = {
    "upper": "Upper Body",
    "lower": "Lower Body",
    "full": "Full Body",
}


def _week_range(year: int, month: int, week_number: int):
    """Return (start_date, end_date) for week 1-4/5 of a month."""
    first = date(year, month, 1)
    # week 1 = days 1-7, week 2 = 8-14, week 3 = 15-21, week 4 = 22-end
    start_day = (week_number - 1) * 7 + 1
    end_day = start_day + 6
    # Clamp end_day to last day of month
    if month == 12:
        next_month_first = date(year + 1, 1, 1)
    else:
        next_month_first = date(year, month + 1, 1)
    last_day = (next_month_first - timedelta(days=1)).day
    end_day = min(end_day, last_day)
    return date(year, month, start_day), date(year, month, end_day)


def _copy_row_style(src_ws, src_row: int, dst_ws, dst_row: int, max_col: int):
    """Copy cell styles from a reference row to a new data row."""
    for col in range(1, max_col + 1):
        src_cell = src_ws.cell(row=src_row, column=col)
        dst_cell = dst_ws.cell(row=dst_row, column=col)
        if src_cell.has_style:
            dst_cell.font = copy(src_cell.font)
            dst_cell.fill = copy(src_cell.fill)
            dst_cell.border = copy(src_cell.border)
            dst_cell.alignment = copy(src_cell.alignment)
            dst_cell.number_format = src_cell.number_format


def generate_report(
    gym: str,
    programs: list[dict],
    period_type: str,   # "monthly" | "weekly"
    year: int,
    month: int,
    week_number: int | None = None,
    report_date: date | None = None,
) -> bytes:
    """
    Build a report Excel file and return its bytes.

    programs: list of dicts from Supabase with keys:
        branch, client_id, client_name, test_type, test_date,
        trainer_name, dispatch_date
    """
    template_path = TEMPLATE_MAP.get(gym)
    if not template_path or not os.path.exists(template_path):
        raise FileNotFoundError(f"Template not found: {template_path}")

    # Determine date filter
    if period_type == "monthly":
        if month == 12:
            next_first = date(year + 1, 1, 1)
        else:
            next_first = date(year, month + 1, 1)
        period_start = date(year, month, 1)
        period_end = next_first - timedelta(days=1)
    else:
        if week_number is None:
            raise ValueError("week_number required for weekly report")
        period_start, period_end = _week_range(year, month, week_number)

    # Filter programs by dispatch_date in period
    def in_period(p):
        dd = p.get("dispatch_date")
        if not dd:
            return False
        if isinstance(dd, str):
            try:
                dd = date.fromisoformat(dd)
            except ValueError:
                return False
        return period_start <= dd <= period_end

    filtered = [p for p in programs if in_period(p)]

    # Group by branch
    by_branch: dict[str, list] = {}
    for p in filtered:
        branch = p.get("branch", "")
        if branch not in by_branch:
            by_branch[branch] = []
        by_branch[branch].append(p)

    # Load template
    wb = load_workbook(template_path)

    rpt_date = report_date or date.today()

    for sheet_name in wb.sheetnames:
        ws = wb[sheet_name]
        # Skip summary sheets
        if sheet_name in ("REPORT", "REPORT 2"):
            # Update report date cell (B3)
            ws["B3"] = rpt_date
            continue

        # Branch sheet — update report date
        ws["B3"] = rpt_date

        branch_programs = by_branch.get(sheet_name, [])
        if not branch_programs:
            continue

        # Find where to start writing (row 7 and down)
        start_row = 7
        max_col = ws.max_column

        # Use row 7 as style template if it has data (from previous use), else row 5 headers
        style_ref_row = 7

        for i, prog in enumerate(branch_programs):
            dest_row = start_row + i
            _copy_row_style(ws, style_ref_row, ws, dest_row, max_col)

            client_id = prog.get("client_id") or ""
            client_name = prog.get("client_name", "")
            test_type_label = TEST_TYPE_LABELS.get(prog.get("test_type", ""), "")
            trainer = prog.get("trainer_name") or ""
            test_date = prog.get("test_date")
            dispatch_date = prog.get("dispatch_date")

            # Format dates
            if isinstance(test_date, str):
                try:
                    test_date = date.fromisoformat(test_date)
                except ValueError:
                    pass
            if isinstance(dispatch_date, str):
                try:
                    dispatch_date = date.fromisoformat(dispatch_date)
                except ValueError:
                    pass

            full_name = f"{client_name} - {test_type_label}" if test_type_label else client_name

            ws.cell(row=dest_row, column=1, value=client_id)
            ws.cell(row=dest_row, column=2, value=full_name)
            ws.cell(row=dest_row, column=3, value=trainer)
            ws.cell(row=dest_row, column=4, value=test_date)
            ws.cell(row=dest_row, column=5, value=dispatch_date)

            # Format date cells
            ws.cell(row=dest_row, column=4).number_format = "YYYY-MM-DD"
            ws.cell(row=dest_row, column=5).number_format = "YYYY-MM-DD"

            # Column F: mark late uploads (test done in a previous month)
            if isinstance(test_date, date) and test_date.month != month:
                ws.cell(row=dest_row, column=6, value="Late Upload")

    # Save to bytes
    buf = io.BytesIO()
    wb.save(buf)
    buf.seek(0)
    return buf.read()
