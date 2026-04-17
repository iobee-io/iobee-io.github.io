CREATE TABLE IF NOT EXISTS lead_submissions (
  id UUID PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  segment TEXT NOT NULL,
  asset_count TEXT NOT NULL,
  message TEXT NOT NULL,
  source_url TEXT,
  user_agent TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  crm_status JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_lead_submissions_created_at ON lead_submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_lead_submissions_email ON lead_submissions (email);