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
	hideDrawerButtons?: boolean;
};

const Header = (props: HeaderProps) => {
  const { getActivatorProps } = props;
  const { asPath } = useRouter();
  const category = asPath.split('/')[1];
  let searchBox = (<Search indexName="next_support_documentation" />);
  if (category === 'momentum') {
    searchBox = (<Search indexName="next_momentum_documentation" />);
  } else if (category === 'analyst') {
    searchBox = (<Search indexName="next_analyst_documentation" />);
  }

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
						{!props.hideDrawerButtons && (<Box display={['none', null, 'block']}>
              <HeaderButtons />
            </Box>)}
          </>
        )}
      </Box>
      <Box maxWidth="1150">
        {searchBox}
      </Box>
    </Box>
  );
};

export default Header;
