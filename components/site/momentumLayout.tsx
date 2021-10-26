import { Box, BoxProps } from '@sparkpost/matchbox';
import Header from 'components/site/header';
import Footer from 'components/site/footer';
import MomentumNavigation, {
  MomentumNavigationItemProps,
} from 'components/site/momentumNavigation';
import styled from 'styled-components';

type LayoutProps = {
  children?: React.ReactNode;
  navigation?: MomentumNavigationItemProps[];
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

const MomentumLayout = (props: LayoutProps): JSX.Element => {
  const { children, navigation } = props;
  return (
    <>
      <Box display="flex" justifyContent="center" bg="gray.100">
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
          <Box display="flex" maxWidth="1400" bg="white" border="400">
            <Box flex="0">
              <MomentumNavigation data={navigation} />
            </Box>
            <Box p="500" flex="1" id="main-content">
              {children}
            </Box>
          </Box>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default MomentumLayout;
