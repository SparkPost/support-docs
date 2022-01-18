import React from 'react';
import { useRouter } from 'next/router';
import { Box, ScreenReaderOnly, styles } from '@sparkpost/matchbox';
import { Menu } from '@sparkpost/matchbox-icons';
import Logo from 'components/site/logo';
import Search from 'components/site/algolia/search';
import HeaderButtons from 'components/site/headerButtons';
import styled from 'styled-components';

const StyledButton = styled.button`
  ${styles.buttonReset}
`;

type HeaderProps = {
  getActivatorProps?: () => object;
};

const Header = (props: HeaderProps) => {
  const { getActivatorProps } = props;
  const { asPath } = useRouter();
  const category = asPath.split('/')[1];

  return (
    <Box my="600">
      <Box as="header" height="650" display="flex" justifyContent="space-between" mb="500">
        <Logo />
        {getActivatorProps && (
          <>
            <Box display={['block', null, 'none']} marginTop="15px">
              <StyledButton {...getActivatorProps()}>
                <ScreenReaderOnly>Open Menu</ScreenReaderOnly>
                <Menu size={24} />
              </StyledButton>
            </Box>
            <Box display={['none', null, 'block']}>
              <HeaderButtons />
            </Box>
          </>
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
