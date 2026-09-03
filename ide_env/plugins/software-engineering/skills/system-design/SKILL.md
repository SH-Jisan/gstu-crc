---
name: system-design
description: Practical system design framework evaluating scalability, caching strategies, data partitioning, and distributed architecture trade-offs.
---

# High-Scale System Design Framework

## 1. Core Architectural Trade-Off Analysis

```mermaid
graph TD
    Client[Client Applications] --> CDN[Edge CDN / Static Cache]
    CDN --> LB[Load Balancers / API Gateway]
    LB --> Services[Microservices / Application Cluster]
    Services --> Cache[(Distributed Cache: Redis)]
    Services --> DB[(Primary Database: ACID)]
    Services --> EventQueue[Event Bus: Kafka / RabbitMQ]
    EventQueue --> Workers[Async Background Workers]
```

## 2. Distributed Scaling Heuristics
- **CAP Theorem Stance**: Formally decide between Consistency (CP) or Availability (AP) during network partitions based on business domain.
- **Caching Patterns**: Choose between Cache-Aside (default reads), Write-Through (strong consistency), or Write-Behind (high write volume).
- **Database Scaling**: Implement indexing audits first $\to$ Read-Replicas second $\to$ Partitioning/Sharding third.
- **Backpressure & Rate Limiting**: Apply token-bucket or sliding-window rate limiters at the API Gateway to guard downstream microservices.
