import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import remarkCode from 'remark-code-blocks';

import {
  getAllCategoryPostPaths,
  getSingleCategoryPost,
  getCategoryNavigation,
  categoryPath,
} from 'lib/api';
import components from 'components/markdown';
import { MomentumNavigationItemProps } from 'components/site/momentumNavigation';
import MomentumLayout from 'components/site/momentumLayout';
import SEO from 'components/site/seo';

type PostPageProps = {
  content: string;
  data: {
    title?: string;
    description?: string;
    navigation?: MomentumNavigationItemProps[];
  };
};

const PostPage = (props: PostPageProps): JSX.Element => {
  const { content, data } = props;
  return (
    <>
      <SEO title={data.title} description={data.description} />
      <MomentumLayout navigation={data.navigation}>
        <h1>{data?.title}</h1>
        <h6>{data?.description}</h6>
        <ReactMarkdown
          components={components}
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm, remarkCode]}
        >
          {content}
        </ReactMarkdown>
      </MomentumLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }
  const { content, data } = getSingleCategoryPost(params.slug, categoryPath('momentum')) || {};
  const navigation = getCategoryNavigation(categoryPath('momentum')) || null;
  return { props: { content, data: { ...data, navigation } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllCategoryPostPaths('momentum'),
    fallback: false,
  };
};

export default PostPage;
