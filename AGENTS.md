# AGENTS.md

## Project
Astro single-page site (quinceañera invitation card). One page, ~12 components in `src/components/`.

## Package Manager
pnpm. Use `pnpm` (not npm/yarn).

## Commands
- `pnpm dev` — dev server at localhost:4321
- `pnpm build` — runs `astro check && astro build` (typecheck before build)
- `pnpm preview` — preview production build

No test suite configured.

## Code Style
- Prettier: no semicolons, single quotes, `singleAttributePerLine: true`, no trailing commas
- Plugins: `prettier-plugin-astro`, `prettier-plugin-tailwindcss`
- Tailwind sorts classes automatically via prettier plugin

## Tailwind
Custom colors in `tailwind.config.mjs`: `primary` (#8a7863), `secondary` (#d1ded8), `tertiary` (#FAF6F0).

## TypeScript
Strict mode via `astro/tsconfigs/strict`.

## Structure
- `src/pages/index.astro` — single entry point, composes all components
- `src/components/` — section components (Hero, Gallery, Card, MusicSection, etc.)
- `src/components/icons/` — icon subcomponents
- `src/layouts/Layout.astro` — base HTML layout
- `src/lib/parseDate.ts` — date utility
- `public/` — static assets (images, fonts, music)

## Gotchas
- Build fails if `astro check` finds type errors — fix types before building
- Assets referenced in components must exist in `public/`
- Font: Montserrat (via `@fontsource-variable/montserrat`)
