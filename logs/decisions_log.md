# Architectural & Project Decisions Log (ADL)

Record of key decisions, trade-offs evaluated, and consensus reached between user and agent.

---

## 📑 Decisions Index

### [ADL-001] Professional Logging & Documentation Protocol
- **Date**: 2026-09-03
- **Context**: Need a robust, localized way to maintain session logs, change history, and engineering context so that another developer or Antigravity instance on another PC can seamlessly take over.
- **Decision**: Established a centralized `logs/` directory with `session_logs.md`, `implementation_history.md`, and `decisions_log.md` alongside formal project specs in `docs/specifications/` and `docs/architecture/`.
- **Status**: Accepted & Implemented.

---

### [ADL-002] Multi-Phase Industry Lifecycle Workflow
- **Date**: 2026-09-03
- **Context**: Need to execute the full CRC website development from scratch to production with agency-grade rigor.
- **Decision**: Adopted 9-phase lifecycle (Discovery -> Architecture -> Design System -> Scaffolding -> Modular Sprints -> Code Review/QA -> E2E Browser Testing -> Production Hardening -> Handover) mapped to Antigravity rules, skills, and MCP servers.
- **Status**: Accepted & in progress.

---

### [ADL-003] Production Stack, Domain & Hosting Strategy
- **Date**: 2026-09-03
- **Context**: Decoupled enterprise architecture requirement with zero-cost hosting, high SEO performance for Google search ("gstu crc"), and custom `.org` domain.
- **Decision**:
  - **Frontend**: Next.js 15 (React 19, TypeScript) hosted on Vercel/Cloudflare with custom domain `https://gstu-crc.org` (Free Tier, 100% Free SSL, Native SSR/SSG for Google indexing).
  - **Backend**: Nest.js 10+ (REST API, Swagger, Class-Validator) hosted on Render (Free tier with health-check keep-alive ping).
  - **Database & Storage**: Supabase PostgreSQL & Storage (Free tier).
  - **Domain & SEO**: Domain `gstu-crc.org` with Google Search Console, JSON-LD Non-Profit schema, OpenGraph cards, and automated sitemap.
- **Status**: Formally Accepted by User.

---

### [ADL-004] Media, Document Storage & Google Drive Mirroring
- **Date**: 2026-09-03
- **Context**: Efficient asset management separating dynamic image transformations from persistent document storage, plus automated organization-wide Google Drive synchronization for non-technical leadership access.
- **Decision**:
  - **Images & Photos**: Cloudinary (Automatic WebP/AVIF compression, thumbnail generation, 25GB free tier).
  - **Documents, PDFs & Excel**: Supabase Storage (`documents` bucket with RLS).
  - **Automated Google Drive Sync**: Nest.js background service using Google Service Account API to automatically mirror newly created/updated documents, audit reports, and member Excel exports to a shared Google Drive folder.
- **Status**: Accepted & In-Plan.

---

### [ADL-005] Database Disaster Recovery (DR) & Automated Backup Strategy
- **Date**: 2026-09-03
- **Context**: Ensure zero data loss in case of database corruption, provider outage, or accidental data deletion.
- **Decision**:
  - **Tier 1 (Built-in)**: Supabase daily automated snapshots.
  - **Tier 2 (Off-site Cloud Mirror)**: Scheduled cron job (`pg_dump`) exporting compressed `.sql.gz` backups directly to the secure Google Drive backup vault (`CRC_Website_Vault/Database_Backups/`) automatically every night.
  - **Tier 3 (On-Demand Admin Export)**: Dedicated "Export Full Database" button in the admin portal for instant local `.sql` snapshots before major content operations.
- **Status**: Accepted & In-Plan.

---

### [ADL-006] 17-Stage Enterprise Documentation Framework
- **Date**: 2026-09-03
- **Context**: Need a world-class, standardized software engineering documentation lifecycle that matches IEEE/ISO standards from problem formulation to maintenance.
- **Decision**: Adopted the formal 17-step documentation flow spanning Inception, SRS, Modeling, Architecture, Database/API Design, UI/UX Specs, Testing, Deployment, and Disaster Recovery. Organized modularly within `docs/`.
- **Status**: Formally Adopted by User.

---

