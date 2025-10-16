# Quick Start Guide — Pawstify Landing Page

Get up and running in 10 minutes!

## ⚡ Fast Setup

### Step 1: Install Dependencies (2 minutes)

```bash
cd c:\Projects\pawstifyweb
npm install
```

This installs all required packages (Next.js, React, TypeScript, Tailwind, Supabase).

### Step 2: Set Up Supabase (5 minutes)

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Name: pawstify-landing
   - Wait 2 minutes for setup

2. **Create Database Table**
   - Go to SQL Editor
   - Run this SQL:
   ```sql
   CREATE TABLE beta_signups (
     id BIGSERIAL PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     source TEXT,
     user_agent TEXT
   );

   ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

   CREATE POLICY "Allow public inserts" ON beta_signups
     FOR INSERT TO anon WITH CHECK (true);
   ```

3. **Get Your Credentials**
   - Go to Settings → API
   - Copy these 3 values:
     - Project URL
     - anon public key
     - service_role key (click to reveal)

### Step 3: Configure Environment (1 minute)

Create `.env.local` file in project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Replace with your actual Supabase values from Step 2.

### Step 4: Start Development Server (1 minute)

```bash
npm run dev
```

Open http://localhost:3000 in your browser!

### Step 5: Test It Works (1 minute)

1. Visit http://localhost:3000
2. Enter a Gmail address in the form
3. Click "Join Early Access 🐾"
4. Check Supabase Dashboard → Table Editor → beta_signups
5. Your email should appear there!

---

## 🎉 You're Ready!

The landing page is now running locally. 

### What You See:
- ✅ Hero section with signup form
- ✅ Problem section (3 pain points)
- ✅ Solution section (3 features)
- ✅ Demo visuals (placeholder images)
- ✅ Testimonials
- ✅ FAQ section
- ✅ Final CTA
- ✅ Footer

### What Works:
- ✅ Email signup form (Gmail validation)
- ✅ Form submission to Supabase
- ✅ Success/error messages
- ✅ Responsive design
- ✅ Accessibility features

---

## 📝 Next Steps

### 1. Replace Placeholder Images

The page currently references images that don't exist yet. You need:

```
public/images/
├── pawstify-hero.png     (448x896px) - App mockup
├── vaccine-card.png      (192x192px) - Feature 1
├── reminders.png         (192x192px) - Feature 2
├── prescriptions.png     (192x192px) - Feature 3
├── dashboard.png         (288x576px) - Screenshot 1
├── upload.png            (288x576px) - Screenshot 2
├── calendar.png          (288x576px) - Screenshot 3
├── og-image.jpg          (1200x630px) - Social preview
└── logo.png              (512x512px) - Branding
```

**See `public/images/README.md` for detailed specs.**

Until then, images will show broken links (but functionality works).

### 2. Customize Content

Edit these files to customize:
- `src/components/Hero.tsx` - Headline and CTA
- `src/components/Problem.tsx` - Pain points
- `src/components/Solution.tsx` - Feature cards
- `src/components/Testimonials.tsx` - User quotes
- `src/components/FAQ.tsx` - Questions and answers

### 3. Review & Test

```bash
# Check for code issues
npm run lint

# Build for production
npm run build

# Test production build
npm run start
```

### 4. Deploy to Production

When ready:
1. Push code to GitHub
2. Connect to Vercel (recommended)
3. Add environment variables in Vercel
4. Deploy!

See `docs/DEPLOYMENT.md` for complete guide.

---

## 🆘 Common Issues

### "Module not found" error
```bash
rm -rf node_modules .next
npm install
```

### "Missing env variable" error
- Check `.env.local` exists in project root
- Restart dev server after creating `.env.local`
- Variable names must be exact (case-sensitive)

### Form doesn't submit
- Check browser console for errors
- Verify Supabase credentials in `.env.local`
- Check Supabase project is running
- Test API: http://localhost:3000/api/signup

### Images don't load
- This is expected! Add images to `public/images/`
- Or use placeholders from placeholder.com temporarily

---

## 📚 Full Documentation

For detailed information:
- **README.md** - Complete project overview
- **docs/DEVELOPMENT.md** - Development workflow
- **docs/SUPABASE_SETUP.md** - Database setup details
- **docs/DEPLOYMENT.md** - Production deployment
- **IMPLEMENTATION_SUMMARY.md** - What was built

---

## 🎯 Quick Commands

```bash
npm run dev          # Start development (port 3000)
npm run build        # Build for production
npm run start        # Run production build
npm run lint         # Check code quality
npm run test:e2e     # Run E2E tests
```

---

**That's it! You're all set to start developing.** 🐾

For questions, check the documentation in `/docs` folder.

