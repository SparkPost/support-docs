import { Box, BoxProps, Drawer, useDrawer } from '@sparkpost/matchbox';
import Header from 'components/site/header';
import HeaderButtons from 'components/site/headerButtons';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import LayoutWrap from './layoutWrap';
import LayoutInnerContent from './layoutInnerContent';

type LayoutProps = {
  children?: React.ReactNode;
  navigationComponent?: React.ReactNode;
};

const StyledSkipToContent = styled(Box)<BoxProps>`
  opacity: 0;
  text-decoration: none;
  z-index: -1;
  &:focus {
    opacity: 1;
    z-index: 1;
    color: white;
  }
`;

const Layout = (props: LayoutProps): JSX.Element => {
  const { children, navigationComponent } = props;
  const { getDrawerProps, getActivatorProps } = useDrawer();
  const { route } = useRouter();
  const category = route.split('/')[1];

  return (
    <LayoutWrap>
      <Drawer {...getDrawerProps()} position="right" id="mobile-menu">
        <Drawer.Header>
          {category === 'momentum' ? 'Momentum' : 'Support'} Documentation
        </Drawer.Header>
        <Drawer.Content>{navigationComponent}</Drawer.Content>
        <Drawer.Footer>
          <HeaderButtons />
        </Drawer.Footer>
      </Drawer>
      <LayoutInnerContent getActivatorProps={getActivatorProps}>
        <Box display="flex" width="100%" bg="white" border="400">
          <Box flex="0" borderRight="400" display={['none', null, 'block']}>
            {navigationComponent}
          </Box>
          <Box py="500" flex="1" id="main-content" overflow="hidden" position="relative">
            {children}
          </Box>
        </Box>
      </LayoutInnerContent>
    </LayoutWrap>
  );
};

export default Layout;
