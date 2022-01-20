import { GetStaticProps, GetStaticPaths } from 'next';
import {
  getCategoryData,
  getSupportNavigation,
  getAllCategoryPostPaths,
  getSingleCategoryPost,
  categoryPath,
} from 'lib/api';
import { CategoriesProvider, Category } from 'context/categories';
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
  categoryData: Category[];
};

const PostPage = (props: PostPageProps): JSX.Element => {
  const { content, data, navigationData, isIndex, categoryData } = props;
  const router = useRouter();

  // This is to check for a url that either contains a trailing slash or not (since netlify will show either)
  const trailingSlashOrNo = (navData: NavigationItemProps): boolean => {
    const linkComponents = navData.link.split('/');
    linkComponents.pop();
    const link = linkComponents.join('/');

    return link === router.asPath || link + '/' === router.asPath;
  };
  return (
    <CategoriesProvider data={categoryData}>
      <SEO title={data.title} description={data.description} />
      <DocsLayout navigationData={navigationData}>
        <DocumentationContent
          title={data.title}
          lastUpdated={data.lastUpdated}
          isIndex={isIndex}
          description={data.description}
        >
          {isIndex && navigationData ? (
            <DocsIndexListPageContent navigationData={navigationData.find(trailingSlashOrNo)} />
          ) : (
            <Markdown>{content}</Markdown>
          )}
        </DocumentationContent>
      </DocsLayout>
    </CategoriesProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }

  const { content, data, isIndex } = getSingleCategoryPost(params.slug, categoryPath('docs')) || {};
  const navigationData = getSupportNavigation() || [];
  const categoryData = getCategoryData('docs');
  return { props: { content, data, navigationData, isIndex, categoryData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllCategoryPostPaths('docs'),
    fallback: false,
  };
};

export default PostPage;
