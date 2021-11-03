import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllCategoryPostPaths, getSingleCategoryPost, categoryPath } from 'lib/api';
import MomentumLayout from 'components/site/momentumLayout';
import SEO from 'components/site/seo';
import Markdown from 'components/markdown';
import { Box, Tag } from '@sparkpost/matchbox';

type PostPageProps = {
  content: string;
  data: {
    title?: string;
    description?: string;
  };
};

const PostPage = (props: PostPageProps): JSX.Element => {
  const { content, data } = props;

  return (
    <>
      <SEO title={data.title} description={data.description} />
      <MomentumLayout>
        <Box px="500">
          <Box as="h1" fontSize="600" lineHeight="600" fontWeight="semibold">{data?.title}</Box>
          <Box fontSize="200" lineHeight="200" pt="200">
            Last updated
            <Tag ml="300">September 2021</Tag>
          </Box>
        </Box>
        <Box as="hr" my="500" />
        <Box px="500">
          <Markdown>{content}</Markdown>
        </Box>
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
