import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@sparkpost/matchbox';
import * as gtag from '../utils/gtag';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

/**
 * Using the React sentry integration instead of
 * their next.js integration.
 *
 */
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

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.gaPageview(url, process.env.NEXT_PUBLIC_GA_ID || 'nothing_to_see_here');
      gtag.gtmPageview(url);
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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/* End Global Site Tag (gtag.js) - Google Analytics */}
          {/* Google Tag Manager */}
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          />
          {/* End Google Tag Manager */}
        </>
      )}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
