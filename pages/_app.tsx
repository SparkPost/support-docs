import React from 'react';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@sparkpost/matchbox';
import * as gtag from '../utils/gtm';
import { page as rudderPage } from 'utils/rudderstack';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import CookieConsent from 'components/site/cookieConsent';
import RudderStack from 'components/site/rudderstack';
import GTM from 'components/site/gtm';
import Status from 'components/site/status';
import { getWindow } from 'utils/ssr';
import { AlertsProvider } from 'context/alerts';
import '../public/assets/fonts.css';

/**
 * Using the React sentry integration instead of
 * their next.js integration.
 */
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://2d95367da3ea460dbd19301aed1d6de9@o113111.ingest.sentry.io/4504084278607872',
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,

    // Release is used to match events with uploaded sourcemaps
    release: process.env.RELEASE,
  });
}

if (!getWindow()) {
  React.useLayoutEffect = React.useEffect;
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
      rudderPage();
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider>
      <RudderStack />
      <GTM />
      <Status />
      <AlertsProvider>
        <Component {...pageProps} />
      </AlertsProvider>
      <CookieConsent />
    </ThemeProvider>
  );
};

export default MyApp;
