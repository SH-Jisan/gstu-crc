---
name: security-awareness
description: Defensive, security-conscious engineering practices, least privilege, zero-trust input handling, and OWASP Top 10 mitigation.
trigger: always_on
---

# Security Awareness

Enforce defensive, security-conscious engineering practices proportionate to system exposure and data sensitivity.

## 1. Security by Design & Core Principles
- **Secure by Default**: Default to the most restrictive access, safest configurations, and secure protocols.
- **Least Privilege (PoLP)**: Grant only the minimal permissions, roles, and resource access required for the operation.
- **Defense in Depth**: Implement multi-layered protection (network, transport, application, data layer) so no single failure compromises the system.
- **Minimize Attack Surface**: Remove unused endpoints, disable unnecessary ports/features, and avoid extraneous dependencies.

## 2. Zero Trust & Input Validation
- **Untrusted Boundaries**: Treat all external data (HTTP payloads, URL parameters, headers, file uploads, third-party webhooks) as untrusted.
- **Strict Validation**: Validate data against strict types, schemas, ranges, and allowlists at trusted system boundaries.
- **Sanitization & Encoding**: Contextually sanitize and encode data before rendering (preventing XSS) or executing queries (preventing SQL/Command Injection). Never rely solely on client-side checks.

## 3. Secret Management & Data Protection
- **No Hardcoded Secrets**: Never commit passwords, API keys, private keys, session secrets, or tokens to source code or version control.
- **Sanitized Logging**: Ensure logs, traces, exception messages, and client responses never leak credentials, PII, or internal tokens.
- **Transit & Rest Encryption**: Enforce TLS for data in transit; encrypt sensitive persistent storage using modern cryptographic standards (e.g., AES-256-GCM).

## 4. Authentication & Authorization
- **Explicit Separation**: Keep authentication (verifying identity) strictly separated from authorization (verifying permissions).
- **Server-Side Enforcement**: Validate permissions on the server for every request. Never trust client-supplied roles, claims, or user IDs without validation.
- **Session Integrity**: Implement secure session management (HttpOnly, Secure, SameSite cookies; short-lived tokens; rotation on privilege changes).

## 5. Vulnerability Awareness (OWASP Top 10 & Beyond)
- Proactively safeguard against:
  - **Injections**: SQLi, NoSQLi, Command Injection, LDAP, template injection.
  - **Broken Access Control**: IDOR (Insecure Direct Object References), privilege escalation, path traversal.
  - **Cryptographic Failures**: Deprecated algorithms (MD5, SHA1 for passwords; use Argon2id/bcrypt instead).
  - **Insecure Deserialization & File Handling**: Remote code execution via untrusted object parsing or unrestricted uploads.
  - **SSRF & CORS Misconfigurations**: Server-side request forgery, wildcard CORS on authenticated APIs.

## 6. Supply Chain & Dependency Hygiene
- **Audit Dependencies**: Review third-party libraries for maintenance status, vulnerability advisories (CVEs), and supply chain integrity.
- **Pin & Update**: Keep dependencies up to date and remove unmaintained packages that broaden attack surfaces.

## 7. Responsible Security Boundaries
- Maintain strict professional and ethical standards. Focus on defensive engineering, detection, mitigation, threat modeling, and authorized testing. Never facilitate malicious exploits or unauthorized attacks.
