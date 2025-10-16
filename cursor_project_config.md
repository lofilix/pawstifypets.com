# .cursor/project_config.md

## Project: Pawstify

### Mission
Pawstify is a Pet Health Management software that digitizes vaccination cards, prescriptions, and reminders for pet owners, shelters, and veterinary clinics. This configuration ensures Cursor AI operates safely, effectively, and in full alignment with Pawstify’s MVP goals.

---

## Repository Overview
- **Primary Branch:** `main`
- **Development Branches:** `dev/*`
- **Protected Branches:** `main`, `release/*`
- **Environments:**
  - `staging` — Used for internal testing and preview deployments.
  - `production` — Final live deployment after manual approval.
- **Build System:** Next.js 14 + Tailwind CSS + TypeScript.
- **Backend Services:** Supabase (auth, database, storage).
- **AI Integrations:** OpenAI GPT-4o-mini for OCR/vision tasks.
- **Mobile Integration:** Android app bundle deployed through Google Play Console (internal test phase).

---

## Agent Behavior
### General Rules
1. **Default Mode:** Safe (manual approval required for major codebase edits or deploy actions).
2. **Preferred Workflow:**
   - Analyze → Suggest → Apply small change → Test → Commit → Create PR.
3. **Always consult:**
   - `Pawstify Cursor Project Rules`
   - `.cursor/rules/` folder
   - `PAWSTIFY_BETA_LAUNCH_GUIDE.md`
   - `Pawstify_landingpage.md`

### Task Boundaries
- The agent may **edit code, markdown, and configuration files**.
- The agent may **not**:
  - Push directly to `main`.
  - Execute destructive or system-level commands.
  - Publish builds without human review.

---

## Automated Scripts
**Local Commands:**
```bash
npm run dev         # Development server
npm run build       # Production build
npm run lint        # Code linting
npm run test        # Unit tests
npx playwright test # E2E smoke tests
```

**CI/CD Commands:**
```bash
./gradlew bundleRelease          # Android build
fastlane supply --track internal # Upload to Play Console internal test
```

---

## Testing & QA Requirements
Before merging any PR:
- ✅ ESLint passes with no warnings.
- ✅ Unit and integration tests pass.
- ✅ Playwright smoke tests succeed.
- ✅ Lighthouse performance score ≥ 90.
- ✅ Metadata validated via Google Rich Results test.

---

## Review & Approval
- **Human Reviewers:** Founder (you), QA Engineer (assigned).
- **Agent PRs:** Must include test results, visual previews, and doc citations.
- **Approval Flow:** 1 human approval required before merge to protected branches.

---

## Security & Privacy
- No plain-text secrets or tokens in commits.
- Use `.env.local` and `.env.production` for sensitive configs.
- Gmail tester lists stored securely in Supabase.
- Disable auto-run for production deployments.

---

## Versioning Policy
- **Version Format:** `major.minor.patch` (e.g., `0.9.1` for demo, `1.0.0` for public launch)
- **Release Flow:**
  - Internal Test → Closed Beta → Public Beta → Launch.
  - Promote only after verified stability and feedback loop completion.

---

## Observability & Monitoring
- Crashlytics active in all Android test builds.
- Monitor sign-up conversions through analytics (GTM or Plausible).
- Post-release: run a 72-hour stability check before any rollout expansion.

---

## Documentation Integrity
- Keep all documentation in `/docs` and `.cursor/` synced.
- Update `CHANGELOG.md` with every approved PR.
- When introducing new AI prompts or rules, document them in `prompts/`.

---

**End of .cursor/project_config.md**

