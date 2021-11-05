import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button } from '@sparkpost/matchbox';
import { OpenInNew } from '@sparkpost/matchbox-icons';
import Cookies from 'js-cookie';
import Logo from 'components/site/logo';
import Search from 'components/site/algolia/search';

const DASHBOARD_LINK = 'https://app.sparkpost.com';
const LOGIN_LINK = 'https://app.sparkpost.com/auth';
const SIGNUP_LINK =
  'https://app.sparkpost.com/join?plan=free-0817&sfdcid=7016000000198J1&src=SP-Website';
const AUTH_KEY = 'website_auth';

const Header = () => {
  const { route } = useRouter();
  const category = route.split('/')[1];

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
        {category === 'momentum' ? (
          <Search indexName="next_momentum_documentation" />
        ) : (
          <Search indexName="next_support_documentation" />
        )}
      </Box>
    </Box>
  );
};

export default Header;
