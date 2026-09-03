---
name: code-review
description: Conducts rigorous, multi-dimensional engineering code reviews covering correctness, security, performance, maintainability, and project conventions.
---

# Code Review Skill

Apply this skill when reviewing pull requests, diffs, refactorings, or whole-file implementations.

## 1. Multi-Vector Review Rubric

| Vector | Key Inspection Areas |
| :--- | :--- |
| **Correctness** | Logic defects, off-by-one errors, unhandled edge cases, missing requirements, race conditions. |
| **Architecture & Quality** | Separation of concerns, idiomatic language use, clean naming, modularity, DRY balance, project conventions. |
| **Reliability & Resilience** | Error handling, resource cleanup (memory, file descriptors, sockets), boundary conditions, null/undefined safety. |
| **Defensive Security** | Input sanitization, injection vectors, authentication/authorization checks, sensitive data exposure, safe error logging. |
| **Performance** | Algorithmic complexity ($O(n)$ time/space), database query patterns (N+1), memory bloat, unnecessary I/O or network calls. |

## 2. Feedback Categorization Matrix
Classify all feedback clearly to distinguish blocking flaws from stylistic advice:
- `[CRITICAL]`: Severe bug, data corruption risk, security vulnerability, or functional failure that blocks merging.
- `[IMPORTANT]`: Suboptimal design, performance bottleneck, missing error handling, or maintainability risk.
- `[IMPROVEMENT]`: Idiomatic cleanups, code readability enhancements, or minor non-blocking optimizations.
- `[SUGGESTION/NIT]`: Minor stylistic note, personal preference, or optional future refactor.

## 3. Actionable Feedback Guidelines
- State the exact file, line, or symbol affected.
- Explain **why** the issue matters and its potential runtime impact.
- Provide a concrete, idiomatic code snippet demonstrating the recommended fix.
