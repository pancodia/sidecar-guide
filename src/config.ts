// Site-wide constants. The product release the copy was last checked against
// lives here (one place to update per review) — NOT the package.json version,
// which is an inert site-internal number. The extension/daemon version and this
// site version are intentionally independent.
export const SITE_NAME = "Sidecar";
export const SITE_TAGLINE = "Chat with whatever you're reading or watching.";
export const REVIEWED_VERSION = "0.1.5";
export const GITHUB_URL = "https://github.com/pancodia/sidecar-guide";

// The doc's own version is a date, generated at build time — a rolling guide is
// dated ("how fresh is this?"), not semver'd. REVIEWED_VERSION above is the
// separate product release the copy was checked against.
export const BUILD_DATE = new Date().toISOString().slice(0, 10);

