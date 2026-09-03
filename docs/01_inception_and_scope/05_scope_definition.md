# 5. Scope Definition & Boundary Specification

> **Document Code**: `CRC-DOC-05`  
> **Status**: APPROVED  

---

## 5.1 In-Scope Deliverables (Core Release)

1. **Public Web Portal (Next.js 15)**:
   - Complete 9-module IA (Happening Now, Who We Are, Our Work, Our People, Get Involved, Our Promises, Resources & Updates, Our Stories, Contact).
   - High-ranking SEO architecture targeting `"gstu crc"` and related keywords for domain `gstu-crc.org`.
   - Responsive, dark/light theme, accessible (WCAG 2.1 AA) UI components with micro-animations.

2. **Enterprise Backend & REST API (Nest.js)**:
   - Authentication & Role-Based Authorization (SuperAdmin, CouncilAdmin, BranchCoordinator).
   - Dynamic donation flow and "Support a Child" sponsorship engine.
   - Child safeguarding "Report a Concern" submission pipeline.
   - Real-time `.xlsx` export engine using `exceljs` for council and general member rosters.
   - Automated Google Drive mirroring service for uploaded PDFs and generated spreadsheets.

3. **Storage & Data Protection**:
   - Cloudinary integration for optimized photo uploads.
   - Supabase PostgreSQL schema with Prisma ORM.
   - 3-Tier Disaster Recovery (Supabase daily snapshots + Nightly `pg_dump` to Google Drive + One-click Admin export).

---

## 5.2 Out-of-Scope (Deferred to Future Phases)
- Standalone Native Mobile Applications (iOS / Android) — deferred to Phase 2 after web stability, though Nest.js REST API is pre-architected to support them immediately.
- Real-time P2P chat room among volunteers — deferred; communication remains via official branch channels and announcements.
