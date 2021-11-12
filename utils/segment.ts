import { getWindow } from 'utils/ssr';

declare global {
  interface Window {
    analytics: {
      track: (event: string, properties: { [key: string]: string | boolean }) => void;
      page: (category?: string, name?: string) => void;
    };
  }
}

// Segment track
export const track = (event: string, properties: { [key: string]: string | boolean }) => {
  const environment = getWindow();
  if (environment && environment.analytics) {
    environment.analytics.track(event, properties);
  }
};

export const page = (category?: string, name?: string) => {
  const environment = getWindow();
  if (environment && environment.analytics) {
    environment.analytics.page(category, name);
  }
};
