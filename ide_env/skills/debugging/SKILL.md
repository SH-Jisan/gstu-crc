---
name: debugging
description: Diagnoses complex software defects using evidence-driven root-cause analysis, hypothesis testing, minimal reproduction, and regression verification.
---

# Debugging Skill

Activate this skill when troubleshooting crashes, latency spikes, test failures, logical bugs, or anomalous system behavior.

## 1. Diagnostic Execution Matrix
Follow this rapid triage pipeline:
1. **Evidence Collection**: Extract precise error messages, stack traces, timestamps, environment states, and recent git commits.
2. **Minimal Reproduction**: Isolate the smallest viable input, test case, or script that consistently triggers the defect.
3. **Trace Execution**: Use targeted log statements, breakpoints, or call-stack traversal to pinpoint where actual program state diverges from expected state.
4. **Hypothesis Formulation**: Formulate explicit, testable statements (*"Variable X is null at line Y because service Z timed out"*).
5. **Validation & Invalidation**: Confirm or rule out the hypothesis using targeted diagnostic experiments.

## 2. Root-Cause Classification
- **Surface Symptom**: What the user or test sees (e.g., HTTP 500, NullPointerException).
- **Trigger**: The specific condition that provoked the failure (e.g., empty array input).
- **Root Cause**: The fundamental flaw in logic, state, or contract (e.g., missing validation in upstream parser).
- **Rule**: Address the root cause. Avoid masking symptoms with defensive null-checks unless the null state is genuinely valid domain logic.

## 3. Post-Fix Verification Check
- Verify that the minimal reproduction now passes.
- Verify that existing test suites pass without regression.
- Inspect neighboring functions and consumers for identical vulnerability patterns.
