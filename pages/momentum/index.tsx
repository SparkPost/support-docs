import { GetStaticProps } from 'next';
import { getCategoryNavigation, MOMENTUM_PATH } from 'lib/api';
import { MomentumNavigationItemProps } from 'components/site/momentumNavigation';
import SEO from 'components/site/seo';
import MomentumLayout from 'components/site/momentumLayout';

type IndexPageProps = {
  data: {
    navigation?: MomentumNavigationItemProps[];
  };
};

const IndexPage = (props: IndexPageProps): JSX.Element => {
  const { data } = props;
  return (
    <>
      <SEO
        title="Momentum Documentation - SparkPost"
        description="SparkPost Momentum Documentation"
      />
      <MomentumLayout navigation={data.navigation}>
        <h1>Nothing here yet</h1>
      </MomentumLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const navigation = getCategoryNavigation(MOMENTUM_PATH) || null;
  return { props: { data: { navigation } } };
};

export default IndexPage;
