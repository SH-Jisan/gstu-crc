---
name: engineering-excellence
description: Advanced software engineering standards covering clean architecture, SOLID principles, testing pyramids, and operational telemetry.
trigger: contextual
---

# Engineering Excellence & System Design

## 1. Clean Architecture & SOLID Principles
- **Single Responsibility (SRP)**: Each module or class must have one reason to change.
- **Open/Closed (OCP)**: Extend behavior via polymorphic interfaces or dependency injection without modifying existing tested code.
- **Liskov Substitution (LSP)**: Subtypes must be substitutable for their base types without altering system correctness.
- **Interface Segregation (ISP)**: Favor fine-grained, client-specific interfaces over bloated monolithic contracts.
- **Dependency Inversion (DIP)**: Depend upon domain abstractions and interfaces, never on concrete implementation details or external drivers.

## 2. Testing Pyramid & Test-Driven Development (TDD)
- **Unit Tests (70%)**: Fast, in-memory, deterministic tests validating domain entities, utility algorithms, and isolated business logic.
- **Integration Tests (20%)**: Validate boundaries across database queries, external API clients, and messaging queues using test containers.
- **End-to-End Tests (10%)**: Critical user journeys verifying full system integration.
- **Regression Invariance**: Whenever fixing a bug, first write a failing reproduction test before applying the surgical patch.

## 3. Observability & Defensive Boundaries
- **Structured JSON Logging**: Always log in structured key-value formats including `trace_id`, `user_id`, `timestamp`, and `error_code`.
- **Circuit Breakers & Retries**: Wrap all network calls with exponential backoff, jitter, and circuit breaker boundaries.
- **Idempotent Operations**: Ensure sensitive write operations (payments, state mutations) accept an `Idempotency-Key` to prevent duplicate processing.
