declare global {
  interface Window {
    dataLayer: object[];
  }
}

// GTM
export const pageview = (url: URL) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
