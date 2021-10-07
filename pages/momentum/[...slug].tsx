import matter from 'gray-matter';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getMomentumPostPaths, getMomentumPost } from 'lib/mdx';
import components from 'components/markdown';

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  meta: {
    title?: string;
    description?: string;
  };
};

export default function PostPage(props: PostPageProps): JSX.Element {
  const { source, meta } = props;
  return (
    <>
      <h1>{meta.title}</h1>
      <h6>{meta.description}</h6>
      <MDXRemote {...source} components={components} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }

  const { content, data } = matter(getMomentumPost(params.slug));
  const mdxSource = await serialize(content, {
    scope: data,
  });

  return { props: { source: mdxSource, meta: data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getMomentumPostPaths(),
    fallback: false,
  };
};
