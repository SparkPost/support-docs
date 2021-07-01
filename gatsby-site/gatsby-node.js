<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPages = void 0;
var create_pages_1 = require("./create-pages");
Object.defineProperty(exports, "createPages", { enumerable: true, get: function () { return create_pages_1.createPages; } });
=======
const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const singleTemplate = path.resolve(`src/templates/single.js`);

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
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: singleTemplate,
      context: {},
    });
  });
};
>>>>>>> eb53d65700b58ddea6a602a904051f06045a8466
