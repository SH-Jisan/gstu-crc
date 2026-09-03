---
name: plan-feature
description: Systematic workflow for architecting, scoping, and planning a non-trivial feature before implementation begins.
slash_command: /plan-feature
---

# Plan Feature Workflow

Execute this workflow when architecting, scoping, or planning a non-trivial feature before implementation begins.

## Step 1: Feature Requirements & Acceptance Criteria
- Enumerate functional requirements, expected user workflows, and edge-case behaviors.
- Identify non-functional requirements: performance targets, security posture, and accessibility.
- Clarify ambiguous requirements or unstated assumptions early.

## Step 2: Codebase Architecture Inspection
- Inspect related modules, shared models, API endpoints, and database schemas.
- Understand how current data flows through the affected subsystem.
- Identify existing utilities or patterns that should be reused.

## Step 3: Comparative Design Options
- Formulate at least two viable implementation approaches (e.g., minimal incremental change vs. extensible modular design).
- Compare approaches across:
  - Development time and implementation complexity.
  - Runtime performance, scalability, and memory footprint.
  - Maintenance overhead and regression risk.
- Recommend the optimal approach with clear rationale.

## Step 4: Component & Interface Specification
- Define component responsibilities and interface boundaries.
- Specify data models, database migrations, API payloads, and state mutations.
- Map security boundaries, input validation points, and permission checks.

## Step 5: Blast Radius & Dependency Audit
- Identify all files to be modified, created, or deleted.
- Audit downstream impacts on existing tests, client apps, or background jobs.
- Plan migration strategies for any breaking schema or contract changes.

## Step 6: Step-by-Step Implementation Roadmap
- Break the implementation into discrete, verifiable phases.
- Define explicit verification criteria for each phase (unit tests, integration checks).

## Step 7: Present Implementation Plan
- Present the structured plan (e.g., via `implementation_plan.md` in planning mode).
- Highlight key decisions, trade-offs, and open questions requiring user input.
- Await user review and confirmation before executing code changes.
