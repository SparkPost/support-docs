import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';
import { getAllMomentumPostPaths, getSingleMomentumPost } from 'lib/api';
import components from 'components/markdown';

type PostPageProps = {
  content: string;
  data: {
    title?: string;
    description?: string;
  };
};

export default function PostPage(props: PostPageProps): JSX.Element {
  const { content, data } = props;
  return (
    <>
      <h1>{data.title}</h1>
      <h6>{data.description}</h6>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }

  return { props: getSingleMomentumPost(params.slug) };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllMomentumPostPaths(),
    fallback: false,
  };
};
