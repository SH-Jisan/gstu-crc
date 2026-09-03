---
name: coding-standards
description: Universal coding standards, clean architecture, precision naming, pragmatic DRY, and error boundaries.
trigger: always_on
---

# Universal Coding Standards

Enforce high-caliber engineering hygiene, readability, maintainability, and safety across all codebases.

## 1. Code Quality & Idiomatic Style
- **Readability & Idiom**: Write clean, idiomatic code adhering to ecosystem standards and language-specific idioms.
- **Simplicity Over Cleverness**: Prioritize straightforward clarity over obscure one-liners or speculative abstractions.
- **YAGNI & KISS**: Avoid premature optimization, excessive boilerplate, and overengineering.

## 2. Architecture & Modularity
- **Separation of Concerns (SoC)**: Ensure classes, functions, and modules have single, well-defined responsibilities.
- **Cohesion & Coupling**: Aim for high cohesion within modules and low coupling across module boundaries.
- **Respect Conventions**: Strictly follow established repository architecture, styling, and folder layout.

## 3. Precision Naming
- **Self-Documenting Identifiers**: Choose unambiguous, intention-revealing names for variables, functions, types, and files.
- **Clarity Over Brevity**: Avoid cryptic abbreviations, misleading names, and single-letter identifiers (except standard loop indices).

## 4. Pragmatic DRY (Don't Repeat Yourself)
- **Consolidate Business Logic**: Factor out repeated domain logic into shared utilities or components.
- **Avoid Over-Abstraction**: Do not introduce complex abstractions merely to de-duplicate trivial, coincidental similarities.

## 5. Robust Error Handling & Boundaries
- **Explicit Failures**: Anticipate failure modes; never swallow exceptions or silently ignore errors without conscious rationale.
- **Secure Diagnostics**: Handle errors gracefully without exposing stack traces, internal paths, or credentials to end users.
- **Boundary Validation**: Validate and sanitize all external or untrusted input at entry points (server-side validation is non-negotiable).

## 6. Self-Explaining Code & Meaningful Comments
- **Explain "Why", Not "What"**: Code structure should explain what happens; comments must clarify non-obvious algorithms, trade-offs, constraints, and business rationale.
- **Keep Current**: Update or remove comments when the underlying code changes. Never leave misleading or zombie comments.

## 7. Performance & Resource Management
- **Algorithmic Efficiency**: Consider Big-O time and space complexity during design.
- **Resource Cleanup**: Properly close connections, file descriptors, streams, and timers to prevent resource leaks.
- **Data-Driven Optimization**: Optimize bottlenecks based on profiling and metrics, not intuition.

## 8. Secure Coding Defaults
- **Zero Hardcoded Secrets**: Keep keys, tokens, and credentials strictly in environment variables or secret vaults.
- **Safe APIs**: Avoid known insecure functions (e.g., raw SQL string concatenation, unsafe deserialization, shell injections).

## 9. Verification & Version Control
- **Rigorous Local Verification**: Run type-checks, linters, unit tests, and builds after any non-trivial modification.
- **Clean Repository State**: Ensure `.gitignore` properly excludes build artifacts, virtual environments, local configs, and sensitive files.
- **Strict Git Permission**: NEVER execute mutating Git commands (`git add`, `git commit`, `git push`, `git checkout`, `git reset`, `git merge`, etc.) without explicit user consent.
