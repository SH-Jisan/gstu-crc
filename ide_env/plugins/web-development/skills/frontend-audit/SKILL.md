---
name: frontend-audit
description: Comprehensive audit rubric for web applications covering responsive layout, Core Web Vitals, accessibility (a11y), and frontend security.
---

# Frontend Audit & Quality Rubric

Execute this structured audit to ensure web applications achieve production-grade performance, visual excellence, and standards compliance.

## 1. Visual & Responsive Inspection
- [ ] Viewport Breakpoints: Validate layout at 375px (mobile), 768px (tablet), 1024px (laptop), and 1440px (desktop).
- [ ] Overflow Check: Ensure `body` has zero horizontal scroll leakage (`overflow-x: hidden` / container constraints).
- [ ] Contrast Ratio: Text meets WCAG AA (minimum 4.5:1 for normal text, 3:1 for large headings).
- [ ] Touch Targets: Interactive buttons and links have at least 44x44px clickable target areas.

## 2. Core Web Vitals Audit
- [ ] Image Optimization: Modern formats (WebP/AVIF), responsive `srcset`, and `loading="lazy"` for below-the-fold assets.
- [ ] CSS Delivery: Critical styles inlined or prioritized; unused utility bloat purged.
- [ ] Font Performance: Preloaded variable fonts with `font-display: swap` to prevent Flash of Invisible Text (FOIT).

## 3. Accessibility & SEO Verification
- [ ] Semantic Hierarchy: Exactly one `<h1>` per page, followed by logical `<h2>`-`<h6>` structure without skipped levels.
- [ ] Form Inputs: Every form input has an associated `<label for="...">` or `aria-label`.
- [ ] Focus Management: Modal dialogs trap focus on open and restore focus on dismiss.
- [ ] Meta Tags: Title, meta description, and social graph previews verified for all public routes.
