# VALD Automator

VALD and Bodydot program generation, monthly reports and payment files for Body Masters, Body Motions and Body Coach.

- **`web/`** — the app: FastAPI backend (`web/backend`, deployed on Railway) and React frontend (`web/frontend`, deployed to GitHub Pages). See [`web/README.md`](web/README.md).
- **Report templates** at the root (`Month YEAR - …`, `Bodydot Month YEAR - …`, `Payment - Month YEAR`, `Bodydot Payment - Month YEAR`) are copied into the backend image by the `Dockerfile`; locally they are symlinked into `web/backend/`.
- **`legacy-desktop-tool/`** — the original Excel/xlwings DynaMo processor that the web app replaced, with its `.xlsm` templates and local history files. Kept for reference; nothing in the app uses it. See its README.
