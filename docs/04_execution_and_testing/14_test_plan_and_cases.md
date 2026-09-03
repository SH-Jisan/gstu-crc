# 14. Test Plan & Comprehensive Test Cases

> **Document Code**: `CRC-DOC-14`  
> **Testing Matrix**: Unit Tests, Integration Tests, End-to-End (E2E) Browser Automation via Puppeteer  
> **Status**: APPROVED  

---

## 14.1 Testing Strategy Overview
Quality assurance is executed through automated regression suites and strict acceptance gates:
- **Unit Testing**: Jest for Nest.js services and controller DTOs.
- **Integration Testing**: Prisma test database transactions for donations and Excel exports.
- **E2E Browser Automation**: Puppeteer subagent testing critical user flows (Donation submission, Concern reporting, Excel download).

---

## 14.2 Master Test Case Suite

| Test ID | Module | Scenario / Input | Expected Result | Priority |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Donation | Valid bKash TrxID (`TRX98234JS8`) submitted with 500 BDT. | Saved as `PENDING`, receipt PDF generated and downloadable. | Critical |
| **TC-02** | Donation | Duplicate or invalid TrxID submitted. | API returns `400 Bad Request` with descriptive validation message. | High |
| **TC-03** | Safeguarding | Anonymous "Report a Concern" submitted with incident details. | Saved without IP logging, tracking code generated, officer alerted. | Critical |
| **TC-04** | Excel Engine | Admin triggers `/api/members/export?branch=GSTU`. | Server streams valid `.xlsx` file with correct column formatting and headers. | High |
| **TC-05** | Drive Sync | New audit report PDF uploaded via `/api/documents/upload`. | File stored in Supabase and mirrored to designated Google Drive folder. | High |
| **TC-06** | Responsive UI | Access homepage on mobile (375px) viewport. | Hamburger menu works, zero horizontal overflow, touch targets $\ge 48$px. | Critical |
| **TC-07** | Backup Vault | Execute nightly `pg_dump` backup job. | Compressed `.sql.gz` dump uploaded to `CRC_Vault/Database_Backups/`. | Critical |
