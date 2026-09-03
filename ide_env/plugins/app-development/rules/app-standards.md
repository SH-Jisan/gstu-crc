---
name: app-standards
description: Mobile and desktop application development standards covering state architecture, offline-first design, lifecycle hygiene, and touch UX.
trigger: contextual
---

# Mobile & Desktop Application Standards

## 1. Architectural Separation (Clean App Design)
- **Layered Decoupling**: Separate Presentation (Views/Screens) $\to$ State/ViewModel $\to$ Domain (Use Cases) $\to$ Data (Repositories & Data Sources).
- **Zero Business Logic in UI**: Never embed API requests, database transactions, or business validation inside UI components or widgets.
- **Unidirectional Data Flow**: State flows down into views; user actions/events dispatch upwards to controllers or reducers.

## 2. Offline-First & Data Persistence
- **Local Cache as Primary**: Read from local storage (SQLite, Room, CoreData, MMKV) immediately; sync over network in the background.
- **Conflict Resolution**: Implement optimistic updates with deterministic rollback on sync failure.
- **Network Resilience**: Gracefully handle offline states, airplane mode, slow networks, and socket reconnections with user-friendly indicators.

## 3. Lifecycle & Memory Hygiene
- **Subscription Teardown**: Always clean up event listeners, timers, sockets, and streams on screen unmount or view disposal to prevent memory leaks.
- **Background State Handling**: Save critical drafts/state when app enters background (`paused` / `inactive`). Never lose user input.
- **Heavy Compute Offloading**: Move image processing, data decoding, and heavy parsing to background threads or isolates.

## 4. Touch UX & Native Guidelines
- **Platform Conventions**: Adhere to iOS Human Interface Guidelines (HIG) and Android Material 3 patterns appropriately.
- **Touch Ergonomics**: Ensure minimum 48x48dp touch targets, clear active press states, and support for hardware back navigation and gesture swipes.
