// This code prevents a Flash Of Unstyled Content (FOUC)
// on load. Without it, the styles are only added once
// react loads on the frontend

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
} from 'next/document';
import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

function MyDocument() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      head: [
        <>
          <link rel='stylesheet' href='https://use.typekit.net/elr5mzn.css' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#B38F89' />
          <meta name='msapplication-TileColor' content='#B38F89' />
          <meta name='theme-color' content='#EFE7E6' />
          <title>Alison Lamb - Visual Designer</title>
        </>,
      ],
      styles: (
        <>
          <meta name='viewport' content='width=device-width' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, minimum-scale=1'
          />
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;

// export default class Document extends Document {
//   static async getInitialProps(ctx: DocumentContext) {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;
//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
//         });
//       const initialProps = await Document.getInitialProps(ctx);

//       return {
//         ...initialProps,
//         head: [
//           <Fragment key='fonts'>
//             <link rel='stylesheet' href='https://use.typekit.net/elr5mzn.css' />

//             <link
//               rel='shortcut icon'
//               href='/favicon-light.ico'
//               media='(prefers-color-scheme: light)'
//             />
//             <link
//               rel='shortcut icon'
//               href='/favicon-dark.ico'
//               media='(prefers-color-scheme: dark)'
//             />
//             <link
//               rel='apple-touch-icon'
//               sizes='180x180'
//               href='/apple-light.png'
//               media='(prefers-color-scheme: light)'
//             />
//             <link
//               rel='apple-touch-icon'
//               sizes='180x180'
//               href='/apple-dark.png'
//               media='(prefers-color-scheme: dark)'
//             />
//             <link
//               rel='icon'
//               type='image/png'
//               sizes='32x32'
//               href='/32-light.png'
//               media='(prefers-color-scheme: light)'
//             />
//             <link
//               rel='icon'
//               type='image/png'
//               sizes='32x32'
//               href='/32-dark.png'
//               media='(prefers-color-scheme: dark)'
//             />
//             <link
//               rel='icon'
//               type='image/png'
//               sizes='16x16'
//               href='/16-light.png'
//               media='(prefers-color-scheme: light)'
//             />
//             <link
//               rel='icon'
//               type='image/png'
//               sizes='16x16'
//               href='/16-dark.png'
//               media='(prefers-color-scheme: dark)'
//             />
//             <link rel='manifest' href='/site.webmanifest' />
//             <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#B38F89' />
//             <meta name='msapplication-TileColor' content='#B38F89' />
//             <meta name='theme-color' content='#EFE7E6' />
//             <title>Alison Lamb - Visual Designer</title>
//           </Fragment>,
//         ],
//         styles: [
//           <Fragment key='styles'>
//             <meta name='viewport' content='width=device-width' />
//             <meta
//               name='viewport'
//               content='width=device-width, initial-scale=1, minimum-scale=1'
//             />
//             {initialProps.styles}
//             {sheet.getStyleElement()}
//           </Fragment>,
//         ],
//       };
//     } finally {
//       sheet.seal();
//     }
//   }
// }
