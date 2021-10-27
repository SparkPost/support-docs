import Script from 'next/script';
import isbot from 'isbot';
import * as snippet from '@segment/snippet';
import { getWindow } from 'utils/ssr';

const Segment = (): JSX.Element => {
  const isBotSSR = (): boolean => {
    let bot = false;
    if (getWindow()) {
      bot = isbot(window.navigator.userAgent);
    }

    return bot;
  };

  const renderSnippet = () => {
    const opts = {
      apiKey: process.env.NEXT_PUBLIC_SEGMENT_ID,
      // note: the page option only covers SSR tracking.
      // Page.js is used to track other events using `window.analytics.page()`
      page: true,
    };

    if (process.env.NODE_ENV === 'development') {
      return snippet.max(opts);
    }

    return snippet.min(opts);
  };

  return (
    <>
      {process.env.NODE_ENV === 'production' && !isBotSSR() && (
        <Script
          id="segmentIntegration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: renderSnippet() }}
        />
      )}
    </>
  );
};

export default Segment;
