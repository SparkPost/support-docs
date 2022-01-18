import { Box, Drawer, useDrawer } from '@sparkpost/matchbox';
import HeaderButtons from 'components/site/headerButtons';
import { useRouter } from 'next/router';
import LayoutWrap from './layoutWrap';
import LayoutInnerContent from './layoutInnerContent';

type LayoutProps = {
  children?: React.ReactNode;
  navigationComponent?: React.ReactNode;
};

const Layout = (props: LayoutProps): JSX.Element => {
  const { children, navigationComponent } = props;
  const { getDrawerProps, getActivatorProps } = useDrawer();
  const { asPath } = useRouter();
  const category = asPath.split('/')[1];

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
