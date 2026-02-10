/**
 * sanity.cli.ts
 * Sanity CLI configuration
 */

import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineCliConfig({
  api: {
    projectId,
    dataset
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
});
