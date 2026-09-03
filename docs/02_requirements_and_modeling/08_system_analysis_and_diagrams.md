# 8. System Analysis & Architecture Diagrams

> **Document Code**: `CRC-DOC-08`  
> **Status**: APPROVED  

---

## 8.1 Data Flow Diagram (DFD Level 0: Context Diagram)

```mermaid
graph TD
    Public([Public Visitor]) <-->|Browse Content & News| CRC[CRC Web System]
    Donor([Donor]) -->|Donation & Payment Info| CRC
    CRC -->|Downloadable Receipt| Donor
    Member([Volunteer / Member]) -->|Membership Form| CRC
    Whistleblower([Concern Reporter]) -->|Encrypted Report| CRC
    Admin([Council Administrator]) <-->|Manage Content & Members| CRC
    
    CRC <-->|SQL Data| DB[(PostgreSQL DB)]
    CRC <-->|Asset Media| Cloudinary[(Cloudinary Photos)]
    CRC <-->|Audit PDFs| SupabaseStorage[(Supabase Storage)]
    CRC -->|Nightly & Asset Sync| GDrive[(Google Drive Vault)]
```

---

## 8.2 Data Flow Diagram (DFD Level 1: Subsystem Decomposition)

```mermaid
graph TD
    subgraph Frontend Subsystems [Next.js 15 SSR Client]
        SS1[Static Site Generator & SSR Engine]
        SS2[Interactive Form Handlers]
        SS3[Protected Admin UI Portal]
    end

    subgraph Backend Subsystems [Nest.js Enterprise API]
        BS1[Auth & RBAC Guards]
        BS2[Donation & Payment Controller]
        BS3[Governance & Council Controller]
        BS4[Reporting & Safeguarding Controller]
        BS5[Excel Engine: exceljs]
        BS6[Google Drive Sync Service]
    end

    SS2 -->|REST API Calls| BS1
    SS3 -->|Admin Bearer Token| BS1
    BS1 --> BS2
    BS1 --> BS3
    BS1 --> BS4
    BS3 --> BS5
    BS5 --> BS6
    BS2 --> BS6
```

---

## 8.3 State Transition Diagram: Donation Lifecycle

```mermaid
stateDiagram-v2
    [*] --> FormInitiated: Donor selects amount & program
    FormInitiated --> Submitted: TrxID entered & submitted
    Submitted --> PendingVerification: API saves record
    PendingVerification --> Verified: Admin confirms funds received
    PendingVerification --> Rejected: Invalid TrxID
    Verified --> ReceiptIssued: Dynamic PDF issued & email sent
    ReceiptIssued --> [*]
    Rejected --> [*]
```
