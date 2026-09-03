---
name: implement
description: End-to-end workflow for modifying, extending, refactoring, or writing production code safely.
slash_command: /implement
---

# Implement Workflow

Execute this workflow when modifying, extending, refactoring, or writing production code.

## Step 1: Goal & Scope Clarification
- Verify the exact implementation objective, functional expectations, acceptance criteria, and operational boundaries.
- Confirm any ambiguous assumptions with the user before touching code.

## Step 2: Contextual Inspection
- Use repository inspection tools (`view_file`, `grep_search`) to thoroughly analyze:
  - Existing components, interfaces, and shared types.
  - Test suites and mock fixtures.
  - Repository-wide coding style, naming patterns, and conventions.

## Step 3: Blast Radius & Impact Analysis
- Map all touchpoints affected by the change:
  - Files to modify, create, or deprecate.
  - Upstream callers, downstream consumers, and shared interfaces.
  - Potential regressions, breaking schema changes, or security side-effects.

## Step 4: Implementation Strategy
- Design the cleanest, most surgical implementation path.
- Keep modifications minimal and focused strictly on the agreed scope.
- Avoid speculative abstractions or unrelated refactorings.

## Step 5: Code Execution
- Write clean, idiomatic, and robust code adhering to:
  - Universal and project-specific coding standards.
  - Explicit error handling, boundary validation, and null safety.
  - Standard resource lifecycle management (preventing leaks).

## Step 6: Post-Change Code Audit
- Inspect all modified lines and adjacent functions to ensure:
  - No unintended side-effects or broken contracts.
  - Error branches and failure scenarios are properly handled.
  - Logging and diagnostics are clean and leak no sensitive data.

## Step 7: Multi-Level Verification
- Execute available automated verification commands:
  - Type-checking (`tsc`, `mypy`, or equivalent).
  - Linters and static code analysis.
  - Relevant unit, integration, and regression test suites.
- Manually verify edge cases and boundary behaviors.

## Step 8: Regression Safeguard
- Ensure unrelated existing features remain intact and that downstream modules continue to compile and pass tests.

## Step 9: Delivery Summary
Provide a concise, professional summary:
- What was changed and why.
- Verification commands executed and their exact outcomes.
- Known limitations or recommended future follow-ups.
