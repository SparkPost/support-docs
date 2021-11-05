import React from 'react';
import { useRouter } from 'next/router';
import { Box } from '@sparkpost/matchbox';
import { Menu } from '@sparkpost/matchbox-icons';
import Logo from 'components/site/logo';
import Search from 'components/site/algolia/search';
import HeaderButtons from 'components/site/headerButtons';

type HeaderProps = {
  getActivatorProps: () => object;
};

const Header = (props: HeaderProps) => {
  const { getActivatorProps } = props;
  const { route } = useRouter();
  const category = route.split('/')[1];

  return (
    <Box my="600">
      <Box as="header" height="650" display="flex" justifyContent="space-between" mb="400">
        <Logo />
        <Box display={['block', null, 'none']} marginTop="15px">
          <Menu {...getActivatorProps()} size={24} />
        </Box>
        <Box display={['none', null, 'block']}>
          <HeaderButtons />
        </Box>
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
