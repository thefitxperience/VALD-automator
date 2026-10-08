-- Program change log
-- Run once in the Supabase SQL editor. Safe to re-run.
--
-- Records every INSERT, UPDATE and DELETE on `programs` (whatever made it: the app,
-- the Supabase dashboard, a script) with the row before and after. The data
-- cleanup of 2026-10-08 could only be reconstructed from payment files because
-- `approved_at` is not a history and nothing recorded dispatch-date or branch edits.

-- 1. When was a row last changed.
ALTER TABLE programs ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

CREATE OR REPLACE TRIGGER programs_updated_at
    BEFORE UPDATE ON programs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 2. Every change, with the full row before and after.
CREATE TABLE IF NOT EXISTS program_changes (
    id             BIGSERIAL PRIMARY KEY,
    changed_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    program_id     UUID        NOT NULL,
    action         TEXT        NOT NULL CHECK (action IN ('INSERT', 'UPDATE', 'DELETE')),
    gym            TEXT,
    client_name    TEXT,
    test_type      TEXT,
    test_date      DATE,
    changed_fields TEXT[],     -- UPDATE only: the columns whose value changed
    before         JSONB,      -- NULL for INSERT
    after          JSONB,      -- NULL for DELETE
    source         TEXT        -- API method + path when the change came through the app;
                               -- NULL = Supabase dashboard / SQL editor
);

CREATE INDEX IF NOT EXISTS idx_program_changes_program ON program_changes (program_id, changed_at);
CREATE INDEX IF NOT EXISTS idx_program_changes_time    ON program_changes (changed_at);

CREATE OR REPLACE FUNCTION log_program_change()
RETURNS TRIGGER AS $$
DECLARE
    b      JSONB;
    a      JSONB;
    fields TEXT[];
    r      programs%ROWTYPE;
BEGIN
    IF TG_OP <> 'INSERT' THEN b := to_jsonb(OLD) - 'updated_at'; END IF;
    IF TG_OP <> 'DELETE' THEN a := to_jsonb(NEW) - 'updated_at'; END IF;

    IF TG_OP = 'UPDATE' THEN
        SELECT array_agg(k ORDER BY k) INTO fields
        FROM jsonb_object_keys(a) AS k
        WHERE a -> k IS DISTINCT FROM b -> k;
        IF fields IS NULL THEN RETURN NULL; END IF;   -- saved with no real change
    END IF;

    IF TG_OP = 'DELETE' THEN r := OLD; ELSE r := NEW; END IF;

    INSERT INTO program_changes
        (program_id, action, gym, client_name, test_type, test_date, changed_fields, before, after, source)
    VALUES
        (r.id, TG_OP, r.gym, r.client_name, r.test_type, r.test_date, fields, b, a,
         NULLIF(concat_ws(' ', current_setting('request.method', true),
                               current_setting('request.path',   true)), ''));
    RETURN NULL;   -- AFTER trigger: return value is ignored
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER programs_change_log
    AFTER INSERT OR UPDATE OR DELETE ON programs
    FOR EACH ROW EXECUTE FUNCTION log_program_change();

ALTER TABLE program_changes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_all" ON program_changes;
CREATE POLICY "service_role_all" ON program_changes
    USING (true)
    WITH CHECK (true);

-- Useful queries
--   Everything that happened to one client's tests:
--     SELECT changed_at, action, changed_fields, before->>'dispatch_date' AS was, after->>'dispatch_date' AS now, source
--     FROM program_changes WHERE client_name = 'Faiz Elharby' ORDER BY changed_at;
--   Rows moved into or out of a month after it closed (e.g. September, after 1 Oct):
--     SELECT * FROM program_changes
--     WHERE changed_at >= '2026-10-01' AND 'dispatch_date' = ANY(changed_fields)
--       AND ((before->>'dispatch_date') LIKE '2026-09%' OR (after->>'dispatch_date') LIKE '2026-09%');
