import { Box } from '@sparkpost/matchbox';
import Footer from 'components/site/footer';
import Alerts from 'components/site/alerts';

type LayoutWrapProps = {
  children?: React.ReactNode;
  bg?: string;
};

const LayoutWrap = (props: LayoutWrapProps): JSX.Element => {
  const { children, bg } = props;

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bg={bg ? bg : 'gray.100'}>
      <Alerts />
      <Box flex="1" mx="auto" px="400" maxWidth="1400" width="100%">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default LayoutWrap;
