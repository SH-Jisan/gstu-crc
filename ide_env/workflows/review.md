---
name: review
description: Multi-dimensional engineering review workflow for evaluating pull requests, modules, or full architectures.
slash_command: /review
---

# Review Workflow

Execute this workflow when auditing pull requests, commits, modules, or full-codebase architectures.

## Step 1: Establish Review Scope & Context
- Clarify the change's intent, requirements, affected user journeys, and acceptance criteria.
- Identify the target branch, touched files, and deployment targets.

## Step 2: Structural & Architecture Inspection
- Review directory placement, module cohesion, and dependency coupling.
- Ensure public interfaces, data schemas, and API contracts remain clean and backwards-compatible.
- Verify separation of concerns and adherence to established repository patterns.

## Step 3: Engineering Quality & Correctness Audit
- Scrutinize logic for off-by-one errors, null/undefined hazards, and unhandled branches.
- Verify descriptive naming, idiomatic syntax, and DRY principles without over-abstraction.
- Check test coverage: do unit/integration tests adequately validate both happy paths and edge cases?

## Step 4: Defensive Security Audit
- Verify that untrusted inputs are strictly validated and sanitized.
- Ensure no credentials, tokens, or private data are committed or printed to logs.
- Audit authentication/authorization gates on modified endpoints.

## Step 5: Performance & Resource Lifecycle Audit
- Check for algorithmic inefficiencies ($O(n^2)$ bottlenecks, unindexed queries, N+1 patterns).
- Audit memory leaks, dangling listeners, unclosed streams, or unthrottled asynchronous loops.

## Step 6: Finding Classification
Categorize each finding unambiguously:
- **[CRITICAL]**: Security flaw, data loss risk, or breaking bug blocking approval.
- **[IMPORTANT]**: Performance bottleneck, flawed error handling, or maintainability liability.
- **[IMPROVEMENT]**: Cleanliness, readability, or non-blocking optimization.
- **[NIT]**: Minor stylistic suggestion or optional comment.

## Step 7: Actionable Feedback Delivery
- For each finding, explain the runtime risk and provide a clean, copy-pasteable code snippet showing the solution.
- Avoid dogmatic style debates; ground all critical feedback in objective engineering principles.

## Step 8: Executive Summary & Verdict
Provide a clear final verdict:
- High-level assessment of code health and architectural stability.
- Concise bulleted summary of blocking vs. non-blocking issues.
- Approval status: *Approved*, *Approved with Suggestions*, or *Changes Requested*.
