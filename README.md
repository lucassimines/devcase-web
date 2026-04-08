# portfolio-dev

Personal portfolio site built with [Nuxt](https://nuxt.com/) and Tailwind CSS.

## Requirements

- [Node.js](https://nodejs.org/) (current LTS recommended)

## Setup

```bash
npm install
```

## Scripts

| Command            | Description                                      |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Dev server (default: http://localhost:3000)      |
| `npm run build`    | Production build                                 |
| `npm run preview`  | Preview production build locally                 |
| `npm run generate` | Static generation (`nuxt generate`)              |
| `npm run lint`     | ESLint                                           |
| `npm run lint:fix` | ESLint with `--fix`                              |
| `npm run format`   | Prettier check                                   |
| `npm run format:fix` | Prettier write                                   |
| `npm run typecheck` | Vue / TS check (`vue-tsc --noEmit`)           |

## Stack

| Area        | Notes |
| ----------- | ----- |
| **Framework** | Nuxt 4, Vue 3, TypeScript |
| **Styling** | Tailwind CSS v4 via `@tailwindcss/vite`; global CSS in `app/assets/css/` (`@import "tailwindcss"`, `@theme`, `@plugin`) |
| **Typography** | `@tailwindcss/typography` (used from CSS) |
| **Content** | `@nuxtjs/mdc` (Markdown components) |
| **i18n** | `@nuxtjs/i18n` (locales under `i18n/locales/`) |
| **Images** | `@nuxt/image` |

## Development tooling

### ESLint

- **ESLint 9** with the flat config from [`@nuxt/eslint`](https://eslint.nuxt.com/) (`eslint.config.mjs` extends the generated `.nuxt/eslint.config.mjs`).
- **Prettier integration**: [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) (`eslint-plugin-prettier/recommended`) so formatting issues surface as lint problems alongside [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to avoid rule clashes.
- Project rules include Vue conventions (e.g. PascalCase components in templates, no unused props) and stylistic choices aligned with Prettier (no semicolons). Nuxt-specific stylistic options are set under `eslint` in `nuxt.config.ts` (e.g. comma style, brace style).

### Prettier

- Config: `.prettierrc` — no semicolons, single quotes, 2-space indent, `trailingComma: "none"`, `printWidth: 100`.
- **[`prettier-plugin-tailwindcss`](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)** sorts class lists; `tailwindFunctions` includes `tv` so classes inside **tailwind-variants** `tv()` calls are ordered like `class` strings.

### Tailwind CSS utilities in JS/Vue

- **[tailwind-variants](https://tailwind-variants.org)** (`tv`) for variant-style class APIs; **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** is a dependency so conflicting utilities merge correctly.
- Shared helpers (Nuxt auto-import): `app/utils/tv.ts` (`createTV` defaults) and `app/utils/cn.ts` (re-export of `cn` from tailwind-variants).

### Git hooks

- **[Husky](https://typicode.github.io/husky/)** — `.husky/pre-commit` runs `typecheck`, `format:fix`, and `lint:fix` before commits.

## Deployment

See the [Nuxt deployment guide](https://nuxt.com/docs/getting-started/deployment).
