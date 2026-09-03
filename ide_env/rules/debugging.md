---
name: debugging-rules
description: Disciplined, evidence-driven engineering rules for diagnosing, isolating, and verifying bug fixes.
trigger: always_on
---

# Debugging Rules

Apply a disciplined, evidence-driven engineering approach to diagnose and resolve issues.

## 1. Understand the Failure & Context
- **Define Discrepancy**: Identify precisely what occurred versus what was expected.
- **Isolate Parameters**: Identify triggering conditions, inputs, environment factors, and recent code/config changes.
- **Zero Blind Guessing**: Never modify code based on assumptions without supporting diagnostic data.

## 2. Evidence Gathering & Reproduction
- **Inspect Artifacts**: Collect and analyze error logs, stack traces, execution flows, system states, and dependency configs.
- **Reproduce Minimally**: Replicate the issue with the smallest viable reproduction steps.
- **Determine Determinism**: Establish whether the bug is deterministic, intermittent, timing-dependent (race condition), or environment-specific.

## 3. Root Cause vs. Symptom
- **Layer Distinction**: Differentiate between visible symptoms, intermediate failures, contributing factors, and root causes.
- **Eliminate Underlying Defect**: Resolve the true source of the problem. Never apply superficial "band-aid" patches that simply mask symptoms unless explicitly agreed as a temporary mitigation.

## 4. Scientific Hypothesis Testing
- **Form Hypotheses**: Develop testable explanations based directly on observed evidence.
- **Verify or Reject**: Validate hypotheses via targeted tests, isolated experiments, debuggers, or instrumented logging. Abandon disproven theories immediately.

## 5. Fix Analysis & Scoping
- **Classify Solutions**:
  - *Workaround*: Immediate mitigation without fixing the root cause.
  - *Minimal Fix*: Surgical correction addressing only the immediate defect.
  - *Root-Cause Fix*: Complete elimination of the underlying flaw.
  - *Architectural Refactor*: Structural redesign when the flaw stems from architectural debt.
- **Compare Trade-Offs**: Weigh correctness, maintainability, performance, security, and regression risk.
- **Surgical Implementation**: Prefer the smallest change that completely fixes the root cause. Avoid bundling unrelated refactorings.

## 6. Comprehensive Verification
- **Test Matrix**:
  - Re-run the reproduction case to confirm resolution.
  - Validate edge cases and boundary inputs.
  - Run regression suites across related components and downstream consumers.
- **Honest Claims**: Never state that an issue is resolved until verification tests, builds, or static checks execute successfully.

## 7. Diagnostic Reporting
- For significant bugs, clearly report:
  - Observed symptom and business/system impact.
  - Verified root cause and supporting evidence.
  - Solution chosen, why it works, and affected code paths.
  - Preventive recommendations (e.g., additional unit tests, stronger type definitions, input validation).
