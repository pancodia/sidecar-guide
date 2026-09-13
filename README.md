# Sidecar — guide & landing site

A small multi-page site for **Sidecar**, the local-first Chrome/Brave side-panel
AI assistant that keeps one conversation as you browse — across pages, text,
images, and video, on the AI agent you already pay for.

Meant to be embedded in the main project as the `site/` git submodule and hosted
on GitHub Pages.

## Layout

```
src/
  partials/nav.html, footer.html   shared chrome
  pages/*.html                     one file per page (+ a <!--meta {...}--> header)
styles.css                         all styles (linked, not inlined)
build.mjs                          zero-dep builder: src/ -> root *.html
assets/screenshots/                real, neutral, PII-free captures
*.html                             BUILT output (committed; Pages serves these)
.nojekyll                          tell Pages not to process the tree
```

## Build

```
node build.mjs
```

Reads the partials + `src/pages/*.html` and writes the root `*.html`. Edit sources
under `src/` (and `styles.css`), never the built root files. Commit both source and
output — GitHub Pages serves the built files as-is.

## Preview locally

Open a built `index.html` in a browser, or serve the folder:

```
python3 -m http.server -d . 8000   # then visit http://localhost:8000
```

## Hosting on GitHub Pages

1. Create a **public** GitHub repo (e.g. `sidecar-guide`) and push this folder.
2. **Settings → Pages → Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Publishes at `https://<user>.github.io/<repo>/`. All links are relative, so it
   works under the `/<repo>/` sub-path.

Reviewed against Sidecar 0.1.5.
