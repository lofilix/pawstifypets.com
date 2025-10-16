# Pawstify Layout Rhythm Reference  
**File:** /docs/layout_rhythm_reference.md  
**Version:** 1.0  
**Last Updated:** 2025-10-15  

---

## 🎯 Objective
Define a consistent **spacing, margin, and layout rhythm** for all Pawstify web components.  
This ensures a modern, balanced, and readable visual flow across breakpoints and future releases.

---

## 🧩 1. Global Grid System
| Property | Recommendation | Tailwind Tokens |
|-----------|----------------|-----------------|
| Grid Type | 12-column fluid grid | `grid-cols-12` |
| Container Max Width | 1280px (marketing) / 1024px (dashboard) | `max-w-7xl` / `max-w-5xl` |
| Global Side Padding | 40px desktop / 24px tablet / 16px mobile | `px-10 md:px-6 sm:px-4` |
| Content Alignment | Centered horizontally | `mx-auto` |

---

## 🪞 2. Vertical Rhythm
Use a **1:2:4 rhythm** based on the 8px system for section spacing.  

| Section Type | Vertical Padding (Desktop) | Mobile | Tailwind |
|---------------|----------------------------|---------|-----------|
| Hero / CTA | 96–128px | 64px | `py-24 md:py-32` |
| Secondary Section | 80px | 48px | `py-20 md:py-24` |
| Footer / FAQ | 64px | 40px | `py-16 md:py-20` |

Ensure every `<section>` element uses consistent top and bottom spacing to preserve vertical rhythm.

---

## 📏 3. Margins & Element Spacing
Follow these standards between key elements:

| Relationship | Ideal Spacing | Tailwind Token |
|---------------|----------------|----------------|
| Heading → Subheading | 16–20px | `mt-4 md:mt-5` |
| Subheading → Paragraph | 12–16px | `mt-3 md:mt-4` |
| Paragraph → Button / CTA | 20–24px | `mt-6` |
| Cards / Features Gap | 32px | `gap-8` |
| Section to Section | 48–64px | `mt-12 md:mt-16` |

Maintain consistent vertical alignment by using `space-y-*` classes for stacked text blocks.

---

## 🧱 4. Card & Component Standards
| Property | Recommendation | Tailwind |
|-----------|----------------|----------|
| Padding | 24px desktop / 16px mobile | `p-6 md:p-8` |
| Border Radius | Friendly 16px | `rounded-2xl` |
| Shadow Depth | Soft for rest / Medium on hover | `shadow-sm hover:shadow-md` |
| Image Treatment | Rounded corners, subtle shadow | `rounded-xl shadow-sm` |
| Icon Size | 40–48px consistent | `w-10 h-10` |

---

## 🧠 5. Alignment & Readability
- Use **left-aligned** text for headings and paragraphs.  
- Center alignment is reserved for **short calls-to-action**.  
- Line length: **60–80 characters** max per line for readability.  
- Maintain equal gutters left and right for a balanced look.  

---

## 📱 6. Responsive Layout Guidelines
| Device | Container Width | Padding | Notes |
|---------|------------------|----------|-------|
| Desktop (≥1280px) | `max-w-7xl` | `px-10` | Keep hero text and image balanced. |
| Tablet (768–1023px) | `max-w-5xl` | `px-6` | Stack CTA sections neatly. |
| Mobile (≤767px) | Full width | `px-4` | Stack content vertically. Maintain `space-y-8`. |

---

## 🧭 7. Modern Trends (2025)
- Use **“intentional density”**: slightly tighter sections for modern, fast-scrolling users.  
- Maintain a consistent vertical rhythm with generous breathing room around CTAs.  
- Keep a consistent scroll cadence — every screenful should have one key action or message.  
- Combine consistent `py-*` patterns with distinct section backgrounds for hierarchy clarity.

---

## ✅ QA Checkpoints
☑ Section vertical rhythm visually balanced.  
☑ Cards and grids align perfectly in 12-column grid.  
☑ Typography and line height uniform across devices.  
☑ Visual contrast and whitespace ratio ≥ 60/40.  
☑ Mobile padding consistent across sections.  

---

**Next Step:**  
> Apply the layout rhythm improvements to Pawstify’s landing page following this reference and `coding_rules.mdc`.

**Commit Format:**  
