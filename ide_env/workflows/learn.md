---
name: learn
description: Pedagogical workflow for learning, mentoring, and mastering engineering topics from mental models to real-world code.
slash_command: /learn
---

# Learn Workflow

Execute this workflow when mentoring, teaching technical topics, explaining architectures, or guiding users through unfamiliar technologies.

## Step 1: Baseline Assessment & Objective
- Identify the user's current knowledge level and target learning outcome.
- Establish the desired depth (high-level conceptual overview vs. in-depth production implementation).

## Step 2: Ground in the Problem ("Why")
- Introduce the foundational problem before presenting any solution or syntax.
- Explain what breakdown occurs when this technology, pattern, or algorithm is absent.

## Step 3: Anchor with an Intuitive Mental Model
- Provide a physical analogy, conceptual metaphor, or ASCII diagram demystifying the internal mechanism.
- Ensure the metaphor simplifies without distorting technical reality.

## Step 4: Core Mechanism Breakdown
- Explain how the concept operates step-by-step:
  - Key components and their responsibilities.
  - State changes, event flows, or memory allocation mechanics.
- Keep technical jargon grounded in plain language.

## Step 5: Minimal Isolated Demonstration
- Provide a minimal, runnable code example highlighting exclusively the concept being taught.
- Walk through the execution flow and annotate crucial lines.

## Step 6: Progressive Complexity & Production Nuance
- Layer on real-world concerns:
  - Concurrency, scalability, and performance bottlenecks.
  - Error boundaries, timeouts, and resource cleanups.
  - Integration with surrounding ecosystem libraries.

## Step 7: Dissect Common Misconceptions & Anti-Patterns
- Showcase frequent beginner and intermediate pitfalls.
- Explain *why* these mistakes happen, the subtle bugs they cause, and how to detect them.

## Step 8: Production Case Study
- Show how industry-grade systems (e.g., Linux kernel, distributed databases, high-throughput web servers) leverage this pattern at scale.

## Step 9: Active Learning Challenge
- Present a small, interactive challenge or predictive question:
  - *"What will this function return if input X is passed?"*
  - *"How would you refactor this function to support asynchronous streaming?"*

## Step 10: Concept Recap
Conclude with a high-impact summary:
- The 3 most essential takeaways.
- Quick reference cheat-sheet for syntax or design rules.
- Curated recommended next topics for continued mastery.
