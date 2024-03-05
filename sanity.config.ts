/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { RiHome5Line } from 'react-icons/ri';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';

import {
  DeskNav,
  defaultDocumentNode,
  deskTheme,
  schemaTypes,
  apiVersion,
  dataset,
  projectId,
} from './sanity';

export default defineConfig({
  name: 'lamb-cms',
  title: 'ALamb - CMS',
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: schemaTypes,
  theme: deskTheme,
  studio: {
    components: {
      navbar: DeskNav,
    },
  },
  plugins: [
    deskTool({
      defaultDocumentNode,
      structure: S =>
        S.list()
          .title('Content')
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem()
              .title('Landing')
              .id('landing')
              .icon(RiHome5Line)
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType('landing')
                  .documentId('landing')
                  .views([
                    S.view.form(),
                    S.view
                      .component(Iframe)
                      .options({
                        url: 'http://localhost:3000/api/preview',
                      })
                      .title('Preview'),
                  ])
              ),
            // Regular document types
            S.documentTypeListItem('details').title('Details'),
            S.documentTypeListItem('work').title('Work'),
            S.documentTypeListItem('page').title('Pages'),
          ]),
    }), // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
