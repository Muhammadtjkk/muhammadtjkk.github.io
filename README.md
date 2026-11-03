# Muhammad Tajak — Cyber Risk & Governance Portfolio

A responsive professional portfolio for Muhammad Tajak, Senior Cyber Risk Analyst. The site presents cyber risk, third-party oversight, GRC operations, analytics, audit readiness, and responsible automation through sanitized case studies.

## Technology stack

- React and JavaScript
- Vite
- React Router
- Modern CSS with responsive layouts, light/dark themes, and reduced-motion support
- GitHub Actions and GitHub Pages

No backend, database, authentication, API key, or paid service is required. The portfolio uses CSS visuals and synthetic case-study content; it does not depend on external image services.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── 404.html
│   ├── favicon.svg
│   └── resume/
├── src/
│   ├── components/
│   ├── data/portfolioData.js
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
└── vite.config.js
```

## Local setup

Use Node.js 22 or another version supported by the installed Vite release.

```sh
npm install
npm run dev
```

Vite prints a local development URL. Open it in a browser to preview the site.

## Development and production

```sh
npm run dev
npm run build
npm run preview
```

The production site is written to `dist/`. Run `npm run preview` after building to review the production output locally.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` runs on pushes to `main` and can also be started manually. It installs the lockfile dependencies, builds the Vite site, uploads the artifact, and deploys it to GitHub Pages.

In the repository’s **Settings → Pages**, select **GitHub Actions** as the build and deployment source. The Vite base path is `/`, which is appropriate for the `muhammadtjkk.github.io` user site. The custom `404.html` preserves deep case-study routes when GitHub Pages serves a direct URL.

## Updating portfolio content

Edit `src/data/portfolioData.js` for professional details, project summaries and case studies, experience, credentials, skills, social links, and contact copy. Edit `src/data/extendedContent.js` for the "How I work" lifecycle, NIST CSF 2.0 mapping, assurance evidence, third-party risk lifecycle and tiers, career bridge, perspectives, credential issuers, and section icons. To show a credential status badge, set its `status` (for example "Certified" or "In progress") in `portfolioData.js`. Shared UI is in `src/components/`, and page-level layouts are in `src/pages/`.

The employer is generalized as “Large North American Enterprise” by default. Change `showApprovedEmployer` to `true` only after public use of the Compass Group North America name is approved. Add a professional email only after confirming the address is approved for publication. Review all metrics before release; estimates must not be presented as audited savings or guarantees.

## Adding or replacing the resume

Place the approved PDF at:

```text
public/resume/Muhammad-Tajak-Resume.pdf
```

Vite copies public files to the production site. The resume controls check whether a PDF is available and display a non-breaking “coming soon” state when it is absent. To replace it, overwrite the file at the same path and rebuild. Do not commit a draft or unapproved resume.

## Replacing or adding images

The hero is an animated, illustrative risk dashboard (`src/components/HeroDashboard.jsx`) built from CSS and SVG with synthetic data; it uses no stock imagery. Icons are inline SVGs in `src/components/Icon.jsx`. If approved images are added, place optimized local assets under `public/images/`, use descriptive alternative text for informative images (and empty alt text for decorative images), and avoid internal screenshots or identifiable customer/vendor information.

## Changing colors

Edit the color tokens at the top of `src/styles.css`. Keep both theme palettes readable, retain visible keyboard focus indicators, and verify text and interactive control contrast after changes.

## Accessibility

The site uses semantic landmarks and headings, keyboard-operable controls, a skip link, visible focus states, an accessible responsive menu, active-section cues, reduced-motion handling, descriptive link text, and non-color status labels. Check keyboard navigation and the mobile menu at narrow widths after content or style updates.

## Confidentiality

Case studies are sanitized reconstructions and use synthetic information. Do not publish internal SharePoint or OneDrive links, employee or vendor contacts, real security findings, vulnerabilities, IP addresses, internal domains, credentials, contracts, acquisition details, proprietary documents, production data, customer information, or detailed internal architecture. Do not present professional simulations as employment or unverified credentials as earned.

## Pre-publication checklist

- [ ] Confirm professional email
- [ ] Confirm title
- [ ] Confirm employer naming preference
- [ ] Add approved resume
- [ ] Validate employment dates
- [ ] Validate credentials
- [ ] Review metrics
- [ ] Remove internal links
- [ ] Remove confidential information
- [ ] Confirm synthetic case-study data
- [ ] Test all links
- [ ] Test mobile navigation
- [ ] Test dark mode
- [ ] Run the production build
- [ ] Test GitHub Pages
- [ ] Review spelling and grammar
