import type { AppProps } from 'next/app';
import { ThemeProvider } from '@sparkpost/matchbox';
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
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
