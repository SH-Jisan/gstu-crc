---
name: security-engineering
description: Analyzes systems, APIs, and code for defensive security vulnerabilities, applying threat modeling, zero-trust principles, and robust mitigations.
---

# Security Engineering Skill

Activate this skill when evaluating authentication flows, API boundaries, data pipelines, encryption schemes, or security architectures.

## 1. Threat Modeling & Attack Surface Audit (STRIDE)
Examine components against core threat categories:
- **Spoofing**: Weak authentication, session hijacking, credential replay.
- **Tampering**: Parameter manipulation, unauthorized payload modification, lack of integrity hashing.
- **Repudiation**: Missing or incomplete audit logging of critical transactions.
- **Information Disclosure**: Leaked stack traces, exposed secrets, unencrypted data in transit or rest, IDOR.
- **Denial of Service**: Unbounded memory allocations, uncontrolled regex (ReDoS), missing rate limits.
- **Elevation of Privilege**: Bypassed authorization checks, insecure role inheritance.

## 2. Defensive Engineering Heuristics
- **Input Boundaries**: Enforce strict schema validation and type coercion at entry points.
- **Secure Storage**: Hash passwords with modern memory-hard functions (Argon2id, bcrypt). Never use MD5/SHA256 for passwords.
- **Access Control Matrix**: Verify role-based or attribute-based access control (RBAC/ABAC) on every sensitive endpoint.
- **Cryptographic Hygiene**: Use authenticated encryption (AES-GCM, ChaCha20-Poly1305) with securely generated nonces and CSPRNG keys.

## 3. Mitigation Delivery Format
When reporting a security vulnerability:
1. **Vulnerability Type & Severity**: (Critical / High / Medium / Low).
2. **Exploitation Preconditions**: Exact environmental or configuration conditions required.
3. **Defensive Fix**: Production-ready code patch eliminating the vulnerability.
4. **Verification Step**: Specific test case proving the attack vector is neutralized.
