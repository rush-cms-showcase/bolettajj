---
title: "Instructors Section & Theme Toggle Fix"
created: 2026-01-08T00:55:00-03:00
priority: P1-M
actual_hours: 0.5
status: completed
tags: [frontend, components, ui]
---

# Use Case
Complete the landing page by adding the missing "Instructors" section and ensuring the Theme Toggle works flawlessly.

# Technical Requirements
- [ ] **Instructors Component:**
    - [ ] Create `src/components/home/Instructors.astro`.
    - [ ] "Hybrid" Design: Clean layout (Concept B) + High Contrast Avatars (Concept A).
    - [ ] Add mock data to `site-content.ts`.
- [ ] **Theme Toggle:**
    - [ ] Verify functionality (Light/Dark persistence).
    - [ ] Ensure SVG icons switch correctly.
    - [ ] Fix any "white flash" or FOUT issues.

# Design Constraints
- **Instructors:** Must handle 2-4 instructors gracefully.
- **Theme:** Smooth transition, icon animation if possible.
