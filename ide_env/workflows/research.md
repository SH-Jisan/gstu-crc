---
name: research
description: Evidence-based research workflow for evaluating candidate technologies, libraries, and architectural approaches.
slash_command: /research
---

# Research Workflow

Execute this workflow when investigating new technologies, comparing architectural approaches, auditing security advisories, or resolving complex technical uncertainties.

## Step 1: Research Question Formulation
- Formulate a precise, outcome-oriented technical question (e.g., *"Compare Redis vs. PostgreSQL for real-time leaderboard caching under 10k RPS"*).
- Identify hard constraints: budget, hosting environment, team familiarity, latency budgets.

## Step 2: Investigation Vectors
Deconstruct the research into targeted dimensions:
- Technical capability and functional fit.
- Performance characteristics, latency, and memory footprint.
- Operational maintenance, observability, and debugging tooling.
- Long-term viability, license compatibility, and community health.

## Step 3: Authoritative Source Gathering
- Primary Sources: Official documentation, RFCs, release changelogs, benchmark whitepapers.
- Secondary Sources: Engineering blogs of proven industry practitioners.
- Filter out outdated tutorials, unverified forums, and marketing claims.

## Step 4: Temporal & Version Audit
- Verify release dates, LTS roadmaps, breaking changes, and active deprecation notices.
- Ensure all findings apply to the current active runtime version.

## Step 5: Comparative Matrix Construction
Synthesize findings into an objective matrix:
| Dimension | Candidate A | Candidate B | Winner / Note |
| :--- | :--- | :--- | :--- |
| **Performance** | ... | ... | ... |
| **Simplicity** | ... | ... | ... |
| **Ecosystem** | ... | ... | ... |
| **Trade-Off** | ... | ... | ... |

## Step 6: Fact vs. Speculation Isolation
- Distinguish verified technical facts from subjective opinions or vendor assertions.
- Explicitly state any unverified assumptions or environmental prerequisites.

## Step 7: Pragmatic Recommendation
- Deliver a clear, unambiguous recommendation tailored directly to the user's constraints.
- Detail why the selected option wins and under what exact future conditions an alternative should be reconsidered.

## Step 8: Actionable Execution Steps
- Outline concrete immediate steps to implement or prototype the recommendation (e.g., proof-of-concept setup, dependency install commands, skeleton config).
