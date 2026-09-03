---
name: documentation-standards
description: Standards for authoring enterprise-grade technical documentation, OpenAPI contracts, architecture decision records (ADRs), and system diagrams.
trigger: contextual
---

# Technical Documentation Standards

## 1. The Diátaxis Documentation Framework
Organize documentation into four clear, distinct modes:
1. **Tutorials (Learning-Oriented)**: Guided lessons that walk a newcomer through completing a starter project.
2. **How-To Guides (Goal-Oriented)**: Step-by-step recipes addressing specific real-world tasks (e.g., "How to configure JWT auth").
3. **Reference (Information-Oriented)**: Technical descriptions of APIs, schemas, configurations, and commands (authoritative and concise).
4. **Explanation (Understanding-Oriented)**: Discussions clarifying architectural choices, design rationale, and background concepts.

## 2. Architecture Decision Records (ADRs)
Document significant technical decisions under `docs/adr/` using this standard structure:
- **Title**: `ADR-XXX: Short Title`
- **Status**: Proposed | Accepted | Deprecated | Superseded
- **Context**: The engineering challenge and forces at play.
- **Decision**: The selected approach and why it was chosen over alternatives.
- **Consequences**: Positive outcomes, trade-offs, and technical debt incurred.

## 3. API & Data Contract Documentation
- **OpenAPI 3.1 Standards**: Document request payloads, response codes (`200`, `201`, `400`, `401`, `403`, `404`, `500`), headers, and query parameters with explicit JSON schemas.
- **Error Dictionaries**: Provide exact error response structures, error codes, and mitigation steps.
- **Visual System Schemas**: Include executable Mermaid diagrams for architecture topologies, data flows, and database ER models.
