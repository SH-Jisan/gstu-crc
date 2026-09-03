# 13. Development Plan & Sprint Milestones

> **Document Code**: `CRC-DOC-13`  
> **Methodology**: Agile Sprints with Strict Verification & Automated Testing  
> **Status**: APPROVED  

---

## 13.1 Milestone Roadmap Breakdown

```mermaid
gantt
    title CRC Platform Engineering Roadmap
    dateFormat  YYYY-MM-DD
    section Phase 1 & 2
    Inception, Specs & Multi-Format Docs   :done, p1, 2026-09-01, 2026-09-03
    System Architecture & DB Design       :active, p2, 2026-09-03, 2026-09-04
    section Sprint 1: Monorepo Foundation
    Backend Nest.js Setup & Prisma        :s1, 2026-09-05, 2026-09-07
    Frontend Next.js 15 & Tokens          :s2, 2026-09-06, 2026-09-08
    section Sprint 2: Core Domain APIs
    Council & Member Directory API        :s3, 2026-09-09, 2026-09-11
    Excel Engine (exceljs) & Drive Sync   :s4, 2026-09-11, 2026-09-13
    section Sprint 3: Public Portal UI
    Navbar, Hero, Programs & Hatekhori    :s5, 2026-09-14, 2026-09-17
    Donation Engine & Receipt Generator   :s6, 2026-09-17, 2026-09-20
    section Sprint 4: Safeguarding & Audits
    Report a Concern & Transparency Hub   :s7, 2026-09-21, 2026-09-23
    section Sprint 5: QA & Launch
    5-Vector Review & Puppeteer E2E       :s8, 2026-09-24, 2026-09-26
    Production Vercel/Render Hardening    :s9, 2026-09-26, 2026-09-28
```

---

## 13.2 Sprint Deliverables Table

| Sprint | Focus Area | Key Deliverables | Verification Gateway |
| :--- | :--- | :--- | :--- |
| **Sprint 1** | Monorepo Scaffolding | `backend/` (Nest.js + Prisma) + `frontend/` (Next.js 15). | Local dev servers build with zero errors. |
| **Sprint 2** | Enterprise APIs & Excel | Council API, Branch API, `exceljs` dynamic streaming, Google Drive background sync. | Swagger tests pass (`/api/docs`), generated Excel verified. |
| **Sprint 3** | Core Public Web UI | Design system layout, Navbar, Hero, Hatekhori School page, Donation UI with bKash/Nagad. | Mobile & Desktop responsive layout audit $\ge 90$. |
| **Sprint 4** | Promises & Audits | "Report a Concern" encrypted form, Financial Transparency center with PDF downloads. | Whistleblower encryption & email notification verified. |
| **Sprint 5** | Production & QA | 5-Vector review, Puppeteer E2E tests, domain `gstu-crc.org` SSL, Google Search Console. | Core Web Vitals $\ge 90$, 3-tier backup tested. |
