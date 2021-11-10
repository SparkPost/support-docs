import { getWindow } from 'utils/ssr';

declare global {
  interface Window {
    analytics: {
      track: (event: string, properties: {[key: string]: string}) => void;
    }
  }
}

// Segment track
export const track = (event: string, properties: {[key: string]: string}) => {
  const environment = getWindow();
  if (environment && environment.analytics) {
    environment.analytics.track(event, properties);
  }
};
