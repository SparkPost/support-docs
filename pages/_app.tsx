import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@sparkpost/matchbox';
import * as gtag from '../utils/gtm';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import CookieConsent from 'components/site/cookieConsent';
import Segment from 'components/site/segment';
import GTM from 'components/site/gtm';
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
      <Segment />
      <GTM />
      <Component {...pageProps} />
      <CookieConsent />
    </ThemeProvider>
  );
};
export default MyApp;
