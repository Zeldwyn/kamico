# Claude Prompt: Astro + Vercel SEO Audit & Implementation

Copy everything below the line and paste it to Claude.

---

You are a senior Technical SEO specialist and Astro framework expert. I have an Astro project deployed on Vercel. Perform a full technical SEO audit and implement all fixes directly into the codebase.

## Step 1 — Explore the project first

Read the following before making any changes:
- `astro.config.mjs` or `astro.config.ts`
- `src/layouts/BaseLayout.astro` (or any main layout file)
- `src/pages/index.astro`
- All files in `src/pages/`
- `src/styles/global.css` (or equivalent)
- `src/components/sections/` (all section components)
- `package.json`
- Any existing `public/robots.txt`, `public/sitemap.xml`, or sitemap config
- Any data files in `src/data/`

Do not make any changes until you have read all of these.

## Step 2 — Implement the following fixes

### A. robots.txt
Create `public/robots.txt` if it does not exist:
- Allow all crawlers (`User-agent: *`, `Allow: /`)
- Disallow `/api/`, `/_astro/`
- Include `Sitemap:` pointing to the production domain + `/sitemap.xml`
- Ask me for the production domain if not found in the codebase

### B. Dynamic Sitemap
Check if a sitemap already exists. If not:
- The project uses `output: 'server'` (full SSR), so `@astrojs/sitemap` will NOT auto-detect dynamic routes
- Create `src/pages/sitemap.xml.ts` as an API endpoint (`GET: APIRoute`)
- Include the homepage `/` with priority `1.0`
- Detect and include all dynamic routes (e.g. `/services/[slug]`) by importing and calling the data functions that return slugs
- Set `Cache-Control: public, max-age=86400`
- Use the production domain found in the codebase, or ask me if not found

### C. astro.config.mjs
Add `site: 'https://YOUR_DOMAIN'` to `defineConfig()` if missing. Ask me for the domain if not found anywhere in the codebase.

### D. BaseLayout.astro — Full head overhaul
Update the main layout's `<head>` with all of the following:

1. **Canonical tag**
   ```
   const canonicalURL = new URL(Astro.url.pathname, SITE_URL).href;
   <link rel="canonical" href={canonicalURL} />
   ```

2. **Fix OG image to absolute URL**
   ```
   const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
   ```
   Use `ogImage` for all og:image and twitter:image tags.

3. **Add missing OG tags**: `og:image:width` (1200), `og:image:height` (630), `og:site_name`, `og:locale`

4. **Replace placeholder meta tags**
   - Replace `"Your Name or Company"` author with the actual brand name found in the codebase
   - Replace `"keyword1, keyword2, keyword3"` with real keywords based on the business (location, service type, brand name)

5. **Add `noindex` prop support**
   ```
   interface Props { noindex?: boolean }
   <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
   ```

6. **Move Google Fonts from CSS `@import` to `<link>` in HTML**
   - Remove `@import url('https://fonts.googleapis.com/...')` from any CSS file
   - Add as `<link rel="stylesheet" href="...">` in `<head>`
   - Reason: CSS `@import` is render-blocking; HTML `<link>` is discovered earlier by the parser

7. **Move Font Awesome from CSS `@import` to `<link>` in HTML**
   - Remove `@import url('https://cdnjs.cloudflare.com/.../all.min.css')` from CSS
   - Replace with only the subsets actually used in the project. Scan all `.astro` files for icon class prefixes:
     - If `fas`, `fa-solid`, or `fa ` classes are used → add `solid.min.css`
     - If `fa-brands`, `fab` classes are used → add `brands.min.css`
     - If `far`, `fa-regular` classes are used → add `regular.min.css`
     - Always include `fontawesome.min.css` as the core
   - Use the same version found in the original `@import` URL
   - Add `<link rel="preconnect" href="https://cdnjs.cloudflare.com" />` as well

8. **Add `<link rel="sitemap">` tag**
   ```
   <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
   ```

9. **Add `<link rel="apple-touch-icon">`** using the existing favicon/logo path

10. **Organization JSON-LD structured data** — add to every page via BaseLayout:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "...",
      "alternateName": "...",
      "url": "...",
      "logo": "...",
      "description": "...",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "...",
        "addressRegion": "...",
        "postalCode": "...",
        "addressCountry": "..."
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "...",
        "email": "...",
        "availableLanguage": "English"
      },
      "sameAs": ["...facebook...", "...instagram..."]
    }
    ```
    Populate all fields from actual data found in the codebase (footer, contact section, etc).
    Use `<script is:inline type="application/ld+json" set:html={JSON.stringify(schema)} />`

### E. Dynamic route pages (e.g. `/services/[slug].astro`)
For each dynamic route page, add two JSON-LD scripts inside the layout slot:

1. **Service / Item schema** — use the appropriate Schema.org type for the content (`Service`, `Product`, `Article`, etc). Populate from actual data.

2. **BreadcrumbList schema**:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "BreadcrumbList",
     "itemListElement": [
       { "@type": "ListItem", "position": 1, "name": "Home", "item": "SITE_URL" },
       { "@type": "ListItem", "position": 2, "name": "Section", "item": "SITE_URL/#section" },
       { "@type": "ListItem", "position": 3, "name": "Page Title", "item": "SITE_URL/path/slug" }
     ]
   }
   ```

### F. Section ID audit
Scan all section components for `id=""` attributes. Verify:
- Each section has a unique `id` that matches its actual content
- No two sections share the same `id`
- Navigation `href` anchors match the actual section `id` values
Fix any mismatches.

### G. Decorative elements
Find any purely decorative/visual elements (background patterns, repeated letters, animations) that add DOM noise for screen readers. Add `aria-hidden="true"` to their containers.

### H. iframe performance audit
If any component uses `<iframe>` to embed external websites as visual previews:
- Replace with `<img loading="lazy" decoding="async">` using static screenshots
- Use `https://image.thum.io/get/width/1280/crop/800/SITE_URL` as the screenshot source if no local screenshots exist
- Remove any JavaScript that was only needed to scale the iframes
- Add a comment explaining how to replace thum.io with local screenshots

## Step 3 — Final checklist

After all changes, verify:
- [ ] `public/robots.txt` exists and points to sitemap
- [ ] `src/pages/sitemap.xml.ts` exists and includes all routes
- [ ] `astro.config.mjs` has `site:` set
- [ ] Every page has a unique `<title>` and `<meta name="description">`
- [ ] Every page has a `<link rel="canonical">`
- [ ] OG image tag uses an absolute URL
- [ ] Organization JSON-LD is present in BaseLayout
- [ ] Service/item JSON-LD + BreadcrumbList on dynamic route pages
- [ ] No `@import` for Google Fonts or Font Awesome in CSS files
- [ ] Font Awesome loads only the subsets used (not `all.min.css`)
- [ ] All section `id` attributes are unique and correct
- [ ] Decorative elements have `aria-hidden="true"`
- [ ] No `<iframe>` used for decorative site previews
- [ ] Placeholder meta content (`"Your Name"`, `"keyword1"`) has been replaced

## Step 4 — Google Search Console instructions

After implementation, tell me exactly:
1. What file to create for Google site verification (HTML file method)
2. How to submit the sitemap URL
3. Which individual URLs to request indexing for
4. What to check weekly and monthly in GSC

## Notes
- My production domain is: **[REPLACE WITH YOUR DOMAIN]**
- My business is located in: **[REPLACE WITH YOUR CITY, COUNTRY]**
- My primary services are: **[REPLACE WITH YOUR SERVICES]**
- Do not add features beyond what is listed above
- Do not modify any visual design or layout
- Only fix SEO and performance issues
