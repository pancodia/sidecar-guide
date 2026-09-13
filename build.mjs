#!/usr/bin/env node
// Zero-dependency static builder for the Sidecar guide site.
// Reads src/partials/{nav,footer}.html + src/pages/*.html and writes root *.html.
// Each page file starts with a metadata comment:
//   <!--meta {"title":"...","desc":"...","nav":"features"}-->
// followed by the page body (sections/main). Run: node build.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const P = (...p) => join(ROOT, ...p);

const nav = readFileSync(P("src/partials/nav.html"), "utf8").trim();
const footer = readFileSync(P("src/partials/footer.html"), "utf8").trim();

// Inline SVG favicon (the Sidecar mark) as a data URI — no external request.
const FAVICON =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">' +
      '<rect width="128" height="128" rx="27" fill="#3a7d72"/>' +
      '<rect x="21" y="29" width="53" height="70" rx="11" fill="#fff"/>' +
      '<rect x="80" y="45" width="27" height="54" rx="8" fill="#fff"/>' +
      '<circle cx="88.5" cy="87" r="3.4" fill="#e0a838"/></svg>'
  );

const head = (title, desc) => `  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${desc.replace(/"/g, "&quot;")}" />
  <link rel="icon" href="${FAVICON}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Work+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" />
  <link rel="stylesheet" href="styles.css" />`;

const pagesDir = P("src/pages");
let n = 0;
for (const file of readdirSync(pagesDir).filter((f) => f.endsWith(".html"))) {
  const raw = readFileSync(join(pagesDir, file), "utf8");
  const m = raw.match(/^\s*<!--meta\s+(\{[\s\S]*?\})\s*-->/);
  if (!m) {
    console.error(`SKIP ${file}: no <!--meta {...}--> header`);
    continue;
  }
  const meta = JSON.parse(m[1]);
  const content = raw.slice(m.index + m[0].length).trim();
  // Mark the active nav link for this page.
  const navHtml = nav.replace(
    new RegExp(`(<a\\b[^>]*\\bdata-nav="${meta.nav}")`),
    '$1 class="active"'
  );
  const out = `<!doctype html>
<html lang="en">
<head>
${head(meta.title, meta.desc)}
</head>
<body>
${navHtml}
${content}
${footer}
</body>
</html>
`;
  writeFileSync(P(file), out);
  console.log("built", file);
  n++;
}
console.log(`done — ${n} page(s)`);
