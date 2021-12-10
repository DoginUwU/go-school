import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import GlobalStyles from '../styles/globalStyles'

import Header from '../components/Header';
import Footer from '../components/Footer';

const MyApp = function({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp
