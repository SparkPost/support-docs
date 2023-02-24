import Script from 'next/script';
import useStatus from 'hooks/useStatus';
import { getWindow } from 'utils/ssr';

declare global {
  interface Window {
    StatusPage: {
      page: any;
    };
  }
}

const Status = () => {
  const { setStatus } = useStatus();
  const environment = getWindow();

  return (
    <>
      <Script
        src="https://cdn.statuspage.io/se-v2.js"
        onLoad={() => {
          if (environment && environment.StatusPage) {
            const pathStartsWithAnalyst = /^\/analyst/.test(environment.location.pathname);
            const sp = new environment.StatusPage.page({ page: pathStartsWithAnalyst ? 'hj13jvlxdqwx' : '7ky1q6zd3fyp' });

            sp.status({
              success: function (data: {
                status: {
                  indicator: 'none' | 'minor' | 'major' | 'critical';
                };
              }) {
                const status = data?.status?.indicator;
                setStatus(status);
              },
            });
          }
        }}
      />
    </>
  );
};

export default Status;
