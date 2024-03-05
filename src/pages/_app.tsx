import type { AppProps } from 'next/app';
import { Abril_Fatface } from 'next/font/google';

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
      <UiTheme.Provider>
        <GlobalStyles />
        <Nav />
        <Component {...pageProps} />
      </UiTheme.Provider>
    </>
  );
}

export default MyApp;
