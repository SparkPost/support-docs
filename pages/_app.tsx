import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@sparkpost/matchbox';
import * as gtag from '../utils/gtm';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import CookieConsent from 'components/site/cookieConsent';

/**
 * Using the React sentry integration instead of
 * their next.js integration.
 */
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://3b9d989425bd4cf0892613a46c2f9804@o104929.ingest.sentry.io/6004403',
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,

    // Release is used to match events with uploaded sourcemaps
    release: process.env.RELEASE,
  });
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          />
          {/* End Google Tag Manager */}
        </>
      )}
      <Component {...pageProps} />
      <CookieConsent />
    </ThemeProvider>
  );
};
export default MyApp;
