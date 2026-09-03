---
name: global
description: Master senior staff engineering skill combining software architecture, defensive security, surgical implementation, root-cause debugging, multi-vector code review, algorithmic problem solving, technical research, and progressive mentoring, orchestrating specialized sub-skills.
---

# Global Engineering Skill

Master domain competency framework integrating all senior engineering disciplines into a unified operational skillset.

---

## 1. Software Architecture & System Design
- **Domain Boundaries**: Establish clean module boundaries and explicit bounded contexts (DDD).
- **Communication Patterns**: Choose synchronous (REST/gRPC) vs. asynchronous (queues/event-driven pub-sub) based on coupling and throughput needs.
- **Data Ownership**: Enforce single-service persistence ownership; eliminate shared-database antipatterns.
- **Architectural Trade-Offs**: Balance CAP theorem invariants, operational simplicity vs. microservice overhead, and caching complexity vs. freshness.
- **Evolutionary Design**: Decouple volatile domain logic from infrastructure adapters (hexagonal/ports-and-adapters).

---

## 2. Defensive Security Engineering (STRIDE)
- **Threat Audit**: Audit components against Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.
- **Defensive Heuristics**: Enforce strict schema validation and type coercion at entry points.
- **Cryptographic Hygiene**: Use authenticated encryption (AES-256-GCM, ChaCha20-Poly1305) and memory-hard password hashing (Argon2id, bcrypt).
- **Access Control Enforcement**: Verify RBAC/ABAC on every sensitive endpoint on the server side.
- **Structured Vulnerability Reporting**: Identify vulnerability type, severity, preconditions, mitigation patch, and verification test.

---

## 3. Surgical Implementation & Refactoring
- **Pre-Implementation Audit**: Inspect surrounding components, type signatures, interfaces, and test fixtures before editing.
- **Surgical Execution**: Make focused, modular changes serving the exact requirement. Never bundle unrelated refactorings.
- **Interface Contracts**: Expose clean, cohesive public APIs while strictly encapsulating internal helper functions and state.
- **Post-Change Verification**: Confirm code builds cleanly, automated tests pass, linters report zero warnings, and regressions are ruled out.

---

## 4. Systematic Debugging & Triage
- **Diagnostic Matrix**: Collect exact error messages, stack traces, timestamps, configs, and recent git history.
- **Minimal Reproduction**: Isolate the smallest viable input, test case, or script triggering the defect consistently.
- **Trace Execution**: Use targeted logs or breakpoints to find where actual state diverges from expected state.
- **Root-Cause Isolation**: Differentiate between surface symptoms, immediate triggers, and fundamental logic flaws.
- **Verification Protocol**: Verify minimal reproduction passes, existing test suites succeed, and neighboring paths share no identical flaws.

---

## 5. Multi-Vector Code Review
- **Evaluation Vectors**:
  - *Correctness*: Off-by-one errors, unhandled branches, edge-case failures, race conditions.
  - *Quality*: Naming clarity, modularity, SoC, idiomatic language standards, project conventions.
  - *Reliability*: Error boundaries, resource cleanup (memory, descriptors, connections), null/undefined safety.
  - *Security*: Untrusted input handling, secrets leakage, authorization checks.
  - *Performance*: Big-O time/space complexity, N+1 query patterns, memory leaks, I/O bottlenecks.
- **Feedback Classification**:
  - `[CRITICAL]`: Blocking defect, data corruption risk, or security vulnerability.
  - `[IMPORTANT]`: Suboptimal design, performance bottleneck, or maintainability liability.
  - `[IMPROVEMENT]`: Idiomatic cleanup, readability enhancement, or non-blocking optimization.
  - `[NIT]`: Minor stylistic suggestion or optional comment.

---

## 6. Algorithmic Problem Solving
- **Deconstruct Requirements**: Identify inputs, invariants, desired outputs, and scaling constraints.
- **Algorithmic Modeling**: Select appropriate data structures (graphs, trees, hash maps, heaps) and design paradigms (divide-and-conquer, DP, sliding window).
- **Complexity Budgets**: Quantify average and worst-case Big-O bounds for CPU and memory usage.
- **Failure Mode Modeling**: Pre-screen for deadlocks, overflow, precision loss, and boundary conditions.

---

## 7. Technical Research & Evaluation
- **Source Hierarchy**: Prioritize official specs, primary docs, and RFCs over third-party tutorials or unverified forum threads.
- **Freshness Verification**: Verify active maintenance, release dates, LTS roadmaps, and breaking deprecations.
- **Comparative Decision Matrix**: Evaluate candidates across functional completeness, performance, maintenance velocity, license compatibility, and migration overhead.

---

## 8. Pedagogical Mentoring & Progressive Learning
- **6-Stage Scaffolding Flow**:
  1. *Origin Problem*: What breakdown occurred before this existed?
  2. *Mental Model*: Concrete analogy or ASCII diagram.
  3. *Core Mechanism*: Under-the-hood data flow and state transitions.
  4. *Minimal Example*: Simplest isolated runnable code.
  5. *Production Reality*: Real-world error handling and performance considerations.
  6. *Pitfalls*: Common misconceptions and debugging diagnostics.
- **Active Reinforcement**: Challenge learners with outcome predictions and incremental coding exercises.

---

## 9. Skill Orchestration & Sub-Skill Activation
This master skill provides foundational multi-disciplinary competency. When a deep-dive task requires granular rubrics, **activate and chain the corresponding specialized sub-skill**:
- **Code Review**: For thorough PR or commit audits, activate [skills/code-review/SKILL.md](file:///C:/Users/shzis/.gemini/config/skills/code-review/SKILL.md).
- **Deep Debugging**: For complex regressions or concurrency bugs, activate [skills/debugging/SKILL.md](file:///C:/Users/shzis/.gemini/config/skills/debugging/SKILL.md).
- **Production Coding**: For writing new features or refactoring modules, activate [skills/implementation/SKILL.md](file:///C:/Users/shzis/.gemini/config/skills/implementation/SKILL.md).
- **Security Engineering**: For threat modeling and vulnerability assessments, activate [skills/security-engineering/SKILL.md](file:///C:/Users/shzis/.gemini/config/skills/security-engineering/SKILL.md).
- **System Architecture**: For large-scale distributed design or modularization, activate [skills/software-architecture/SKILL.md](file:///C:/Users/shzis/.gemini/config/skills/software-architecture/SKILL.md).
- **Algorithm & Optimization**: For high-performance algorithms or data puzzles, activate [skills/problem-solving/SKILL.md](file:///C:/Users/shzis/.gemini/config/skills/problem-solving/SKILL.md).
- **Technical Research**: For library, API, or ecosystem benchmarking, activate [skills/technical-research/SKILL.md](file:///C:/Users/shzis/.gemini/config/skills/technical-research/SKILL.md).
- **Technical Mentoring**: For tutoring and progressive conceptual breakdowns, activate [skills/technical-learning/SKILL.md](file:///C:/Users/shzis/.gemini/config/skills/technical-learning/SKILL.md).
