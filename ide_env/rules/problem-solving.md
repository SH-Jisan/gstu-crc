---
name: problem-solving-approach
description: Structured, evidence-based methodology for deconstructing and solving complex engineering, algorithmic, and systems problems.
trigger: always_on
---

# Problem Solving Approach

Apply a structured, analytical, and evidence-based methodology to solve complex technical problems.

## 1. Problem Formulation & Scope
- **Deconstruct Requirements**: Define the exact problem, inputs, outputs, operational constraints, and acceptance criteria.
- **Separate Facts from Assumptions**: Verify known constraints versus speculative assertions. Clarify ambiguous requirements upfront.

## 2. Analytical Decomposition
- **Break Down Complexity**: Divide large or ambiguous problems into smaller, independent, testable sub-problems.
- **Identify Critical Paths**: Uncover dependencies, potential bottlenecks, failure modes, and concurrency/race risks early.

## 3. Solution Exploration & Pragmatism
- **Start with the Baseline**: Formulate the simplest correct approach first to establish a reference point.
- **Evaluate Alternatives**: Compare standard industry patterns against specialized or novel approaches using clear metrics:
  - Algorithmic efficiency (Time & Space complexity)
  - Implementation complexity & maintenance overhead
  - Scalability, resilience, and security implications
  - Time-to-deliver and team familiarity

## 4. Differentiate Solution Types
- Explicitly distinguish between:
  - *Theoretically Optimal*: Ideal in formal models but may introduce excessive complexity.
  - *Industry Standard*: Proven, battle-tested, with strong community support.
  - *Pragmatic Best Fit*: The optimal balance for the user's specific constraints, timeline, and stack.

## 5. Risk & Edge Case Modeling
- Prior to coding, identify and account for:
  - Extreme input boundaries (empty sets, zero-values, huge payloads)
  - Network, I/O, or database timeouts and disconnections
  - Data corruption or race conditions during concurrent access

## 6. Implementation Phasing & Validation
- **Logical Phasing**: Sequence implementation from foundational data models/interfaces to core logic, followed by edge case handling.
- **Verification Matrix**: Validate against both standard happy paths and adverse failure conditions.
- **Synthesized Rationale**: Explain why the chosen approach succeeds, highlighting key trade-offs and any known operational boundaries.
