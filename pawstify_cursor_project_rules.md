# Pawstify — Project Rules for Cursor Agent

> **Purpose:** Provide Cursor AI a single authoritative reference for developing, testing, and deploying Pawstify’s landing page and demo app. Always prefer the latest approved project documentation before taking any action.

---

## 1. High-Level Rules
- Follow a **safe, incremental development** approach: commit small, testable changes.  
- Reference the Pawstify documentation before editing any code or content.  
- Use the Tailwind tokens and design principles defined in the Design System and Style Guide.

---

## 2. Canonical Project Files (to Reference)
1. **PAWSTIFY_BETA_LAUNCH_GUIDE.md** — Beta procedures & Play Console steps.  
2. **Pawstify_landingpage.md** — Landing page content, SEO, and UX structure.  

> ⚠️ Removed references to PROJECT_DOCUMENTATION.md, pawstify_streamlined_project_documentation_mvp_focused.md, and qa_v1_results.md per current phase simplification.

---

## 3. Behavior Rules
### ✅ Do:
- Make **focused commits** with clear messages referencing the related section (e.g., `feat(landing): update FAQ schema — refs Pawstify_landingpage.md#faq`).
- Run all required linting and tests before pushing changes.
- Summarize assumptions or unclear details in the PR for human confirmation.

### ❌ Don’t:
- Avoid destructive commands (e.g., `rm -rf`, `git push --force`).
- Never commit secrets, personal data, or test user info.
- Avoid excessive refactoring without documented justification.

---

## 4. Cursor-Specific Project Configuration
**Structure:**
```
.cursor/
  project_config.md
  rules/
    coding_rules.mdc
    safety_rules.mdc
    seo_rules.mdc
    release_rules.mdc
```

Each rule file should be concise and reference these project rules for consistency.

---

## 5. Auto-Run & Safety
**Allowed commands:** build, lint, test, and staging deployment tasks.  
**Denied commands:** mass deletion, forced git pushes, or unsupervised system package installations.  
Disable Auto-Run for production deployments.

---

## 6. Coding & UX Standards
- Use **TypeScript**, **Next.js 14**, **Tailwind CSS**, and functional components.  
- Follow `Pawstify_landingpage.md` for section structure and meta content.  
- Ensure accessibility: proper alt text, focus rings, and semantic HTML.  
- Maintain **Core Web Vitals** within targets: LCP < 2.5s, CLS < 0.1.

---

## 7. SEO & Metadata Rules
- Include meta title, description, Open Graph tags, and FAQ schema.  
- Use descriptive filenames for images and accurate alt text.  
- Structure content with clear headings (H1–H3 hierarchy).  
- Keep primary CTA visible and server-rendered.

---

## 8. QA & Testing Workflow
1. Run `npm run lint` and `npm run test`.  
2. Execute basic Playwright smoke tests for critical paths.  
3. Perform a Lighthouse audit and verify performance thresholds.  
4. Validate metadata with Google’s Rich Results Test.

---

## 9. Commits & Pull Requests
- Format: `type(scope): message — refs <doc#section>`  
- PRs must include test results, screenshot previews (if UI), and links to referenced docs.  
- Tag the founder for final review.

---

## 10. Release & Play Console
- Follow internal test procedures outlined in `PAWSTIFY_BETA_LAUNCH_GUIDE.md`.  
- Upload `.aab` to internal testing, verify via opt-in links, and scale gradually.  
- No production promotion without 48–72h stability verification.

---

## 11. Privacy & Security
- No PII or Gmail addresses in public logs.  
- All tester data must reside in protected storage.  
- Never overwrite user-generated content; always confirm AI-assisted changes.

---

## 12. Prompting Protocol
Every sub-agent prompt must begin with:
> “Refer to project rules and Pawstify_landingpage.md before making changes.”

Add short assumption blocks when uncertain, and request confirmation before implementing ambiguous logic.

---

## 13. Post-Deploy Verification
- Confirm no new crashes or slowdowns via Play Console reports.  
- Ensure analytics and email signup tracking function correctly.  
- Verify all social previews (OG metadata) display as intended.

---

## 14. Documentation Maintenance
- Any UX, SEO, or release update must reflect in `Pawstify_landingpage.md` and/or `PAWSTIFY_BETA_LAUNCH_GUIDE.md`.  
- Keep a `CHANGELOG.md` for all significant updates.  

---

## 15. Quick Checklist Before PR
☑ Referenced latest project docs.  
☑ Passed lint, test, and Lighthouse checks.  
☑ Verified Auto-Run safety settings.  
☑ Metadata and schema validated.  
☑ No sensitive data committed.

---

**End of Pawstify Cursor Project Rules**

