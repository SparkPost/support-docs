import { Box } from '@sparkpost/matchbox';
import Footer from 'components/site/footer';

type LayoutWrapProps = {
  children?: React.ReactNode;
  bg?: string;
};

const LayoutWrap = (props: LayoutWrapProps): JSX.Element => {
  const { children, bg } = props;
  // const { getDrawerProps, getActivatorProps } = useDrawer();
  // const { route } = useRouter();
  // const category = route.split('/')[1];

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bg={bg ? bg : 'gray.100'}>
      <Box flex="1" mx="auto" px="400" maxWidth="1400" width="100%">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default LayoutWrap;
