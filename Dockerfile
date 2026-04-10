FROM python:3.11-slim

WORKDIR /app

# Install system deps needed by weasyprint
RUN apt-get update && apt-get install -y \
    libpango-1.0-0 \
    libpangoft2-1.0-0 \
    libpangocairo-1.0-0 \
    libgdk-pixbuf-2.0-0 \
    libffi-dev \
    shared-mime-info \
    && rm -rf /var/lib/apt/lists/*

COPY web/backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY web/backend/ .
COPY ["Month YEAR - Body Masters.xlsx", "."]
COPY ["Month YEAR - Body Motions.xlsx", "."]
COPY ["Body Masters/", "Body Masters/"]
COPY ["Body Motions/", "Body Motions/"]

CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}"]
