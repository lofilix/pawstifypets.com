# .cursor/rules/

This directory contains the detailed modular rule files for Pawstify’s Cursor AI agent.
Each file inherits its top-level guidance from **Pawstify Cursor Project Rules** and should be treated as authoritative for automated or manual development tasks.

---

## coding_rules.mdc

### Purpose
Define standards for coding style, frameworks, and component architecture.

### Stack & Frameworks
- **Language:** TypeScript (strict mode enabled)
- **Framework:** Next.js 14 with App Router
- **UI:** Tailwind CSS with tokens defined in `tailwind.config.ts`
- **Component Design:** Functional React components only; no class components.

### Rules
1. Use modern ES syntax (async/await, arrow functions, optional chaining).
2. Follow the **Design System** and **Tailwind Style Guide** for layout and spacing.
3. All components must be accessible (WCAG 2.1 AA):
   - Add `alt` text to every image.
   - Use semantic HTML tags.
   - Ensure visible focus states.
4. Maintain clear import structure:
   ```ts
   import type { ComponentProps } from 'react';
   import { Button } from '@/components/ui/button';
   ```
5. No inline styles unless dynamic or conditional.
6. Use `next/image` for all raster assets.
7. Each page component must export default function and include metadata for SEO.
8. Prefer modular architecture: keep components within feature folders.
9. Lint before committing: `npm run lint` must pass with no warnings.
10. Use the commit format: `type(scope): message — refs <doc#section>`.

---

## safety_rules.mdc

### Purpose
Ensure secure and stable development by preventing unsafe automation or destructive actions.

### Auto-Run Deny List
- `rm -rf` or any variant of file deletion on system paths.
- `git push --force` or branch rewrites.
- `npm install` on production/staging environments.
- `sudo` or OS-level package management commands.
- Secrets or tokens in logs, console, or commits.

### Sensitive Data
- Never log or expose Gmail tester lists, user tokens, or pet data.
- Use environment variables for all API keys and connection strings.

### Safety Practices
- Use branch protection for `main` and `release/*`.
- Run builds in containerized or ephemeral environments.
- Validate external API responses with Zod before saving to DB.
- Run tests before merging any PR.

---

## seo_rules.mdc

### Purpose
Maintain high SEO standards across the Pawstify landing page and web assets.

### Technical SEO
1. Use descriptive `<title>` and `<meta name="description">` tags.
2. Generate Open Graph (OG) and Twitter meta tags per page.
3. Include structured data (FAQPage, Organization, Product where relevant).
4. Always render H1 text on the server.
5. Keep one H1 per page; use H2/H3 hierarchy for subtopics.
6. Optimize images (compress & include `width`/`height`).
7. Avoid duplicate content; use canonical URLs.
8. Maintain Core Web Vitals within targets:
   - LCP < 2.5s
   - CLS < 0.1
   - TTI < 2s
9. Include alt text with contextually relevant keywords.
10. Verify schema validity using Google’s Rich Results Test before deploy.

### Content SEO
- Use natural, conversational tone for headings and paragraphs.
- Integrate keywords related to **pet care, digital vet records, and vaccination tracking**.
- Add FAQ section with common pet health management questions.

---

## release_rules.mdc

### Purpose
Standardize how the app is built, tested, and deployed via Google Play Console.

### Pre-Release Checklist
1. Increment app version in `app/build.gradle`.
2. Generate `.aab` bundle using:
   ```bash
   ./gradlew bundleRelease
   ```
3. Verify internal test track configuration (no production yet).
4. Upload `.aab` to Play Console internal test.
5. Add testers via Gmail addresses and confirm opt-in.
6. Wait 48–72 hours for stability and feedback.
7. Monitor Play Console Pre-launch Reports.
8. Use Crashlytics to track crash-free sessions (target > 99%).
9. Prepare changelog with date and commit hash.
10. Promote to closed test only after verified feedback.

### Rollback Procedure
- If critical crash rate > 1%, pause rollout immediately.
- Notify human maintainer.
- Revert to previous stable `.aab` stored in `/releases/`.

### Deployment Tools
- `fastlane supply` or `gradle-play-publisher` for automation.
- Ensure `.env` and signing keys are securely stored and excluded from repo.

### Post-Release Verification
- Validate live app page metadata (screenshots, description, title).
- Confirm that testers receive push notification if integrated.
- Re-check analytics and sign-up forms.

---

**End of .cursor/rules/**

