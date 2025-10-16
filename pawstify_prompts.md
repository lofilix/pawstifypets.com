# prompts/pawstify_prompts.md

# Pawstify — Cursor AI Prompt Framework

> **Purpose:** This file defines the complete, ready-to-use prompt system for Pawstify’s Cursor AI agent. Each prompt is optimized for Cursor’s structured reasoning and MCP architecture. Use these to instruct the agent safely, systematically, and effectively.

---

## 🧠 1. Core Instruction Prompt (Always Start With This)

```
SYSTEM PROMPT:
You are Pawstify’s primary development agent.
Before making or suggesting any change, read and follow these sources in order of priority:
1. .cursor/project_config.md
2. Pawstify Cursor Project Rules
3. .cursor/rules/ (coding_rules, safety_rules, seo_rules, release_rules)
4. Pawstify_landingpage.md
5. PAWSTIFY_BETA_LAUNCH_GUIDE.md

Your goal is to implement changes that are fully consistent with Pawstify’s design system, technical stack, safety constraints, and UX/SEO documentation.
Always explain your reasoning briefly and cite which rule or document guided your action.
```

---

## 🧩 2. Feature Implementation Prompt

```
TASK PROMPT:
Implement [feature name or description].

Refer to:
- coding_rules.mdc for structure and framework conventions
- Pawstify_landingpage.md for layout/UX expectations
- seo_rules.mdc if the change affects content or metadata
- safety_rules.mdc for data handling

Requirements:
1. Use Tailwind tokens from the Style Guide.
2. Ensure accessibility and responsive layout.
3. Add related test cases.
4. Document new functionality in relevant markdown file.

Output:
- Updated code snippet(s)
- File paths modified
- A short rationale referencing the rule(s) applied
```

✅ Example:
```
Implement a new “Join Beta” CTA banner below the hero section of the landing page.
Refer to the Pawstify_landingpage.md wireframe and SEO rules.
Use responsive Tailwind design with proper alt text.
Add this feature safely with commit format: feat(landing): add join-beta CTA — refs Pawstify_landingpage.md#cta
```

---

## 🔧 3. Refactoring Prompt

```
TASK PROMPT:
Refactor [component/file name] to improve [goal — e.g., readability, SEO, accessibility, or performance].

Constraints:
- Maintain existing functionality.
- Use best practices from coding_rules.mdc.
- Verify performance against Core Web Vitals targets.
- Do not introduce new dependencies without human confirmation.
- Follow naming and structure from project_config.md.

After refactoring, summarize:
- What was changed
- Why it improves maintainability or UX
- Which rule file guided the decision
```

✅ Example:
```
Refactor the Footer component to improve SEO semantics and accessibility.
Ensure all links are <a> tags with descriptive titles.
Follow the coding_rules.mdc and seo_rules.mdc conventions.
```

---

## 🔍 4. SEO / Metadata Optimization Prompt

```
TASK PROMPT:
Optimize [page/component name] for SEO.

Steps:
1. Verify meta title, description, and OG tags are present.
2. Add FAQPage JSON-LD schema if applicable.
3. Ensure hero text and CTA are server-rendered (SSR).
4. Validate Core Web Vitals and accessibility score.
5. Output a diff summary showing updated meta tags.

Reference:
- seo_rules.mdc
- Pawstify_landingpage.md
```

✅ Example:
```
Optimize the About section metadata.
Add missing OG tags, meta description, and FAQ schema based on seo_rules.mdc.
Ensure all headings follow H1 → H2 hierarchy.
```

---

## 🧪 5. QA / Testing Prompt

```
TASK PROMPT:
Run a QA validation for [feature or component].

Follow:
- QA checklist in project_config.md
- Testing rules in Pawstify Cursor Project Rules

Steps:
1. Run `npm run lint`
2. Run `npm run test`
3. Run `npx playwright test` (smoke suite)
4. Generate a Lighthouse report (performance + accessibility)

Output:
- Pass/fail status per test
- Performance score summary
- Any potential blockers before merge
```

✅ Example:
```
Run QA validation for the new Pet Health dashboard page.
Report results and flag issues blocking internal test release.
```

---

## 🚀 6. Deployment Preparation Prompt

