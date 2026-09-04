# BladeCutterz Inc. Website

Static website for BladeCutterz Inc., a lawn care, landscaping, irrigation, and sprinkler services business serving the Orlando and Lake Nona, Florida area.

This repository is intentionally set up as a simple static website so it can be deployed easily to Hostinger, GitHub Pages, Cloudflare Pages, Netlify, or any standard web host.

## Live Preview

If GitHub Pages is enabled, the preview URL will be:

https://robsarran65.github.io/bladecutterz/

If that link shows a 404, GitHub Pages has not been enabled yet. See the GitHub Pages setup section below.

## Project Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── robots.txt
├── sitemap.xml
├── README.md
└── public/
    ├── og.png
    └── images/
```

## Required Files for Hosting

To deploy the website, the web host needs these files and folders:

```text
index.html
styles.css
script.js
robots.txt
sitemap.xml
public/
```

The `index.html` file must stay at the root of the website folder. Do not place it inside another folder.

## Deploy to Hostinger

Use this setup for the simplest Hostinger deployment:

1. Log in to Hostinger.
2. Open the website dashboard.
3. Go to **Advanced**.
4. Select **Git**.
5. Connect the GitHub account.
6. Choose this repository:

   ```text
   robsarran65/bladecutterz
   ```

7. Choose the `main` branch.
8. Use the website root or `public_html` as the deployment location.
9. Leave the build command blank.
10. Deploy.

This is a static HTML website, so Hostinger does not need Node.js, React, npm, or a build step.

## Enable GitHub Pages Preview

To make the GitHub preview link work:

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Click **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select:

   ```text
   Branch: main
   Folder: / root
   ```

6. Click **Save**.

After GitHub finishes publishing, the preview should be available at:

https://robsarran65.github.io/bladecutterz/

## Editing the Website

Most content is edited in these files:

| File | Purpose |
|---|---|
| `index.html` | Main page content, services, testimonials, contact section, SEO metadata |
| `styles.css` | Colors, layout, spacing, cards, mobile responsiveness |
| `script.js` | Mobile menu and simple browser behavior |
| `public/images/` | Website images and logos |
| `robots.txt` | Search engine crawl settings |
| `sitemap.xml` | Search engine page map |

## Current Website Features

- BladeCutterz branding and official logo
- Lawn care and landscaping service sections
- Separate Nona Irrigation service panel
- Portfolio style image sections
- Testimonials
- Estimate request form layout
- Mobile responsive design
- SEO metadata
- Sarran AI Solutions footer credit and link

## Important Note About the Contact Form

The estimate form is currently front-end only. It appears on the website, but it will not send emails until it is connected to a form service, email service, or back-end script.

Common options include:

- Hostinger form handling
- Formspree
- Netlify Forms
- Custom PHP form handler
- Custom API endpoint

## Built By

Website designed and developed by [Sarran AI Solutions](https://www.sarranai.com/).
