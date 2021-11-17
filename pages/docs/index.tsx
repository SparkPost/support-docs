import DocsHomePageContent from 'components/site/docsHomePageContent';
import { GetStaticProps } from 'next';
import SEO from 'components/site/seo';
import DocsLayout from 'components/site/docsLayout';
import { getSupportNavigation } from 'lib/api';
import type { NavigationItemProps } from 'components/site/navigation';

type IndexPageProps = {
  navigationData?: NavigationItemProps[];
};

const IndexPage = (props: IndexPageProps): JSX.Element => {
  const { navigationData } = props;
  return (
    <>
      <SEO
        title="Support Documentation - SparkPost"
        description="SparkPost Support Documentation"
      />
      <DocsLayout navigationData={navigationData}>
        <DocsHomePageContent />
      </DocsLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const navigationData = getSupportNavigation() || [];
  return { props: { navigationData } };
};

export default IndexPage;
