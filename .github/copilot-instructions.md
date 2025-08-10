# AI agent guide for this repo

This is an Astro 5 website with SolidJS islands and PandaCSS styling. Use the patterns below to fit in quickly and avoid surprises.

## Run, build, test
- Node: >= 22.14.0, PNPM: 10.13.1 (see package.json).
- Dev: `pnpm dev` (runs `dotenvx run -- astro dev --host`); optional env: `ALLOWED_HOST_LIST` for dev server allowlist.
- Build/Preview: `pnpm build` / `pnpm start`.
- Tests: `pnpm test` (Vitest + jsdom). There are currently few/no tests.
- PandaCSS codegen runs via `prepare` on install; no manual step needed.

## Architecture & routing
- Astro pages in `src/pages` proxy to `src/astro/pages/Intro.astro`. i18n is configured in `astro.config.mjs` with locales `[en, ko]`; routing is locale-aware (`/` and `/en/`).
- Shared layout: `src/astro/layouts/DefaultLayout.astro` loads global CSS, GA script in prod, and dispatches a `change:scrolled` CustomEvent on window scroll.
- Solid islands live under `src/solid/**` and are enabled via `@astrojs/solid-js`.

## Styling system
- PandaCSS config in `panda.config.ts` defines semantic tokens (colors, spacing, etc.). Use CSS vars like `var(--colors-background)` and `var(--spacing-doc-pad-left)` in Astro `<style>` blocks.
- Prefer `css`/`cva` from `src/styled-system/css` for component styles (see `Title.astro`).
- Global CSS: `src/styles/index.css` (layers + utilities). The `listItemsCss` token in `src/styles/component-css.ts` maps to the global `.list-items` class.
- Astro styles are scoped by default; use `:global(...)` when you must target global classes.

## i18n patterns
- Dictionary: `src/i18n/ui.ts`; helper: `useTranslations(lang)`; detect: `Astro.currentLocale` or `getDocLang()` in Solid.
- Experience keys follow `exp.<id>.<prop>` (e.g., `exp.2025001.header`, `period`, `tech`, `tasks`, `urls`, `urlText`, `summary`, `issue`, `result`). Types `ExpKeyPrefix`/`ExpProps` in `src/i18n/utils.ts` constrain valid keys.
- In `ExpCard.astro`, values are read via `t(...)` and multi-value fields are comma+space separated and split by `splitWithCommas`.

## Component conventions
- Class merging: use `class:list={[internalClasses, props.class]}` (see `Title.astro`). Passing classes from a parent is supported and expected.
- `Title.astro` uses `cva` variants: `size: 'h1'|'h2'|'h3'`. If `id` is provided, it wraps content in an anchor and adds `has-title`.
- Lists: use `listItemsCss` for consistent list styling.
- Solid component example: `src/solid/components/LastUpdated.tsx` uses global `LAST_UPDATED` defined in `astro.config.mjs` (`vite.define`).

## Interactive UI patterns
- Many widgets are plain Astro+DOM scripts (no framework). Example: `src/astro/widget/Experiences.astro` tab system toggles classes and writes CSS vars `--active-tab-index`, `--tab-max-height` for transitions.
- When adding similar interactivity, keep JS small and colocated in the `.astro` file unless state is complex (then consider Solid).

## CI/CD
- GitHub Actions (`.github/workflows/main.yml`) builds with PNPM and deploys to GitHub Pages via `peaceiris/actions-gh-pages`. The artifact comes from `./dist`.

## Gotchas
- Vite CSS Modules are configured to `generateScopedName: __[local]`, but most styles here are global or Astro-scoped, not CSS Modules.
- Token names in code use kebab-case CSS vars (e.g., `--colors-accent-o10`) mapped from Panda semantic tokens (e.g., `accentO10`).

Questions or gaps? Tell me if you want more detail on: adding a new experience tab/card, writing tests around Solid islands, or extending the styling tokens.
