import type { APIRoute } from 'astro';
import { getAllServiceSlugs } from '@/data/services';

// Replace with your production domain
const SITE_URL = 'https://kamico.vercel.app';

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

function buildUrl(path: string, priority: string, changefreq: string, lastmod?: string): string {
  return `
  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod ?? formatDate(new Date())}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`.trimStart();
}

export const GET: APIRoute = () => {
  const slugs = getAllServiceSlugs();

  const staticPages = [
    buildUrl('/', '1.0', 'weekly'),
  ];

  const servicePages = slugs.map((slug) =>
    buildUrl(`/services/${slug}`, '0.8', 'monthly')
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...servicePages].join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
