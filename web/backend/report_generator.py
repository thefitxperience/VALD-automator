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
# Template files are copied into the same directory as this file in the container
TEMPLATE_MAP = {
    "Body Masters": os.path.join(BASE_DIR, "Month YEAR - Body Masters.xlsx"),
    "Body Motions": os.path.join(BASE_DIR, "Month YEAR - Body Motions.xlsx"),
}

BRANCH_ORDER = {
    "Body Masters": [
        "RUH - Al Malaz", "RUH - Al Massif", "RUH - Al Aarid", "RUH - Al Sahafa",
        "RUH - Al Wadi", "RUH - Eshbilia", "RUH - Muzahmiyah", "RUH - Rabwa",
        "RUH - Salam", "RUH - Swaidi", "RUH - Takhasousi", "RUH - Al Badia",
        "RUH - Al Fayha", "RUH - Al Khaleej", "RUH - Al Kharj", "RUH - Al Nahda",
        "RUH - Badr", "RUH - Ezdehar", "RUH - Murooj", "RUH - Shubra",
        "DMM - Al Athir", "DMM - Al Jameyeen", "DMM - Hufof", "DMM - Khobar",
        "JED - Hamadania", "JED - JDR", "JED - Al Rawdah", "JED - Makkah", "JED - Obhor",
        "ALQ - Al Rass", "ALQ - Buraidah", "ALQ - Unaizah",
        "MED - Shouran", "MED - Taiba",
        "Uhud", "AlUla", "Al Mubaraz", "Hafr El Batin", "Tabuk", "Najran",
        "Khamis Mushait", "Hail",
    ],
    "Body Motions": [
        "RUH - Al Malaz", "RUH - Al Sahafa", "RUH - Al Aarid", "RUH - Al Fayha",
        "RUH - Al Uraija", "RUH - Badr", "RUH - Al Badia",
        "JED - Al Basateen", "JED - Al Faisaliyah", "JED - Al Naeem",
        "DMM - Al Faisaliyah", "DMM - Al Jalawiah",
        "ALQ - Buraidah", "ALQ - Unaizah",
        "Al Ahsaa", "AlUla", "Tabuk",
    ],
}

