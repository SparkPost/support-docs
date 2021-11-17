import DocsHomePageContent from 'components/site/docsHomePageContent';
import SEO from 'components/site/seo';
import DocsLayout from 'components/site/docsLayout';

const IndexPage = (): JSX.Element => {
  return (
    <>
      <SEO
        title="Support Documentation - SparkPost"
        description="SparkPost Support Documentation"
      />
      <DocsLayout>
        <DocsHomePageContent />
      </DocsLayout>
    </>
  );
};

export default IndexPage;
