# 3. Technical & Operational Feasibility Study

> **Document Code**: `CRC-DOC-03`  
> **Status**: APPROVED  

---

## 3.1 Technical Feasibility
- **Frontend Architecture**: Next.js 15 (React 19, TypeScript) is technically optimal for dynamic SSR/SSG, allowing full indexing by Google search engines for `gstu-crc.org` and instant social sharing previews.
- **Backend Architecture**: Nest.js provides enterprise-grade modularity, TypeScript type-safety, and Swagger OpenAPI generation.
- **Database & Persistence**: Supabase PostgreSQL easily accommodates 500,000+ relational records within free/standard operational thresholds.
- **Document & Media Storage**: Cloudinary (for auto-WebP photos) combined with Supabase Storage (for public PDFs) and automated Google Drive background synchronization fulfills all media requirements without performance bottlenecks.

---

## 3.2 Economic & Operational Feasibility
- **Infrastructure Cost**:
  - Frontend Hosting on Vercel: **$0 / month** (Lifetime generous free tier).
  - Backend Hosting on Render: **$0 / month** (Keep-alive ping via UptimeRobot prevents sleep state).
  - Database on Supabase: **$0 / month** (Free tier covers 500MB DB, 1GB storage).
  - Media on Cloudinary: **$0 / month** (25GB monthly transformations/storage).
  - Google Drive Backup: **$0 / month** (Uses organization Google Drive storage).
  - Custom Domain (`.org`): ~$10 - $12 / year (Standard annual registration).
- **Total Operational Overhead**: **Near-Zero ($0 maintenance fees outside standard domain renewal)**.

---

## 3.3 Security & Compliance Feasibility
- Strict OWASP Top 10 mitigation:
  - Class-validator DTOs prevent SQL and Command Injection.
  - Role-Based Access Control (RBAC) protects admin endpoints.
  - 3-Tier Disaster Recovery (Supabase daily snapshots + Nightly `pg_dump` to Google Drive + One-click Admin manual export) guarantees business continuity.
