# Pawstify Tailwind CSS Style Guide (for Cursor AI)

This document defines the **Tailwind CSS design tokens and component standards** for the Pawstify landing page. Cursor’s AI agent should follow these style rules consistently across all sections for visual coherence and maintainability.

---

## 🎨 1. Brand Palette

| Color | Usage | Tailwind Token | Hex |
|--------|--------|----------------|-----|
| **Primary Orange** | Primary CTA buttons, accents | `bg-orange-500`, `hover:bg-orange-600`, `text-orange-600` | `#FB923C` |
| **Soft Orange (Background)** | Hero + CTA sections | `bg-orange-50` | `#FFF7ED` |
| **White** | Background, CTA contrast | `bg-white`, `text-white` | `#FFFFFF` |
| **Gray 900** | Headings, main text | `text-gray-900` | `#111827` |
| **Gray 700** | Paragraphs, subtext | `text-gray-700` | `#374151` |
| **Gray 500** | Secondary labels | `text-gray-500` | `#6B7280` |
| **Beige Accent** | Optional testimonial / footer background | `bg-orange-100` | `#FFEEDD` |

**Gradient (optional for banners):**  
`bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600`

---

## 🧱 2. Typography

| Type | Tailwind Class | Example | Use Case |
|------|----------------|----------|-----------|
| **Primary Font** | `font-sans` | Inter / Nunito / Poppins (system fallback) | Default text & UI elements |
| **H1** | `text-4xl md:text-5xl font-bold` | Page hero titles |
| **H2** | `text-3xl font-bold` | Section headers |
| **H3** | `text-xl font-semibold` | Subheaders, card titles |
| **Paragraph (Body)** | `text-base md:text-lg text-gray-700` | Main body copy |
| **Small / Microcopy** | `text-sm text-gray-500` | Notes, disclaimers, form feedback |

**Line Height:** `leading-tight` for headings, `leading-relaxed` for paragraphs.  
**Letter Spacing:** Default Tailwind spacing is adequate for readability.

---

## 📏 3. Layout & Spacing

| Property | Tailwind Tokens | Notes |
|-----------|----------------|--------|
| **Page Padding** | `p-8 md:p-16` | Consistent breathing space for hero + major sections |
| **Section Spacing** | `py-16` or `py-20` | Keep sections clearly separated |
| **Grid Gaps** | `gap-6` or `gap-10` | Between cards, FAQ, testimonial blocks |
| **Rounded Corners** | `rounded-lg` / `rounded-2xl` | Warm, approachable aesthetic |
| **Shadows** | `shadow`, `shadow-md`, `shadow-lg` | Use sparingly for depth |
| **Responsive Columns** | `md:grid-cols-3`, `sm:flex-col` | Use for section layouts |

---

## 🧩 4. Buttons & Forms

### **Primary CTA Button**
```html
<button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition">
  Join Early Access 🐾
</button>
```

**Best Practices:**
- Maintain consistent padding and radius.
- Always use hover states (`hover:bg-orange-600`).
- For light backgrounds, use dark orange text (`text-orange-600 bg-white`).

### **Input Fields**
```html
<input type="email" placeholder="Enter your Gmail"
  class="border border-gray-300 rounded-lg px-4 py-3 flex-grow focus:ring-2 focus:ring-orange-400" />
```

**Microcopy:**
- Below forms: `text-sm text-gray-500` → “Limited spots · No spam ever.”
- Success feedback: green text (`text-green-600`).

---

## 🖼️ 5. Imagery & Visuals

| Asset Type | Tailwind Styling | Notes |
|-------------|------------------|-------|
| **Screenshots / Mockups** | `rounded-xl shadow-md w-72 md:w-96` | Maintain consistent image sizing |
| **Icons / Emojis** | Use native emojis or SVG icons with `text-5xl` sizing | Reinforce friendliness |
| **Carousels / Grids** | `flex flex-wrap justify-center gap-6` | Mobile adaptive |
| **Alt Text** | Required — short, descriptive | Example: “Screenshot of Pawstify dashboard interface” |

---

## 💬 6. Component Standards

### **Section Headings**
```html
<h2 class="text-3xl font-bold text-center mb-8">Section Title</h2>
```
- Always centered, with consistent bottom margin.

### **Card / Feature Block**
```html
<div class="p-6 bg-white rounded-2xl shadow text-center">
  <img src="/images/example.png" alt="Example feature" class="mx-auto w-48 mb-4 rounded-lg" />
  <h3 class="font-semibold text-lg mb-2">Feature Title</h3>
  <p>Short benefit-oriented description.</p>
</div>
```

### **FAQ Accordion**
```html
<details class="p-4 border rounded-lg">
  <summary class="font-semibold cursor-pointer">Question</summary>
  <p class="mt-2 text-gray-700">Answer text...</p>
</details>
```

---

## 📱 7. Responsive Breakpoints

| Screen Size | Tailwind Token | Example Usage |
|--------------|----------------|----------------|
| **Mobile First** | default | Stacked layout |
| **Tablet** | `md:` | Split hero layout, grid columns |
| **Desktop** | `lg:` | Add horizontal breathing space |

Use Flexbox + Grid for responsiveness — keep content centered and text readable under 65ch.

---

## 🧠 8. Accessibility Standards
- **Color Contrast Ratio:** Minimum 4.5:1 for text.
- **Focus State:** Always visible; use `focus:ring-2 focus:ring-orange-400`.
- **Alt Text:** Required for every image and icon.
- **Keyboard Navigation:** Ensure form elements are tabbable.
- **ARIA Labels:** Use for form fields and CTA buttons when needed.

---

## 🧪 9. Testing Checklist for Cursor
- ✅ Verify font rendering consistency across browsers.
- ✅ Test form responsiveness on iOS + Android.
- ✅ Confirm hover and focus states for accessibility.
- ✅ Validate Tailwind build (no purged critical classes).
- ✅ Confirm consistent orange color tone across devices.

---

## 🏁 Summary
This style guide ensures Pawstify’s landing page remains consistent, accessible, and visually inviting across all devices. All future UI additions — forms, testimonials, modals, etc. — should inherit from these base Tailwind tokens and component styles.

**End of Pawstify Tailwind CSS Style Guide**

