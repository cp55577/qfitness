# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repo overview (what this is)
This repository is a static website for Q Fitness.

Two workflows exist in the repo:
- **Current GitHub Pages workflow (no build required):** pages are plain HTML files that load shared UI (navbar/footer) at runtime via `js/components.js` (see `GITHUB-PAGES-SETUP.md`).
- **Legacy Gulp “build to dist/” workflow:** `gulpfile.js` can copy assets and write HTML into `dist/`. Note: the README describes an `includes/`-based SSI setup, but `includes/` is not present in the current repo.

## Common commands
### Install
```bash
npm install
```

### Build static output into `dist/`
```bash
npm run build
```
Notes:
- This runs `gulp build` (see `gulpfile.js`).
- Output is written to `dist/` (created during the build).

### Watch/rebuild `dist/` during edits
```bash
npm run dev
```
Notes:
- This runs `gulp watch`.
- `gulp watch` only sets up watchers; if you need a fresh `dist/`, run `npm run build` first.

### Tests / lint
There are currently **no test or lint commands configured** in `package.json`.

## High-level architecture
### Pages and routing
- Pages are static `.html` files at the repo root and in a few section folders:
  - Root pages: `index.html`, `contact.html`, `faq.html`
  - Section pages: `about/`, `services/`, `membership/`, `community/`
- `sitemap.xml` and `robots.txt` are committed for crawling/SEO.

### Shared UI: navbar + footer injection
- Shared navigation/footer are defined as template strings in `js/components.js`.
- Every page is expected to include:
  - a placeholder `<nav ...></nav>` and `<footer></footer>`
  - a script tag that loads `components.js` (path differs between root vs subfolders)
- Path handling:
  - `js/components.js` computes `pathPrefix` via `getPathPrefix()` by checking whether the current `window.location.pathname` contains a known section folder.
  - If you add a new top-level section folder (e.g. `/trainers/`), update `getPathPrefix()` and/or link generation so links and image URLs remain correct when browsing nested pages.

### Styling
- Pages load Tailwind via CDN (`https://cdn.tailwindcss.com`) and Flowbite via CDN.
- Most site-specific styling lives in `styles.css` (themes via `.scheme-*`, shared layout helpers, etc.).
- Many pages also define a small inline `tailwind.config = { ... }` block in the page `<head>` to extend colors.

## Deployment notes
- The site is deployed via **Vercel** using its Git integration (pushes to the connected branch trigger deploys). There is no Vercel-specific config checked into this repo (no `vercel.json`).
- The repo is also structured to work as plain static files for **GitHub Pages** (see `GITHUB-PAGES-SETUP.md`).
- If you need a deployable folder for traditional hosting, `npm run build` produces `dist/`.

## Repo-specific agent rule carried over from Cursor
- Do not use/create Git worktrees for this repo; work directly in the repo root folder (mirrors `.cursorrules`).
