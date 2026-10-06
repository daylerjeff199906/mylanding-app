import type { APIRoute } from "astro";

const SITE_URL = "https://josesantos.site";

interface SitemapPage {
  url: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
}

const pages: SitemapPage[] = [
  { url: "", lastmod: "2026-10-05", changefreq: "daily", priority: "1.0" },
  { url: "proyectos", lastmod: "2026-10-05", changefreq: "weekly", priority: "0.9" },
  { url: "contacto", lastmod: "2026-10-05", changefreq: "monthly", priority: "0.8" },
  { url: "manifiesto", lastmod: "2026-10-05", changefreq: "monthly", priority: "0.7" },
  { url: "en", lastmod: "2026-10-05", changefreq: "daily", priority: "0.9" },
  { url: "en/work", lastmod: "2026-10-05", changefreq: "weekly", priority: "0.8" },
  { url: "en/contact", lastmod: "2026-10-05", changefreq: "monthly", priority: "0.8" }
];

export const GET: APIRoute = async () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map((page) => {
    const loc = page.url ? `${SITE_URL}/${page.url}` : SITE_URL;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
};
