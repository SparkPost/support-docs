import React from "react";
import { graphql } from "gatsby";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div class="container">
      <h1>{post.frontmatter.title}</h1>
      <div
        className="doc-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
}

export const pageQuery = graphql`
  query DocPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        path
      }
    }
  }
`;
