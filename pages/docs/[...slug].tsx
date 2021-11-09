import { GetServerSideProps } from 'next';
import { getSingleCategoryPost, categoryPath } from 'lib/api';
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
  const { content, data } = props;
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }
  const post = getSingleCategoryPost(params.slug, categoryPath('docs')) || {};

  if (!post.content) {
    return {
      notFound: true,
    };
  }

  return { props: { content: post.content, data: post.data } };
};

export default PostPage;
