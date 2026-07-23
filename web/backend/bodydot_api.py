"""
Bodydot API Service (BAS) client — server side.

The browser talks to BAS through a Cloudflare CORS proxy; the backend talks to
the production API (https://api.bdot.im/v1) directly. Same OAuth client creds.

Key responsibilities:
  • OAuth client-credentials token (cached until expiry)
  • Rate-limit-safe GET: honours 429 `Retry-After`, and proactively waits when
    `X-RateLimit-Remaining` hits zero (limit is 120/window). NEVER silently drops
    a request — that is what caused an undercount during investigation.
  • Validity rule + same-day dedup used by the report.

Validity ("MAJORITY" rule, verified against real reports):
  a measurement session is VALID if its Analyzed step-results outnumber the
  non-analyzed ones (Captured / Pending / Error / Canceled / Deleted). Only
  `Analyzed` carries real measurement data.

Same-day dedup: multiple sessions for one client on the same calendar day (the
UTC date the site shows) collapse to the LATEST session (a failed attempt + its
redo count once).
"""
import os
import time
import logging
import threading
import urllib.request
import urllib.parse
import urllib.error
import json
from datetime import datetime, timezone

log = logging.getLogger("bodydot_api")

BAS_BASE = os.environ.get("BODYDOT_API_BASE", "https://api.bdot.im/v1")
# Base64 of "<clientId>:<clientSecret>". Already public (ships in the web bundle);
# overridable via env for rotation.
BAS_CREDS = os.environ.get(
    "BODYDOT_CREDS",
    "YmRvdF94NjI2cmg1N2VzYnh0N2pqdTZidTpmOTBkYzg5N2U3NTk2MGY0OTk1"
    "OGI5YTIwZTE2ZDg4ODI1MzBkNGI0MGVmY2VkZjYzYmU5ZTFlNjc5MjdlMGVk",
)

# org id → gym name used across the app / report templates
ORG_TO_GYM = {
    "bf9ffaec-d3ed-4742-bce9-945f619ea1bc": "Body Motions",
    "1627c00e-e275-4356-91ae-6f85127bd21c": "Body Masters",
    "ebce917d-1c31-4516-8396-64283b4cbeaa": "Body Coach",
}
GYM_TO_ORG = {v: k for k, v in ORG_TO_GYM.items()}

# Gyms that have a report template (Body Coach has no monthly report).
REPORT_GYMS = ("Body Motions", "Body Masters")

# Bodydot runs at a single branch per gym — the report's data-sheet / roster branch.
GYM_TO_BRANCH = {
    "Body Motions": "RUH - Al Sahafa",
    "Body Masters": "RUH - Al Aarid",
}

# Ignore every Bodydot test before this date everywhere (report sweep + page).
# Data before the rollout is excluded; bump this if the start date changes.
from datetime import date as _date
BODYDOT_START_DATE = _date(2026, 5, 15)

_tok = {"value": None, "expiry": 0.0}
_tok_lock = threading.Lock()


def _now() -> float:
    return time.time()


