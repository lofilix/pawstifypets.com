# Deployment Guide for Pawstify Landing Page

Complete guide for deploying the Pawstify landing page to production.

## Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript compilation passes (`npx tsc --noEmit`)
- [ ] ESLint passes with no errors (`npm run lint`)
- [ ] Production build succeeds (`npm run build`)
- [ ] No console.log statements in production code
- [ ] All TODOs resolved or documented

### Testing
- [ ] Manual testing on desktop (Chrome, Firefox, Safari, Edge)
- [ ] Manual testing on mobile (iOS Safari, Chrome Android)
- [ ] Form submission works correctly
- [ ] Email validation functions as expected
- [ ] All sections visible and formatted correctly
- [ ] FAQ accordions work
- [ ] Images load correctly (or placeholders display)

### SEO & Performance
- [ ] Lighthouse score ≥ 90 (all categories)
- [ ] Meta tags verified (view page source)
- [ ] Open Graph tags tested (opengraph.xyz)
- [ ] Structured data validated (Google Rich Results Test)
- [ ] Sitemap.xml accessible
- [ ] Robots.txt configured
- [ ] Images optimized (WebP/AVIF)

### Security
- [ ] Environment variables configured (not in code)
- [ ] Supabase RLS policies enabled
- [ ] No sensitive data in client code
- [ ] HTTPS enabled (will be automatic on most platforms)
- [ ] CSP headers configured (optional but recommended)

### Content
- [ ] All copy is final and approved
- [ ] Images are real (not placeholders) or clearly marked as coming soon
- [ ] Links work and point to correct destinations
- [ ] Contact information is correct
- [ ] Privacy policy exists (if collecting emails)

## Deployment Platforms

### Option 1: Vercel (Recommended)

**Why Vercel:**
- Built for Next.js (same company)
- Automatic deployments from Git
- Edge network for fast load times
- Free SSL certificates
- Free tier includes 100GB bandwidth

**Steps:**

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub/GitLab/Bitbucket

2. **Import Project**
   - Click "New Project"
   - Connect your Git repository
   - Select `pawstifyweb` repository

3. **Configure Project**
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: (leave default)

4. **Environment Variables**
   Add these in Vercel dashboard:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Visit your deployment URL

6. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., pawstify.com)
   - Update DNS records as instructed
   - SSL automatically provisioned

### Option 2: Netlify

**Steps:**

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up

2. **New Site from Git**
   - Click "Add new site" → "Import an existing project"
   - Connect repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Base directory: (leave empty)

4. **Environment Variables**
   Site settings → Environment variables → Add variables

5. **Deploy**

### Option 3: AWS Amplify

**Steps:**

1. **AWS Account Required**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)

2. **New App** → Host web app
   - Connect repository
   - Configure build settings
   - Add environment variables
   - Deploy

### Option 4: Self-Hosted (VPS)

**Requirements:**
- VPS with Node.js 18+ (DigitalOcean, Linode, etc.)
- Domain name
- SSL certificate (Let's Encrypt)

**Steps:**

```bash
# On your server
git clone your-repo
cd pawstifyweb
npm install
npm run build

# Set environment variables
nano .env.local
# Add your Supabase credentials

# Start with PM2
npm install -g pm2
pm2 start npm --name "pawstify" -- start
pm2 save
pm2 startup

# Configure Nginx reverse proxy
# Point to localhost:3000
```

## Post-Deployment Verification

### Immediate Checks (First 15 minutes)

1. **Functionality**
   - [ ] Site loads correctly
   - [ ] All sections visible
   - [ ] Forms submit successfully
   - [ ] Email reaches Supabase database

2. **Performance**
   - [ ] Run Lighthouse audit
   - [ ] Check load time from different locations (webpagetest.org)
   - [ ] Verify images load quickly

3. **SEO**
   - [ ] View page source, check meta tags
   - [ ] Test social preview (Facebook Sharing Debugger, Twitter Card Validator)
   - [ ] Google Rich Results Test
   - [ ] Submit sitemap to Google Search Console

4. **Cross-Browser**
   - [ ] Test in Chrome
   - [ ] Test in Firefox
   - [ ] Test in Safari
   - [ ] Test on mobile devices

### First 24 Hours

1. **Monitor Errors**
   - Check Vercel/Netlify logs for errors
   - Monitor Supabase logs
   - Set up error tracking (optional: Sentry)

2. **Analytics Setup**
   - Google Analytics or Plausible
   - Track page views
   - Track form submissions
   - Set up conversion goals

3. **Test From Different Locations**
   - Use VPN to test from different countries
   - Check load times
   - Verify Supabase connectivity

### First Week

1. **Performance Monitoring**
   - Check Core Web Vitals in Google Search Console
   - Monitor page speed
   - Review user behavior (if analytics set up)

2. **A/B Testing** (Optional)
   - Test different headlines
   - Test CTA button text
   - Measure conversion rates

## Rollback Procedure

If something goes wrong:

### Vercel Rollback
1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Netlify Rollback
1. Go to Deploys tab
2. Find previous deploy
3. Click "Publish deploy"

### Manual Rollback
```bash
git revert HEAD
git push origin main
# Automatic redeploy will trigger
```

## Domain Configuration

### DNS Settings

For `pawstify.com`:

```
A     @     76.76.21.21 (Vercel IP)
CNAME www   cname.vercel-dns.com
```

For other platforms, follow their DNS instructions.

### SSL Certificate

- Vercel: Automatic
- Netlify: Automatic
- Self-hosted: Use Let's Encrypt

```bash
# Let's Encrypt with Certbot
sudo certbot --nginx -d pawstify.com -d www.pawstify.com
```

## Monitoring & Maintenance

### Tools

1. **Uptime Monitoring**
   - UptimeRobot (free)
   - Pingdom
   - StatusCake

2. **Performance Monitoring**
   - Google PageSpeed Insights
   - WebPageTest
   - Lighthouse CI

3. **Error Tracking**
   - Sentry (optional)
   - LogRocket (optional)
   - Built-in platform logs

### Regular Checks

**Weekly:**
- [ ] Check for signup form submissions
- [ ] Review error logs
- [ ] Monitor performance metrics

**Monthly:**
- [ ] Update dependencies (`npm update`)
- [ ] Review and optimize images
- [ ] Check for security updates
- [ ] Backup Supabase data

## Troubleshooting

### Site won't load
- Check deployment logs for build errors
- Verify environment variables are set
- Check domain DNS configuration

### Form submissions fail
- Check Supabase connection
- Verify RLS policies
- Check API route logs
- Test API endpoint directly

### Slow load times
- Run Lighthouse audit
- Optimize images further
- Check CDN configuration
- Enable compression

### SEO issues
- Verify meta tags in page source
- Check robots.txt is accessible
- Submit sitemap to Google Search Console
- Use Google Rich Results Test

## Production Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...
SUPABASE_SERVICE_ROLE_KEY=eyJhbG... (secret!)

# Site Config
NEXT_PUBLIC_SITE_URL=https://pawstify.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Error Tracking (optional)
SENTRY_DSN=https://xxx@sentry.io/xxx
```

## Success Metrics

### Week 1 Targets
- [ ] 0 critical errors
- [ ] Lighthouse score ≥ 90
- [ ] 50+ email signups
- [ ] < 3 second load time

### Month 1 Targets
- [ ] 500+ email signups
- [ ] 90%+ uptime
- [ ] Indexed by Google
- [ ] Featured in Google search results

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Supabase Production](https://supabase.com/docs/guides/platform/going-into-prod)

---

**Ready to launch! 🚀**

