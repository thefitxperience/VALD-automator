"""
Backfill asymmetry_values on existing Supabase programs records using the
local *_asymmetry_history.json log files.

Usage (from the repo root with the .venv activated or using the venv python):
    "/Users/andyayas/VALD Automator/.venv/bin/python3" backfill_asymmetry_values.py

Requires SUPABASE_URL and SUPABASE_SERVICE_KEY in environment or a .env file.
"""

import json
import os
import sys
from pathlib import Path

# Allow running without the backend on sys.path
ROOT = Path(__file__).parent

# Load .env if present (try repo root then web/backend)
for env_file in [ROOT / ".env", ROOT / "web" / "backend" / ".env"]:
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, _, v = line.partition("=")
                os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))
        break

from supabase import create_client

SUPABASE_URL = os.environ["SUPABASE_URL"]
SUPABASE_KEY = os.environ["SUPABASE_SERVICE_KEY"]
sb = create_client(SUPABASE_URL, SUPABASE_KEY)

# Gym name → history file (relative to ROOT)
GYMS = {
    "Body Masters": ROOT / "Body Masters_asymmetry_history.json",
    "Body Motions": ROOT / "Body Motions_asymmetry_history.json",
}


def fetch_all_programs(gym: str) -> list[dict]:
    """Fetch all approved programs for a gym from Supabase (paginated)."""
    rows = []
    page = 1000
    offset = 0
    while True:
        res = (
            sb.table("programs")
            .select("id,client_name,test_type,test_date,asymmetry_values")
            .eq("gym", gym)
            .range(offset, offset + page - 1)
            .execute()
        )
        batch = res.data or []
        rows.extend(batch)
        if len(batch) < page:
            break
        offset += page
    return rows


def main():
    total_updated = 0
    total_skipped = 0
    total_missing = 0

    for gym, history_path in GYMS.items():
        if not history_path.exists():
            print(f"[{gym}] History file not found: {history_path}")
            continue

        with open(history_path) as f:
            history: dict = json.load(f)

        print(f"\n[{gym}] Loaded {len(history)} patients from history file")

        # Fetch all Supabase program rows for this gym
        programs = fetch_all_programs(gym)
        print(f"[{gym}] Fetched {len(programs)} programs from Supabase")

        # Build a lookup: (client_name, test_type, date_str) -> row
        lookup: dict[tuple, dict] = {}
        for row in programs:
            key = (
                row["client_name"].strip(),
                row["test_type"],
                str(row["test_date"])[:10],
            )
            lookup[key] = row

        for patient_name, by_type in history.items():
            patient_name = patient_name.strip()
            for test_type, tests in by_type.items():
                for entry in tests:
                    date_str = str(entry.get("test_date", ""))[:10]
                    asymmetries: dict = entry.get("asymmetries", {})
                    if not asymmetries:
                        continue

                    key = (patient_name, test_type, date_str)
                    row = lookup.get(key)

                    if row is None:
                        total_missing += 1
                        continue

                    # Skip if already populated
                    if row.get("asymmetry_values"):
                        total_skipped += 1
                        continue

                    # Update Supabase
                    sb.table("programs").update(
                        {"asymmetry_values": asymmetries}
                    ).eq("id", row["id"]).execute()

                    print(f"  Updated: {patient_name} | {test_type} | {date_str}")
                    total_updated += 1

    print(f"\nDone. Updated={total_updated}, Already populated={total_skipped}, No Supabase match={total_missing}")


if __name__ == "__main__":
    main()
