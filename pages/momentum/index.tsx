import { GetStaticProps } from 'next';
import { getCategorData } from 'lib/api';
import MomentumHomePageContent from 'components/site/momentumHomePageContent';
import SEO from 'components/site/seo';
import MomentumLayout from 'components/site/momentumLayout';
import { CategoriesProvider, Category } from 'context/categories';

type IndexPageProps = {
  categoryData: Category[];
};

const IndexPage = (props: IndexPageProps): JSX.Element => {
  const { categoryData } = props;
  return (
    <CategoriesProvider data={categoryData}>
      <SEO
        title="Momentum Documentation - SparkPost"
        description="SparkPost Momentum Documentation"
      />
      <MomentumLayout>
        <MomentumHomePageContent />
      </MomentumLayout>
    </CategoriesProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categoryData = getCategorData('momentum');
  return { props: { categoryData } };
};

export default IndexPage;
