export async function GET() {
  const site = 'https://sarchconsultores.com';
  const pages = [
    '' // Represents the home page
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >
        ${pages
          .map(
            (page) => `
        <url>
            <loc>${site}/${page}</loc>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
        </url>
        `
          )
          .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
}

export const prerender = true;
