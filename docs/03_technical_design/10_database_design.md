# 10. Database Design & Entity Relationship Specifications

> **Document Code**: `CRC-DOC-10`  
> **Database Engine**: PostgreSQL 15+ (Hosted on Supabase)  
> **ORM Layer**: Prisma ORM with automated migrations  
> **Status**: APPROVED  

---

## 10.1 Entity-Relationship Diagram (ERD)

```mermaid
erDiagram
    BRANCH ||--o{ COUNCIL_MEMBER : "has members"
    COUNCIL_MEMBER ||--o{ ACTIVITY_LOG : "performs"
    BRANCH ||--o{ CAMPAIGN : "hosts"
    CAMPAIGN ||--o{ DONATION : "receives"
    DONATION ||--o| CHILD_SPONSORSHIP : "funds"
    USER ||--o{ AUDIT_LOG : "creates"
    DOCUMENT ||--o{ AUDIT_LOG : "tracks edits"

    BRANCH {
        string id PK
        string name "e.g. GSTU, Khulna Central, IU, BU"
        string slug
        string coordinatorName
        string phone
        string email
        float latitude
        float longitude
        datetime establishedAt
    }

    COUNCIL_MEMBER {
        string id PK
        string branchId FK
        string fullName
        string email
        string phone
        string bloodGroup
        string councilType "PERMANENT, EXECUTIVE, TEMPORARY"
        string committee "FINANCE, ADVISORY, AUDIT, DISCIPLINE"
        string designation "President, General Secretary, Coordinator"
        string photoUrl
        string tenureYears "e.g. 2024-2025"
        string status "ACTIVE, ALUMNI, HONORARY"
        int displayOrder
    }

    CAMPAIGN {
        string id PK
        string branchId FK
        string title
        string slug
        string summary
        text description
        string bannerUrl
        decimal targetAmount
        decimal collectedAmount
        datetime startDate
        datetime endDate
        string status "ACTIVE, COMPLETED, UPCOMING"
    }

    DONATION {
        string id PK
        string campaignId FK
        string donorName
        string donorEmail
        string donorPhone
        decimal amount
        string currency "BDT, USD"
        string paymentMethod "BKASH, NAGAD, BANK, STRIPE"
        string transactionId "TrxID"
        string verificationStatus "PENDING, VERIFIED, REJECTED"
        string receiptPdfUrl
        boolean isAnonymous
        datetime createdAt
    }

    CONCERN_REPORT {
        string id PK
        string trackingCode "e.g. CRC-CON-8492"
        string category "CHILD_PROTECTION, WELFARE, MISCONDUCT"
        string incidentLocation
        text description
        string evidenceFilesJson
        string reporterName "Optional"
        string reporterContact "Optional"
        boolean isAnonymous
        string status "SUBMITTED, UNDER_INVESTIGATION, RESOLVED"
        datetime createdAt
    }

    DOCUMENT {
        string id PK
        string title
        string category "AUDIT_REPORT, CONSTITUTION, NOTICE, CIRCULAR"
        string fileUrl
        string driveFileId
        int year
        datetime publishedAt
    }

    AUDIT_LOG {
        string id PK
        string entityName "e.g. COUNCIL_MEMBER, DOCUMENT"
        string entityId
        string action "CREATE, UPDATE, DELETE"
        string performedBy
        json previousState
        json newState
        datetime timestamp
    }
```

---

## 10.2 Production Prisma Schema Blueprint

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum CouncilType {
  PERMANENT
  EXECUTIVE
  TEMPORARY
}

enum MemberStatus {
  ACTIVE
  ALUMNI
  HONORARY
  INACTIVE
}

enum DonationStatus {
  PENDING
  VERIFIED
  REJECTED
}

enum ConcernCategory {
  CHILD_PROTECTION
  WELFARE_NEED
  ORGANIZATIONAL_MISCONDUCT
  FINANCIAL_IRREGULARITY
}

enum ConcernStatus {
  SUBMITTED
  UNDER_REVIEW
  IN_PROGRESS
  RESOLVED
}

enum DocumentCategory {
  AUDIT_REPORT
  STATUTORY_CONSTITUTION
  NOTICE
  ANNUAL_REPORT
}

model Branch {
  id              String          @id @default(cuid())
  name            String          @unique
  slug            String          @unique
  coordinatorName String
  phone           String
  email           String
  latitude        Float?
  longitude       Float?
  address         String
  establishedAt   DateTime
  members         CouncilMember[]
  campaigns       Campaign[]
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt
}

model CouncilMember {
  id           String       @id @default(cuid())
  branchId     String
  branch       Branch       @relation(fields: [branchId], references: [id])
  fullName     String
  email        String
  phone        String
  bloodGroup   String?
  councilType  CouncilType
  committee    String?
  designation  String
  photoUrl     String?
  tenureYears  String
  status       MemberStatus @default(ACTIVE)
  displayOrder Int          @default(0)
  createdAt    DateTime     @default(now())
  updatedAt    DateTime     @updatedAt

  @@index([councilType, status])
  @@index([branchId])
}

model Campaign {
  id              String         @id @default(cuid())
  branchId        String?
  branch          Branch?        @relation(fields: [branchId], references: [id])
  title           String
  slug            String         @unique
  summary         String
  description     String         @db.Text
  bannerUrl       String
  targetAmount    Decimal?       @db.Decimal(12, 2)
  collectedAmount Decimal        @default(0.00) @db.Decimal(12, 2)
  startDate       DateTime
  endDate         DateTime?
  isActive        Boolean        @default(true)
  donations       Donation[]
  createdAt       DateTime       @default(now())
  updatedAt       DateTime       @updatedAt
}

model Donation {
  id                 String         @id @default(cuid())
  campaignId         String?
  campaign           Campaign?      @relation(fields: [campaignId], references: [id])
  donorName          String
  donorEmail         String?
  donorPhone         String?
  amount             Decimal        @db.Decimal(10, 2)
  currency           String         @default("BDT")
  paymentMethod      String         // BKASH, NAGAD, BANK, STRIPE
  transactionId      String         @unique
  verificationStatus DonationStatus @default(PENDING)
  receiptPdfUrl      String?
  isAnonymous        Boolean        @default(false)
  createdAt          DateTime       @default(now())
  updatedAt          DateTime       @updatedAt

  @@index([transactionId])
  @@index([verificationStatus])
}

model ConcernReport {
  id               String          @id @default(cuid())
  trackingCode     String          @unique
  category         ConcernCategory
  incidentLocation String
  description      String          @db.Text
  evidenceFiles    Json?
  reporterName     String?
  reporterContact  String?
  isAnonymous      Boolean         @default(true)
  status           ConcernStatus   @default(SUBMITTED)
  adminNotes       String?         @db.Text
  createdAt        DateTime        @default(now())
  updatedAt        DateTime        @updatedAt

  @@index([trackingCode])
}

model Document {
  id          String           @id @default(cuid())
  title       String
  category    DocumentCategory
  fileUrl     String
  driveFileId String?
  fileSize    Int
  year        Int
  publishedAt DateTime         @default(now())
  createdAt   DateTime         @default(now())
  updatedAt   DateTime         @updatedAt

  @@index([category, year])
}

model AuditLog {
  id          String   @id @default(cuid())
  entityName  String
  entityId    String
  action      String   // CREATE, UPDATE, DELETE
  performedBy String
  details     Json?
  timestamp   DateTime @default(now())

  @@index([entityName, timestamp])
}
```
