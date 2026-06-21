# Devcase Web

Headless portfolio frontend for developer portfolios — a Nuxt 4 site powered by the public REST API from [Devcase CMS](https://github.com/lucassimines/devcase-cms).

[![License: PolyForm Shield](https://img.shields.io/badge/License-PolyForm%20Shield-red.svg)](LICENSE)

> This repository is **public and source available**, not open source under OSI terms. You may view, learn from, and contribute to the code, but you may not offer a competing product or resell it as a service. See [License](#license).

## Overview

Devcase Web handles presentation and delivery for content managed in Devcase CMS:

| Layer                                | Role                                                       |
| ------------------------------------ | ---------------------------------------------------------- |
| **Pages** (`app/pages/`)             | Home, About, project listing, and project detail routes    |
| **Components** (`app/components/`)   | Layout, blocks, project cards, and shared UI               |
| **Composables** (`app/composables/`) | API client, bootstrap data, page fetching, and SEO helpers |
| **Server routes** (`server/routes/`) | `sitemap.xml` and `robots.txt` proxies for crawlers        |

Content is fetched at runtime from the CMS public API and rendered as block-based pages, project showcases, and site navigation.

## Companion CMS

This frontend is **ready to work with** [Devcase CMS](https://github.com/lucassimines/devcase-cms) — a headless CMS with an admin panel and public API (`/api/v1/*`) for pages, projects, bootstrap data, sitemap, and media.

| Piece          | Repository                                                             | Role                                                                |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **CMS & APIs** | [devcase-cms](https://github.com/lucassimines/devcase-cms)             | Admin panel, content storage, public & admin APIs                   |
| **Frontend**   | [devcase-web](https://github.com/lucassimines/devcase-web) (this repo) | Developer portfolio site — pages, projects, bootstrap data, sitemap |

Run the CMS locally (or point at production), configure this app with your API base URL, and the two repos work together out of the box.

## Tech Stack

| Layer     | Technology                                      |
| --------- | ----------------------------------------------- |
| Framework | Nuxt 4, Vue 3, TypeScript                       |
| Styling   | Tailwind CSS 4, tailwind-variants               |
| Content   | Block-based pages from CMS API, `@nuxtjs/mdc`   |
| Images    | `@nuxt/image` (CMS media via configured domain) |
| i18n      | `@nuxtjs/i18n`                                  |
| Analytics | `nuxt-gtag` (production only)                   |
| Dev Tools | ESLint, Prettier, Husky                         |

## Site Sections

| Section      | Description                                                        |
| ------------ | ------------------------------------------------------------------ |
| **Home**     | Intro, featured projects, and CMS-driven page blocks               |
| **About**    | Profile page with block-based content from the CMS                 |
| **Projects** | Portfolio listing and detail pages with technologies and solutions |
| **Layout**   | Header, footer, navigation, and social links from bootstrap data   |
| **SEO**      | Canonical URLs, Open Graph, JSON-LD, sitemap, and robots.txt       |

## Project Structure

```
devcase-web/
├── app/
│   ├── components/    # UI, blocks, project cards, layout
│   ├── composables/   # useApi, useBootstrap, usePageFetch, useSiteSeo
│   ├── pages/         # index, about, projects
│   ├── layouts/       # default layout with header/footer
│   ├── types/         # API response types
│   └── utils/         # API client, tailwind helpers
├── server/routes/     # sitemap.xml, robots.txt proxies
├── i18n/locales/      # Translation files
└── nuxt.config.ts
```

## API Integration

Base path: `/api/v1` on the CMS (configured via `API_URL`).

**Consumed from Devcase CMS**

| Method | Path                 | Used for                              |
| ------ | -------------------- | ------------------------------------- |
| GET    | `/bootstrap`         | Site menu, footer links, social media |
| GET    | `/pages/:slug`       | Home, About, and CMS-driven pages     |
| GET    | `/projects`          | Project listing                       |
| GET    | `/projects/:slug`    | Project detail pages                  |
| GET    | `/projects/featured` | Home page featured projects           |
| GET    | `/sitemap`           | `/sitemap.xml` (proxied via Nitro)    |
| GET    | `/static/images/*`   | CMS media via Nuxt Image              |

Pages use **ISR** (5-minute cache in production) with on-demand revalidation triggered from the CMS admin (`/admin/revalidate`).

## Getting Started

### Prerequisites

- Node.js (current LTS recommended)
- A running [Devcase CMS](https://github.com/lucassimines/devcase-cms) API instance

### Setup

```bash
# Clone the repo
git clone git@github.com:lucassimines/devcase-web.git
cd devcase-web

# Install dependencies
npm install

# Copy env file and adjust as needed
cp .env.example .env
# Set API_URL to your Devcase CMS public API base (e.g. http://localhost:8080/api/v1)
```

### Environment

| Variable                     | Description                              |
| ---------------------------- | ---------------------------------------- |
| `API_URL`                    | Devcase CMS public API base URL          |
| `APP_URL`                    | This site's public URL (SEO, sitemap)    |
| `NUXT_IMAGES_DOMAIN`         | CMS host for `@nuxt/image`               |
| `NUXT_PUBLIC_IMAGES_URL`     | CMS static images base URL               |
| `PRERENDER_REVALIDATE_TOKEN` | Shared secret with CMS for on-demand ISR |
| `GTAG_ID`                    | Google Analytics ID (production)         |

### Run

```bash
npm run dev        # Dev server (http://localhost:3000)
npm run build      # Production build
npm run preview    # Preview production build
```

## Scripts

| Command                         | Description              |
| ------------------------------- | ------------------------ |
| `npm run dev`                   | Dev server               |
| `npm run build`                 | Production build         |
| `npm run preview`               | Preview production build |
| `npm run generate`              | Static generation        |
| `npm run lint` / `lint:fix`     | ESLint                   |
| `npm run format` / `format:fix` | Prettier                 |
| `npm run typecheck`             | Vue / TypeScript check   |

## Production Infrastructure

| Service    | Provider                                                            |
| ---------- | ------------------------------------------------------------------- |
| Database   | Prisma.io                                                           |
| API Server | Render                                                              |
| Frontend   | [devcase-web](https://github.com/lucassimines/devcase-web) (Vercel) |

---

## License

Copyright © 2025–2026 Lucas Simines. All rights reserved.

Licensed under the [PolyForm Shield License 1.0.0](LICENSE).

### You may

- View, clone, and study the source code
- Run it locally for learning, evaluation, or contributing
- Submit pull requests and improvements

### You may not (without written permission)

- Offer a product or service that competes with Devcase Web
- Resell, white-label, or sublicense this software as a commercial product

### Commercial licensing

For commercial use or a separate license agreement, open an issue on [GitHub](https://github.com/lucassimines/devcase-web/issues) or contact the maintainer directly.

Full terms: [LICENSE](LICENSE)
