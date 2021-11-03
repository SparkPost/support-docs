import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllCategoryPostPaths, getSingleCategoryPost, categoryPath } from 'lib/api';
import MomentumLayout from 'components/site/momentumLayout';
import DocumentationPage from 'components/site/documentationPage';
import SEO from 'components/site/seo';
import Breadcrumbs from 'components/site/breadcrumbs';
import Markdown from 'components/markdown';
import { Box, Tag } from '@sparkpost/matchbox';

type PostPageProps = {
  content: string;
  data: {
    title?: string;
    description?: string;
    lastUpdated?: string;
  };
};

const PostPage = (props: PostPageProps): JSX.Element => {
  const { content, data } = props;

  return (
    <>
      <SEO title={data.title} description={data.description} />
      <MomentumLayout>
        <DocumentationPage title={data.title} lastUpdated={data.lastUpdated}>
          <Markdown>{content}</Markdown>
        </DocumentationPage>
      </MomentumLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }
  const { content, data } = getSingleCategoryPost(params.slug, categoryPath('momentum')) || {};
  return { props: { content, data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllCategoryPostPaths('momentum'),
    fallback: false,
  };
};

export default PostPage;
