import { getWindow } from 'utils/ssr';

declare global {
  interface Window {
    rudderanalytics: {
      track: (event: string, properties: { [key: string]: string | boolean }) => void;
      page: (category?: string, name?: string) => void;
    };
  }
}

// RudderStack track
export const track = (event: string, properties: { [key: string]: string | boolean }) => {
  const environment = getWindow();
  if (environment && environment.rudderanalytics) {
    environment.rudderanalytics.track(event, properties);
  }
};

export const page = (category?: string, name?: string) => {
  const environment = getWindow();
  if (environment && environment.rudderanalytics) {
    environment.rudderanalytics.page(category, name);
  }
};
