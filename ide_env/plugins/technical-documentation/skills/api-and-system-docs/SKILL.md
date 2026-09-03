---
name: api-and-system-docs
description: Skill for drafting comprehensive API specifications, system architecture runbooks, and developer onboarding guides.
---

# API & System Documentation Blueprint

## 1. REST / GraphQL API Specification Template

### Endpoint Specification Example
```markdown
### [METHOD] /api/v1/resource-path

**Description**: Concise summary of purpose and behavior.
**Authentication**: Required (Bearer JWT) | Public

#### Request
- Headers: `Authorization: Bearer <token>`, `Content-Type: application/json`
- Query Parameters: `page` (integer, default 1), `limit` (integer, max 100)
- Request Body Schema:
```json
{
  "title": "String (required, 1-100 chars)",
  "status": "Enum ['draft', 'published']"
}
```

#### Responses
- `200 OK`: Success payload with data.
- `400 Bad Request`: Validation error structure.
- `401 Unauthorized`: Missing or expired authentication.
```

## 2. Developer Setup Runbook Structure
Every repository setup guide must contain:
1. **Prerequisites Checklist**: Language runtimes, package managers, and external daemons (Docker, Postgres).
2. **Environment Configuration**: Annotated `.env.example` mapping every required variable.
3. **Bootstrapping Sequence**: Exact copy-pasteable terminal commands to clone, install, migrate, and start the dev server.
4. **Verification & Smoke Tests**: Concrete command to run automated tests ensuring healthy installation.
