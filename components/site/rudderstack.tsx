import Script from 'next/script';
import isbot from 'isbot';
import { getWindow } from 'utils/ssr';

const RudderStack = (): JSX.Element => {
  const isBotSSR = (): boolean => {
    let bot = false;
    if (getWindow()) {
      bot = isbot(window.navigator.userAgent);
    }

    return bot;
  };

  return (
    <>
      {process.env.NODE_ENV === 'production' && !isBotSSR() && (
        <Script
          id="rudderStackIntegration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          !function(){var e=window.rudderanalytics=window.rudderanalytics||[];e.methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],e.factory=function(t){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(t),e.push(r),e}};for(var t=0;t<e.methods.length;t++){var r=e.methods[t];e[r]=e.factory(r)}e.loadJS=function(e,t){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.rudderlabs.com/v1.1/rudder-analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a)},e.loadJS(),
          e.load("2ACvzWWjRHtsQTDV3l0IcdAe21e","https://messagebird-dataplane.rudderstack.com"),
          e.ready(() => {
              console.log("All set!")
          })
      }();
      `,
          }}
        />
      )}
    </>
  );
};

export default RudderStack;
