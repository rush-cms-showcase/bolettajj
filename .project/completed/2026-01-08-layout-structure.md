---
title: "Layout Structure & Base Components"
created: 2026-01-08T00:35:00-03:00
priority: P1-M
actual_hours: 1
status: completed
tags: [frontend, layout, components]
---

# Use Case
Establish the visual shell of the application, ensuring responsive navigation, theming, and legal compliance in the footer.

# Technical Requirements
- [ ] **Base Layout:** Create `src/layouts/Layout.astro`.
    - [ ] No sidebar on standard pages.
    - [ ] Insert `<SeoHead />` (placeholder).
- [ ] **Theme System:**
    - [ ] Implement robust Theme Toggle (Light/Dark/Auto).
    - [ ] Ensure flash-of-unstyled-theme (FOUT) prevention.
- [ ] **Header / Navigation:**
    - [ ] Sticky/Floating behavior (Disruptive style).
    - [ ] Mobile Menu (Island architecture if interaction is complex, or CSS-only).
- [ ] **Footer:**
    - [ ] Section for "CNPJ", "Termos de Uso", "Privacidade".
    - [ ] Social Icons (FB, IG, YT, TT). Use strictly optimized SVGs.
    - [ ] Copyright notice.
- [ ] **Floating Action Button:**
    - [ ] WhatsApp button (bottom-right), persistent.

# Design Constraints
- Tailwind v4 alpha/beta syntax.
- "Disruptive" aesthetic (Neon accents in dark mode).
