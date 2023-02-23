import { GetStaticProps, GetStaticPaths } from 'next';
import {
  getCategoryData,
  getAnalystSupportNavigation,
  getAllCategoryPostPaths,
  getSingleCategoryPost,
  categoryPath,
} from 'lib/api';
import { CategoriesProvider, Category } from 'context/categories';
import SEO from 'components/site/seo';
import Markdown from 'components/markdown';
import AnalystLayout from 'components/site/analystLayout';
import DocumentationContent from 'components/site/documentationContent';
import AnalystIndexListPageContent from 'components/site/analystIndexListPageContent';
import type { NavigationItemProps } from 'components/site/analystNavigation';
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
      <AnalystLayout navigationData={navigationData}>
        <DocumentationContent
          title={data.title}
          lastUpdated={data.lastUpdated}
          isIndex={isIndex}
          description={data.description}
        >
          {isIndex && navigationData ? (
            <AnalystIndexListPageContent navigationData={navigationData.find(trailingSlashOrNo)} />
          ) : (
            <Markdown>{content}</Markdown>
          )}
        </DocumentationContent>
      </AnalystLayout>
    </CategoriesProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }

  const { content, data, isIndex } = getSingleCategoryPost(params.slug, categoryPath('analyst')) || {};
  const navigationData = getAnalystSupportNavigation() || [];
  const categoryData = getCategoryData('analyst');
  return { props: { content, data, navigationData, isIndex, categoryData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllCategoryPostPaths('analyst'),
    fallback: false,
  };
};

export default PostPage;
