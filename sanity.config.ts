'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schemaTypes';
import { structure } from './sanity/structure';

// Embedded Studio mounted at /studio. Once a real Project ID is set in
// .env.local, visit http://localhost:3000/studio to add and edit properties.
export default defineConfig({
  basePath: '/studio',
  projectId: projectId || 'placeholder',
  dataset,
  schema,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
