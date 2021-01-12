import React from 'react';
import '../styles/globals.css';

import 'fontsource-roboto';

import Head from 'next/head';

import ThemeProvider from 'context/ThemeContext';
import Theme from 'components/Theme';
import Layout from 'components/Layout';
import { CssBaseline, StylesProvider } from '@material-ui/core';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider>
        <Theme>
          <CssBaseline />
          <StylesProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </StylesProvider>
        </Theme>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
