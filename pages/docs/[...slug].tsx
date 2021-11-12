import { GetStaticProps, GetStaticPaths } from 'next';
import {
  getSupportDocsNavigation,
  getAllCategoryPostPaths,
  getSingleCategoryPost,
  categoryPath,
} from 'lib/api';
import SEO from 'components/site/seo';
import Markdown from 'components/markdown';
import DocsLayout from 'components/site/docsLayout';
import DocumentationPage from 'components/site/documentationPage';

type PostPageProps = {
  content: string;
  data: {
    title?: string;
    description?: string;
    lastUpdated?: string;
  };
};

const PostPage = (props: PostPageProps): JSX.Element => {
  const { content, data, navigationData } = props;
  console.log(navigationData);
  return (
    <>
      <SEO title={data.title} description={data.description} />
      <DocsLayout>
        <DocumentationPage title={data.title} lastUpdated={data.lastUpdated}>
          <Markdown>{content}</Markdown>
        </DocumentationPage>
      </DocsLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }
  const { content, data } = getSingleCategoryPost(params.slug, categoryPath('docs')) || {};
  const navigationData = getSupportDocsNavigation() || 'test';
  return { props: { content, data, navigationData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllCategoryPostPaths('docs'),
    fallback: false,
  };
};

export default PostPage;
