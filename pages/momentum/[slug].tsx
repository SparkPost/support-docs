import matter from 'gray-matter'
import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

/**
 * TODO DELETE ME
 */
const testContent = `---
title: "test"
description: "description"
---

some **mdx** content
`;


type PostPageProps = {
  source: MDXRemoteSerializeResult
  meta: {
    title?: string
    description?: string
  }
}

export default function PostPage(props: PostPageProps): JSX.Element {
  const { source, meta } = props;
  return (
    <>
      <h1>{meta.title}</h1>
      <h6>{meta.description}</h6>
      <MDXRemote {...source} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // TODO Read single file from path params
  const { content, data } = matter(testContent);

  const mdxSource = await serialize(content, {
    scope: data,
  })

  return { props: { source: mdxSource, meta: data } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO Get static paths of all md files
  return {
    paths: [{ params: { slug: 'test' } }],
    fallback: false,
  }
}
