import React from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "@sparkpost/matchbox";
import SEO from "../components/seo";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <ThemeProvider>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        article
      />
      <div class="container">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="doc-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </ThemeProvider>
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
