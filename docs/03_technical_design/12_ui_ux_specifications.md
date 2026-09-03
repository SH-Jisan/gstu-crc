# 12. UI/UX Design System, Tokens & Aesthetics

> **Document Code**: `CRC-DOC-12`  
> **Status**: APPROVED  
> **Design Philosophy**: Emotionally Resonant, Dignified Human Connection, Crystal Transparency, Modern Glassmorphism  

---

## 12.1 Curated Color Palette (HSL Tailored)

The CRC color system is engineered to evoke trust, empathy, humanitarian warmth, and modern authority—avoiding generic primary colors:

```css
:root {
  /* Brand Core: Deep Humanitarian Navy & Compassion Amber */
  --primary-navy: hsl(215, 65%, 18%);         /* Trust, Institutional Stability */
  --primary-blue: hsl(212, 85%, 45%);         /* Clean Action & Connectivity */
  --accent-amber: hsl(38, 92%, 50%);          /* Warmth, Childhood Hope, Energy */
  --accent-emerald: hsl(158, 64%, 40%);       /* Growth, Welfare, Verification */
  --danger-crimson: hsl(352, 75%, 52%);       /* Safeguarding, Urgent Need */

  /* Neutral Surface Tones (Dark & Light) */
  --surface-canvas: hsl(210, 25%, 98%);       /* Light mode background */
  --surface-card: hsl(0, 0%, 100%);           /* Pristine card surface */
  --surface-border: hsl(214, 20%, 90%);       /* Subtle borders */
  --text-primary: hsl(218, 40%, 14%);         /* Maximum readability text */
  --text-secondary: hsl(215, 16%, 45%);       /* Subtle subtext */

  /* Dark Mode Surfaces */
  --dark-canvas: hsl(222, 47%, 8%);
  --dark-card: hsl(222, 40%, 12%);
  --dark-border: hsl(217, 32%, 18%);
  --dark-text-primary: hsl(210, 40%, 98%);
}
```

---

## 12.2 Typography Hierarchy

- **Headings Font**: `Plus Jakarta Sans` or `Outfit` (Bold, modern geometric, inspiring).
- **Body Font**: `Inter` (Universal legibility, optimized for responsive digital reading).
- **Bangla Typeface**: `Hind Siliguri` (Flawless optical balance alongside English headers).

```css
/* Typography Scale */
--text-xs:   0.75rem;  /* 12px - Captions, tags */
--text-sm:   0.875rem; /* 14px - Auxiliary metadata */
--text-base: 1.00rem;  /* 16px - Core body */
--text-lg:   1.125rem; /* 18px - Lead paragraphs */
--text-xl:   1.25rem;  /* 20px - Subheadings */
--text-2xl:  1.50rem;  /* 24px - Section headers */
--text-3xl:  1.875rem; /* 30px - Major titles */
--text-4xl:  2.25rem;  /* 36px - Hero sub-headers */
--text-5xl:  3.00rem;  /* 48px - Hero display headlines */
```

---

## 12.3 Component Elevation & Micro-Animations

1. **Glassmorphism Header**:
   - `backdrop-filter: blur(12px)` with subtle `rgba(255, 255, 255, 0.8)` tint and bottom border glow.
2. **Card Hover Dynamics**:
   - `transform: translateY(-4px)` with spring transition `cubic-bezier(0.16, 1, 0.3, 1)` and ambient soft drop-shadow.
3. **Donation Counter Animation**:
   - Smooth numeric tallying when scrolling into viewport (powered by Framer Motion).
4. **Child Safeguarding Visual Ethics**:
   - Strictly positive, inspiring, and dignified visual narratives. No degrading or sensationalized distress depictions.
