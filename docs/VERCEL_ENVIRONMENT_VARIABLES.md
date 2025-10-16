# Vercel Environment Variables Setup

## Required Environment Variables

Add these environment variables in your Vercel project settings:

### **Production Environment Variables**

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://pawstifypets.com

# Google Analytics (Optional - add when ready)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form (Optional - for email notifications)
CONTACT_EMAIL=hellopawstify@gmail.com
```

## How to Add Environment Variables in Vercel:

1. **Go to your project dashboard in Vercel**
2. **Click on "Settings" tab**
3. **Click on "Environment Variables" in the sidebar**
4. **Add each variable:**
   - **Name**: The variable name (e.g., `NEXT_PUBLIC_SUPABASE_URL`)
   - **Value**: The actual value
   - **Environment**: Select "Production" (and "Preview" if you want)
5. **Click "Save"**

## Important Notes:

- **NEXT_PUBLIC_*** variables are exposed to the browser
- **SUPABASE_SERVICE_ROLE_KEY** should be kept secret (no NEXT_PUBLIC_ prefix)
- **NEXT_PUBLIC_SITE_URL** should be set to `https://pawstifypets.com`
- Make sure to add these to **Production** environment

## After Adding Variables:

1. **Redeploy** your project (Vercel will do this automatically)
2. **Test** the contact form to ensure Supabase connection works
3. **Verify** all features work in production

## Security Checklist:

- ✅ Supabase keys are properly configured
- ✅ Service role key is not exposed to browser
- ✅ Site URL is correctly set
- ✅ No sensitive data in public variables
