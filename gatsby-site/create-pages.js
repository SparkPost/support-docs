"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPages = void 0;
const path = __importStar(require("path"));
const createPages = async ({ actions, graphql, reporter, }) => {
    const { createPage } = actions;
    const singleTemplate = path.resolve(`src/templates/single.tsx`);
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
