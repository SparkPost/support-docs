"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPages = void 0;
const path_1 = require("path");
const createPages = async ({ actions, graphql, reporter, }) => {
    const { createPage } = actions;
    const result = await graphql(`
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
    result.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            path: edge.node.frontmatter.path,
            component: path_1.resolve("src/templates/single.tsx"),
            context: {},
        });
    });
};
exports.createPages = createPages;
