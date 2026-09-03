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
