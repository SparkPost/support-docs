declare global {
  interface Window {
    dataLayer: object[];
  }
}

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// Google Analytics
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const gaPageview = (url: URL, gaTID: string) => {
  window.gtag('config', gaTID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// GTM
export const gtmPageview = (url: URL) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