```
TASK PROMPT:
Prepare a safe deployment of version [x.x.x] to the internal test track.

Follow:
- release_rules.mdc
- PAWSTIFY_BETA_LAUNCH_GUIDE.md

Steps:
1. Increment version in Gradle.
2. Generate `.aab` file with `./gradlew bundleRelease`.
3. Validate against Pre-launch reports.
4. Confirm Gmail tester list is loaded from Supabase (do not expose it).
5. Output a checklist confirming readiness for Play Console upload.
```

✅ Example:
```
Prepare Pawstify demo build v0.9.2 for internal testing.
Follow release_rules.mdc and confirm build passes all QA gates.
```

---

## 📚 7. Documentation Update Prompt

```
TASK PROMPT:
Update [documentation file] to reflect recent changes in [feature/component].

Rules:
- Maintain Markdown formatting consistency.
- Follow documentation tone (neutral, clear, systematic).
- Update changelog section if relevant.
- Add date and author note at the bottom of the file.

Output:
- Full updated markdown
- Short summary of changes
```

✅ Example:
```
Update Pawstify_landingpage.md to reflect addition of Join Beta CTA and improved SEO schema.
Append changelog with today’s date.
```

---

## 🐞 8. Bug Fix Prompt

```
TASK PROMPT:
Debug and fix [specific issue or behavior].

Follow:
- safety_rules.mdc to ensure no data corruption
- coding_rules.mdc for consistent fix approach

Steps:
1. Reproduce the bug.
2. Identify root cause (describe briefly).
3. Implement minimal, safe fix.
4. Write or update related test.
5. Provide commit message and explanation referencing doc rules.
```

✅ Example:
```
Fix issue where digital vaccination card fails to render after API timeout.
Log cause and solution following safety_rules.mdc (no sensitive data in logs).
```

---

## 🎨 9. UI / Design Adjustment Prompt

```
TASK PROMPT:
Update the UI of [section/component] based on the latest Tailwind Style Guide.

Follow:
- Pawstify Tailwind Styleguide
- coding_rules.mdc
- Pawstify_landingpage.md for layout consistency

Steps:
1. Apply updated color, spacing, and typography tokens.
2. Test across mobile and desktop breakpoints.
3. Ensure contrast ratio ≥ 4.5:1.
4. Output component preview and updated Tailwind classes.
```

✅ Example:
```
Update the Hero section with new Pawstify orange gradient from Tailwind Styleguide.
Ensure responsive layout matches wireframe.
```

---

## 🤖 10. AI Integration Enhancement Prompt

```
TASK PROMPT:
Enhance AI-driven flow for [specific feature] using current OpenAI model setup.

Rules:
- Use gpt-4o-mini (vision) with structured outputs (json_schema, strict).
- Max width 1024px for images; max output tokens 700.
- Leave blank fields if extraction is uncertain (no confidence scores).
- Follow safety_rules.mdc for user data protection.

Output:
- Updated function or endpoint
- JSON schema definition (if modified)
- Example output
```

✅ Example:
```
Optimize vaccination card extraction flow.
Ensure output schema strictly follows Pawstify MVP documentation.
```

---

## 🧾 11. Internal Report / Summary Prompt

```
TASK PROMPT:
Generate a summarized internal report for [purpose: e.g., QA feedback, SEO audit, release status].

Include:
- Summary table (issues, fixes, owners, status)
- Key performance metrics
- Recommended next steps

Follow markdown formatting conventions.
Output in readable developer report format.
```

---

## ✅ How to Use
1. Open Cursor chat or command line.
2. Copy and paste the desired task prompt.
3. Replace placeholders ([feature], [version], etc.) with actual values.
4. Always begin sessions with the **Core Instruction Prompt** to ensure context awareness.

---

## 🧭 Notes
- The agent’s output must always reference **which rule or document** guided its decisions.
- Keep this file updated alongside `.cursor/project_config.md`.
- Add new prompt variants for recurring workflow patterns (e.g., new testing or deployment tasks).

---

**Version:** 1.0.0  
**Maintainer:** Founder (You)  
**Last Updated:** $(date)

---

**End of prompts/pawstify_prompts.md**