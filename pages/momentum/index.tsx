import MomentumHomePageContent from 'components/site/momentumHomePageContent';
import SEO from 'components/site/seo';
import MomentumLayout from 'components/site/momentumLayout';

const IndexPage = (): JSX.Element => {
  return (
    <>
      <SEO
        title="Momentum Documentation - SparkPost"
        description="SparkPost Momentum Documentation"
      />
      <MomentumLayout>
        <MomentumHomePageContent />
      </MomentumLayout>
    </>
  );
};

export default IndexPage;
