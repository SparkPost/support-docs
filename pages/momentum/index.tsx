import { GetStaticProps } from 'next';
import { getCategoryNavigation, categoryPath } from 'lib/api';
import { MomentumNavigationItemProps } from 'components/site/momentumNavigation';
import MomentumHomePageContent from 'components/site/momentumHomePageContent';
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
        <MomentumHomePageContent />
      </MomentumLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const navigation = getCategoryNavigation(categoryPath('momentum')) || null;
  return { props: { data: { navigation } } };
};

export default IndexPage;
