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
import DocsIndexListPageContent from 'components/site/docsIndexListPageContent';
import type { NavigationItemProps } from 'components/site/navigation';
import { useRouter } from 'next/router';

type PostPageProps = {
  content: string;
  data: {
    title?: string;
    description?: string;
    lastUpdated?: string;
  };
  navigationData?: NavigationItemProps[];
  isIndex: boolean;
};

const PostPage = (props: PostPageProps): JSX.Element => {
  const { content, data, navigationData, isIndex } = props;
  const router = useRouter();
  return (
    <>
      <SEO title={data.title} description={data.description} />
      <DocsLayout navigationData={navigationData}>
        <DocumentationContent
          title={data.title}
          lastUpdated={data.lastUpdated}
          isIndex={isIndex}
          description={data.description}
        >
          {isIndex && navigationData ? (
            <DocsIndexListPageContent
              navigationData={navigationData.find((navData) => navData.link === router.asPath)}
            />
          ) : (
            <Markdown>{content}</Markdown>
          )}
        </DocumentationContent>
      </DocsLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }

  const { content, data, isIndex } = getSingleCategoryPost(params.slug, categoryPath('docs')) || {};
  const navigationData = getSupportNavigation() || [];
  return { props: { content, data, navigationData, isIndex } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllCategoryPostPaths('docs'),
    fallback: false,
  };
};

export default PostPage;
