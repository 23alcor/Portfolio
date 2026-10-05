// Vite build plugin. GitHub Pages only serves files that exist, so after the
// build this writes a real HTML file for each research page:
//
//   dist/research/<slug>/index.html  -> served at /research/<slug>/ (status 200)
//
// Each one is the app's index.html with that page's own <title>, description,
// canonical URL and link-preview (Open Graph) tags, so a link pasted into
// LinkedIn or Slack shows the paper instead of the generic site.
// It also writes dist/404.html, so any other path still loads the app and
// shows its "page not found" view.

import fs from "node:fs/promises";
import path from "node:path";
import {
  AUTHOR,
  SITE_URL,
  pageTitle,
  research,
  researchPath,
} from "../src/data/research.js";

const TITLE_TAG = /<title>[\s\S]*?<\/title>/;

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const headTags = (entry) => {
  const url = SITE_URL + researchPath(entry);
  // `ogImage: null` in the data means "no preview image" for that entry.
  const image = entry.ogImage === undefined ? entry.image : entry.ogImage;
  return [
    `<title>${escapeAttr(pageTitle(entry))}</title>`,
    `<meta name="description" content="${escapeAttr(entry.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:site_name" content="${escapeAttr(AUTHOR)}" />`,
    `<meta property="og:title" content="${escapeAttr(entry.citation?.title ?? entry.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(entry.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    ...(image
      ? [
          `<meta property="og:image" content="${SITE_URL}${image}" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
        ]
      : [`<meta name="twitter:card" content="summary" />`]),
  ].join("\n    ");
};

export function researchPages() {
  return {
    name: "research-pages",
    apply: "build",
    async writeBundle(options, bundle) {
      const index = bundle["index.html"];
      if (!index) return;
      const template =
        typeof index.source === "string"
          ? index.source
          : new TextDecoder().decode(index.source);
      if (!TITLE_TAG.test(template)) {
        throw new Error("research-pages: index.html has no <title> to replace");
      }

      for (const entry of research) {
        const dir = path.join(options.dir, "research", entry.slug);
        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(
          path.join(dir, "index.html"),
          template.replace(TITLE_TAG, () => headTags(entry))
        );
      }
      await fs.writeFile(path.join(options.dir, "404.html"), template);
    },
  };
}
