# Image Assets for Pawstify Landing Page

## Required Images

Place the following images in this directory:

### Hero Section
- **pawstify-hero.png** (448x896px)
  - App interface mockup showing dashboard
  - Mobile phone frame with app screenshot
  - High quality, optimized for web

### Solution Section (Feature Cards)
- **vaccine-card.png** (192x192px)
  - Digital vaccination card interface
  - Clear, professional screenshot
  
- **reminders.png** (192x192px)
  - Health reminder notification screen
  - Shows upcoming tasks/alerts
  
- **prescriptions.png** (192x192px)
  - Digital prescription interface
  - Vet notes and medication info

### Demo Visuals Section
- **dashboard.png** (288x576px)
  - Main dashboard view
  - Vaccination tracking visible
  
- **upload.png** (288x576px)
  - Vaccine upload screen
  - Clear upload flow
  
- **calendar.png** (288x576px)
  - Calendar view with scheduled items
  - Vet visits and medications

### SEO & Social
- **og-image.jpg** (1200x630px)
  - Open Graph image for social sharing
  - Includes Pawstify branding
  - Text readable at small sizes

### Branding
- **logo.png** (512x512px)
  - Pawstify logo
  - Transparent background
  - High resolution

- **favicon.ico** (32x32px and 16x16px)
  - Website favicon
  - Recognizable at small size

- **apple-touch-icon.png** (180x180px)
  - iOS home screen icon
  - Rounded corners not needed (iOS adds automatically)

## Image Optimization Tips

1. **Format**: Use WebP with JPEG fallback
2. **Compression**: Optimize all images (TinyPNG, Squoosh)
3. **Naming**: Use descriptive, lowercase, hyphenated names
4. **Alt Text**: Always provide descriptive alt text in components
5. **Size**: Keep file sizes under 500KB per image

## Temporary Placeholders

Until actual images are ready, you can:
1. Use placeholder services (placeholder.com, unsplash.com)
2. Create simple mockups in Figma/Canva
3. Use screenshot tools to capture app interface

## Next.js Image Optimization

This project uses `next/image` which automatically:
- Serves optimized formats (WebP, AVIF)
- Provides responsive sizing
- Lazy loads images
- Prevents layout shift

Always use the Image component:
```tsx
import Image from 'next/image'

<Image
  src="/images/pawstify-hero.png"
  alt="Descriptive alt text"
  width={448}
  height={896}
/>
```

## Current Status

⚠️ **Placeholder images needed** - Replace with actual Pawstify app screenshots before launch.

