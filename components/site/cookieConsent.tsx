import React from 'react';
import { Box, Snackbar } from '@sparkpost/matchbox';
import ClientOnly from 'components/site/clientOnly';
import Cookies from 'js-cookie';

const CONSENT_KEY = 'sparkpost_support_docs_cookie_consent';

const CookieConsent = (): JSX.Element | null => {
  const [clicked, setClicked] = React.useState(false);

  const consent = React.useMemo(() => {
    return Cookies.get(CONSENT_KEY);
  }, []);

  if (consent === 'accepted' || clicked) {
    return null;
  }

  const setCookie = () => {
    Cookies.set(CONSENT_KEY, 'accepted', { expires: 7 });
    setClicked(true);
  };

  return (
    <ClientOnly>
      <Box position="fixed" bottom="200" left="200" right="200">
        <Box display="flex" justifyContent="center">
          <Snackbar maxWidth="1200" onDismiss={setCookie}>
            We use cookies to optimize your experience, analyze traffic, and personalize content. To
            learn more, please visit our{' '}
            <a href="https://www.sparkpost.com/policies/privacy/">Cookie Policy</a>. By using our site
            without disabling cookies, you consent to our use of them.
          </Snackbar>
        </Box>
      </Box>
    </ClientOnly>
  );
};

export default CookieConsent;
