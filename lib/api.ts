import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';

type CategoryOption = 'momentum' | 'docs';

export const categoryPath = (category: CategoryOption): string => {
  return path.join(
    process.cwd(),
    `${process.env.ENV === 'test' ? 'cypress/' : ''}content/${category}/`,
  );
};

const readFile = (filePath: string) => {
  return matter(fs.readFileSync(filePath, 'utf8'));
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
): { [k: string]: Object } | void => {
  const postPath = typeof slug === 'string' ? slug : slug.join('/');
  const filePath = path.join(catPath, `${postPath}.md`);
  const indexPath = path.join(catPath, `${postPath}/index.md`);

  // If file exists, it is not an index page.
  if (fs.existsSync(filePath)) {
    return { isIndex: false, ...readFile(filePath) };
  }

  if (fs.existsSync(indexPath)) {
    return { isIndex: true, ...readFile(indexPath) };
  }

  return;
};

/**
 * Retrieves navigation data from /content/docs
 */
export const getSupportNavigation = () => {
  // Get categories first
  const categories = glob.sync('content/docs/**/index.md');
  const categoryData = categories.map((file) => {
    const { data } = readFile(file);
    const link = file.replace(/\/index.md$/, '/').replace(/^content/, '');
    return { ...data, link };
  });

  // Then populate category items
  const navigationData = categoryData.map((category) => {
    const postsInCategory = glob.sync(`content${category.link}/!(index).md`);
    return {
      ...category,
      items: postsInCategory.map((file) => {
        const { data } = readFile(file);
        const link = file.replace(/.md$/, '/').replace(/^content/, '');
        return { ...data, link };
      }),
    };
  });

  return navigationData;
};

/**
 * Retrieves category information for breadcrumb friendly labels
 */
export const getCategoryData = (category: CategoryOption) => {
  const contentPath = `content/${category}`;
  const indexFilePaths = glob.sync(`${contentPath}/**/index.md`);

  const categoryData = indexFilePaths.map((file) => {
    const { data } = readFile(file);
    const parts = file.split('/');
    return {
      label: data.name || data.title,
      key: parts[parts.length - 2],
    };
  });

  return categoryData;
};
