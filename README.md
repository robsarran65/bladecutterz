# BladeCutterz Inc. Website

Modern, responsive lawn care and landscaping website for BladeCutterz Inc., serving Orlando, Lake Nona, Winter Springs, and communities near ZIP codes 32832 and 32708.

**Live website:** [bladecutterz-florida.robertgangasarran.chatgpt.site](https://bladecutterz-florida.robertgangasarran.chatgpt.site)

## Website highlights

- Mobile-friendly single-page layout
- Click-to-call actions for `(407) 334-7247`
- Six uniform lawn care and landscaping service cards
- Separate branded Nona Irrigation service panel
- Company story and service-area information
- Twelve-image Florida landscaping portfolio
- Starter testimonials with local city labels
- Free-estimate contact form interface
- Orlando-area SEO titles, descriptions, structured data, sitemap, and robots rules
- Official BladeCutterz and Nona Irrigation logos
- Open Graph social preview and custom BladeCutterz branding
- Linked Sarran AI Solutions website credit in the footer
- Accessible navigation, focus states, and reduced-motion support

## Important content notes

- The portfolio images are AI-generated examples and should be replaced with verified BladeCutterz project photographs as they become available.
- The testimonials are clearly identified as starter content and should be replaced with verified customer reviews.
- The estimate form currently displays a confirmation message but does not send submissions. Connect it to an email service, CRM, or form endpoint before using it for lead collection.
- Business license and insurance details should be added only after they are verified.

## Technology

- React 19
- Next.js 16
- TypeScript
- Vinext and Vite
- Cloudflare Workers-compatible build
- OpenAI Sites hosting configuration

## Local setup

Requirements:

- Node.js 22.13 or newer
- npm
- Linux, WSL, or a compatible environment with Bash

Install dependencies:

```bash
npm run install:ci
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the build verification tests:

```bash
npm test
```

Run linting:

```bash
npm run lint
```

## Project structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Website sections, service content, portfolio, testimonials, and form interface |
| `app/globals.css` | Responsive layout, brand styles, accessibility, and portfolio sizing |
| `app/brand-update.css` | Official logo, service-card, irrigation-panel, and footer-credit refinements |
| `app/layout.tsx` | Page metadata, social metadata, and local business structured data |
| `app/robots.ts` | Search crawler rules |
| `app/sitemap.ts` | XML sitemap configuration |
| `public/images/` | Production logo and optimized website images |
| `public/og.png` | Social sharing preview image |
| `assets/retained-original-images/` | Highest-quality image files retained with the saved Site project |
| `.openai/hosting.json` | OpenAI Sites project configuration |
| `tests/` | Rendered HTML and SEO verification tests |

## Image backup details

The repository contains two image sets:

1. `public/images/` contains the production-ready files used by the live website.
2. `assets/retained-original-images/` contains a separate backup copy of the highest-quality image assets available in the saved Site source, including the logo and social preview.

The discarded, pre-optimization full-resolution PNG working copies were not included in the Site's saved Git history and could not be recovered. The retained WebP files are the authoritative image assets for this backup.

## Downloadable backup

The repository includes `BladeCutterz_Complete_Backup_2026-09-02.zip`, which contains the complete source code, README, logo, production images, retained image backup, and configuration files. Generated dependencies, temporary build output, local runtime files, and Git metadata are intentionally excluded.

## Updating photos

To replace a portfolio image while keeping the layout intact:

1. Export the new photograph as WebP in a landscape orientation.
2. Use the same filename as the image being replaced in `public/images/`.
3. Keep the important subject near the center because the website crops images consistently across screen sizes.
4. Update the title, caption, and alt text in `app/page.tsx` if the replacement shows a different service.
5. Run `npm test` before publishing.

## Business information

- **Business:** BladeCutterz Inc.
- **Phone:** [(407) 334-7247](tel:+14073347247)
- **Primary service areas:** Orlando, Lake Nona, Moss Park, Narcoossee, Winter Springs, Tuscawilla, Oviedo, Casselberry, and nearby communities
- **Target ZIP codes:** 32832 and 32708

## Repository purpose

This repository is the source and recovery backup for the BladeCutterz Inc. website. Keep customer information, passwords, API keys, email credentials, and other secrets out of the repository.
