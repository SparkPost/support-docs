import { GetStaticProps } from 'next';
import { getCategorData } from 'lib/api';
import SEO from 'components/site/seo';
import DocsLayout from 'components/site/docsLayout';
import { getSupportNavigation } from 'lib/api';
import type { NavigationItemProps } from 'components/site/navigation';
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
        title="Support Documentation - SparkPost"
        description="SparkPost Support Documentation"
      />
      <DocsLayout navigationData={navigationData}>
        <div>There's nothing here yet</div>
      </DocsLayout>
    </CategoriesProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const navigationData = getSupportNavigation() || [];
  const categoryData = getCategorData('docs');
  return { props: { navigationData, categoryData } };
};

export default IndexPage;