### [ADL-007] Multi-Format Documentation Standard (.md, .docx, .txt)
- **Date**: 2026-09-03
- **Context**: Different audiences require tailored formats: developers need Git-versioned Markdown, non-technical executives/clients/auditors need formal Microsoft Word `.docx` documents, and operational scripts/checklists need `.txt`.
- **Decision**:
  - **Developer & Code Specs**: Markdown (`.md`) for Git diffing, GitHub rendering, and IDE preview (SRS, Architecture, DB Schema, API Specs, Test Plans).
  - **Executive, Client & Handover Documents**: Microsoft Word (`.docx`) generated automatically via `python-docx` for offline review, printing, executive council sign-offs, and user manuals (Project Charter, Proposal, Feasibility Study, Admin Manual).
  - **Checklists & Raw Configuration**: Plaintext (`.txt`) for deployment checklists, environment manifests, and quick reference cards.
  - **Automation**: System will continuously generate and update these multi-format files in lockstep with project milestones.
- **Status**: Formally Accepted by User.

---

### [ADL-008] Interactive Frontend Client Prototype Strategy (No-Backend Demo)
- **Date**: 2026-09-03
- **Context**: Need to present a live, visually captivating, and interactive demo of the website to CRC leadership and client stakeholders before backend integration, allowing them to test the user experience on mobile and desktop.
- **Decision**:
  - **Approach**: Build the interactive prototype directly using **Next.js 15 (React 19, Tailwind CSS, Framer Motion)** loaded with realistic mock JSON data matching the CRC constitution and structure.
  - **Zero Throwaway Code**: All demo components (Navbar, Hero, Programs, Council cards, Donation modal, Concern form) will become the production frontend once approved.
  - **Hosting**: Deployable to a free Vercel/Netlify staging URL (e.g. `crc-preview.vercel.app`) for client instant review.
- **Status**: Formally Adopted.

---

### [ADL-009] Git Branching Strategy & Branch Protection (Git Flow)
- **Date**: 2026-09-04
- **Context**: Prevent unstable or work-in-progress code from contaminating the production-ready `main` branch. Establish standard agency Git Flow.
- **Decision**:
  - **`main`**: Strictly protected production branch. Only receives code via reviewed Pull Requests (PR) or approved milestone merges. Connected to production domain (`gstu-crc.org`).
  - **`develop`**: Primary staging integration branch for fully verified features.
  - **`feature/*`**: Short-lived feature branches for specific tasks (e.g. `feature/frontend-client-demo`).
  - **Workflow**: Create `feature/frontend-client-demo` for the upcoming prototype. Once client approves, merge cleanly into `main` with milestone tag.
- **Status**: Formally Adopted.

---

### [ADL-010] Unified Brand Hybridization (`frontend` + `crc_loveable` Design Fusion)
- **Date**: 2026-09-09
- **Context**: Need to elevate the Next.js production frontend using the modern UI aesthetic, design tokens, and subpages developed in `crc_loveable` while maintaining established JAAGO animations, responsive structure, and Next.js SSR advantages.
- **Decision**:
  - Adopted a hybrid design system combining Crimson Red (`#e6000a`), Leaf Green (`#007938`), Obsidian Ink (`#0d0f14`), and the signature 105-degree angular dark slash band (`.slash-band`).
  - Upgraded Navbar to include the top announcement bar with core values and red bottom border.
  - Fully ported content from `crc_loveable` into Next.js App Router subpages (`/about`, `/school`, `/programs`, `/branches`, `/media`).
- **Status**: Accepted & Implemented.

---

### [ADL-011] Viewport-Adaptive Visual Asset Sizing (`100dvh` Constraint)
- **Date**: 2026-09-09
- **Context**: Large visual assets (like the official CRC GSTU Banner) were overflowing past the lower screen edge on standard laptop displays (1366x768), cutting off text and borders.
- **Decision**:
  - Replaced arbitrary min-heights with dynamic viewport calculation: `maxHeight: calc(100dvh - 136px)` combined with `object-contain` and tuned navbar padding.
  - Guarantees 100% of the banner remains visible within the initial browser viewing window across all devices and screen aspect ratios.
- **Status**: Accepted & Implemented.

---

### [ADL-012] Root-Level Modal Mounting & Isolated Stacking Contexts
- **Date**: 2026-09-10
- **Context**: Modals mounted inside `<main>` suffered from CSS stacking context collisions with fixed headers (`JaagoNavbar` with `z-50`) and child clipping when using negative margins inside `overflow-y-auto` scroll containers.
- **Decision**:
  - Mount all interactive full-screen modals at root level (outside `<main>`, after footer) with `z-[99999]` and `backdrop-blur-md`.
  - Decouple modal headers (avatar, identity, banners) from scrollable body containers (`overflow-y-auto`) so negative margins never result in avatar clipping.
  - Pin bottom action buttons in a sticky footer (`shrink-0 bg-gray-50 border-t`).
  - Safely wrap clipboard APIs in try-catch to avoid unhandled promise rejections in restricted browser environments.
