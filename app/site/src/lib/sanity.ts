/**
 * sanity.ts
 * Optional Sanity CMS client configuration
 *
 * This file is only activated when:
 * 1. An app explicitly imports it
 * 2. Environment variables are provided (PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET)
 *
 * If CMS is not needed, simply don't import this file and leave env vars empty.
 */

// Check if CMS is enabled via environment variables
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || '';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export const CMS_ENABLED = Boolean(projectId);

// Only initialize client if CMS is enabled
let client: any = null;
let imageUrlBuilder: any = null;

if (CMS_ENABLED) {
  // Dynamic imports to avoid bundling when CMS is disabled
  const { createClient } = await import('@sanity/client');
  const imageUrlBuilderModule = await import('@sanity/image-url');

  client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: true,
  });

  imageUrlBuilder = imageUrlBuilderModule.default(client);
}

export { client };

/**
 * Image URL builder for Sanity CDN
 * Returns null if CMS is disabled
 */
export function urlFor(source: any) {
  if (!imageUrlBuilder) {
    console.warn('CMS is not enabled. urlFor() requires Sanity configuration.');
    return null;
  }
  return imageUrlBuilder.image(source);
}

/**
 * Example GROQ query function
 * Replace with your own schema queries
 */
export async function fetchContent(query: string, params?: Record<string, any>) {
  if (!client) {
    console.warn('CMS is not enabled. Returning empty array.');
    return [];
  }
  return await client.fetch(query, params);
}

// ============================================
// Add your custom types and queries below
// ============================================

/*
// Example type definition
export interface ContentItem {
  _id: string;
  _type: string;
  title: string;
  // ... add fields matching your schema
}

// Example query function
export async function getAllContent(): Promise<ContentItem[]> {
  if (!CMS_ENABLED) return [];

  const query = `*[_type == "yourType"] | order(_createdAt desc) {
    _id,
    _type,
    title
  }`;

  return await fetchContent(query);
}
*/