def _get_token() -> str:
    with _tok_lock:
        if _tok["value"] and _now() < _tok["expiry"] - 60:
            return _tok["value"]
        data = b"grant_type=client_credentials"
        req = urllib.request.Request(
            f"{BAS_BASE}/oauth/token", data=data,
            headers={"Authorization": f"Basic {BAS_CREDS}",
                     "Content-Type": "application/x-www-form-urlencoded",
                     "User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as r:
            payload = json.load(r)
        _tok["value"] = payload["access_token"]
        _tok["expiry"] = _now() + int(payload.get("expires_in", 3600))
        return _tok["value"]


def _get(path: str, tries: int = 6):
    """GET {BAS_BASE}{path} as JSON, resilient to throttling. Raises on give-up."""
    last_err = None
    for attempt in range(tries):
        try:
            req = urllib.request.Request(
                f"{BAS_BASE}{path}",
                headers={"Authorization": f"Bearer {_get_token()}",
                         "User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=45) as r:
                body = json.load(r)
                # Proactively pause when we've drained the window.
                remaining = r.headers.get("X-RateLimit-Remaining")
                reset = r.headers.get("X-RateLimit-Reset")
                if remaining is not None and reset is not None:
                    try:
                        if int(remaining) <= 1:
                            wait = max(0.0, int(reset) - _now()) + 0.5
                            if wait > 0:
                                log.info("bodydot rate window drained; sleeping %.1fs", wait)
                                time.sleep(min(wait, 65))
                    except ValueError:
                        pass
                return body
        except urllib.error.HTTPError as e:
            last_err = e
            if e.code == 401:            # token expired/revoked → force refresh
                with _tok_lock:
                    _tok["value"] = None
            elif e.code == 429:          # throttled → honour Retry-After
                retry_after = e.headers.get("Retry-After")
                wait = float(retry_after) if (retry_after or "").isdigit() else 2.0 * (attempt + 1)
                time.sleep(min(wait, 65))
            elif 500 <= e.code < 600:
                time.sleep(1.5 * (attempt + 1))
            else:
                raise
        except Exception as e:           # network hiccup → backoff & retry
            last_err = e
            time.sleep(1.0 * (attempt + 1))
    raise RuntimeError(f"Bodydot GET {path} failed after {tries} tries: {last_err}")


# ── Endpoints ───────────────────────────────────────────────────────────────

def list_clients(org_id: str) -> list[dict]:
    data = _get(f"/clients?organizationId={urllib.parse.quote(org_id)}")
    return data if isinstance(data, list) else (data or {}).get("data", [])


def list_sessions(client_id: str) -> list[dict]:
    data = _get(f"/clients/{client_id}/measurement-sessions")
    lst = data if isinstance(data, list) else (data or {}).get("data", [])
    lst.sort(key=lambda s: s.get("createdAt", ""), reverse=True)  # newest first
    return lst


def get_session(client_id: str, session_id: str) -> dict:
    return _get(f"/clients/{client_id}/measurement-sessions/{session_id}")


# ── Validity + dedup ──────────────────────────────────────────────────────────

def session_date(iso: str):
    """Calendar date for an ISO 'createdAt', using the raw UTC date shown by the
    Bodydot site (a 23:49Z test reads as that same day, not the next KSA day)."""
    if not iso:
        return None
    return datetime.fromisoformat(iso.replace("Z", "+00:00")).astimezone(timezone.utc).date()


def session_step_counts(full_session: dict) -> tuple[int, int]:
    """(analyzed, non_analyzed) step-result counts for a full session object."""
    analyzed = total = 0
    for seq in full_session.get("sequences", []):
        for step in seq.get("stepResults", []):
            total += 1
            if step.get("status") == "Analyzed":
                analyzed += 1
    return analyzed, total - analyzed


def is_valid_session(full_session: dict) -> bool:
    """MAJORITY rule: valid iff Analyzed steps outnumber the rest (and >0)."""
    analyzed, non_analyzed = session_step_counts(full_session)
    return analyzed > 0 and analyzed > non_analyzed


def dedup_latest_per_day(sessions: list[dict]) -> list[dict]:
    """From session summaries (need id + createdAt), keep the latest per day."""
    by_day: dict = {}
    for s in sessions:
        d = session_date(s.get("createdAt"))
        if d is None:
            continue
        cur = by_day.get(d)
        if cur is None or s.get("createdAt", "") > cur.get("createdAt", ""):
            by_day[d] = s
    return list(by_day.values())


# ── Month sweep (live Valid/Invalid totals for the report) ────────────────────

def _month_bounds(year: int, month: int):
    from datetime import date
    start = date(year, month, 1)
    end = date(year + 1, 1, 1) if month == 12 else date(year, month + 1, 1)
    return start, end  # [start, end)


def _summary_for_range(org_id: str, start, end, max_workers: int = 4) -> dict:
    """
    Walk every client in the org, collect sessions with a UTC date in [start, end),
    dedup to the latest per client/day, fetch each full session and classify by the
    MAJORITY rule. Returns {total, valid, invalid, tests:[...]}.

    Fails loud: if any client's data can't be fetched it raises, rather than
    silently undercounting (the bug that hid 3 tests during investigation).
    """
    from concurrent.futures import ThreadPoolExecutor
    clients = list_clients(org_id)

    def per_client(c):
        cid = c["id"]
        sessions = list_sessions(cid)
        # Clamp to the Bodydot start date so pre-rollout tests never count.
        lo = max(start, BODYDOT_START_DATE)
        in_range = [s for s in sessions
                    if (d := session_date(s.get("createdAt"))) and lo <= d < end]
        if not in_range:
            return []
        rows = []
        for s in dedup_latest_per_day(in_range):
            full = get_session(cid, s["id"])
            analyzed, non_analyzed = session_step_counts(full)
            rows.append({
                "client_id": cid,
                "client_name": c.get("name"),
                "session_id": s["id"],
                "created_at": s.get("createdAt"),
                "test_date": str(session_date(s.get("createdAt"))),
                "analyzed": analyzed,
                "total": analyzed + non_analyzed,
                "valid": analyzed > 0 and analyzed > non_analyzed,
            })
        return rows

    tests: list[dict] = []
    with ThreadPoolExecutor(max_workers=max_workers) as ex:
        for rows in ex.map(per_client, clients):
            tests.extend(rows)

    valid = sum(1 for t in tests if t["valid"])
    return {"total": len(tests), "valid": valid, "invalid": len(tests) - valid, "tests": tests}


def month_test_summary(org_id: str, year: int, month: int, max_workers: int = 4) -> dict:
    """Report basis: all tests in the given calendar month."""
    start, end = _month_bounds(year, month)
    return _summary_for_range(org_id, start, end, max_workers)


def recent_summary(org_id: str, days: int = 10, max_workers: int = 4) -> dict:
    """Page basis: the last `days` days, inclusive of today (UTC)."""
    from datetime import datetime, timedelta, timezone
    today = datetime.now(timezone.utc).date()
    start = today - timedelta(days=days - 1)
    end = today + timedelta(days=1)   # exclusive
    return _summary_for_range(org_id, start, end, max_workers)
