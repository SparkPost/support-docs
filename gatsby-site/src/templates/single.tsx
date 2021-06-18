import React from "react";
import { graphql } from "gatsby";

interface IFrontMatter {
  title: string,
  description: string,
  path: string,
  github: string
}

interface TemplateProps {
  data: {
    markdownRemark: { 
      html: string
      frontmatter: IFrontMatter
    }
  }
}

export const Template = ({ data } : TemplateProps): JSX.Element => {
  return (
    <div className="container">
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div
        className="doc-content"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
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
