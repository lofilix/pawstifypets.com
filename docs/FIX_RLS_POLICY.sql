-- Fix RLS Policy for beta_signups table
-- Run this in Supabase SQL Editor to allow public signups

-- First, drop existing policies if any
DROP POLICY IF EXISTS "Allow public inserts" ON beta_signups;
DROP POLICY IF EXISTS "Allow service role to read" ON beta_signups;

-- Recreate the insert policy for anonymous users
CREATE POLICY "Allow anonymous inserts"
ON beta_signups
FOR INSERT
TO anon
WITH CHECK (true);

-- Recreate the read policy for service role only
CREATE POLICY "Allow service role to read"
ON beta_signups
FOR SELECT
TO service_role
USING (true);

-- Verify RLS is enabled
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Display current policies (for verification)
SELECT schemaname, tablename, policyname, permissive, roles, cmd 
FROM pg_policies 
WHERE tablename = 'beta_signups';

