# 7. Requirement Modeling & Use Case Specifications

> **Document Code**: `CRC-DOC-07`  
> **Status**: APPROVED  

---

## 7.1 Core User Stories

| Story ID | As a... | I want to... | So that... |
| :--- | :--- | :--- | :--- |
| **US-01** | General Donor | Easily make a donation via bKash/Nagad/Card and get a receipt | I can support underprivileged street children transparently. |
| **US-02** | Child Sponsor | Sponsor a specific student at Hatekhori School monthly | I can track my sponsored child's educational progress. |
| **US-03** | University Student | Apply for volunteer membership at my campus branch | I can participate in social welfare and community development. |
| **US-04** | Citizen / Bystander | Report a street child in distress anonymously | CRC can provide immediate medical/shelter/educational rescue. |
| **US-05** | Council Secretary | Export the entire member roster into a styled Excel file | I can present the official registry during general meetings. |
| **US-06** | Transparency Auditor | Download annual external audit reports in PDF | I can verify financial accountability and donor fund utilization. |

---

## 7.2 Use Case Specification: UC-01 Process Donation

```mermaid
sequenceDiagram
    autonumber
    actor Donor as Donor
    participant Web as Next.js 15 Frontend
    participant API as Nest.js Backend
    participant DB as Supabase PostgreSQL
    participant CDN as Supabase Storage

    Donor->>Web: Select amount & program ("Hatekhori School")
    Donor->>Web: Provide Donor Info & Payment TrxID
    Web->>API: POST /api/donations (Validated via DTO)
    API->>DB: Insert donation record (Status: PENDING_VERIFICATION)
    API->>API: Generate digital donation voucher PDF
    API->>CDN: Upload voucher to 'receipts' bucket
    API-->>Web: Return Success + Receipt Download Link
    Web-->>Donor: Display Thank You Card + Download PDF button
```

---

## 7.3 Use Case Specification: UC-02 Child Safeguarding Concern Report

```mermaid
sequenceDiagram
    autonumber
    actor Reporter as Citizen / Volunteer
    participant Web as Next.js 15 Frontend
    participant API as Nest.js Backend
    participant DB as Supabase PostgreSQL
    participant Sec as Child Protection Officer

    Reporter->>Web: Access /promises/report-concern
    Reporter->>Web: Fill Incident Location, Details, Child Condition
    Reporter->>Web: Choose Anonymous or Confidential Contact
    Web->>API: POST /api/concerns (Sanitized DTO)
    API->>DB: Store encrypted concern entry
    API->>Sec: Trigger high-priority email alert to Officer
    API-->>Web: Return Tracking Code (e.g. CRC-CONCERN-8492)
    Web-->>Reporter: Display Confirmation & Safeguarding Commitment
```

---

## 7.4 Use Case Specification: UC-03 Member Dynamic Excel Export & Drive Sync

```mermaid
sequenceDiagram
    autonumber
    actor Admin as Council Admin
    participant Web as Next.js Admin Panel
    participant API as Nest.js Backend
    participant DB as Supabase PostgreSQL
    participant Drive as Google Drive API

    Admin->>Web: Click "Export Branch Roster (.xlsx)"
    Web->>API: GET /api/members/export?branch=GSTU
    API->>DB: Fetch active members matching filter
    API->>API: Render stylized Excel workbook using exceljs
    par Stream to Client
        API-->>Web: Stream binary .xlsx attachment
        Web-->>Admin: Browser saves 'CRC_GSTU_Members_2026.xlsx'
    and Background Vault Sync
        API->>Drive: Upload/Replace copy in 'CRC_Vault/Member_Exports/'
        Drive-->>API: Confirm Google Drive Mirroring
    end
```
