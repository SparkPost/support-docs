import { GetStaticProps } from 'next';
import { getMomentumNavigation } from 'lib/api';
import MomentumNavigation, { ItemProps } from 'components/site/momentumNavigation';
import { Box } from '@sparkpost/matchbox';

type IndexPageProps = {
  data: {
    navigation?: ItemProps[];
  };
};

const IndexPage = (props: IndexPageProps): JSX.Element => {
  const { data } = props;
  return (
    <Box display="flex">
      <Box flex="0">
        <MomentumNavigation data={data.navigation} />
      </Box>
      <Box flex="1"></Box>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const navigation = getMomentumNavigation() || null;
  return { props: { data: { navigation } } };
};

export default IndexPage;
