import React from 'react';
import { Button } from '@sparkpost/matchbox';
import { OpenInNew } from '@sparkpost/matchbox-icons';
import Cookies from 'js-cookie';

const DASHBOARD_LINK = 'https://app.sparkpost.com';
const LOGIN_LINK = 'https://app.sparkpost.com/auth';
const SIGNUP_LINK =
  'https://app.sparkpost.com/join?plan=free-0817&sfdcid=7016000000198J1&src=SP-Website';
const AUTH_KEY = 'website_auth';

const HeaderButtons = (): JSX.Element => {
  const isLoggedIn = React.useMemo(() => {
    return !!Cookies.get(AUTH_KEY);
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Button as="a" color="blue" variant="outline" href={DASHBOARD_LINK}>
          View Your Dashboard
          <Button.Icon as={OpenInNew} ml="200" />
        </Button>
      ) : (
        <Button.Group>
          <Button as="a" color="blue" variant="outline" href={LOGIN_LINK}>
            Login
          </Button>
          <Button as="a" color="blue" variant="outline" href={SIGNUP_LINK}>
            Try Now
          </Button>
        </Button.Group>
      )}
    </>
  );
};

export default HeaderButtons;
