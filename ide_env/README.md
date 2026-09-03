# Antigravity IDE Customization Framework

A production-grade, token-optimized customization package for **Google Antigravity IDE**. This repository configures the AI pair programming agent with high-density engineering heuristics, disciplined debugging, defensive security, architectural patterns, progressive technical mentoring, and unified global master files.

---

## 🏛️ System Architecture

The framework is organized into three complementary layers following the Antigravity Customization Specification, featuring both modular files and unified master files:

```mermaid
graph LR
    subgraph 1. Invariant Rules ["1. Rules"]
        R0[⭐ global.md]
        R1[general.md]
        R2[coding-standards.md]
        R3[debugging.md]
        R4[security.md]
        R5[problem-solving.md]
        R6[learning-mode.md]
    end

    subgraph 2. Domain Skills ["2. Skills"]
        S0[⭐ global/SKILL.md]
        S1[code-review]
        S2[debugging]
        S3[implementation]
        S4[problem-solving]
        S5[security-engineering]
        S6[software-architecture]
        S7[technical-learning]
        S8[technical-research]
    end

    subgraph 3. Slash Workflows ["3. Workflows"]
        W0[⭐ /global]
        W1[/start-project]
        W2[/plan-feature]
        W3[/implement]
        W4[/debug]
        W5[/review]
        W6[/research]
        W7[/solve-problem]
        W8[/learn]
    end

    Rules --> Skills --> Workflows
```

---

## 📁 Directory Layout

```text
antigravity/
├── rules/                       # Behavioral constraints and coding standards
│   ├── global.md                # ⭐ MASTER: Unified always-on rulebook
│   ├── general.md               # Core engineering behavior (always_on)
│   ├── coding-standards.md      # Clean code, idioms, error boundaries (always_on)
│   ├── debugging.md             # Evidence-driven bug isolation (contextual)
│   ├── security.md              # Zero-trust input, secrets, OWASP (contextual)
│   ├── problem-solving.md       # Deconstruction & alternative modeling (contextual)
│   └── learning-mode.md         # Pedagogical progression & anti-patterns (contextual)
│
├── skills/                      # Native Antigravity skill folders (SKILL.md)
│   ├── global/SKILL.md          # ⭐ MASTER: Consolidated senior engineering skill
│   ├── code-review/SKILL.md     # 5-vector inspection & classified feedback
│   ├── debugging/SKILL.md       # Root-cause analysis & minimal reproduction
│   ├── implementation/SKILL.md  # Surgical code modification & post-check audit
│   ├── problem-solving/SKILL.md # Algorithmic modeling & Big-O budget analysis
│   ├── security-engineering/SKILL.md # Threat modeling (STRIDE) & zero-trust heuristics
│   ├── software-architecture/SKILL.md # Domain-driven design & CAP trade-offs
│   ├── technical-learning/SKILL.md    # 6-stage progressive mastery scaffolding
│   └── technical-research/SKILL.md    # Primary sources & comparative decision matrix
│
├── workflows/                   # Sequential execution playbooks (Slash Commands)
│   ├── global.md                # ⭐ MASTER: /global lifecycle playbook
│   ├── start-project.md         # /start-project : 11-step project launch roadmap
│   ├── plan-feature.md          # /plan-feature  : 7-step feature scoping & plan
│   ├── implement.md             # /implement     : 9-step production code execution
│   ├── debug.md                 # /debug         : 9-step evidence-first bug triage
│   ├── review.md                # /review        : 8-step multi-dimensional audit
│   ├── research.md              # /research      : 8-step technology comparison
│   ├── solve-problem.md         # /solve-problem : 10-step algorithmic solution
│   └── learn.md                 # /learn         : 10-step technical mentoring flow
│
├── install.ps1                  # One-click deployment script (Global / Workspace)
└── README.md                    # Framework documentation
```

---

## ⚡ Slash Command Reference

Trigger any workflow directly in the Antigravity chat or agent prompt:

| Command | Workflow | Description |
| :--- | :--- | :--- |
| `/global` | [global.md](file:///C:/Users/shzis/.gemini/config/workflows/global.md) | **⭐ Master Lifecycle**: End-to-end playbook uniting planning, execution, debugging, review, and learning. |
| `/start-project` | [start-project.md](file:///C:/Users/shzis/.gemini/config/workflows/start-project.md) | Bootstrap a new system: architecture, domain boundaries, tech stack, and roadmap. |
| `/plan-feature` | [plan-feature.md](file:///C:/Users/shzis/.gemini/config/workflows/plan-feature.md) | Architecture scoping, blast radius audit, and implementation plan generation. |
| `/implement` | [implement.md](file:///C:/Users/shzis/.gemini/config/workflows/implement.md) | End-to-end safe code execution with multi-level verification and regression safeguard. |
| `/debug` | [debug.md](file:///C:/Users/shzis/.gemini/config/workflows/debug.md) | Deterministic reproduction, root-cause isolation, minimal fix, and verification. |
| `/review` | [review.md](file:///C:/Users/shzis/.gemini/config/workflows/review.md) | Audit pull requests/modules for correctness, security, performance, and conventions. |
| `/research` | [research.md](file:///C:/Users/shzis/.gemini/config/workflows/research.md) | Comparative evaluation of libraries, frameworks, APIs, and architectural patterns. |
| `/solve-problem`| [solve-problem.md](file:///C:/Users/shzis/.gemini/config/workflows/solve-problem.md) | Mathematical, algorithmic, and concurrency puzzle solving with Big-O analysis. |
| `/learn` | [learn.md](file:///C:/Users/shzis/.gemini/config/workflows/learn.md) | Interactive conceptual teaching from intuitive mental models to real-world code. |

---

## 🚀 Installation & Deployment

### Option 1: Global Installation (Recommended)
Applies to all projects opened in Antigravity IDE on your computer:

```powershell
.\install.ps1 -Target Global
```
*Deploys to: `C:\Users\<username>\.gemini\config\`*

### Option 2: Workspace Installation
Applies exclusively to a specific project:

```powershell
.\install.ps1 -Target Workspace -Path "C:\path\to\your\project"
```
*Deploys to: `<project-root>\.agents\`*
