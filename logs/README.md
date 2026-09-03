# Project Logs & AI Handoff Protocol

> **Directory Purpose**: This folder maintains token-optimized, human-and-AI-readable logs of all sessions, discussions, architectural decisions, file changes, and implementation history for the **CRC Platform** project.

---

## 🧭 Instructions for Incoming Developers or Antigravity Agents

If you are a new developer or an AI agent opening this repository on another machine, follow this inspection order to get up to speed within 2 minutes:

1. **Check System Architecture & Specs**: Read [`../docs/specifications/project_charter.md`](../docs/specifications/project_charter.md) and [`../docs/architecture/system_architecture.md`](../docs/architecture/system_architecture.md).
2. **Review Session History**: Check [`session_logs.md`](./session_logs.md) to understand recent discussions, client requirements, and what was decided.
3. **Review Implementation Progress**: Check [`implementation_history.md`](./implementation_history.md) to see modified files, created components, and current milestone status.
4. **Review Decisions**: Read [`decisions_log.md`](./decisions_log.md) for rationale behind tech stack, conventions, and architectural choices.

---

## 📂 File Index

| File | Purpose | Update Frequency |
| :--- | :--- | :--- |
| [`session_logs.md`](./session_logs.md) | High-density log of client/user discussions, prompt intents, action summaries, and immediate next steps. | Every prompt/session |
| [`implementation_history.md`](./implementation_history.md) | Surgical record of files created/edited, components built, dependencies added, and verification evidence. | Every code modification |
| [`decisions_log.md`](./decisions_log.md) | Lightweight Architectural Decision Log (ADL) tracking key technical and business choices. | Upon design decisions |
