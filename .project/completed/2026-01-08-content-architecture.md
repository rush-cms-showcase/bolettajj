---
title: "Content Architecture & Assets"
created: 2026-01-08T00:35:00-03:00
priority: P1-S
actual_hours: 0.5
status: completed
tags: [architecture, content]
---

# Use Case
Decouple text content from markup to prepare for future CMS integration and ensure maintainability.

# Technical Requirements
- [ ] **Content Registry:** Create `src/data/site-content.ts` (or JSON).
    - [ ] Structure into: `global`, `home`, `footer`, `socials`.
    - [ ] **Constraint:** NO inline text in `.astro` files. All copy must come from this registry.
- [ ] **Icon System:**
    - [ ] Implement a DRY Icon component (e.g., `<Icon name="youtube" />`).
    - [ ] Use raw SVGs or a lightweight spreadsheet/CSV approach if efficiently executable, otherwise standard mapped SVGs.
- [ ] **Social Media Data:**
    - [ ] Define URLs and handles in the content registry.

# Design Constraints
- Type-safe content access preferences.
