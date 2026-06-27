import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const serverEntry = path.join(distDir, "server", "entry-server.js");
const templatePath = path.join(distDir, "index.html");

const { render, publicRoutes } = await import(serverEntry);
const template = await readFile(templatePath, "utf8");
const siteUrl = process.env.VITE_SITE_URL || "https://craftcode.com.br";

const injectRoute = async (route) => {
  const { app, head } = render(route.path);
  const html = template
    .replace(/<title>.*?<\/title>/, "")
    .replace("</head>", `${head}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${app}</div>`);

  const outputDir = route.path === "/" ? distDir : path.join(distDir, route.path);
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), html);

  if (route.path !== "/") {
    await writeFile(path.join(distDir, `${route.path.slice(1)}.html`), html);
  }
};

for (const route of publicRoutes) {
  await injectRoute(route);
}

const sitemapItems = publicRoutes.map((route) => {
  const loc = `${siteUrl}${route.canonicalPath === "/" ? "/" : route.canonicalPath}`;
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <changefreq>${route.changefreq}</changefreq>`,
    `    <priority>${route.priority}</priority>`,
    "  </url>",
  ].join("\n");
});

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  sitemapItems.join("\n"),
  "</urlset>",
  "",
].join("\n");

await writeFile(path.join(distDir, "sitemap.xml"), sitemap);
await rm(path.join(distDir, "server"), { recursive: true, force: true });
