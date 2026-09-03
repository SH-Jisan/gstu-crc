# 6. Software Requirements Specification (SRS)

> **Standard**: IEEE 830-1998 / ISO/IEC/IEEE 29148:2018  
> **System Name**: Come for Road Child (CRC) Web Platform  
> **Target Domain**: `https://gstu-crc.org` | API: `https://api.gstu-crc.org`  
> **Version**: 1.0 (Formal Engineering Baseline)  

---

## 1. Introduction

### 1.1 Purpose
This document provides the definitive specification of functional and non-functional requirements for the **CRC Official Web Platform**. It establishes the contract between CRC leadership, developer teams, and auditing stakeholders.

### 1.2 Scope of Product
The system is a decoupled web application comprising:
- A high-performance **Next.js 15 SSR Frontend** serving public visitors, donors, volunteers, and beneficiaries.
- A secure **Nest.js Enterprise REST API** powering business logic, database transactions, automated Excel reporting, and Google Drive synchronization.

---

## 2. Functional Requirements (FR)

### FR-01: Donation & Child Sponsorship Processing
- **FR-01.1**: The system shall provide a multi-tier donation interface supporting General Fund, Emergency Relief, and "Support a Child" (Educational Sponsorship).
- **FR-01.2**: Donors shall be able to enter donor details, select frequency (One-Time / Monthly), choose payment mode (bKash, Nagad, Bank Transfer, Stripe/Card), and input transaction verification details (TrxID).
- **FR-01.3**: Upon verification, the system shall dynamically generate a tamper-evident digital donation receipt (PDF) with verification QR code.

### FR-02: Three-Tier Governance & Leadership Hierarchy
- **FR-02.1**: The system shall render structured profiles for the **Permanent Council**, **Executive Council**, and **Temporary Council** as specified in the CRC Constitution.
- **FR-02.2**: Each profile card shall display Name, Designation, Photo (Cloudinary), Branch, Term Duration, and social/contact links.
- **FR-02.3**: Council members shall be filterable by year, council category, and branch.

### FR-03: Program & Impact Showcase (Hatekhori School)
- **FR-03.1**: The system shall host dedicated dynamic pages for CRC's flagship educational program: **Hatekhori School** (founded 2017).
- **FR-03.2**: Display live impact metrics: Children enrolled, volunteers engaged, winter clothes distributed, and relief packages delivered.
- **FR-03.3**: Interactive SVG/Leaflet branch map showing active chapters across universities (GSTU, Khulna Central, IU, BU, MBSTU).

### FR-04: Child Safeguarding & Concern Reporting ("Report a Concern")
- **FR-04.1**: The system shall provide an encrypted reporting form allowing citizens to report vulnerable street children or internal organizational grievances.
- **FR-04.2**: The form shall support optional anonymous submission, category tagging (Child Protection, Welfare Need, Misconduct), location input, and file/photo attachments.
- **FR-04.3**: Submissions shall be encrypted and routed exclusively to the designated Child Protection Officer with immediate email alerts.

### FR-05: Real-time Member Registry & Excel Rendering Engine
- **FR-05.1**: Authorized administrators shall access the central member database with search, filter (by branch, blood group, council), and status management (Active, Alumni, Inactive).
- **FR-05.2**: The system shall implement server-side streaming generation of formatted `.xlsx` workbooks using `exceljs` with proper column headers, styling, and metadata timestamps.

### FR-06: Google Drive Cloud Vault Mirroring
- **FR-06.1**: Whenever an audit report, constitution document, or member Excel export is generated or uploaded, the backend shall asynchronously mirror the asset to a designated Google Drive folder via Google Service Account API.
- **FR-06.2**: Failure of Google Drive upload shall not disrupt client response; retries shall be handled via background queue.

### FR-07: Financial Transparency & Audit Repository
- **FR-07.1**: The system shall provide a public transparency hub hosting annual financial reports, internal audit logs, and external chartered accountant reviews.
- **FR-07.2**: Public visitors shall be able to download official PDF audit reports directly from CDN storage without login.

---

## 3. Non-Functional Requirements (NFR)

### NFR-01: Performance & Web Vitals
- **NFR-01.1**: Server-Side Rendered (SSR) initial page loads shall have a First Contentful Paint (FCP) $\le 0.8$s and Largest Contentful Paint (LCP) $\le 1.8$s on standard broadband.
- **NFR-01.2**: Core Web Vitals Lighthouse score shall maintain $\ge 90$ across Desktop and Mobile.

### NFR-02: Security & Privacy
- **NFR-02.1**: All network traffic shall enforce TLS 1.3 encryption with HTTP Strict Transport Security (HSTS).
- **NFR-02.2**: All API endpoints accepting user input shall enforce DTO validation with strict allowlists (`whitelist: true`, `forbidNonWhitelisted: true`) to prevent mass assignment and prototype pollution.
- **NFR-02.3**: Donor personal information shall be encrypted at rest and never exposed in public API responses.

### NFR-03: Reliability & Disaster Recovery
- **NFR-03.1**: Database durability shall be protected via 3-Tier backup (Daily cloud snapshots + Nightly `pg_dump` to Google Drive + One-click Admin manual export).
- **NFR-03.2**: System availability target: 99.9% uptime with UptimeRobot automated heartbeat monitoring.
