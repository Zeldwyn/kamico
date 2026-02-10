/**
 * sanity.config.ts
 * Sanity Studio configuration
 *
 * This CMS is optional and disabled by default.
 * To enable:
 * 1. Create a Sanity project at https://sanity.io
 * 2. Set environment variables (SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET)
 * 3. Define your schemas in ./schemas/
 * 4. Run `npm run dev:cms` to start the studio
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

// Read environment variables
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'CMS Studio',

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
});
