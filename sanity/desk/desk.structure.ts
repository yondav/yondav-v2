import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { schemaTypes } from '../schemas';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['landing']);

export default defineConfig({
  name: 'default',
  title: 'Alison Lamb, Visual Designer',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [
    deskTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Landing')
              .id('landing')
              .child(S.document().schemaType('landing').documentId('landing')),
            S.documentTypeListItem('details').title('Details'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes.types,

    templates: templates =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
