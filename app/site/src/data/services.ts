export interface ServicePricing {
  price: string;
  label: string;
  description: string;
}

export interface FeatureCategory {
  category: string;
  items: string[];
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon?: string;
  pricing: ServicePricing;
  features: FeatureCategory[];
  addOns?: FeatureCategory[];
}

export const services: Service[] = [
  {
    slug: 'single-page-website',
    title: 'Single-Page Website',
    shortDescription:
      'Practical services designed to help businesses build, improve, and present themselves clearly.',
    fullDescription:
      'A fast, modern, and SEO-ready static website built for service-based businesses. Perfect for showcasing your brand, services, and contact information in one seamless scrolling experience.',
    image: '/images/services/service.png',
    pricing: {
      price: '$1,000+',
      label: 'USD',
      description: 'This is the base price for a modern single-page website. Custom features and add-ons are negotiable, so the final cost may vary depending on your requests and needs.',
    },
    features: [
      {
        category: 'Design & Layout',
        items: [
          'Modern single-page website design',
          'Custom section layout (Hero, Services, About, CTA, Contact)',
          'Fully responsive design',
          'Brand-aligned colors, fonts, and visuals',
        ],
      },
      {
        category: 'Performance & Quality',
        items: [
          'Fast, lightweight build',
          'Optimized images and assets',
          'Smooth animations & interactions',
          'Cross-browser compatibility',
        ],
      },
      {
        category: 'Content & Customization',
        items: [
          'Editable text and image sections',
          'Client-provided content integration',
          'Flexible sections (add/remove/reorder)',
          'Design revisions during build phase',
        ],
      },
      {
        category: 'SEO & Visibility',
        items: [
          'SEO-friendly page structure',
          'Clean URLs & semantic HTML',
          'Meta tags (title & description)',
          'Basic on-page optimization',
        ],
      },
      {
        category: 'Contact & Conversion',
        items: [
          'Contact form integration',
          'Newsletter integration',
          'Call-to-action sections',
          'Click-to-call / email links',
          'Social media links',
        ],
      },
      {
        category: 'Deployment & Handover',
        items: [
          'Free Vercel deployment (fast, reliable, zero-cost hosting)',
          'Use your existing domain or register a new one',
          'Custom domain connection & setup',
          'Basic usage walkthrough',
          'Production-ready delivery',
        ],
      },
    ],
    addOns: [
      {
        category: 'Design Upgrades',
        items: [
          'Fully custom UI/UX design',
          'Advanced animations & effects',
          'Landing-page optimization',
        ],
      },
      {
        category: 'Pages & Content',
        items: [
          'Additional pages (About, Pricing, FAQ, etc.)',
          'Copywriting assistance',
        ],
      },
      {
        category: 'CMS & Dynamic Content',
        items: [
          'Sanity CMS integration (free tier available)',
          'Manage blog posts, services, or content dynamically',
          'Client-friendly editing dashboard',
          'Upgrade to Sanity paid plan if needed',
        ],
      },
      {
        category: 'Calendar Integrations',
        items: [
          'Calendly scheduling embed',
          'Google Calendar integration',
        ],
      },
      {
        category: 'Maintenance & Support',
        items: [
          'Ongoing site updates',
          'Performance & security checks',
          'Content changes on request',
        ],
      },
    ],
  },
  {
    slug: 'multi-page-website',
    title: 'Multi-Page Website',
    shortDescription:
      'A structured website with dedicated pages designed to clearly present your services, information, and brand.',
    fullDescription:
      'A comprehensive website solution with multiple dedicated pages for different aspects of your business. Ideal for businesses that need separate pages for services, about, portfolio, blog, and more.',
    image: '/images/services/service.png',
    pricing: {
      price: '$1,500+',
      label: 'USD',
      description: 'Starting price based on number of pages and complexity.',
    },
    features: [
      {
        category: 'Design & Layout',
        items: [
          'Multiple dedicated pages with unique layouts',
          'Consistent navigation & branding across all pages',
          'Mobile-first & fully responsive design',
          'Brand-aligned colors, fonts, and visuals',
        ],
      },
      {
        category: 'Performance & Quality',
        items: [
          'Fast page load times',
          'Optimized images and assets',
          'Smooth page transitions & animations',
          'Cross-browser compatibility',
        ],
      },
      {
        category: 'CMS & Dynamic Content',
        items: [
          'Sanity CMS integration (free tier included)',
          'Manage pages, blog posts, and services dynamically',
          'Client-friendly editing dashboard — no coding required',
          'Structured content for easy scaling',
          'Upgrade to Sanity paid plan as your site grows',
        ],
      },
      {
        category: 'Content & Customization',
        items: [
          'Custom page layouts per section',
          'Portfolio or gallery pages',
          'Blog or news section with CMS',
          'Design revisions during build phase',
        ],
      },
      {
        category: 'SEO & Visibility',
        items: [
          'SEO-optimized page structure',
          'Clean URLs & semantic HTML',
          'Per-page meta tags (title & description)',
          'Sitemap generation',
        ],
      },
      {
        category: 'Contact & Conversion',
        items: [
          'Contact forms on relevant pages',
          'Newsletter integration',
          'Call-to-action sections',
          'Click-to-call / email links',
          'Social media links',
        ],
      },
      {
        category: 'Deployment & Handover',
        items: [
          'Free Vercel deployment (fast, reliable, zero-cost hosting)',
          'Use your existing domain or register a new one',
          'Custom domain connection & setup',
          'CMS walkthrough & content editing guide',
          'Production-ready delivery',
        ],
      },
    ],
    addOns: [
      {
        category: 'Content & Blogging',
        items: [
          'Blog with categories and tags',
          'Copywriting assistance',
          'Advanced CMS workflows',
        ],
      },
      {
        category: 'Design Upgrades',
        items: [
          'Advanced animations & effects',
          'Fully custom UI/UX design',
          'Landing-page optimization',
        ],
      },
      {
        category: 'Maintenance & Support',
        items: [
          'Ongoing site updates',
          'Performance & security checks',
          'Content changes on request',
        ],
      },
    ],
  },
  {
    slug: 'gta-mods',
    title: 'GTA Mods',
    shortDescription:
      'Mods and setups for FiveM, single-player, and RP servers that make GTA more immersive and enjoyable.',
    fullDescription:
      'Custom modifications and configurations for Grand Theft Auto V, including FiveM server setups, roleplay server configurations, and single-player enhancements. We bring your GTA vision to life.',
    image: '/images/services/gta.png',
    pricing: {
      price: 'Contact Us',
      label: '',
      description: 'Pricing varies based on mod complexity and requirements',
    },
    features: [
      {
        category: 'Server Setup',
        items: [
          'FiveM server setup and configuration',
          'Roleplay server scripts',
          'Anti-cheat configuration',
          'Server optimization',
        ],
      },
      {
        category: 'Mods & Assets',
        items: [
          'Custom vehicle mods',
          'Map modifications and MLOs',
          'EUP (Emergency Uniforms Pack) setup',
          'Sound and audio modifications',
        ],
      },
      {
        category: 'UI & Experience',
        items: [
          'Custom HUD and UI mods',
          'In-game menus & interfaces',
          'Loading screens & branding',
        ],
      },
      {
        category: 'Documentation',
        items: [
          'Setup documentation',
          'Admin usage guides',
          'Configuration walkthroughs',
        ],
      },
    ],
    addOns: [
      {
        category: 'Development',
        items: [
          'Custom scripting',
          'Database setup',
          'Advanced framework integration',
        ],
      },
      {
        category: 'Hosting & Maintenance',
        items: [
          'Server hosting assistance',
          'Regular maintenance',
          'Priority support',
        ],
      },
    ],
  },
  {
    slug: 'food-venture',
    title: 'Food Venture',
    shortDescription:
      "Soon, we plan to venture into the food business. Nothing's decided yet, but stay tuned!",
    fullDescription:
      "We're exploring opportunities in the food industry. This is an upcoming venture that we're excited about. Stay tuned for more details as we develop this service offering.",
    image: '/images/services/soon.png',
    pricing: {
      price: 'Coming Soon',
      label: '',
      description: 'Details will be announced when this service launches',
    },
    features: [
      {
        category: 'Coming Soon',
        items: [
          'Details coming soon',
          'Stay tuned for updates',
          'Follow our socials for announcements',
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
