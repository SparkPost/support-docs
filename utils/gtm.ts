import { getWindow } from 'utils/ssr';
declare global {
  interface Window {
    dataLayer: object[];
  }
}

// GTM
export const pageview = (url: URL) => {
  const window = getWindow();
  if (window && window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
};
