import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@sparkpost/matchbox';
import * as gtag from '../utils/gtm';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import CookieConsent from 'components/site/cookieConsent';
import '../public/assets/fonts.css';

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
            id="segmentIntegration"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="DAocQXdcIBBXG5Q00diU56JhkEi3zgnI";;analytics.SNIPPET_VERSION="4.15.3";
              analytics.load("DAocQXdcIBBXG5Q00diU56JhkEi3zgnI");
              analytics.page();
              }}();`,
            }}
          />
          <Script
            id="googleTagManagerIntegration"
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
