import type { SanityDocument } from 'sanity';
import type { DefaultDocumentNodeResolver } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';

function getPreviewUrl(doc: SanityDocument & { slug?: { current: string } }) {
  return doc?.slug?.current
    ? `http://localhost:3000/api/preview?path=${doc.slug.current}`
    : `http://localhost:3000`;
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc: SanityDocument) => getPreviewUrl(doc),
      })
      .title('Preview'),
  ]);
  // switch (schemaType) {
  // case `work`:
  //   return S.document().views([
  //     S.view.form(),
  //     S.view
  //       .component(Iframe)
  //       .options({
  //         url: (doc: SanityDocument) => getPreviewUrl(doc),
  //       })
  //       .title('Preview'),
  //   ]);
  //   case 'landing':
  //     return S.document().views([
  //       S.view.form(),
  //       S.view
  //         .component(Iframe)
  //         .options({
  //           url: (doc: SanityDocument) => getPreviewUrl(doc),
  //         })
  //         .title('Preview'),
  //     ]);
  //   default:
  //     return S.document().views([S.view.form()]);
  // }
};
