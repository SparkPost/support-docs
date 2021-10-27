import { getWindow } from 'utils/ssr';
declare global {
  interface Window {
    dataLayer: object[];
  }
}

// GTM
export const pageview = (url: URL) => {
  const environment = getWindow();
  if (environment && environment.dataLayer) {
    environment.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
};
