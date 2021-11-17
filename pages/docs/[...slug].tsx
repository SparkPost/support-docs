import { GetStaticProps, GetStaticPaths } from 'next';
import {
  getSupportNavigation,
  getAllCategoryPostPaths,
  getSingleCategoryPost,
  categoryPath,
} from 'lib/api';
import SEO from 'components/site/seo';
import Markdown from 'components/markdown';
import DocsLayout from 'components/site/docsLayout';
import DocumentationContent from 'components/site/documentationContent';
import type { NavigationItemProps } from 'components/site/navigation';

type PostPageProps = {
  content: string;
  data: {
    title?: string;
    description?: string;
    lastUpdated?: string;
  };
  navigationData?: NavigationItemProps[];
};

const PostPage = (props: PostPageProps): JSX.Element => {
  const { content, data, navigationData } = props;
  return (
    <>
      <SEO title={data.title} description={data.description} />
      <DocsLayout navigationData={navigationData}>
        <DocumentationContent title={data.title} lastUpdated={data.lastUpdated}>
          <Markdown>{content}</Markdown>
        </DocumentationContent>
      </DocsLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }
  const { content, data } = getSingleCategoryPost(params.slug, categoryPath('docs')) || {};
  const navigationData = getSupportNavigation() || [];
  return { props: { content, data, navigationData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllCategoryPostPaths('docs'),
    fallback: false,
  };
};

export default PostPage;
