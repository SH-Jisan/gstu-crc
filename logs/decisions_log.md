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
---

### [ADL-020] Full-Width Mega Dropdown Menu Architecture (ICRC Reference Style)
- **Date**: 2026-09-11
- **Context**: Standard floating dropdowns (`min-w-[240px]`) were compact and lacked narrative context, making it harder for users to comprehend the breadth of CRC's mission pillars, school structure, and regional branches. The user requested transforming the navigation into a full-width Mega Dropdown Menu modeled directly after the International Committee of the Red Cross (ICRC) website.
- **Decision**:
  - Implement a full-width mega menu container (`absolute left-0 right-0 top-full w-full bg-white shadow-2xl border-b z-40`) attached to the Main Navigation Bar, spanning the entire screen width directly below the signature red border line.
  - Adopt a 2-zone information architecture:
    - **Spotlight Column (Left, ~300px)**: Large headline, mission description, and outlined rounded-pill call-to-action button (e.g. *"Discover who we are"*, *"Explore all programs"*).
    - **Vertical Hairline Divider**: `w-px bg-gray-200/80` providing crisp visual separation.
    - **Multi-Column Category Grid (Right)**: 3 to 4 columns displaying bold category titles with chevrons (`ChevronRight`) and 2-line informative descriptions guiding users to relevant subpages and hash anchors.
  - Implement a 180ms hover debounce timer (`timeoutRef`) to eliminate premature menu closing or flickering as users transition their mouse across nav links and into the drawer.
  - Set active text color highlighting (`text-[#e6000a]`) for nav items whose mega menu is active.
  - Retain accordion-style navigation in the mobile drawer (`xl:hidden`) for optimal usability on touch screens.
- **Status**: Accepted & Implemented.
---

### [ADL-021] Smooth Minimalist Hover Micro-Interactions (Navbar & Mega Menu)
- **Date**: 2026-09-11
- **Context**: Following the implementation of the full-width Mega Dropdown Menu, the navigation felt static upon hovering. The user requested adding a "smooth minimalist hover animation", specifically targeted at the Navbar links and Mega Dropdown cards.
- **Decision**:
  - **Left-to-Right Underline Indicator**: Implement an expanding red bar (`h-[2.5px] bg-[#e6000a] scale-x-0 group-hover/nav:scale-x-100 origin-left transition-all duration-300 ease-out`) positioned on the bottom edge of desktop nav links. It persists at `scale-x-100 opacity-100` when the item's mega menu is open, creating a strong anchor between the link and the opened drawer.
  - **Minimalist Vertical Accent & Text Glide for Category Cards**: Avoid heavy card hover effects or stark color shifts. Instead, utilize a vertical red accent pill (`w-1 bg-[#e6000a] scale-y-0 group-hover/col:scale-y-100 origin-center transition-all duration-300 ease-out`) aligned to the left of each category column, accompanied by a subtle rightward text glide (`group-hover/col:translate-x-1.5 duration-300 ease-out`) and faint background tint (`hover:bg-red-50/40`).
  - **Micro-Interactions on Interactive Controls**:
    - Add forward chevron nudging (`translate-x-1`) on both the category link chevrons and the Spotlight pill CTA button.
    - Provide subtle vertical elevation (`hover:-translate-y-0.5`) on cards and the pill CTA to communicate tactile responsiveness.
- **Status**: Accepted & Implemented.
---

### [ADL-022] Curtain Slide-Down & Slide-Up Architecture for Mega Dropdown
- **Date**: 2026-09-11
- **Context**: The user requested that the mega dropdown menu smoothly descend from top to bottom when opening, and smoothly ascend from bottom to top when closing ("mega dropdown menu ta smoothly upor theke niche nambe abr smothly niche theke upore uthe jabe erokom animation daw").
- **Decision**:
  - **Clip-Path Curtain Framing**: Wrap the mega menu in an outer container (`.mega-menu-wrapper`) using `clip-path: inset(0 -60px -120px -60px)`. This strictly clips any pixels that attempt to rise above the navbar's bottom red border (`top: 0`), preventing them from overlapping the navbar, while allowing soft drop shadows on the bottom and sides to render unclipped.
  - **Bi-Directional Slide Interpolation**:
    - **Slide Down (Entrance)**: Translate from `-100%` (`translate3d(0, -100%, 0)`) down to `0` over 380ms with `cubic-bezier(0.16, 1, 0.3, 1)` easing. The menu visually emerges from behind the navbar line.
    - **Slide Up (Exit)**: Translate from `0` back up to `-100%` over 320ms with `cubic-bezier(0.4, 0, 0.2, 1)` easing. The menu pulls back up into the navbar line before hiding.
  - **Delayed Visibility for Clean Unmounting**: When `.is-open` is toggled off, `visibility: hidden` is delayed by 350ms, allowing the entire slide-up animation to complete smoothly in view before becoming invisible.
  - **Tab Crossfade Stability**: When switching between active nav items (e.g. "About CRC" to "Programs"), `.is-open` remains active so the drawer does not re-slide; only the internal content cross-fades smoothly via `.animate-mega-content`.
