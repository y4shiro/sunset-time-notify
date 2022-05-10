import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { GA_ID, existsGaId } from '../lib/gtag';

const Document = () => {
  return (
    <Html lang='ja'>
      <Head>
        <GoogleAnalytics />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

const GoogleAnalytics = () => (
  <>
    {existsGaId && (
      <>
        <Script
          defer
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy='afterInteractive'
        />
        <Script id='ga' defer strategy='afterInteractive'>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
          `}
        </Script>
      </>
    )}
  </>
);

export default Document;
