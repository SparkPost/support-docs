import { Box, BoxProps } from '@sparkpost/matchbox';
import Header from 'components/site/header';
import Footer from 'components/site/footer';
import styled from 'styled-components';

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
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bg="gray.100">
      <Box flex="1" mx="auto" px="400" maxWidth="1400" width="100%">
        <div>
          <StyledSkipToContent
            as="a"
            href="#main-content"
            position="absolute"
            display="inline-block"
            p="200"
            top="0"
            left="0"
            bg="blue.700"
          >
            Skip to main content
          </StyledSkipToContent>
          <Header />
          <Box display="flex" width="100%" bg="white" border="400">
            <Box flex="0">{navigationComponent}</Box>
            <Box
              py="500"
              flex="1"
              id="main-content"
              borderLeft="400"
              overflow="hidden"
              position="relative"
            >
              {children}
            </Box>
          </Box>
        </div>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;