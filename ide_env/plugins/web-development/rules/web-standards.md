---
name: web-standards
description: Modern web development standards covering rich aesthetics, responsive design, semantic HTML, modern CSS, Web Vitals, and state management.
trigger: contextual
---

# Web Development Standards

## 1. Aesthetic Excellence & Modern UI
- **Curated Color Palettes**: Use harmonious HSL/Tailwind palettes with purposeful contrast ratios (WCAG AA minimum 4.5:1). Never use plain primary colors.
- **Fluid Typography**: Employ clamp-based responsive scales (`font-size: clamp(...)`) with modern web typography (Inter, Outfit, Plus Jakarta Sans).
- **Surface Elevation & Glassmorphism**: Utilize subtle backdrop blurs, soft multi-layer box shadows, and 1px translucent borders (`rgba(255,255,255,0.08)`).
- **Micro-Animations**: Enhance interactivity with smooth transitions (150-250ms cubic-bezier), hover states, and loading skeletons. Avoid jarring instant state snaps.
- **Zero Placeholders**: Never leave broken image links or `lorem ipsum`. Generate real demonstration assets or production-ready SVGs.

## 2. Responsive & Semantic Architecture
- **Mobile-First Layouts**: Design for mobile viewport boundaries first, expanding gracefully via CSS Grid and Flexbox up to ultrawide desktops.
- **Semantic HTML5**: Always use `<main>`, `<nav>`, `<article>`, `<section>`, `<header>`, `<footer>`, `<aside>`, and `<dialog>`.
- **Accessibility (a11y)**: Ensure keyboard navigation (`tabindex`, focus rings), ARIA landmarks, explicit form labels, and descriptive alt attributes.
- **SEO Discipline**: Inject unique `<title>`, `<meta name="description">`, OpenGraph tags, canonical URLs, and structured JSON-LD data.

## 3. Performance & Core Web Vitals
- **LCP (Largest Contentful Paint)**: Preload critical above-the-fold hero images and modern web fonts (`font-display: swap`).
- **CLS (Cumulative Layout Shift)**: Always provide explicit `width` and `height` (or `aspect-ratio`) on images, videos, and embed containers.
- **INP (Interaction to Next Paint)**: Defer heavy computations from the main thread using Web Workers or debounced input listeners.
- **Bundle Hygiene**: Prefer native browser APIs before importing third-party micro-packages. Use tree-shaking and dynamic imports (`React.lazy`).

## 4. Frontend State Management
- **Single Source of Truth**: Separate server state (React Query / SWR) from client UI state (Zustand, Context).
- **Predictable Data Flow**: Keep components purely presentational where possible, lifting state up to custom hooks or container controllers.
