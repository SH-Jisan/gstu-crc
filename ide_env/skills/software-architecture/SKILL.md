---
name: software-architecture
description: Designs scalable, maintainable, and resilient software architectures, establishing clear module boundaries, data flows, interfaces, and evolutionary paths.
---

# Software Architecture Skill

Activate this skill when structuring new applications, breaking down monoliths, designing distributed services, or setting component boundaries.

## 1. Architectural Analysis Framework
- **System Boundaries**: Identify external systems, third-party integrations, and user interfaces.
- **Component Decomposition**: Divide systems into cohesive domains with explicit bounded contexts (DDD principles).
- **Communication Patterns**: Select appropriate interaction styles (synchronous REST/gRPC vs. asynchronous event-driven queues/pub-sub).
- **Data Ownership**: Ensure each service or domain cleanly owns its persistence model; prevent shared database antipatterns.

## 2. Quality Attribute Trade-Offs
Balance architectural trade-offs systematically:
- **Scalability vs. Operational Complexity**: Prefer simple modular monoliths before adopting distributed microservices.
- **Consistency vs. Availability (CAP)**: Explicitly choose between strong consistency (ACID) and eventual consistency based on business needs.
- **Latency vs. Resource Efficiency**: Balance in-memory caching (Redis) with cache invalidation complexity.

## 3. Evolutionary Architecture Design
- **Isolate Volatile Logic**: Decouple rapidly changing business rules from stable core infrastructure via hexagonal/ports-and-adapters architecture.
- **Anti-Corruption Layers**: Wrap external dependencies in adapter layers to shield internal models from upstream breaking changes.
- **Observability by Design**: Incorporate structured logging, distributed tracing (OpenTelemetry), and health metrics from the outset.
