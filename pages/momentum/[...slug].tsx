import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllCategoryPostPaths, getSingleCategoryPost, categoryPath } from 'lib/api';
import MomentumLayout from 'components/site/momentumLayout';
import DocumentationContent from 'components/site/documentationContent';
import SEO from 'components/site/seo';
import Markdown from 'components/markdown';

type PostPageProps = {
  content: string;
  data: {
    title?: string;
    description?: string;
    lastUpdated?: string;
  };
  isIndex: boolean;
};

const PostPage = (props: PostPageProps): JSX.Element => {
  const { content, data, isIndex } = props;

  return (
    <>
      <SEO title={data.title} description={data.description} />
      <MomentumLayout>
        <DocumentationContent title={data.title} lastUpdated={data.lastUpdated} isIndex={isIndex}>
          <Markdown>{content}</Markdown>
        </DocumentationContent>
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
