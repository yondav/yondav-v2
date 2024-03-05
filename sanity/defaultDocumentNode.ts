import type { SanityDocument } from 'sanity';
import type { DefaultDocumentNodeResolver } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';

// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc: SanityDocument & { slug?: { current: string } }) {
  const token =
    'sknPDwgWiNpOrX58nLhkOtgsovpxaiSq6aFI9f8BTgOiDhvXpMF8TLNnsPdeVX6dzEeN9l0IDdMXg6bCSGMyGUS6oIv5dEmCZK8zrpBLrZH8Ky2GzRhXzS2D7MLDHY2wgNL74XQE9tLbbFrgs6u43unFQDgOShs9PSCkARbHmhxsFsTllP3n';

  return doc?.slug?.current
    ? `http://localhost:3000/api/preview?secret=${token}&type=${doc._type}&path=${doc.slug.current}&hibernia`
    : `http://localhost:3000/api/preview?secret=${token}&hibernia`;
}

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  switch (schemaType) {
    case `work`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ]);
    case `info`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
