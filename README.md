# Base Monorepo Template

A clean, reusable monorepo starter template for service/marketing websites built with Astro and optional Sanity CMS.

## Purpose

This template is designed for building:
- Service websites
- Marketing landing pages
- Content display sites
- Sites with embeds (maps, forms, iframes, third-party widgets)

**Not intended for:**
- Applications requiring authentication
- Apps with user state management
- Complex web applications

## Features

- **Astro 5** - Fast, modern static site generator with SSR support
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vercel deployment** - Optimized for Vercel hosting
- **Optional Sanity CMS** - Headless CMS (disabled by default)
- **Scroll animations** - Pre-built fade-in effects with stagger support
- **Smooth scrolling** - Anchor link navigation with header offset
- **Scroll-to-top button** - Appears on scroll with smooth return
- **SEO optimized** - Meta tags, Open Graph, Twitter Cards

---

## Quick Start

### 1. Clone the Template

```bash
git clone https://github.com/Zeldwyn/monorepo-template.git new-name
cd new-name
```

### 2. Detach from Template Repository

Remove the connection to the template repo:

```bash
Remove-Item -Recurse -Force .git
git init
git add .
git commit -m "Initial commit from base-monorepo-template"
```

### 3. Push to Your New Repository

```bash
git remote add origin https://github.com/YOUR_USERNAME/my-new-site.git
git branch -M main
git push -u origin main
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Start Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

---

## Project Structure

```
base-monorepo-template/
├── app/
│   ├── site/                    # Astro frontend application
│   │   ├── src/
│   │   │   ├── components/      # Astro components
│   │   │   │   ├── ui/          # Reusable UI components
│   │   │   │   └── widget/      # Specialized widgets (ScrollToTop, etc.)
│   │   │   ├── layouts/         # Page layouts (BaseLayout)
│   │   │   ├── lib/             # Utilities & CMS client
│   │   │   ├── pages/           # Route pages
│   │   │   ├── scripts/         # Client-side JavaScript
│   │   │   │   ├── smooth-scroll.js
│   │   │   │   ├── scroll-animations.js
│   │   │   │   └── scroll-to-top.js
│   │   │   └── styles/          # Global CSS
│   │   │       └── global.css
│   │   ├── public/              # Static assets
│   │   │   ├── font/            # Custom fonts
│   │   │   └── images/          # Images
│   │   ├── astro.config.mjs     # Astro configuration
│   │   ├── tailwind.config.mjs  # Tailwind CSS configuration
│   │   └── package.json
│   │
│   └── cms/                     # Sanity CMS (optional)
│       ├── schemas/             # Content schemas
│       ├── sanity.config.ts     # Studio configuration
│       └── package.json
│
├── .prettierrc                  # Prettier code formatting
├── .gitignore
├── vercel.json                  # Vercel deployment config
├── package.json                 # Root workspace config
└── README.md
```

### Folder Roles

| Folder | Purpose |
|--------|---------|
| `app/` | Contains all applications in the monorepo |
| `app/site/` | Main Astro frontend application |
| `app/site/src/components/` | Astro components (sections, UI elements) |
| `app/site/src/components/ui/` | Atomic, reusable UI components |
| `app/site/src/components/widget/` | Specialized components (ScrollToTop, etc.) |
| `app/site/src/layouts/` | Page wrapper layouts with SEO & common elements |
| `app/site/src/lib/` | Utility functions and CMS client |
| `app/site/src/pages/` | File-based routing pages |
| `app/site/src/scripts/` | Client-side JavaScript (animations, scroll) |
| `app/site/src/styles/` | Global CSS and Tailwind directives |
| `app/site/public/` | Static files served as-is |
| `app/cms/` | Optional Sanity CMS Studio |
| `app/cms/schemas/` | Content type definitions |

---

## Scripts

### Root Level

| Command | Description |
|---------|-------------|
| `npm run dev` | Start site development server |
| `npm run dev:all` | Start both site and CMS in parallel |
| `npm run build` | Build site for production |
| `npm run preview` | Preview production build |
| `npm run deploy:cms` | Deploy Sanity Studio |

### Site Level (`app/site/`)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Astro dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview build |

### CMS Level (`app/cms/`)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Sanity Studio |
| `npm run build` | Build Studio |
| `npm run deploy` | Deploy to Sanity hosting |

---

## CMS Configuration

### CMS is Optional and Disabled by Default

The Sanity CMS integration will only activate when:
1. An app explicitly imports `src/lib/sanity.ts`
2. Environment variables are provided

### Ignoring CMS Completely

If you don't need CMS:
- Don't set any `SANITY_*` environment variables
- Don't import from `src/lib/sanity.ts`
- The site will build and run without any CMS dependencies

### Enabling CMS

1. **Create a Sanity project:**
   ```bash
   cd app/cms
   npx sanity@latest init
   ```
   Or visit [sanity.io](https://sanity.io) to create a project.

2. **Configure environment variables:**

   For the site (`app/site/.env`):
   ```env
   PUBLIC_SANITY_PROJECT_ID=your-project-id
   PUBLIC_SANITY_DATASET=production
   ```

   For the CMS (`app/cms/.env`):
   ```env
   SANITY_STUDIO_PROJECT_ID=your-project-id
   SANITY_STUDIO_DATASET=production
   ```

3. **Define your schemas** in `app/cms/schemas/`

4. **Start the CMS:**
   ```bash
   npm run dev:cms
   ```

5. **Import and use in components:**
   ```astro
   ---
   import { fetchContent, CMS_ENABLED } from '@/lib/sanity';

   let content = [];
   if (CMS_ENABLED) {
     content = await fetchContent('*[_type == "yourType"]');
   }
   ---
   ```

### Adding Image Domain for Sanity CDN

If using Sanity images, uncomment in `astro.config.mjs`:
```js
image: {
  domains: ['cdn.sanity.io']
}
```

---

## Customization

### Branding & Colors

Edit `app/site/tailwind.config.mjs` to customize colors:
```js
colors: {
  primary: { ... },
  accent: { ... },
}
```

Edit `app/site/src/styles/global.css` for CSS variables:
```css
:root {
  --primary: #your-color;
}
```

### Fonts

1. Add fonts to `app/site/public/font/`
2. Register in `global.css`:
   ```css
   @font-face {
     font-family: 'YourFont';
     src: url('/font/YourFont.ttf') format('truetype');
   }
   ```
3. Add utility class or update `body` font-family

### Layout & Components

- Edit `src/layouts/BaseLayout.astro` for SEO defaults
- Modify `src/components/Header.astro` for navigation
- Modify `src/components/Footer.astro` for footer content

---

## Animation Classes

Pre-built CSS animations available:

| Class | Effect |
|-------|--------|
| `fade-in-up` | Fade in from bottom |
| `fade-in-left` | Fade in from left |
| `fade-in-right` | Fade in from right |
| `stagger-1` to `stagger-12` | Delay modifiers |
| `bounce` | Continuous bounce animation |

Example:
```html
<div class="fade-in-up stagger-2">
  This fades in with a slight delay
</div>
```

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables if using CMS
4. Deploy

### Other Platforms

Adjust `astro.config.mjs` adapter as needed:
- Netlify: `@astrojs/netlify`
- Node: `@astrojs/node`
- Static: Remove adapter for static export

---

## License

MIT - Use freely for personal and commercial projects.
