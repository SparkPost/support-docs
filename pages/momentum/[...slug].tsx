import { GetStaticProps, GetStaticPaths } from 'next';
import {
  getCategoryData,
  getAllCategoryPostPaths,
  getSingleCategoryPost,
  categoryPath,
} from 'lib/api';
import { CategoriesProvider, Category } from 'context/categories';
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
  categoryData: Category[];
};

const PostPage = (props: PostPageProps): JSX.Element => {
  const { content, data, isIndex, categoryData } = props;

  return (
    <CategoriesProvider data={categoryData}>
      <SEO title={data.title} description={data.description} />
      <MomentumLayout>
        <DocumentationContent title={data.title} lastUpdated={data.lastUpdated} isIndex={isIndex}>
          <Markdown>{content}</Markdown>
        </DocumentationContent>
      </MomentumLayout>
    </CategoriesProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }
  const { content, data } = getSingleCategoryPost(params.slug, categoryPath('momentum')) || {};
  const categoryData = getCategoryData('momentum');
  return { props: { content, data, categoryData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllCategoryPostPaths('momentum'),
    fallback: false,
  };
};

export default PostPage;
