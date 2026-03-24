# Boleta JJ Website

> Premium Jiu Jitsu School Website powered by Rush CMS (Headless) and Astro.

## Project Overview

This project is a high-performance, conversion-focused website for **Boleta JJ**. It matches a disruptive, premium design aesthetic with a robust technical foundation.

**Stack:**
- **Framework:** [Astro](https://astro.build) (v5+)
- **Styling:** Tailwind CSS v4
- **CMS:** [Rush CMS](https://rushcms.com) (Headless)
- **Deployment:** Coolify / Vercel
- **Language:** TypeScript

## Key Features

- **Core Web Vitals > 95:** Strict performance budget.
- **Islands Architecture:** Zero JS by default, hydrated only when necessary (e.g., Schedule, Maps).
- **Dynamic Content:** Utilizing `@rush-cms/sdk` to fetch content at build time.
- **[AIPIM](https://github.com/rmarsigli/aipim)** to manage the project.
- **SEO Optimized:** Semantic HTML, meta tags, and structured data.

## Project Structure

This project follows the **AIPIM** management structure:

```
.project/
  ├── current-task.md      # The active task checklist
  ├── context.md           # Session state and project context
  ├── backlog/             # Future tasks and features
  ├── reports/             # Technical and Design reports
  ├── ideas/               # Brainstorming and concepts
  └── decisions/           # Architectural Decision Records (ADR)
```

## Getting Started

1. **Install Dependencies:**
   ```bash
   pnpm install
   ```

2. **Environment Setup:**
   Create a `.env` file with your Rush CMS credentials:
   ```env
   RUSH_API_TOKEN=your_token
   RUSH_SITE_SLUG=boleta-jj
   ```

3. **Development Server:**
   ```bash
   pnpm run dev
   ```

4. **Build for Production:**
   ```bash
   pnpm run build
   ```

## Development Guidelines

- **Tailwind v4:** Use the new engine. No `tailwind.config.js` needed for most things; use CSS variables.
- **Components:** `src/components/` (kebab-case files, PascalCase components).
- **Astro Pages:** `src/pages/`.
- **Type Safety:** All props must be typed. No `any`.

## License

Private / Proprietary - Boleta JJ.