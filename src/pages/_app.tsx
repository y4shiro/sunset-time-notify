import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from '../components/Layout';
import { theme } from '../utils/theme';
import GoogleAnalytics from '../components/GoogleAnalytics';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 300_000,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
