import { GatsbyNode } from "gatsby";
import { resolve } from "path";

export interface INode {
  frontmatter: {
    path: string;
  };
}

interface IQueryResult {
  allMarkdownRemark: {
    edges: {
      node: INode;
    }[];
  };
}

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;

  const singleTemplate = resolve(`src/templates/single.tsx`);

  const result = await graphql<IQueryResult>(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    throw result.errors;
  }

  if (!result.data) {
    throw new Error("ERROR: Could not fetch posts on build");
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: singleTemplate,
      context: {},
    });
  });
};
