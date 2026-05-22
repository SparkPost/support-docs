import React from 'react';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@sparkpost/matchbox';
import * as gtag from '../utils/gtm';
import { page as rudderPage } from 'utils/rudderstack';
import CookieConsent from 'components/site/cookieConsent';
import RudderStack from 'components/site/rudderstack';
import GTM from 'components/site/gtm';
import Status from 'components/site/status';
import { getWindow } from 'utils/ssr';
import { AlertsProvider } from 'context/alerts';
import '../public/assets/fonts.css';

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
