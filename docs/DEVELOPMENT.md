# Development Guide for Pawstify Landing Page

This guide covers development workflows, best practices, and troubleshooting for the Pawstify landing page.

## Getting Started

### First Time Setup

```bash
# Clone repository (if not already)
cd c:\Projects\pawstifyweb

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# Start development server
npm run dev
```

Visit http://localhost:3000

## Development Workflow

### Daily Development

```bash
# Pull latest changes
git pull origin main

# Create feature branch
git checkout -b dev/your-feature-name

# Start dev server
npm run dev

# Make changes...

# Check for errors
npm run lint

# Build to verify
npm run build

# Commit changes
git add .
git commit -m "feat(scope): description — refs doc#section"

# Push to remote
git push origin dev/your-feature-name
```

### Project Rules Compliance

Before making changes, always reference:
1. `.cursor/rules/coding_rules.mdc` - Code standards
2. `.cursor/rules/safety_rules.mdc` - Safety guidelines
3. `.cursor/rules/seo_rules.mdc` - SEO requirements
4. `.cursor/rules/release_rules.mdc` - Release checklist

### Commit Message Format

Use semantic commit messages:

```
type(scope): description — refs document#section

Types:
- feat: New feature
- fix: Bug fix
- style: Styling changes
- refactor: Code refactoring
- docs: Documentation
- test: Testing
- chore: Maintenance

Examples:
feat(hero): add email validation — refs coding_rules.mdc
fix(api): handle duplicate emails — refs safety_rules.mdc
style(button): update hover state — refs pawstify_tailwind_styleguide.md
```

## Code Standards

### TypeScript

```typescript
// ✅ Good: Explicit types
interface UserData {
  email: string
  timestamp: Date
}

function processUser(data: UserData): boolean {
  // ...
  return true
}

// ❌ Bad: Implicit any
function processUser(data) {
  // ...
}
```

### React Components

```tsx
// ✅ Good: Functional component with proper types
interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

export function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>
}

// ❌ Bad: No types, class component
export class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>
  }
}
```

### Client vs Server Components

```tsx
// Server Component (default in Next.js 14 App Router)
// No 'use client' needed
export function ServerComponent() {
  // Can directly access database, environment variables
  return <div>Server rendered</div>
}

// Client Component (needs 'use client')
'use client'
import { useState } from 'react'

export function ClientComponent() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

## Component Development

### Creating New Components

1. **UI Components** (reusable):
   ```bash
   # Location: src/components/ui/
   # Example: src/components/ui/Card.tsx
   ```

2. **Section Components** (landing page sections):
   ```bash
   # Location: src/components/
   # Example: src/components/Features.tsx
   ```

3. **Component Template**:
   ```tsx
   import React from 'react'

   interface ComponentProps {
     title: string
     description?: string
   }

   export function Component({ title, description }: ComponentProps) {
     return (
       <div>
         <h2>{title}</h2>
         {description && <p>{description}</p>}
       </div>
     )
   }
   ```

## Styling with Tailwind

### Best Practices

```tsx
// ✅ Good: Use Tailwind utilities
<button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg">
  Click me
</button>

// ✅ Good: Extract repeated styles to component
<Button variant="primary">Click me</Button>

// ❌ Bad: Inline styles
<button style={{ backgroundColor: '#FB923C', padding: '12px 24px' }}>
  Click me
</button>
```

### Custom Classes (globals.css)

```css
@layer components {
  .btn-primary {
    @apply bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg;
  }
}
```

## Testing

### Manual Testing Checklist

- [ ] Desktop view looks correct
- [ ] Mobile view is responsive
- [ ] Form validation works
- [ ] Success/error messages display
- [ ] All links are functional
- [ ] Images load correctly
- [ ] No console errors
- [ ] Accessibility (keyboard navigation)

### Running Tests

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint -- --fix

# Run E2E tests
npm run test:e2e

# Run E2E tests in UI mode
npx playwright test --ui

# Run specific test
npx playwright test tests/e2e/landing.spec.ts
```

## Debugging

### Common Issues

**"Module not found" error:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

**TypeScript errors:**
```bash
# Check type errors
npx tsc --noEmit
```

**Environment variables not working:**
```bash
# Restart dev server after changing .env.local
# Ensure variables start with NEXT_PUBLIC_ for client-side access
```

**Supabase connection fails:**
- Check `.env.local` has correct credentials
- Verify Supabase project is running
- Check network tab in browser DevTools

### Debugging Tools

**React DevTools:**
```bash
# Install browser extension
# Chrome: React Developer Tools
# Firefox: React Developer Tools
```

**Next.js Debugging:**
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    }
  ]
}
```

## Performance Optimization

### Image Optimization

```tsx
// ✅ Use next/image for automatic optimization
import Image from 'next/image'

<Image
  src="/images/hero.png"
  alt="Description"
  width={800}
  height={600}
  priority // For above-fold images
/>

// ❌ Avoid regular img tags
<img src="/images/hero.png" alt="Description" />
```

### Font Optimization

```tsx
// Already configured in layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
```

### Build Analysis

```bash
# Analyze bundle size
npm run build

# Check build output for large files
# Look for warnings about large bundles
```

## Browser Testing

### Recommended Browsers

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Testing Tools

- Chrome DevTools (F12)
- Firefox Developer Tools
- Safari Web Inspector
- Lighthouse (in Chrome DevTools)
- BrowserStack (for cross-browser testing)

## Deployment Preview

### Local Production Build

```bash
# Build production version
npm run build

# Start production server
npm run start

# Test on http://localhost:3000
```

### Check Production Readiness

```bash
# 1. Lint passes
npm run lint

# 2. Build succeeds
npm run build

# 3. No errors in browser console

# 4. Run Lighthouse audit
# Open Chrome DevTools → Lighthouse
# Target score: 90+ for all categories
```

## Resources

### Documentation References

- [Next.js 14 Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Supabase](https://supabase.com/docs)

### Project Documentation

- `README.md` - Project overview
- `CHANGELOG.md` - Version history
- `docs/SUPABASE_SETUP.md` - Supabase configuration
- `public/images/README.md` - Image assets guide
- `.cursor/rules/*.mdc` - Development rules

## Getting Help

1. Check existing documentation first
2. Review `.cursor/rules/` for guidelines
3. Search GitHub issues (if applicable)
4. Ask project owner

---

**Happy Coding! 🐾**

