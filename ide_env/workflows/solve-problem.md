---
name: solve-problem
description: Systematic workflow for analyzing, decomposing, modeling, and solving complex algorithmic and engineering puzzles.
slash_command: /solve-problem
---

# Solve Problem Workflow

Execute this workflow when addressing complex algorithms, performance bottlenecks, race conditions, or multi-faceted engineering puzzles.

## Step 1: Problem Definition & Constraints
- Clarify inputs, outputs, preconditions, postconditions, and invariant properties.
- Quantify constraints: memory limits, CPU cycles, latency thresholds, concurrency requirements.
- Identify success criteria and edge boundaries.

## Step 2: Problem Decomposition
- Divide the overall challenge into isolated, tractable sub-problems.
- Identify dependencies, state mutations, and data transformations connecting the components.

## Step 3: Targeted Research (If Applicable)
- Research proven patterns, algorithms, or mathematical models (e.g., sliding window, topological sort, memoization).
- Avoid reinventing solved standard algorithms without strong domain-specific justification.

## Step 4: Alternative Generation
Formulate diverse solution strategies:
1. **Naive/Baseline**: The simplest, obviously correct approach (establishing a baseline).
2. **Optimized Standard**: Industry-standard idiom balancing complexity and speed.
3. **High-Performance/Specialized**: Highly optimized approach for extreme scale or memory constraints.

## Step 5: Comparative Evaluation
Weigh each approach against:
- Asymptotic complexity (Big-O time and space).
- Implementation complexity and readability.
- Failure modes, concurrency risks, and maintenance burden.

## Step 6: Solution Selection & Justification
- Select the approach providing the best balance for the user's specific context.
- Articulate why this approach beats the alternatives.

## Step 7: Logic & Edge-Case Pre-Check
Before coding, trace the algorithm against edge cases:
- Empty, singular, or maximum-size datasets.
- Negative numbers, nulls, duplicates, or boundary values.
- Interrupted execution or timeout scenarios.

## Step 8: Clean Implementation
- Write clean, modular, and self-documenting code implementing the selected strategy.
- Add concise comments explaining non-trivial algorithmic steps or mathematical logic.

## Step 9: Multi-Scenario Verification
- Execute automated tests covering normal operations, adverse conditions, and extreme boundaries.
- Benchmark runtime performance and memory consumption when performance is a stated constraint.

## Step 10: Solution Summary
Present:
- The core algorithmic mechanism and why it works.
- Final time and space complexity ($O(n)$ notation).
- Operating boundaries and guidelines for future modification.