- **Status**: Accepted & Implemented.
---

### [ADL-023] CSS Grid Stacking & Direction-Aware Horizontal Tab Transitions
- **Date**: 2026-09-11
- **Context**: When hovering directly from one navbar option to another (e.g., from "About CRC" to "Programs & Activities"), the previous menu content snapped away instantaneously with no smooth transition, which the user found abrupt ("navbar e jokhn ami ekta option theke onno option e hover korsi direct tokhn sathe sathe mega menu ta change hosse. eytai ekta smooth minimul transition animation add kora jai na?").
- **Decision**:
  - **CSS Grid Stacking Architecture**: Arrange all 5 mega menu panes in the exact same cell (`col-start-1 row-start-1 w-full`) of a single CSS grid container (`grid grid-cols-1 grid-rows-1 items-start`). This avoids dynamic React component unmounting and ensures zero-gap simultaneous interpolation.
  - **Direction-Aware Horizontal Glide**:
    - Compute relative navigation index (`activeIdx = megaMenuKeys.indexOf(activeMegaKey)`).
    - If a tab index is before the active index (`index < activeIdx`), apply `-translate-x-6 opacity-0`.
    - If a tab index is after the active index (`index > activeIdx`), apply `translate-x-6 opacity-0`.
    - Active tab sits at `translate-x-0 opacity-100`.
    - When mouse traverses links, outgoing content glides 24px and dissolves while incoming content glides in from the opposite side simultaneously over `300ms cubic-bezier(0.16, 1, 0.3, 1)`.
- **Status**: Accepted & Implemented.
---

### [ADL-024] Modular Data Architecture, Dead Code Elimination & Viewport Spacing
- **Date**: 2026-09-11
- **Context**: As features and constitutional documentation expanded, file sizes in `JaagoNavbar.tsx` (27.4 KB) and `about/page.tsx` (42.9 KB) grew excessively large with hundreds of lines of inlined static data. Additionally, 14 dead component files lingered in `src/components/`, while subpages exhibited tight clearances with fixed navbar elements on small screens.
- **Decision**:
  - **Data Modularization**: Extract static configurations, navigation trees, and constitutional content into dedicated data modules (`src/data/navigation.ts`, `src/data/aboutData.ts`). Keep React components focused strictly on presentation and state handling.
  - **Dead Code Purge**: Delete all 14 superseded legacy components from `src/components/` to prevent cognitive overhead and build clutter.
  - **Viewport Clearance Guarantee**: Expand top padding on `PageHeader.tsx` to `pt-40 sm:pt-44` (160px–176px), ensuring comfortable visual breathing space below both the main navbar (72px) and the sticky breadcrumb sub-bar (36px).
  - **Event-Driven Dropdown Synchronization**: Eliminate synchronous `setState` in `useEffect` for `displayedMenuKey`, switching to direct synchronous assignment within `handleMouseEnterItem` for zero cascading renders and complete React 19 strict linter compliance.
- **Status**: Accepted & Implemented.
---

