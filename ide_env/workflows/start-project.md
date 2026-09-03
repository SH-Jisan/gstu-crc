---
name: start-project
description: Complete 11-step blueprint for architecting, structuring, and bootstrapping new software systems from scratch.
slash_command: /start-project
---

# Start Project Workflow

Execute this playbook when initializing, architecting, or bootstrapping a new software project or major system initiative.

## Step 1: Clarify Project Objectives & Constraints
- **Core Purpose**: Define the problem being solved, target users, and primary use cases.
- **Requirements Matrix**: Enumerate functional requirements, non-functional requirements (latency, throughput, availability), constraints, and success criteria.
- **Clarify Unknowns**: Ask clarifying questions if critical parameters (scale, compliance, target environment) are missing before architecting.

## Step 2: Contextual Analysis & Risk Modeling
- **Complexity Assessment**: Determine whether the initiative warrants a simple script, a modular monolith, or distributed microservices.
- **Threat & Risk Audit**: Identify external dependencies, compliance hurdles, data privacy boundaries, and points of failure.
- **Scope Discipline**: Eliminate speculative features and overengineering early.

## Step 3: Targeted Research & Tech Vetting
- **Authoritative Standards**: Consult official documentation and current LTS ecosystem guidance for candidate tools.
- **Avoid Hype**: Base selections on proven stability, maintenance velocity, security posture, and developer ergonomics rather than trends.

## Step 4: Evaluate Architectural Alternatives
- **Compare Viable Approaches**: Contrast patterns (e.g., REST vs. GraphQL, SQL vs. NoSQL, Serverless vs. Containerized) across:
  - Implementation complexity and development velocity.
  - Operational overhead, maintenance, and hosting costs.
  - Team familiarity and long-term ecosystem support.
- **Explicit Trade-Offs**: Articulate why the recommended approach fits the project's specific constraints.

## Step 5: Define System Architecture
- **Domain Boundaries**: Establish modular domain boundaries and component responsibilities (DDD bounded contexts).
- **Data Architecture**: Specify persistence models, state management, caching layers, and migration strategies.
- **Security Perimeters**: Map trust boundaries, authentication flows, authorization gates, and secret management.

## Step 6: Select Technology Stack
- **Rationalized Tooling**: Finalize languages, frameworks, runtime engines, and primary libraries with clear technical justifications.
- **User Alignment**: Confirm major technological dependencies with the user before locking in the stack.

## Step 7: Scaffold Professional Project Structure
Establish a clean, scalable directory hierarchy:
```text
project-root/
├── src/            # Core business logic and application components
├── tests/          # Unit, integration, and E2E test suites
├── docs/           # Architecture diagrams, specifications, and API documentation
├── ide/            # Project planning notes, decision records (ADRs), implementation logs
├── .agents/        # Project-specific rules and agent workflows
└── config/         # Environment templates, build configs, and lint settings
```

## Step 8: Author Essential Documentation
Create initial living documentation within `docs/`:
- **Architecture Overview**: High-level system design and data-flow diagrams.
- **API & Data Contracts**: Interface specifications, schemas, and endpoints.
- **Security & Setup Guide**: Local development bootstrapping, environment variables, and security guidelines.

## Step 9: Establish Project Ecosystem (MCP, Plugins, Environment, Customizations)
- **MCP Servers (`mcp_config.json`)**: Proactively configure relevant MCP servers (e.g., PostgreSQL, GitHub, Docker, Puppeteer) matching the project stack.
- **Plugins (`plugins/`)**: Suggest or scaffold Antigravity plugins if bundled domain extensions are relevant.
- **IDE Environment & Tooling**: Configure `.vscode/settings.json`, `.vscode/launch.json` debugger, recommended extensions, linters, and formatters.
- **Workspace Rules**: Create focused rules in `.agents/rules/` for persistent repository conventions, lint rules, and testing standards.
- **Workspace Skills**: Create custom skills in `.agents/skills/<name>/SKILL.md` for project-specific domain logic, proprietary SDKs, or tool runbooks.
- **Workspace Workflows**: Add repeatable operational workflows in `.agents/workflows/` for recurring tasks (e.g., release procedures, migration playbooks).

## Step 10: Construct Phased Implementation Roadmap
Break implementation into ordered, milestone-driven phases:
- **Phase 1: Foundation**: Project skeleton, configuration, database schemas, CI/CD baseline.
- **Phase 2: Core Domain**: Primary entities, business logic, API routes, and unit tests.
- **Phase 3: Integration & Edge Cases**: External service adapters, authentication, error boundaries.
- **Phase 4: Hardening**: Performance profiling, security review, E2E test coverage, and documentation finalization.

## Step 11: Present Project Plan
Deliver a concise executive summary covering:
- Validated project requirements and architecture overview.
- Stack selection rationale and trade-offs.
- Initial directory structure and phased implementation roadmap.
- Concrete first steps awaiting user sign-off.
