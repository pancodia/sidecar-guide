# Sidecar — user guide site

A single-page, self-contained guide/landing page for **Sidecar**, the local-first
Chrome/Brave side-panel AI assistant. Everything is in `index.html` (styles inline,
fonts from Google Fonts); the only assets are the screenshots under
`assets/screenshots/`.

This repo is meant to be embedded in the main project as the `site/` git submodule
and hosted on GitHub Pages.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server -d . 8000   # then visit http://localhost:8000
```

## Hosting on GitHub Pages

1. Create a **public** GitHub repo (e.g. `sidecar-guide`) and push this folder to it.
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, branch `main`, folder `/ (root)`. Save.
3. The site publishes at `https://<user>.github.io/<repo>/` within a minute or two.
4. (Optional) For a custom domain, add a `CNAME` file with the domain and set it under
   Settings → Pages.

## Screenshots

`assets/screenshots/` holds real, neutral, PII-free captures of the panel (light
theme, "App connected"). Regenerate with the capture scripts kept alongside the main
repo if the UI changes.

Reviewed against Sidecar 0.1.5.
