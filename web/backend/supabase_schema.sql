-- Run this in your Supabase SQL editor to set up the database

CREATE TABLE IF NOT EXISTS programs (
    id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    gym             TEXT NOT NULL CHECK (gym IN ('Body Motions', 'Body Masters')),
    branch          TEXT,
    client_id       TEXT,
    client_name     TEXT NOT NULL,
    test_type       TEXT NOT NULL,   -- 'upper' | 'lower' | 'full'
    movements       INTEGER,
    test_date       DATE NOT NULL,
    check_status    TEXT NOT NULL DEFAULT 'NEW',   -- 'NEW' | 'UPDATED'
    trainer_name    TEXT,
    dispatch_date   DATE,
    approved        BOOLEAN DEFAULT FALSE,
    approved_at     TIMESTAMPTZ,
    ignored         BOOLEAN DEFAULT FALSE,
    program_pdf_url TEXT,
    results_pdf_url TEXT,
    notes           TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE (gym, client_name, test_type, test_date)
);

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
