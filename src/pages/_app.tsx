import type { AppProps } from 'next/app';
import { Baumans, Sarpanch } from 'next/font/google';

import { UiTheme } from '../contexts';
import GlobalStyles from '../styles/GlobalStyles';

const sarpanch = Sarpanch({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});

const baumans = Baumans({
  subsets: ['latin'],
  weight: '400',
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --header-font: ${sarpanch.style.fontFamily};
            --copy-font: ${baumans.style.fontFamily};
          }
        `}
      </style>
      <UiTheme.Provider>
        <GlobalStyles />
        <Component {...pageProps} />
      </UiTheme.Provider>
    </>
  );
}

export default MyApp;
