import { defineConfig } from "astro/config";

// The site is served from a project subpath on GitHub Pages, so `base` must
// match the repo name — without it every CSS/asset/link breaks under Pages.
export default defineConfig({
  site: "https://pancodia.github.io",
  base: "/sidecar-guide/",
  // "file" keeps page URLs as /features.html etc. — matching the prior site and
  // the existing #anchor links (features.html#across-pages).
  build: { format: "file" },
});
