# Legacy Website UI/UX Audit
**Date:** 2026-01-08
**Subject:** Boleta JJ Legacy Site (Wordpress)

## Overview
The legacy website (`.project/_old-website`) represents a standard, previous-generation Wordpress implementation. While functional, it suffers from information architecture issues, lack of visual hierarchy, and a trusted aesthetic that falls short of the "Premium/Disruptive" goal.

## Page-by-Page Analysis

### 1. Home (`bolettajj-home.png`)
*   **Current State:** likely a generic slider or static hero with weak CTA. Standard "hamburger" or top-bar navigation that blends into the noise.
*   **Issues:**
    *   **Low Impact:** Doesn't immediately communicate the unique value of "Intellectual Jiu Jitsu".
    *   **Generic Stock Feel:** Lacks the raw, authentic texture of a real fighting gym.
    *   **Banner Blindness:** Information likely gets lost in generic sections.
*   **Correction for New Site:**
    *   Switch to **Full-Screen Video/cinematic Hero**.
    *   **One Primary CTA** ("Aula Grátis") that vibrates/pulses to draw the eye.

### 2. Schedule (`bolettajj-horarios.png`)
*   **Current State:** Static table/grid.
*   **Issues:**
    *   **Mobile Nightmare:** Large grids shrink to illegibility on mobile screens.
    *   **Cognitive Load:** User has to scan rows/cols to find "today".
*   **Correction for New Site:**
    *   **Smart Timeline:** Show "Today's Classes" first.
    *   **Filterable:** "Show only Beginners", "Show only No-Gi".

### 3. Modalities (`bolettajj-modalidades.png`) & Immersion (`bolettajj-imersao-...)
*   **Current State:** Long text blocks, likely poor typography (small line-height, wide measures).
*   **Issues:**
    *   **Wall of Text:** Discourages reading.
    *   **Lack of Scannability:** No distinct iconography or clear benefit headers.
*   **Correction for New Site:**
    *   **Cards & Icons:** Break text into digestible chunks.
    *   **Visual Metaphors:** Use icons (Gi, No-Gi, Kids) to identify tracks instantly.

### 4. About Us (`bolettajj-sobre-nos.png`)
*   **Current State:** Generic "History" page.
*   **Issues:**
    *   Missed opportunity to build authority via the Head Coach (Boleta).
*   **Correction for New Site:**
    *   **Heroic Bio:** Present the instructor as a Mentor/Guide using high-contrast photography and pull-quotes.

## Critical UX Deficiencies (System-Wide)
1.  **Mobile Responsiveness:** Legacy tables and sliders often break layout on vertical screens.
2.  **Conversion Pathways:** No clear "funnel". Users wander rather than being directed to specific actions (e.g., "White Belt? Start Here").
3.  **Speed/CWV:** Wordpress bloat likely impacts LCP and CLS.

## Conclusion
The legacy site informs us *what content* is necessary but *how not to display it*. The new architecture must strip away the decorative noise of the old theme and focus purely on **Content + Vibe**.
