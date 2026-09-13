# Sidecar — guide & landing site

The guide/landing site for **Sidecar**, the local-first side-panel AI assistant
for Chrome & Brave. Built with [Astro](https://astro.build); hosted on GitHub
Pages at **<https://pancodia.github.io/sidecar-guide/>**.

Embedded in the main project as the `site/` git submodule.

## Layout

```
src/
  pages/*.astro        one file per page (index, features, setup, guide, privacy)
  layouts/Base.astro   <head> + shared nav/footer wrapper
  components/*.astro    Nav, Footer, Kf (feature block), GCard, Pillar,
                        PanelShot, BrowserShot, BrowserComposite
  styles/global.css     all styles (design tokens, both themes)
  config.ts             site constants (REVIEWED_VERSION, BUILD_DATE, …)
public/
  assets/screenshots/   real, neutral, PII-free captures
  .nojekyll
astro.config.mjs        site + base ('/sidecar-guide/') config
```

## Develop

```
npm install
npm run dev       # local dev server (http://localhost:4321/sidecar-guide/)
npm run build     # -> dist/
npm run preview   # serve the built dist/ at the real base path
```

Edit content under `src/`. The design tokens and both light/dark themes live in
`src/styles/global.css`. **`base` must stay `/sidecar-guide/`** in
`astro.config.mjs` — the site is served from a repo subpath, so every asset/link
is resolved against it (use `import.meta.env.BASE_URL` for any new asset path).

Versioning: `package.json`'s version is an inert site-internal number. The
product release the copy was checked against is `REVIEWED_VERSION` in
`src/config.ts`; the doc's own freshness is `BUILD_DATE` (auto-set at build),
shown in the footer.

## Deploy

Automatic via **GitHub Actions** (`.github/workflows/deploy.yml`): every push to
`main` builds with Astro and publishes to Pages. Nothing to build or commit by
hand — `dist/` is gitignored. Pages source is set to "GitHub Actions".

Reviewed against Sidecar 0.1.5.
