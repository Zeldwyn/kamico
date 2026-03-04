import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Replace with your production domain — used for canonical URLs and sitemaps
  site: 'https://kamico.vercel.app',
  output: 'server',
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true
    }
  }),
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    // Add external image domains here as needed
    // domains: ['cdn.sanity.io']
    domains: []
  }
});
