"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPages = void 0;
const path_1 = require("path");
const createPages = async ({ actions, graphql, reporter, }) => {
    const { createPage } = actions;
    const singleTemplate = path_1.resolve(`src/templates/single.tsx`);
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
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: singleTemplate,
            context: {},
        });
    });
};
exports.createPages = createPages;
