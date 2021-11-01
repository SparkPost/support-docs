import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter, { GrayMatterFile } from 'gray-matter';

type CategoryOption = 'momentum' | 'support';

export const categoryPath = (category: CategoryOption): string => {
  return path.join(
    process.cwd(),
    `${process.env.ENV === 'test' ? 'cypress/' : ''}content/${category}/`,
  );
};

/**
 * Gets all markdown posts paths in a specific directory.
 * This tells Next.js which routes the site needs.
 */
export const getAllCategoryPostPaths = (category: CategoryOption): string[] => {
  let contentPath = `content/${category}`;
  let prefixedContentPath = /^content\//;

  // Sets the post path to a specific test content section
  if (process.env.ENV === 'test') {
    contentPath = `cypress/content/${category}`;
    prefixedContentPath = /^cypress\/content\//;
  }

  const categoryPostPaths = glob
    .sync(`${contentPath}/**/*.md`)
    // Replace `/index.md` paths with their parent directory for pretty urls
    .map((path) => (path.includes('index.md') ? path.replace(/\/index.md$/, '') : path))
    // Rip out trailing `.md` extensions
    .map((path) => path.replace(/.md$/, ''))
    // Rip out the prefixed `content`
    .map((path) => path.replace(prefixedContentPath, '/'));

  return categoryPostPaths;
};

/**
 * Retrieves a single category post from a slug based on the category path ('catPath').
 */
export const getSingleCategoryPost = (
  slug: string[] | string,
  catPath: string,
): GrayMatterFile<string> | void => {
  const postPath = typeof slug === 'string' ? slug : slug.join('/');
  const filePath = path.join(catPath, `${postPath}.md`);
  const indexPath = path.join(catPath, `${postPath}/index.md`);

  // If file exists, it is not an index page.
  if (fs.existsSync(filePath)) {
    return matter(fs.readFileSync(filePath, 'utf8'));
  }

  if (fs.existsSync(indexPath)) {
    return matter(fs.readFileSync(indexPath, 'utf8'));
  }

  return;
};