- **Status**: Accepted & Implemented.

---

### [ADL-013] Constitutional Alignment & Static High-Impact Metrics
- **Date**: 2026-09-11
- **Context**: 
  1. The organization has an official 20-page constitution (`Vision-Mission-Objectives-Mode-of-Action.pdf`) defining its authentic origin story, 3 principles, 8 values, 5 missions, 5 objectives, 7 modes of action, 3-council governance, and child safeguarding promises.
  2. The dynamic count-up animation on the red stats strip caused jitter and user distraction on scroll.
- **Decision**:
  - Restructure About Us ([`/about`](../frontend/src/app/about/page.tsx)) and create a dedicated Our Promises page ([`/promises`](../frontend/src/app/promises/page.tsx)) directly based on the constitutional document.
  - Simplify [`StatsCounterBar.tsx`](../frontend/src/components/StatsCounterBar.tsx) to static, instant rendering (`1,200+`, `350+`, `6`, `180+`) without counting loops or scroll reset delays, ensuring immediate visual stability and accessibility.
- **Status**: Accepted & Implemented.

---

### [ADL-014] Semantic Breadcrumb Navigation & Schema.org JSON-LD Microdata
- **Date**: 2026-09-11
- **Context**: Subpages across the CRC Next.js application needed a consistent, accessible navigation trail to help users orient themselves and navigate back to parent routes or the homepage. Furthermore, Google Search SEO requires structured BreadcrumbList metadata for rich snippet breadcrumb rendering in search results.
- **Decision**:
  - Implement a centralized, reusable [`Breadcrumb.tsx`](../frontend/src/components/Breadcrumb.tsx) component using semantic `<nav aria-label="Breadcrumb">` and `<ol itemScope itemType="https://schema.org/BreadcrumbList">`.
  - Automatically inject a `<script type="application/ld+json">` with `schema.org/BreadcrumbList` microdata on every page utilizing the breadcrumb.
  - Reposition the breadcrumbs out of the inner hero banner into a dedicated full-width sub-bar (`pt-[101px] sm:pt-[106px] bg-[#f4f2ee] border-b border-gray-200/80 shadow-xs`) placed directly below the fixed navbar.
  - Adopt a clean inline `variant="bar"` typography with subtle campus metadata on the right (`GSTU Campus · Estd 2016`), ensuring zero visual gap below the navbar and crisp separation from the red hero section.
  - Embed the breadcrumb directly into [`PageHeader.tsx`](../frontend/src/components/PageHeader.tsx) with automatic fallback to page title (`Home > [Title]`) and hierarchical support (`Home > Parent > Current Page`) for multi-level paths (e.g. `/members`, `/school`).
- **Status**: Accepted & Implemented.

---

### [ADL-015] Landing Page Motion Elimination Below StatsCounterBar
- **Date**: 2026-09-11
- **Context**: Dynamic count-up intervals and AOS scroll animations across landing page sections caused layout jitter, delayed visual comprehension, and unnecessary CPU utilization during vertical scrolling. Following the removal of animation from `StatsCounterBar.tsx`, the user requested eliminating all animations from below that bar across the entire landing page, excluding the footer.
- **Decision**:
  - Remove all dynamic count-up loops (`IntersectionObserver`, `requestAnimationFrame`, state intervals) from [`JaagoSponsorChild.tsx`](../frontend/src/components/JaagoSponsorChild.tsx) and [`JaagoVolunteerism.tsx`](../frontend/src/components/JaagoVolunteerism.tsx).
  - Render static, instant metric values (`120`, `1,500+`, `10+`, `10,000+`) without counting delays or scroll reset effects.
  - Remove all `data-aos` scroll animations (`fade-up`, `zoom-out-up`, `data-aos-duration`, `data-aos-delay`) across `JaagoSponsorChild`, `JaagoFocusAreas`, `RecentActivitiesSection`, `StoriesSection`, `JaagoVolunteerism`, and `PartnersSection`.
  - Preserve [`JaagoFooter.tsx`](../frontend/src/components/JaagoFooter.tsx) untouched per explicit user constraint ("footer chara").
