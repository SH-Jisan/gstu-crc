# 11. REST API Specification & Swagger Documentation

> **Document Code**: `CRC-DOC-11`  
> **API Base URL**: `https://api.gstu-crc.org/api/v1`  
> **Interactive Swagger UI**: `/api/docs`  
> **Status**: APPROVED  

---

## 11.1 Authentication & Header Invariants
All protected administrative endpoints require standard JWT Bearer token authorization:
```http
Authorization: Bearer <jwt_access_token>
Content-Type: application/json
Accept: application/json
```

---

## 11.2 Endpoint Directory Matrix

### Public Endpoints (No Auth Required)

| Method | Endpoint | Description | Query / Body Parameters | Response |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/branches` | List all active CRC branches | `?sort=name` | `200 OK: Branch[]` |
| `GET` | `/councils` | Fetch council members by hierarchy | `?type=PERMANENT&year=2025` | `200 OK: CouncilMember[]` |
| `GET` | `/campaigns` | List active & past campaigns | `?status=ACTIVE` | `200 OK: Campaign[]` |
| `POST` | `/donations` | Submit donation with TrxID | `{ amount, paymentMethod, transactionId, donorName }` | `201 Created: { donationId, receiptUrl }` |
| `POST` | `/concerns` | Submit Child Protection Concern | `{ category, incidentLocation, description, isAnonymous }` | `201 Created: { trackingCode }` |
| `GET` | `/documents` | List public audit reports & statutory files | `?category=AUDIT_REPORT` | `200 OK: Document[]` |
| `GET` | `/health` | UptimeRobot keep-alive health check | None | `200 OK: { status: "up", timestamp }` |

---

### Protected Administrative Endpoints (Bearer Auth Required)

| Method | Endpoint | Role | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/login` | Public | Authenticate administrator with email/password; returns JWT. |
| `POST` | `/councils` | Admin | Create or update council member profiles. |
| `GET` | `/members/export` | Admin | **Stream real-time `.xlsx` spreadsheet** (auto-mirrored to Drive). |
| `PATCH` | `/donations/:id/verify` | Admin | Verify received funds; marks donation as `VERIFIED`. |
| `GET` | `/concerns` | Officer | List encrypted concern reports with investigation status. |
| `POST` | `/documents/upload` | Admin | Upload audit report PDF (saves to Supabase & mirrors to Drive). |
| `GET` | `/system/backup/sql` | SuperAdmin | **On-demand database SQL dump stream** (Disaster Recovery Tier 3). |
