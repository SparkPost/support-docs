import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter, { GrayMatterFile } from 'gray-matter';
import yaml from 'js-yaml';

export const MOMENTUM_PATH: string = path.join(process.cwd(), 'content/momentum/');
export const SUPPORT_PATH: string = path.join(process.cwd(), 'content/support/');

/**
 * Gets all markdown posts paths in a specific directory.
 * This tells Next.js which routes the site needs.
 */
export const getAllCategoryPostPaths = (category: string): string[] => {
  const stringArray = glob
    .sync(`content/${category}/**/*.md`)
    // Replace `/index.md` paths with their parent directory for pretty urls
    .map((path) => (path.includes('index.md') ? path.replace(/\/index.md$/, '') : path))
    // Rip out trailing `.md` extensions
    .map((path) => path.replace(/.md$/, ''))
    // Rip out the prefixed `content`
    .map((path) => path.replace(/^content\//, '/'));

  if (process.env.CYPRESS_ENV) {
    stringArray.length = 100; // Sample size of the test
  }
  return stringArray;
};

/**
 * Retrieves a single category post from a slug based on the categoryPath.
 */
export const getSingleCategoryPost = (
  slug: string[] | string,
  categoryPath: string,
): GrayMatterFile<string> | void => {
  const postPath = typeof slug === 'string' ? slug : slug.join('/');
  const filePath = path.join(categoryPath, `${postPath}.md`);
  const indexPath = path.join(categoryPath, `${postPath}/index.md`);

  // If file exists, it is not an index page.
  if (fs.existsSync(filePath)) {
    return matter(fs.readFileSync(filePath, 'utf8'));
  }

  if (fs.existsSync(indexPath)) {
    return matter(fs.readFileSync(indexPath, 'utf8'));
  }

  return;
};

/**
 * Retrieves momentum navigation structure as JSON.
 */
export const getCategoryNavigation = (categoryPath: string): unknown | void => {
  const filePath = path.join(categoryPath, `navigation.yml`);

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    return yaml.load(data);
  }

  return;
};