- **Status**: Accepted & Implemented.

---

### [ADL-016] Lenis Smooth Momentum Scrolling Integration
- **Date**: 2026-09-11
- **Context**: Default browser mouse wheel scrolling on Windows is discrete and stepped (~100px per wheel notch), producing abrupt jumps. The user requested a silky, momentum-based smooth scroll where the page gently glides downward during scrolling without any element entry animations.
- **Decision**:
  - Adopt industry-standard `lenis` smooth scroll engine via [`SmoothScroll.tsx`](../frontend/src/components/SmoothScroll.tsx) mounted globally in [`RootLayout`](../frontend/src/app/layout.tsx).
  - Configure exponential ease-out physics with `duration: 1.2` and damping curve `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`.
  - Import `lenis/dist/lenis.css` and remove native `scroll-behavior: smooth;` from `html` to eliminate easing conflicts and stuttering.
  - Retain native accessibility via `prefers-reduced-motion` detection and preserve independent modal scrolling with `data-lenis-prevent`.
- **Status**: Accepted & Implemented.

---

### [ADL-017] Fixed Navbar Breadcrumb Integration (Sticky On Scroll)
- **Date**: 2026-09-11
- **Context**: Previously, the breadcrumb bar resided inside individual page body headers, causing it to scroll away under the fixed navbar as users scrolled down. The user requested keeping the breadcrumb permanently fixed together with the navbar so it never hides on scroll.
- **Decision**:
  - Encapsulate the breadcrumb sub-bar directly into the fixed `<header id="jaagonavbar">` component in [`JaagoNavbar.tsx`](../frontend/src/components/JaagoNavbar.tsx), attaching it directly below the main white navbar bar.
  - Automate route-to-breadcrumb resolution via `usePathname()` so all subpages seamlessly inherit their appropriate breadcrumb trail without manual prop drilling.
  - Automatically suppress the breadcrumb bar on the home route (`/`).
  - Eliminate the duplicate in-page breadcrumb bar from [`PageHeader.tsx`](../frontend/src/components/PageHeader.tsx) and calibrate section padding to `pt-36 sm:pt-40`, providing clean visual spacing beneath the fixed header stack.
- **Status**: Accepted & Implemented.
---

### [ADL-018] Navbar Dropdown Stacking Context & Overlap Resolution
- **Date**: 2026-09-11
- **Context**: In `JaagoNavbar.tsx`, the sub-navbar breadcrumb strip utilizes `backdrop-blur-md`, which creates a distinct CSS stacking context. Because the main navigation bar container lacked an explicit higher z-index stacking context, the breadcrumb strip was rendering on top of the dropdown menus (`top-full`) when users hovered over navbar options (e.g., "About CRC", "Programs & Activities"). This caused the breadcrumb to overlap the options, slicing off dropdown items and hindering user interaction ("breadcrumb navbar er option gular upor diye overlap korse").
- **Decision**:
  - Assign `relative z-30` to the Main Navigation Bar container (`div 2`), ensuring that all dropdown menus (`z-50`) and search popovers establish their stacking hierarchy strictly above sibling sub-bars.
  - Assign `relative z-10` to the Sub-Navbar Breadcrumb Strip (`div 3`), preventing it from overlapping any active dropdown, modal, or navigation controls while maintaining its fixed position beneath the main navbar.
- **Status**: Accepted & Implemented.
---

### [ADL-019] Minimalistic Staggered Motion & Micro-Interactions in Focus Areas
- **Date**: 2026-09-11
- **Context**: The user wanted to keep all other landing page sections static as previously configured, but requested adding a refined, minimalistic animation specifically to the Focus Areas section that triggers reliably every time the user scrolls to it.
- **Decision**:
  - Implement a subtle scroll entrance using `data-aos="fade-up"` with `data-aos-once="false"` and gentle staggered timing (`delay: 80ms` increments), allowing the red title card and the 5 focus cards to glide in gracefully every time the user scrolls to the section.
  - Enrich the red title card with a decorative ambient background circle (`w-36 h-36 bg-white/[0.08]`) that softly expands (`scale-125`) on hover.
  - Implement interactive micro-animations on card hover: the icon gently scales and rotates slightly (`scale-110 rotate-3`), and Lucide's `ArrowRight` glides smoothly forward (`translate-x-1.5`) alongside the existing red background sweep.
  - Leave all other landing page sections strictly untouched.
- **Status**: Accepted & Implemented.
