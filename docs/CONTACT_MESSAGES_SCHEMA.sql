-- Contact Messages Table Schema for Supabase
-- This table stores contact form submissions from the website

CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  source TEXT DEFAULT 'contact_form',
  user_agent TEXT,
  ip_address INET,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contact_messages_updated_at 
    BEFORE UPDATE ON contact_messages 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert contact messages
CREATE POLICY "Allow anonymous inserts"
ON contact_messages
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow service role to read all contact messages
CREATE POLICY "Allow service role to read"
ON contact_messages
FOR SELECT
TO service_role
USING (true);

-- Allow service role to update contact messages (for status changes)
CREATE POLICY "Allow service role to update"
ON contact_messages
FOR UPDATE
TO service_role
USING (true);

-- Allow service role to delete contact messages (for admin cleanup)
CREATE POLICY "Allow service role to delete"
ON contact_messages
FOR DELETE
TO service_role
USING (true);
