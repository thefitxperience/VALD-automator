-- Run this in your Supabase SQL editor to set up the database

CREATE TABLE IF NOT EXISTS programs (
    id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    gym          TEXT NOT NULL CHECK (gym IN ('Body Motions', 'Body Masters')),
    branch       TEXT,
    client_id    TEXT,
    client_name  TEXT NOT NULL,
    test_type    TEXT NOT NULL,   -- 'upper' | 'lower' | 'full'
    movements    INTEGER,
    test_date    DATE NOT NULL,
    check_status TEXT NOT NULL DEFAULT 'NEW',   -- 'NEW' | 'UPDATED'
    trainer_name TEXT,
    dispatch_date DATE,
    approved     BOOLEAN DEFAULT FALSE,
    approved_at  TIMESTAMPTZ,
    ignored      BOOLEAN DEFAULT FALSE,
    created_at   TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE (gym, client_name, test_type, test_date)
);

-- Drop removed columns (run once on existing DB):
-- ALTER TABLE programs DROP COLUMN IF EXISTS program_pdf_url;
-- ALTER TABLE programs DROP COLUMN IF EXISTS results_pdf_url;
-- ALTER TABLE programs DROP COLUMN IF EXISTS notes;

-- Speed up report queries
CREATE INDEX IF NOT EXISTS idx_programs_gym_dispatch
    ON programs (gym, approved, dispatch_date);

-- Migration: add ignored column if upgrading from earlier version
-- ALTER TABLE programs ADD COLUMN IF NOT EXISTS ignored BOOLEAN DEFAULT FALSE;

-- Enable Row Level Security and allow all access via service key
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service_role_all" ON programs
    USING (true)
    WITH CHECK (true);

-- Storage bucket for PDFs
-- Run this in the Supabase dashboard under Storage → New Bucket:
--   Name: program-pdfs
--   Public: true (so PDF URLs are directly accessible)

-- Trainers: source of truth for all trainer data (replaces trainer_overrides)
CREATE TABLE IF NOT EXISTS trainers (
    id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    gym        TEXT NOT NULL CHECK (gym IN ('Body Motions', 'Body Masters')),
    branch     TEXT NOT NULL,
    name       TEXT NOT NULL,
    whatsapp   TEXT NOT NULL DEFAULT '',
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE (gym, branch, name)
);

-- Automatically update updated_at on any row change:
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

CREATE OR REPLACE TRIGGER trainers_updated_at
    BEFORE UPDATE ON trainers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

ALTER TABLE trainers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service_role_all" ON trainers
    USING (true)
    WITH CHECK (true);

-- Drop old trainer_overrides table if still present:
-- DROP TABLE IF EXISTS trainer_overrides;


-- ── Bodydot tests ─────────────────────────────────────────────────────────
-- Stores the trainer assignment + approval/sent state for Bodydot measurement
-- sessions. The tests themselves live in the Bodydot API (which has no trainer
-- and no approval state) — this table is where those workflow fields live.
--
-- Only tests you act on are stored (one row per Bodydot session). Report
-- Valid/Invalid totals are pulled live from the Bodydot API at report time;
-- the per-trainer breakdown + data sheet come from the APPROVED rows here.
CREATE TABLE IF NOT EXISTS bodydot_tests (
    id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    gym           TEXT NOT NULL CHECK (gym IN ('Body Motions', 'Body Masters', 'Body Coach')),
    org_id        TEXT NOT NULL,               -- Bodydot organizationId
    client_id     TEXT NOT NULL,               -- Bodydot member id
    client_name   TEXT NOT NULL,
    session_id    TEXT NOT NULL,               -- Bodydot measurement session id (natural key)
    test_date     DATE NOT NULL,               -- session createdAt UTC calendar date
    valid         BOOLEAN,                     -- MAJORITY rule at approve time (analyzed > not-analyzed)
    real_client_id TEXT,                        -- the gym's own client id (not Bodydot's) shown in the report
    trainer_name  TEXT,                        -- NULL = missing/none; free-text allowed (may not be in trainers table)
    approved      BOOLEAN DEFAULT FALSE,
    approved_at   TIMESTAMPTZ,
    sent          BOOLEAN DEFAULT FALSE,       -- program generated / sent to client
    dispatch_date DATE,
    ignored       BOOLEAN DEFAULT FALSE,
    created_at    TIMESTAMPTZ DEFAULT NOW(),
    updated_at    TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE (session_id)
);

CREATE INDEX IF NOT EXISTS idx_bodydot_gym_date
    ON bodydot_tests (gym, approved, test_date);

CREATE OR REPLACE TRIGGER bodydot_tests_updated_at
    BEFORE UPDATE ON bodydot_tests
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

ALTER TABLE bodydot_tests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service_role_all" ON bodydot_tests
    USING (true)
    WITH CHECK (true);