### [ADL-025] High-Fidelity Asset Downsampling & Dual-Tier App Router Favicon Architecture
- **Date**: 2026-09-12
- **Context**: The user requested that the official logo from `public/logo/` be integrated into the navigation bar, resized if necessary to prevent layout or performance issues, and configured as the official website favicon and app icon ("public folder er vitore dekho logo folder ache. oi logo ta navbar e replace koro. logo er size er somossa thakle logo resize kore generate koro. also website er icon taw o oi logo diye replace koro.").
- **Decision**:
  - **High-Fidelity Resampling Pipeline**:
    - The master source `frontend/public/logo/logo.png` is a 1254x1254, 842.5 KB high-resolution RGBA PNG.
    - Directly embedding 842 KB into the fixed navbar would trigger excessive bandwidth consumption and compromise LCP (Largest Contentful Paint).
    - Used PIL's anti-aliasing `Resampling.LANCZOS` filter to generate `logo-navbar.png` at 128x128 px (16 KB, >98% payload compression) while preserving sharp edges on 2x/3x Retina viewports.
  - **Multi-Resolution Dual-Tier Icon Architecture**:
    - **App Router Conventional File-System Routing**: Placed `icon.png` (192x192), `apple-icon.png` (180x180), and multi-tier `favicon.ico` (16x16, 32x32, 48x48, 64x64) directly in `src/app/`. Next.js automatically detects and serves these with cache busting headers.
    - **Public Fallback Tier**: Mirrored the icon files into `frontend/public/` so direct static requests (e.g. `/favicon.ico` requested by external bots, bookmarks, and RSS readers) resolve reliably with HTTP 200.
    - **Metadata Declaration**: Explicitly configured the `icons` attribute in `RootLayout` (`frontend/src/app/layout.tsx`) ensuring standard HTML `<link rel="icon">`, `<link rel="apple-touch-icon">`, and `<link rel="shortcut icon">` tags are injected into every document head.
  - **Cross-Component Brand Cohesion**:
    - Extended brand integration to `frontend/src/components/Footer.tsx`, replacing the legacy generic red `CRC` box with the official circular emblem to ensure 100% brand consistency throughout the application.
- **Status**: Accepted & Implemented.
---

### [ADL-026] Total Purge of "Jaago" Legacy Artifacts & Semantic Component Normalization
- **Date**: 2026-09-12
- **Context**: The user identified that naming components `JaagoNavbar`, `JaagoFooter`, etc., in a Come for Road Child (CRC) project is unprofessional, confusing to contributors, and compromises code maintainability ("remove the 'jaago' name from everything. this is crc not jaago and file name erokom howa taw professional na amr joto tuku knowledge,correct me if i am wrong.").
- **Decision**:
  - **Eliminate Misleading Prefixes**: Refactored all components to clean, standard React/Next.js semantic names:
    - `JaagoNavbar` -> `Navbar` (`Navbar.tsx`)
    - `JaagoFooter` -> `Footer` (`Footer.tsx`)
    - `JaagoSponsorChild` -> `SponsorChildSection` (`SponsorChildSection.tsx`)
    - `JaagoFocusAreas` -> `FocusAreasSection` (`FocusAreasSection.tsx`)
    - `JaagoVolunteerism` -> `VolunteerismSection` (`VolunteerismSection.tsx`)
  - **Self-Contained Local Assets**: Replaced external image hotlinks (`jaago.com.bd/...`) in `SponsorChildSection` with authentic local CRC assets (`/assets/school.jpg`) loaded via optimized Next.js `<Image fill ... />`.
  - **CSS Scoping Hygiene**: Cleaned up legacy `.jaago-` CSS classes in `globals.css`, re-scoping them under `.crc-` utilities to prevent stale class dependencies.
  - **Zero-Residual Invariant**: Verified via exhaustive regex grep that `jaago` has been 100% eradicated from `frontend/src/`.
- **Status**: Accepted & Implemented.
---

### [ADL-027] Full-Stack Next.js Image Optimization & Remote Pattern Configuration
- **Date**: 2026-09-12
- **Context**: The user requested that the codebase be analyzed and all warnings be fixed ("codebase ta analze koro and ja ja warning ache segula fix koro ."). ESLint identified 7 instances of `@next/next/no-img-element`.
- **Decision**:
  - **Remote Pattern Allowlist**: Added `images.unsplash.com` to `frontend/next.config.ts` under `images.remotePatterns` to safely support high-definition volunteer and advisor avatars.
  - **Zero-Layout-Shift Picture Pipeline**: Replaced all raw HTML `<img>` elements in `UnifiedHeroSection.tsx`, `RecentActivitiesSection.tsx`, and `members/page.tsx` with Next.js `<Image />`:
    - Responsive `fill` with explicit `sizes` property to avoid excessive bandwidth consumption on mobile viewports.
    - Automatic WebP/AVIF generation, prefetching, and priority loading for the above-the-fold CRC hero banner.
  - **Strict Lint Compliance**: Achieved a 100% warning-free codebase with 0 ESLint warnings and 0 TypeScript compilation errors.
- **Status**: Accepted & Implemented.

