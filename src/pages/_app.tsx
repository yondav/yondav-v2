import type { GetServerSidePropsContext } from 'next';
import type { AppProps } from 'next/app';
import { Abril_Fatface } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import { theme } from 'twin.macro';

import Nav from '../components/Nav';
import { UiTheme } from '../contexts';
import GlobalStyles from '../styles/GlobalStyles';

const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --header-font: ${abril.style.fontFamily};
            --copy-font: aktiv-grotesk;
          }
        `}
      </style>
      <SessionProvider session={session}>
        <UiTheme.Provider>
          {/* <Toaster
            toastOptions={{
              style: {
                boxShadow: theme`boxShadow.button`,
                background: theme`colors.brand.peony.200`,
                borderRadius: theme`borderRadius.none`,
              },
              position: 'bottom-right',
              error: {
                style: {
                  background: theme`colors.brand.cerise.300`,
                  color: theme`colors.brand.neutral.100`,
                },
              },
              success: {
                style: {
                  background: theme`colors.brand.aegean.300`,
                  color: theme`colors.brand.neutral.100`,
                },
              },
            }}
          /> */}
          <GlobalStyles />
          <Nav />
          <Component {...pageProps} />
        </UiTheme.Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
