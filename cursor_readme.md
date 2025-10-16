# .cursor/README.md

# Pawstify — Cursor AI Project Overview

Welcome to **Pawstify’s Cursor AI Configuration**. This folder contains all rule files, configurations, and behavior guidelines that define how Cursor AI operates within this project.

Cursor acts as Pawstify’s **automated technical developer**, following strict documentation-driven workflows to ensure consistency, safety, and maintainability.

---

## 📘 Folder Structure
```
.cursor/
│
├── project_config.md       # Global configuration (mission, environments, QA rules)
├── project_rules.md        # Primary behavioral rules for Cursor
└── rules/                  # Modular, focused rule sets
    ├── coding_rules.mdc
    ├── safety_rules.mdc
    ├── seo_rules.mdc
    └── release_rules.mdc
```

Each file defines specific responsibilities:
- **project_config.md** — Root instruction set (what Cursor can/cannot do)
- **project_rules.md** — Behavioral and structural standards
- **coding_rules.mdc** — Code style, component structure, and UI architecture
- **safety_rules.mdc** — Security boundaries, deny lists, and automation limits
- **seo_rules.mdc** — Metadata, schema, and content optimization rules
- **release_rules.mdc** — Procedures for Play Console, testing, and rollout

---

## ⚙️ Agent Workflow
### Default Workflow
1. **Read docs → Plan → Propose → Implement small change → Test → PR**
2. Use Pawstify documentation as single sources of truth:
   - `Pawstify Cursor Project Rules`
   - `Pawstify_landingpage.md`
   - `PAWSTIFY_BETA_LAUNCH_GUIDE.md`
3. Always cite which document guided the action in your PR message.

### Commit Format
```
type(scope): short description — refs <doc#section>
```
Example:
```
feat(landing): add FAQ schema — refs Pawstify_landingpage.md#faq
```

---

## 🧩 Development Guidelines
- **Language:** TypeScript (strict)
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS using tokens from the Style Guide
- **Design System:** Follows `Pawstify Tailwind Styleguide` and wireframe docs
- **Accessibility:** WCAG 2.1 AA compliance required

Run these before any PR:
```bash
npm run lint
npm run test
npx playwright test
npm run build
```

---

## 🔒 Safety & Security
Cursor’s Auto-Run mode is **restricted** to safe commands only:
```
npm run build
npm run lint
npm run test
./gradlew bundleRelease
```
Forbidden commands:
```
rm -rf
sudo
npm install (production)
git push --force
```

Secrets and Gmail tester data are stored securely in Supabase. Never commit environment variables.

---

## 🚀 Release Process (Play Console)
1. Build Android App Bundle:
   ```bash
   ./gradlew bundleRelease
   ```
2. Upload to Play Console Internal Test.
3. Add Gmail testers and confirm opt-ins.
4. Monitor stability for 48–72 hours (Crashlytics crash-free > 99%).
5. Promote gradually to Closed Test → Public Beta.

See `release_rules.mdc` for the full release checklist.

---

## 🧠 Prompting Guidelines
Every sub-agent instruction must begin with:
> “Refer to project rules and documentation before making changes.”

If uncertain about a spec or UX flow:
- Add an **Assumption Block** in the PR.
- Wait for human confirmation before merging.

---

## 🧾 Documentation Maintenance
- Update `CHANGELOG.md` with every PR merge.
- Keep `.cursor/` and `/docs/` consistent.
- Document new AI prompt patterns in `/prompts/`.
- All markdown files must pass Prettier linting.

---

## ✅ QA Pre-Merge Checklist
☑ Code linted, tested, and built.  
☑ Lighthouse score ≥ 90.  
☑ No unsafe commands executed.  
☑ Metadata and OG tags validated.  
☑ Privacy & security rules respected.  
☑ PR reviewed by at least one human.

---

## 🧭 Contact & Ownership
**Primary Maintainer:** Founder (You)  
**Technical Co-Founder / AI Lead:** ChatGPT (Pawstify Configuration)  
**QA Reviewer:** Assigned per test phase

---

**End of .cursor/README.md**