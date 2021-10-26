import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {
  getAllCategoryPostPaths,
  getSingleCategoryPost,
  getCategoryNavigation,
  MOMENTUM_PATH,
} from 'lib/api';
import components from 'components/markdown';
import MomentumNavigation, { ItemProps } from 'components/site/momentumNavigation';
import SEO from 'components/site/seo';
import { Box } from '@sparkpost/matchbox';

type PostPageProps = {
  content: string;
  data: {
    title?: string;
    description?: string;
    navigation?: ItemProps[];
  };
};

const PostPage = (props: PostPageProps): JSX.Element => {
  const { content, data } = props;
  return (
    <>
      <SEO title={data.title} description={data.description} />
      <Box display="flex">
        <Box flex="0">
          <MomentumNavigation data={data.navigation} />
        </Box>
        <Box p="500" flex="1">
          <h1>{data?.title}</h1>
          <h6>{data?.description}</h6>
          <ReactMarkdown
            components={components}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {content}
          </ReactMarkdown>
        </Box>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }

  const { content, data } = getSingleCategoryPost(params.slug, MOMENTUM_PATH) || {};
  const navigation = getCategoryNavigation(MOMENTUM_PATH) || null;
  return { props: { content, data: { ...data, navigation } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllCategoryPostPaths('momentum'),
    fallback: false,
  };
};

export default PostPage;
