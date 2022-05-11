import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';

import Layout from '../components/Layout';
import { theme } from '../utils/theme';
import GoogleAnalytics from '../components/GoogleAnalytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
