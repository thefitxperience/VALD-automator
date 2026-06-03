# VALD Automator Web

Full-stack web application for VALD program generation, approval, and reporting.

- **Frontend**: React + Vite + Tailwind — deployed to GitHub Pages  
- **Backend**: FastAPI (Python) — deployed to Railway  
- **Database + Storage**: Supabase (free tier)

---

## Architecture

```
web/
├── frontend/      React app (static, deployed to GitHub Pages)
└── backend/       FastAPI (deployed to Railway)
```

---

## 1. Supabase Setup (one-time)

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. In the **SQL Editor**, paste and run the contents of `web/backend/supabase_schema.sql`
4. Under **Storage → New Bucket**, create a bucket named `program-pdfs` with **Public** access
5. Copy your **Project URL** and **Service Role Key** from Settings → API

---

## 2. Backend — Deploy to Railway

1. Create a free account at [railway.app](https://railway.app)
2. New Project → **Deploy from GitHub repo**
3. Set the root directory to `web/backend`
4. Add **Environment Variables**:
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SERVICE_KEY=your-service-role-key
   ```
5. Deploy. Note the service URL (e.g. `https://vald-automator-production.up.railway.app`)

> **Note**: The backend needs access to the report Excel templates.
> Make sure `Month YEAR - Body Masters.xlsx` and `Month YEAR - Body Motions.xlsx`
> are committed to the repo root (they are referenced by `../..` from `web/backend/`).

---

## 3. Frontend — Deploy to GitHub Pages

1. In `web/frontend/vite.config.js`, set `base: '/your-repo-name/'`
2. Build: `cd web/frontend && npm run build`
3. Commit the `dist/` folder and push to `main`

---

## 4. Local Development

### Backend
```bash
cd web/backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # fill in your Supabase credentials
uvicorn main:app --reload
```

### Frontend
```bash
cd web/frontend
npm install
cp .env.example .env.local   # set VITE_API_URL=http://localhost:8000
npm run dev
```

---

## 5. Adding WhatsApp Numbers

Open `web/backend/trainers_data.py` and `web/frontend/src/data/trainers.js`.  
Find each trainer and fill in their number in international format:

```python
{"name": "Hadir Nasr Mohamed", "whatsapp": "+966501234567"},
```

The WhatsApp button opens `wa.me/{number}`. Download the PDFs first, then manually attach them in WhatsApp.

---

## 6. Workflow

1. **Program Generation page** → select gym → drop the check file
2. For each NEW/UPDATED test: assign branch, trainer, dispatch date
3. Upload the program PDF (generated locally by `process_dynamo.py`) and results PDF (from VALD site)
4. Click **Approve** — saves to database
5. Click **WhatsApp** — opens trainer's chat; attach the downloaded PDFs manually

6. **Reports page** → pick gym, monthly or weekly, month/year → **Generate & Download**  
   → downloads the filled Excel report template

---

## 7. Updating Trainer Lists

To add/remove trainers or branches, edit both files:
- `web/backend/trainers_data.py` (Python, used by the backend API)
- `web/frontend/src/data/trainers.js` (JS, used for branch/trainer dropdowns in the UI)
