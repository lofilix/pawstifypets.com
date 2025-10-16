# Changelog

All notable changes to the Pawstify Landing Page will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.9.1] - 2025-10-15

### Security
- Updated Next.js from 14.2.18 to 14.2.33 to fix critical vulnerabilities:
  - **CRITICAL**: Authorization Bypass in Middleware (CVE score 9.1)
  - **MODERATE**: SSRF via Improper Redirect Handling (CVE score 6.5)
  - **MODERATE**: Cache Key Confusion for Image Optimization (CVE score 6.2)
  - **MODERATE**: DoS with Server Actions (CVE score 5.3)
  - **MODERATE**: Content Injection for Image Optimization (CVE score 4.3)
  - All vulnerabilities now resolved

### Added
- Initial Next.js 14 project setup with TypeScript
- Tailwind CSS configuration with Pawstify brand tokens
- Root layout with comprehensive SEO metadata
- Hero section with email signup form
- Problem section highlighting user pain points
- Solution section with feature cards
- Demo visuals carousel section
- Testimonials from early testers
- FAQ section with accessible accordion
- Final CTA section
- Footer with links
- Supabase integration for email collection
- API route for beta signup (`/api/signup`)
- JSON-LD structured data (FAQPage, Organization, MobileApplication)
- Reusable UI components (Button, Input, Section)
- Form validation for Gmail addresses
- Client-side email validation
- Server-side sanitization and validation
- Accessibility features (WCAG 2.1 AA)
- Responsive mobile-first design
- Error handling and user feedback
- Loading states for form submissions
- Success messages for signups
- Environment variable configuration
- ESLint configuration
- Project documentation (README, CHANGELOG)
- Cursor AI rules files (coding, safety, SEO, release)

### Technical Details
- **Stack**: Next.js 14.2.18, React 18.3.1, TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.4.1
- **Backend**: Supabase 2.39.3
- **Build**: Production-ready with optimizations
- **SEO**: Complete meta tags, Open Graph, structured data
- **Performance**: Optimized images, fonts, and assets

### References
- cursor_project_config.md
- pawstify_cursor_project_rules.md
- pawstify_landingpage_seo_ready.md
- pawstify_tailwind_styleguide.md
- PAWSTIFY_BETA_LAUNCH_GUIDE.md

## [Unreleased]

### Planned
- Actual app screenshots to replace placeholders
- Analytics integration (Google Tag Manager or Plausible)
- A/B testing setup for headlines and CTAs
- Multi-language support (i18n)
- Blog section for SEO content
- Video demo on hero section
- Testimonial carousel with photos
- Live chat support integration
- Newsletter subscription
- Social media integration
- Privacy policy page
- Terms of service page
- Contact page with form

---

**Note**: This is a living document. Update after each significant change or release.

