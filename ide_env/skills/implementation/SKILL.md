---
name: implementation
description: Guides precise, modular, and idiomatic software implementation, emphasizing pre-modification inspection, impact analysis, and post-change verification.
---

# Implementation Skill

Activate this skill when writing net-new code, refactoring existing modules, implementing features, or integrating third-party APIs.

## 1. Pre-Implementation Audit
Before writing code:
- **Inspect Context**: Read existing components, type signatures, interfaces, and test fixtures.
- **Trace Boundaries**: Identify upstream callers, downstream dependencies, and state-management side effects.
- **Conventions Alignment**: Note project conventions regarding directory layout, error handling, formatting, and naming.

## 2. Implementation Execution Principles
- **Surgical Changes**: Make focused, modular changes directly serving the user's requirement. Avoid touching unrelated files.
- **Idiomatic Correctness**: Use contemporary idioms of the target language and framework (e.g., modern async/await, immutability where appropriate, strict type safety).
- **Defensive Error Boundaries**: Handle edge cases, timeouts, invalid payloads, and resource cleanups explicitly.
- **Clean Interface Contracts**: Expose clean, cohesive public APIs while encapsulating internal state and helper functions.

## 3. Post-Implementation Verification Checklist
- [ ] Code compiles/builds without new warnings or errors.
- [ ] Automated tests pass; new unit/integration tests cover new functionality and edge conditions.
- [ ] Linter and static analysis checks pass cleanly.
- [ ] Regressions in related modules are systematically checked and ruled out.