TRAINER_ORDER = {
    "Body Masters": [
        "Abdallah Kamal Ahmad Sayid","Adnan Abdallah Al Jahni","Adnan Abdallah Aljahny",
        "Chady Taha Abdel Rahman","Hicham Mahboub","Mahmoud Bakry","Mohamed Elshabrawy",
        "Mohaned Ahmad","Omar Ismael","Omar Saoud","Trainer Ismail","Yassine Abbich",
        "Mohamad Touri","Mahmoud Abdel Rahim Senussi","Ossama Almaslout","Amer Abid",
        "Mohammed Hida","Youssef Lekal","Hamza Said","Oussama Elbaz","Alaa Fathy",
        "Hany Mohamed Yousif Elhadad","Sleiman Al Tayyar","Abed El Hakim Sahou",
        "Asmah Choukeni","Saleh Al Abed","Ahmed Shoeeb","Anouar Aghmour","Mohammad Souud",
        "Ahmed Keshk","Jayson Atlano","Mahmoud Abdel Rahim Senussi Kame",
        "Abed Al Menhem Mhamad","Mhamad El Ebri","Chehab Al Dine Al Salihi",
        "Mohamad Rida Irabi","Mahmoud Abed El Rahim","Captain Housein Ali Joumaa",
        "Diyaa Al Jraydan","Mourad Belgacem","Mahmoud Yosri Mahmoud Mahfouz",
        "Amr El Sayed Abdelhamid","Moustafa Nasser Abd Elkader","Khalid Mouazen",
        "Mohamad Fouad G. Amer","Ahmad H. Abed Al Latif","Hisham M. Badih",
        "Diya Y. Aljirdan","Mohamad Zakariah","Rrnniel Villaverde","Magomed Ansarov",
        "Zakaria Jawadi","Renelle Vilaverdi","Badereddine Bouzahar","Safaa Karim",
        "Fawzi Baltaji","Akram M. Hussin","Zakaria Yahia","Youssef Noreddine",
        "Ahmad Fadel","Rachid Sakouti","Hamza Sanbar","Ayman N. Al Chahawi",
        "Ahmed Hamid Abdelltif Nogalla","Bander Albalawi","El Kaddioui Adil",
        "Shamsudheen Paramban","Ibrahim Mohamed Fadel Abduljalil Barakat","Abdellatif Zamzim",
        "Bilel Azhar Yakoubi","Houssam Ali Elsheshtawy","Marwan Al-Jebali",
        "Mohamed Ibrahim Ibrahim Abouelrous","Ibrahim Mostafa","Mohamd Refai Mohamd",
        "Saud Turki Alqasir",
        "Khalifa El Nahrawy","Ayoub Benzahra","Abdssamad Aballa","Nabil Essahraoui",
        "Aref Hebatala","Alaa Eddine Rtili","Abderrazak Sihabi","Mostafa Ashour Elkhouly",
        "Hicham Mouhime","Abdellatif Zamzam","Fady Elsayed","Mohamed Kamal",
        "Nasser Mansour Nasser Alessa","Mohammed Nshbat","Naoufel Jabnouni",
        "Khalid Chatir","Mohammed Korchi",
        "Abdenabi Ktraouach","Fikri Acharif","Abdou Wahed Zraidi","Ahmed Abdelrahman",
        "Salman Altayyar","Wasem Seed Alhajree","Khalid Nokracchi","Taib Jadia",
        "Mahmoud Nagib","Saeed Al Adrham",
        "Abderrazak Sihabi","Adil Elqady","Adil Chahmi","Amine Korchi","El Mehdi Adnani",
        "Mohamed Saeed","Selim Ben Abdelkader","Mahmoud Fotoh",
        "Khalifa Hassan Khalifa Nahrawy","Mohamad Mahdim Alqahtani",
        "Faraj Lakaira","Mahmoud Al Mahdi","Ahmad Hamdi Knawi","Kamal Al-Rayes",
        "Asser Al-Sheikh","Hamza Aissaoui","Hicham Mouhime","Hicham Toualbi","Ibrahim Pokoti",
        "Ahmad Ramadan","Chouaib Suilmi","Elsayed Fouad","Karim Hosny Ahmad",
        "Sameh Houssein Ali Abed Al-Wahid",
        "Mohamed Hassan Ali Hassan","Mohamed Moustafa Ahmad",
        "Oussama Ait Hammou Obrahim","Zakaria Elouali",
        "Mahmoud Mohamed","Mohamed Hamdan Mohamed","Adel Ali Mohamed",
        "Boujemaa Elakkad","Nabil Essahraoui","Yassine El Barnoussi",
        "Achraf Fadlallah","Majid Abdessamad","Mhamed Oulahssine",
        "Ramy Alla Tawfeak Ahmed","Rhey Anthony T. Munez","Youssef Al Habib Trabelsi",
        "Adawi Abdelmounnmadawi","Kamel Mohammed Kamel","Khalled Saeed Saeed Alhasany",
        "Mahmoud Farouk Abdel Karim Badawi","Mohammed Bstan Abd Aljwad",
        "Mohammed Mubarak Mohammed Aldawsari",
        "Ahmed Maher Ahmed Nasrelden","Hesham Rady Ismail Rady","Mohsen Hadikhamis",
        "Tarik Maarouf","Ibrahim Ali Ismaiel Ibrahim","Wajih Kamal Matoussi",
        "Abdelaziz El Maydy","Amr Ahmed Abdellatif Rabia","Cherif Bin Ahmed Khlifi",
        "Abdessamade Moudakkir","Ahmed Maher Elsayed Abdelaal","Hicham Oulias",
        "Mohammed Abdullah Alquwaya","Mohammed Mahdi Adham Nabhan","Osman Nagi Osman",
        "Rachid Choukhmane","Tariq Abdulrahman Basharahil",
        "Abdullah Abdulrahman","Abdulrahman Ali","Anas Al-Makenzi","Ibrahim Salama",
        "Mohamed Abdel Moeti","Mohamed Rabhi","Rashid Elbouazizi",
        "Hesham Adel Almarshoud","Hicham Hassi","Jamal Halabi Assiri",
        "Mohamed Abdellatif Radwan","Mohamed Abdelsalam Deyab","Mohamed Elsayed Elzeftawy",
        "Mohamed Khalid Manni","Nader Maayouf Saleh",
        "Ahmad Abdelgafour Omar Ahmad","Abdelrahman Mohamed","Khalid Karmou",
        "Shehab Ashraf Mohamady Ibrahim",
        "Abbas Okasha","Abd Elrahem Al Ouina","Abed AlWasi","Khalid Mahmoud Saleh",
        "Mahmoud Hassan","Radwan Mohamed Radwan","Shahid Elkhalfy",
        "Abd Elramhan Mokhtar","Mohamed Fathi Abdulsattar","Abdullah Mohammed Alhamdni",
        "Mohamed Ibrahim Mohamed","Musa Eltom Ahmed",
        "Abdallah Kandaly","Ibrahim Nasr","Khaled Al-Masouri","Sami Serrar",
        "Sofiane Sadiq","Tawfik Jukh",
        "Youssef Souayah","Muhmoud Ayman Saad","Ahmed Elsayed Algammal",
        "Adel Mohammed Abdullah Al-Daos","Imad Al-Zahrani","Khaled Al Barkawi",
        "Mahmoud Al Bihery","Mohamed Ait Ayad","Mohamed Gamea","Omar Al Shankety",
        "Hesham Galal Mahmoud","Karim Abdala Wassal","Mohammed Joharji",
        "Mohammed Mustafa Himsi",
        "Yousef Bou Kentar","Hicham Hemsi",
        "Oussema Boussaid","Mouad Omir","Orley Garcia","Yasser Mahmoud","Kamis Zamzam",
        "Mohamed Jaouat","Mohamed Amzil","Mohamed Othman Gazy","Karim Maarori",
        "Abdel Ghafour Bahja","Anas Mohmmed Alshanqiti","Lakhdari Abdellatif",
        "Mohamed Soliman Ragab","Sheref Ashraf Mohamed",
        "Abdelaziz Mohi Eldin Elkhouli","Abdulwahab Ahmed Saad Al Ghamdi",
        "Amgad Hussein Abbas Abdulaal","Mostafa Mahmoud Sayed Mohamed",
        "Rabah Salamah Alhujuri","Samer Mohammed Abas Kamber",
        "Abdallah Mohamed Ali","Ahmad Al-Dawkhi","Ali Ahmed Alkhadhir","Hassan Ait Hmida",
        "Hamza Berahhou","Khaled Ezzat","Mohammed Abdelhamid","Moulay Al Hussein",
        "Wael Mohammed",
        "Ahmed Abdelmaqsoud","Ahmed Elsayed","Ahmed Khaled","Ahmed Khaled El Said",
        "ElHassan Nagub","Hussein Elsayed","Mohamad Amine Azhar","Mohannad Hani",
        "Moamed Ata","Yassin Mbarek",
        "Abdallah Lazam Faisal Al-Asadi","Abdul Raouf Mustafa","Hamza Moustaghfir",
        "Joesel Bodota Casimiro","Mohamed Fouad Amer",
        "Ammar Tarek Fathi Ibrahim Ali Mahmoud","Radi Gamal Osman Hussein",
        "Sabry Ali Abdelmonem Ezzah","Mahmoud El-Sayed Abdelwareth Radwan",
        "Ahmed Saad Elmamlouk","Enrique Jr Ravallo-Macorol","Mohamed Abdel Manaam Yakout",
        "Mohamed Achraf Abed Al-Mawjoud","Mohamed Ibrahim Abdelaal",
        "Miloud Baali","Mohammad Nour Al-Din Awad Mohammad","Mohammad Ismail",
        "Mostafa Hamada","Anas Jouhari","Tamer Sharkas",
        "Abdaleleh Naser Ahmed","Ibrahim Refat Abdellatif","Wadhah Ahmed Ahmed Mahyub",
        "Ahmed Mohamed Ahmed Fadol","Said Ennasr",
        "Amin Haron","Eslam Rezk","Hamdy Helal","Ali Alkobebi","Ibrahem Zahran",
        "Mustapha Selaoui","Mohammed Ayed",
        "Abdallah Laghzal","Ahmad Chiboub","Ali Mohamed Ali Mohamed",
        "Bassam Ahmad Al-Salhani","Hatem Kamal Hatiba","Wagih Al-Saadani",
    ],
    "Body Motions": [
        "Hadir Nasr Mohamed","Taif Saad Alahmari","Areej Hajj Abdallah","Zouhaira Al-Omrani",
        "Sarah Shaabane","Taghrid Khaled","Ikram Gueddes","Moroj Samir Abdel Hamid",
        "Nadine Ghaleb",
        "Sara Said","Rania Manita","Shefa Ghazi","Kholoud Khaled","Safaa Karim","Maram Tlili",
        "Malek Belguith","Manel Manasria","Sirine Mohamed Hamdi","Guesmi Kholoud",
        "Maryam Al-Qawsari","Shaden Omar","Hidaya Moubarak","Safa Al Saggadi",
        "Malak Al Zahabi","Chaza Ben Miled","Nada Mohamed Khalifa","Warda Al Hajji",
        "Feryel Ben Nacer","Al Anoud Saleh Al-Qablan","Khawla Saif","Asmaa Adel",
        "Hind Al Ahmad","Ebtihal Al Kathiri","Walaa Kamel","Asmaa Ahmed",
        "Aya Al-Jallouli","Hadiya Al-Mohammad","Khouloud Wanna","Rania Bahloul",
        "Sarah Rasheeq","Sanae Hassel","Basnat Abdel Qawi",
        "Seham Hussein","Nawal Akermi","Amal Al-Bjeoui","Rihem Hossam",
        "Hadeer Ibrahim Gamal","Arwa Ahmed Baflah","Shorouq Osama Metwaly Ibrahim",
        "Rajae Al-Jabouji","Maram Farhawi","Safa Radif","Nermin Hadi Debaya",
        "Hasna AlKayyal","Takwa Abdelly",
        "Iman Kouisseh","Raghad Al Bir Qaddar","Ranim Brahmi","Sabrine Al Amine",
        "Mouna Farhat","Salwa Mlaiki","Reyouf Saad","Shurooq Amer","Maha Fayez Al Ahmari",
        "Wiem Dridi","Shourooq Al Jundi","Mariam Baomar","Ines Rezgui","Kholod Khaled",
        "Hajer Jamal Al-Deen Khalifa Ali","Chourouk Sherif","Hala Saied",
        "Maysem Mohamed","Lamia Al Amer","Shayma Abbes","Asayel Sultan","Sara Mahdi",
        "Asmaa Shehata","Diaa Sobhi","Nahla Al Hajri",
        "Sirine Jawadi","Moulouk Al Lawi","Rasha Hamid","Soulaima Hassan","Rahma Qays",
        "Cyrine Ali","Al Bandari Al Harbi","Mirna Mostafa","Nourhan Hosny",
        "Emna Ben Chalbia","Chaima Gharsalli","Asmaa Ashraf","Aya Maayoufi",
        "Chaima Boutita","Asmaa Mahmoud",
        "Mai Mosleh","Chayma Hannachi","Malath Suleiman Alshamasi","Anwar Ben Rhayem",
        "Lulu Alzaaj","Raja Reeba","Aya Mahmoud Abed Al-Wanis","Ines Souissi",
        "Nouran Emad Jad","Nourhan Ehab Amarah","Anfal Nasser Alhusseini",
        "Rawiya Alarousi Mabrouk",
        "Samar Lajnef","Asmaa Aalaa Al-Din","Esraa Labib Noomani","Rim Chabi",
        "Yosra Al-Mzoughi","Roua Al-Hashemi Bin Naeimah","Rana Mohammad Hassan Aaref",
        "Samar Mohammed","Mona Maatouq","Afnan Khalid","Marwa Almudyni",
        "Amina Mohammad Mosbeh","Iman Aboushosha",
        "Walaa Ahmed","Amal Saleh","Bayan Al-Anzi","Hanin Barrani",
        "Rehab Naji Al-Nasri","Khouloud Suibgui",
        "Amal Saad","Bassant Majed Eid","Marwa Jendoubi","Sahar Mrad Berguiga",
        "Ishraf Mohamed Al-Zaghdoudi","Nada Ahmed Mohamed","Rasha Abu Hassan",
    ],
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
    start_day: int | None = None,
    end_day: int | None = None,
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
        import calendar as _cal
        last_day = _cal.monthrange(year, month)[1]
        period_start = date(year, month, max(1, start_day or 1))
        period_end = date(year, month, min(last_day, end_day or last_day))
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

    # Group period-filtered programs by branch (used for branch sheets)
    by_branch: dict[str, list] = {}
    for p in filtered:
        branch = p.get("branch", "")
        if branch not in by_branch:
            by_branch[branch] = []
        by_branch[branch].append(p)

    # Monthly totals per branch (full month, regardless of period filter)
    # Used for REPORT 2 column C in weekly/custom reports
    import calendar as _cal
    month_last = _cal.monthrange(year, month)[1]
    month_start = date(year, month, 1)
    month_end = date(year, month, month_last)

    def in_full_month(p):
        dd = p.get("dispatch_date")
        if not dd:
            return False
        if isinstance(dd, str):
            try:
                dd = date.fromisoformat(dd)
            except ValueError:
                return False
        return month_start <= dd <= month_end

    monthly_by_branch: dict[str, int] = {}
    for p in programs:
        if in_full_month(p):
            branch = p.get("branch", "")
            monthly_by_branch[branch] = monthly_by_branch.get(branch, 0) + 1

    # Monthly totals per trainer (full month) for REPORT sheet
    monthly_by_trainer: dict[str, int] = {}
    for p in programs:
        if in_full_month(p):
            trainer = p.get("trainer_name", "") or ""
            monthly_by_trainer[trainer] = monthly_by_trainer.get(trainer, 0) + 1

    # Load template
    wb = load_workbook(template_path, data_only=False)

    rpt_date = report_date or date.today()
    # For the summary sheets, use period_end when a custom date range is set
    summary_date = period_end if (start_day or end_day) else rpt_date

    for sheet_name in wb.sheetnames:
        ws = wb[sheet_name]
        # Skip summary sheets
        if sheet_name in ("REPORT", "REPORT 2"):
            # Update report date cell (B3)
            ws["B3"] = summary_date
            # For weekly/custom reports, fill column C from C7 with branch counts
            # (monthly uses a formula that counts from branch sheets directly)
            is_partial = period_type == "weekly" or bool(start_day or end_day)
            if is_partial and sheet_name == "REPORT 2":
                branch_order = BRANCH_ORDER.get(gym, [])
                for idx, branch in enumerate(branch_order):
                    count = monthly_by_branch.get(branch, 0)
                    cell = ws.cell(row=7 + idx, column=3)
                    cell.value = None
                    cell.value = count
            if is_partial and sheet_name == "REPORT":
                trainer_order = TRAINER_ORDER.get(gym, [])
                for idx, trainer in enumerate(trainer_order):
                    count = monthly_by_trainer.get(trainer, 0)
                    cell = ws.cell(row=7 + idx, column=3)
                    cell.value = None
                    cell.value = count
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
            ws.cell(row=dest_row, column=4).number_format = "DD/MM/YYYY"
            ws.cell(row=dest_row, column=5).number_format = "DD/MM/YYYY"

            # Column F: mark late uploads (test done in a previous month)
            if isinstance(test_date, date) and test_date.month != month:
                ws.cell(row=dest_row, column=6, value="Late Upload")

    # Save to bytes
    buf = io.BytesIO()
    wb.save(buf)
    buf.seek(0)
    return buf.read()
