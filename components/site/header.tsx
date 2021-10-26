import React from 'react';
import Logo from 'components/site/logo';
import { Box, Button, TextField } from '@sparkpost/matchbox';
import { Search, OpenInNew } from '@sparkpost/matchbox-icons';
import Cookies from 'js-cookie';

const DASHBOARD_LINK = 'https://app.sparkpost.com';
const LOGIN_LINK = 'https://app.sparkpost.com/auth';
const SIGNUP_LINK =
  'https://app.sparkpost.com/join?plan=free-0817&sfdcid=7016000000198J1&src=SP-Website';
const AUTH_KEY = 'website_auth';

const Header = () => {
  const isLoggedIn = React.useMemo(() => {
    return !!Cookies.get(AUTH_KEY);
  }, []);

  return (
    <Box my="600">
      <Box as="header" height="650" display="flex" justifyContent="space-between" mb="400">
        <Logo />
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
      </Box>
      <Box maxWidth="1150">
        <TextField
          id="algolia-search"
          label="Search"
          prefix={<Search />}
          placeholder="e.g. Getting Started"
        />
      </Box>
    </Box>
  );
};

export default Header;
