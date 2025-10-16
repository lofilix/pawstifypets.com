# Supabase Setup Guide for Pawstify Landing Page

This guide will help you set up Supabase for email collection on the Pawstify landing page.

## Prerequisites

- Supabase account (free tier is sufficient)
- Access to SQL editor in Supabase dashboard

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign in or create account
3. Click "New Project"
4. Fill in:
   - **Name**: pawstify-landing
   - **Database Password**: (generate strong password, save it)
   - **Region**: Choose closest to your target audience
   - **Pricing Plan**: Free tier is fine for beta
5. Click "Create new project"
6. Wait 2-3 minutes for project to initialize

## Step 2: Create Database Table

1. Navigate to **SQL Editor** in left sidebar
2. Click "New Query"
3. Paste and run this SQL:

```sql
-- Create beta_signups table
CREATE TABLE beta_signups (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source TEXT,
  user_agent TEXT
);

-- Create index on email for faster lookups
CREATE INDEX idx_beta_signups_email ON beta_signups(email);

-- Create index on created_at for analytics
CREATE INDEX idx_beta_signups_created_at ON beta_signups(created_at DESC);
```

4. Click "Run" or press `Ctrl+Enter`
5. Verify table was created in **Table Editor** → `beta_signups`

## Step 3: Configure Row Level Security (RLS)

1. Still in SQL Editor, run:

```sql
-- Enable Row Level Security
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (anonymous users can sign up)
CREATE POLICY "Allow public inserts" ON beta_signups
  FOR INSERT TO anon
  WITH CHECK (true);

-- Allow service role to read (for admin/analytics)
CREATE POLICY "Allow service role to read" ON beta_signups
  FOR SELECT TO service_role
  USING (true);
```

2. This allows:
   - Anyone to insert (sign up)
   - Only your server (with service key) to read data
   - Prevents public from viewing other emails

## Step 4: Get API Credentials

1. Go to **Settings** → **API**
2. Find and copy these values:

   **Project URL:**
   ```
   https://xxxxxxxxxxxxx.supabase.co
   ```

   **anon public key:**
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

   **service_role key:** (click to reveal)
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

   ⚠️ **Important**: Keep service_role key secret! Never commit to git.

## Step 5: Configure Environment Variables

1. In your project root, create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

2. Replace with your actual values
3. **Never commit `.env.local` to git!**

## Step 6: Test the Connection

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000

3. Try signing up with a Gmail address

4. Check Supabase Dashboard:
   - Go to **Table Editor** → `beta_signups`
   - You should see your test email!

## Step 7: Verify Security

Test that RLS is working:

1. Try to read from table using anon key (should fail):
   ```javascript
   // In browser console
   const { data } = await supabase.from('beta_signups').select('*')
   console.log(data) // Should be null/empty
   ```

2. This is correct! Public shouldn't see emails.

## Viewing Signups (Admin)

### Option 1: Supabase Dashboard
- Go to **Table Editor** → `beta_signups`
- View all signups with timestamps

### Option 2: Export to CSV
- In Table Editor, click **Export** button
- Choose CSV format
- Analyze in Google Sheets or Excel

### Option 3: SQL Queries
```sql
-- Count total signups
SELECT COUNT(*) FROM beta_signups;

-- Signups per day
SELECT 
  DATE(created_at) as date,
  COUNT(*) as signups
FROM beta_signups
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Recent signups
SELECT email, created_at, source
FROM beta_signups
ORDER BY created_at DESC
LIMIT 10;
```

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in hosting platform:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL` (your domain)

2. Update CORS in Supabase (if needed):
   - **Settings** → **API** → **CORS**
   - Add your production domain

3. Test signup on production URL

## Troubleshooting

### "Missing env.NEXT_PUBLIC_SUPABASE_URL"
- Make sure `.env.local` exists in project root
- Restart dev server after creating/editing `.env.local`
- Check for typos in variable names

### "Failed to register"
- Check Supabase logs: **Logs** → **API**
- Verify RLS policies are correct
- Ensure table exists with correct column names

### "Email already registered"
- This is correct behavior (duplicate prevention)
- Delete test entries from Table Editor if needed

### Form not submitting
- Check browser console for errors
- Verify API route exists: `src/app/api/signup/route.ts`
- Test API directly: `curl -X POST http://localhost:3000/api/signup -H "Content-Type: application/json" -d '{"email":"test@gmail.com"}'`

## Next Steps

- Set up email notifications (optional)
- Create dashboard for viewing signups
- Export emails for beta invitations
- Integrate with email service (SendGrid, etc.)

## Security Checklist

- [x] RLS enabled on beta_signups table
- [x] Service role key not in git
- [x] Anon key only allows inserts
- [x] Email uniqueness enforced
- [x] Input validation on server
- [x] Rate limiting (consider adding)

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [RLS Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [API Reference](https://supabase.com/docs/reference/javascript)

---

**Need Help?** Check Supabase logs or reach out to project owner.

