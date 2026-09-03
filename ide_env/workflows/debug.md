---
name: debug
description: Systematic workflow for investigating, isolating, reproducing, and resolving software defects.
slash_command: /debug
---

# Debug Workflow

Execute this workflow when investigating, isolating, and resolving bugs, test regressions, crashes, or unintended system behavior.

## Step 1: Discrepancy Definition
- Articulate the exact discrepancy: what occurred versus what was expected.
- Record failure triggers: input payloads, environment variables, timestamps, and recent commits.

## Step 2: Evidence Collection
- Extract and review diagnostic artifacts:
  - Error logs, console outputs, and stack traces.
  - Active configurations and external dependency versions.
  - Runtime execution traces and state snapshots.
- Strictly avoid guessing or modifying code without diagnostic evidence.

## Step 3: Deterministic Reproduction
- Construct a minimal, reproducible test case or script demonstrating the defect consistently.
- Categorize failure determinism: deterministic, intermittent, timing/race condition, or environment-dependent.

## Step 4: Root-Cause Isolation
- Trace the failure from the visible symptom backwards to the earliest invalid state mutation.
- Distinguish between symptom, immediate exception, and underlying design or logic flaw.

## Step 5: Hypothesis Generation & Testing
- Formulate a falsifiable hypothesis (*"The loop terminates prematurely when array length is zero"*).
- Test the hypothesis through targeted logging, debugger inspection, or isolated assertions.
- Reject invalid hypotheses immediately when contradicted by data.

## Step 6: Fix Design & Trade-Off Analysis
- Evaluate candidate solutions:
  - *Minimal patch*: Quickest risk-free resolution.
  - *Root-cause fix*: Eliminating the underlying flaw permanently.
  - *Architectural fix*: Refactoring when defect reveals structural fragility.
- Select the cleanest, lowest-risk resolution addressing the root cause.

## Step 7: Surgical Code Patching
- Apply the smallest reasonable change that completely cures the defect.
- Maintain existing coding conventions and avoid bundled, unrelated cleanups.

## Step 8: Multi-Vector Verification
- Run the minimal reproduction test to verify the defect is resolved.
- Execute the broader test suite to ensure zero regressions in adjacent features.
- Inspect neighboring code paths for identical defect patterns.

## Step 9: Diagnostic Summary & Prevention
- Report the symptom, verified root cause, and applied fix.
- Recommend preventive measures (e.g., automated regression tests, strict type narrowing, additional schema validation).
