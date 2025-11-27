# AI Coding Agent Instructions - Novena (Next.js)

## Project Overview
**Novena** is a Next.js 16 web application using React 19, TypeScript, Tailwind CSS v4, and ESLint. This is a bootstrapped Next.js app with the App Router pattern.

## Architecture & Key Patterns

### Tech Stack
- **Framework**: Next.js 16.0.4 (App Router, not Pages Router)
- **Language**: TypeScript 5 (strict mode enabled)
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **Linting**: ESLint 9 with Next.js config (core-web-vitals + typescript)
- **Fonts**: Geist font family imported from next/font/google

### Project Structure
```
app/
  layout.tsx      # Root layout with metadata, font variables, globals.css
  page.tsx        # Home page (default route)
  globals.css     # Global Tailwind styles
public/           # Static assets
```

### Path Aliases
- `@/*` resolves to project root (configured in `tsconfig.json`)
- Use `@/components`, `@/app`, etc. for imports

## Development Workflow

### Commands
```bash
npm run dev       # Start dev server (http://localhost:3000 with hot reload)
npm run build     # Production build
npm start         # Production server
npm run lint      # Run ESLint (no auto-fix by default)
```

### File Naming Conventions
- **Pages/Layouts**: Use `.tsx` for React components with TypeScript
- **Components**: Create in `app/` subdirectories following App Router patterns
  - `app/layout.tsx` for layouts (applies to subdirectories)
  - `app/page.tsx` for route pages
  - `app/[dynamic]/page.tsx` for dynamic routes

## Code Patterns & Conventions

### Component Structure (from `app/layout.tsx` & `app/page.tsx`)
```tsx
// ✓ Functional components with default export
export default function Home() {
  return <div>...</div>
}

// ✓ Metadata at top of layout files
export const metadata: Metadata = {
  title: "...",
  description: "..."
}

// ✓ Use Next.js Image component for optimization
import Image from "next/image"
<Image src="/path.svg" alt="description" width={100} height={20} priority />
```

### Styling
- **Tailwind CSS**: Inline utility classes on all elements (see `page.tsx` for examples)
- **Dark mode**: Use `dark:` prefix for dark theme variants (e.g., `dark:bg-black`)
- **Responsive**: Use `sm:` breakpoint prefix (e.g., `sm:items-start`)
- **CSS**: Global styles in `app/globals.css`; no CSS modules currently used

### TypeScript Configuration
- `strict: true` - enforce strict type checking
- Target ES2017, moduleResolution "bundler"
- No `noEmit` conflicts - use standard TSC checking

## Git & Deployment
- Repository: `.git/` present (local git history available)
- No CI/CD files yet (GitHub Actions not configured)
- No environment files (`.env.local` not present in repo)

## Critical Integration Points
- **Next.js Image Optimization**: Always use `next/image` for static images in `public/`
- **Font Loading**: Geist fonts already configured in `layout.tsx`; don't duplicate
- **Environment Variables**: Add to `.env.local` (not in version control) for local dev

## Common Tasks & Patterns

### Adding a New Page
1. Create `app/[pagename]/page.tsx`
2. Export default functional component
3. Add to ESLint checks automatically
4. Styling: Use Tailwind utility classes

### Creating Reusable Components
1. Create in appropriate `app/` subdirectory
2. Use TypeScript interfaces for props
3. Import with path alias: `import { Component } from "@/app/components/..."`
4. Export named export + use in other components

### Running ESLint
- Current config uses Next.js core-web-vitals + TypeScript rules
- Fix auto-fixable issues: `npx eslint --fix`

## Known Dependencies & Versions
- React 19.2.0 (latest, uses new JSX transform)
- Next.js 16.0.4 (latest stable)
- Tailwind CSS v4 (with new @apply syntax if needed)

## Debugging Tips
- Dev server auto-rebuilds on file changes
- Check `next-env.d.ts` (auto-generated - don't edit)
- `.next/` is build cache - safe to delete
- Type errors visible immediately in dev mode
