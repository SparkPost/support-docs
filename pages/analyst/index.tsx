import AnalystHomePageContent from 'components/site/analystHomePageContent';
import { GetStaticProps } from 'next';
import { getAnalystSupportNavigation, getCategoryData } from 'lib/api';
import SEO from 'components/site/seo';
import AnalystLayout from 'components/site/analystLayout';
import type { NavigationItemProps } from 'components/site/baseNavigation';
import { CategoriesProvider, Category } from 'context/categories';

type IndexPageProps = {
  navigationData?: NavigationItemProps[];
  categoryData: Category[];
};

const IndexPage = (props: IndexPageProps): JSX.Element => {
  const { categoryData, navigationData } = props;
  return (
    <CategoriesProvider data={categoryData}>
      <SEO
        title="Analyst Documentation - SparkPost"
        description="SparkPost Analyst Documentation"
      />
      <AnalystLayout navigationData={navigationData}>
        <AnalystHomePageContent />
      </AnalystLayout>
    </CategoriesProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const navigationData = getAnalystSupportNavigation() || [];
  const categoryData = getCategoryData('analyst');
  return { props: { categoryData, navigationData } };
};

export default IndexPage;
