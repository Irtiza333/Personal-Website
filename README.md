# Personal Website

A fast, modern personal/academic site built with **Next.js (App Router) + TypeScript + Tailwind CSS**, statically exported and deployable to **GitHub Pages**.

Pages: Home, Research, Publications, Blog (Markdown), and About.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Build the static site (output goes to `out/`):

```bash
npm run build
```

## Editing content

All content lives in plain data files and Markdown so you rarely have to touch the
React components:

| What | Where |
| --- | --- |
| Name, role, tagline, socials, nav | `content/site.ts` |
| Research projects & interests | `content/research.ts` |
| Publications (with BibTeX) | `content/publications.ts` |
| About bio, education timeline, interests | `content/about.ts` |
| Blog posts | `content/blog/*.md` |
| Profile photo | `public/avatar.svg` (replace with your own image, update `site.avatar`) |
| CV | add `public/cv.pdf` (linked from the About page) |

### Adding a blog post

Drop a new Markdown file in `content/blog/`, e.g. `content/blog/my-post.md`:

```markdown
---
title: "My post title"
date: "2026-03-01"
excerpt: "A one-line summary shown in listings."
tags: ["optimization", "notes"]
---

Your **Markdown** content here.
```

The post is automatically added to the blog index and gets its own page at
`/blog/my-post`.

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages on every push to `main`.

1. Push this project to a GitHub repository.
   - For a **user site**, name the repo `<username>.github.io` (e.g. `Irtiza333.github.io`). It is served from the domain root, so no extra config is needed.
   - For a **project repo** (served at `/<repo>`), edit `deploy.yml` and uncomment the `BASE_PATH` env in the build step so asset URLs resolve correctly.
2. In the repo, go to **Settings -> Pages -> Build and deployment** and set **Source** to **GitHub Actions**.
3. Push to `main`. The Action builds `out/` and deploys it.

### Why these settings?

- `output: "export"` in `next.config.mjs` produces a fully static site.
- `images.unoptimized` is required because the Next image optimizer needs a server.
- `public/.nojekyll` stops GitHub Pages from ignoring the `_next/` folder.

## Tech

- Next.js 15 (App Router) + React 19
- Tailwind CSS v4 with `@tailwindcss/typography`
- `next-themes` for dark/light mode
- `gray-matter` + `remark` for Markdown blog posts
