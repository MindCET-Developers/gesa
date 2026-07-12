# GESAwards website

A rebuild of [globaledtechawards.org](https://www.globaledtechawards.org/) (currently
on Wix) as a fast, maintainable, CMS-ready site. Built for CET / MindCET.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
Vercel Analytics · ready for Sanity CMS · Resend for the newsletter.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

The site runs immediately on local **seed content** — no API keys required.
Copy `.env.example` → `.env.local` to enable the newsletter and (later) the CMS.

```bash
npm run build      # production build
npm run lint       # eslint
```

## How it works

- **Content layer** — components read content only through `lib/content/index.ts`.
  Today those getters return typed seed data (`lib/content/seed.ts`, migrated from
  the live site). To go live with the CMS, swap each getter body for the matching
  GROQ query — no component changes needed. See **[docs/CMS-SETUP.md](docs/CMS-SETUP.md)**.
- **Design system** — brand tokens (navy `#000633`, electric blue `#116DFF`, sky,
  red, yellow) and the Raleway/Open Sans fonts live in `app/globals.css` +
  `app/layout.tsx`.
- **Forms (mix)** — the application form stays on **Airtable** (the "Apply" buttons
  link out). The **newsletter** is native: a Server Action (`app/actions/subscribe.ts`)
  posts to a Resend audience when `RESEND_API_KEY` + `RESEND_AUDIENCE_ID` are set,
  and succeeds in dev mode without them.
- **SEO** — `app/sitemap.ts`, `app/robots.ts`, per-page metadata, and 301/308
  redirects from old Wix URLs (e.g. `/2023-winners` → `/winners/2023`) in
  `next.config.ts`.

## Structure

```
app/            routes: / about tracks winners winners/[year] terms-and-condition
components/      layout/ (Header, Footer, PageHero) · home/ (sections) · ui/
lib/content/     types + seed + getters (the CMS swap point)
sanity/          schemaTypes/ + queries.ts (register after `sanity init`)
docs/CMS-SETUP.md   how to connect Sanity and migrate content
```

## Deploy

Push to a Git repo and import on Vercel (zero config). Set env vars in the Vercel
dashboard. Point the `globaledtechawards.org` domain at the project — the old-URL
redirects preserve SEO on cutover.

## Status / next steps

v1 covers the homepage + core pages (About, Tracks, Terms, Winners template).
Later phases: connect Sanity, populate the winners archive, and add Blog / Bootcamp
/ Sponsor-a-track pages.
