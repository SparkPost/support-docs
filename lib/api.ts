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
): { [k: string]: any } | void => {
  const postPath = typeof slug === 'string' ? slug : slug.join('/');
  const filePath = path.join(catPath, `${postPath}.md`);
  const indexPath = path.join(catPath, `${postPath}/index.md`);

  // If file exists, it is not an index page.
  if (fs.existsSync(filePath)) {
    return { isIndex: false, ...matter(fs.readFileSync(filePath, 'utf8')) };
  }

  if (fs.existsSync(indexPath)) {
    return { isIndex: true, ...matter(fs.readFileSync(indexPath, 'utf8')) };
  }

  return;
};

function insert(acc: { [key: string]: any }, item: { [key: string]: any }) {
  const parts = item.url.split('/').slice(1);
  const [docs, head, ...tail] = parts;

  if (tail.length > 2) {
  }
  if (acc.find(({ category }) => category === head)) {
    const index = acc.findIndex(({ category }) => category === head);
    acc[index].items.push({
      category: head,
      items: [],
      ...item,
    });
  } else {
    acc.push({
      category: head,
      items: [],
      ...item,
    });
  }

  return acc;
}

export const getSupportDocsNavigation = () => {
  // const insert = (children = [], [head, ...tail]) => {
  //   console.log('insert');
  //   let child = children.find((child) => child.name === head);
  //   if (!child) children.push((child = { name: head, children: [] }));
  //   if (tail.length > 0) {
  //     insert(child.children, tail);
  //   }
  //   return children;
  // };

  const files = glob.sync('content/docs/**/*.md');

  const data = files.reduce((acc, file) => {
    const { data } = matter(fs.readFileSync(file, 'utf8'));
    const withoutIndex = file.includes('index.md') ? file.replace(/\/index.md$/, '') : file;
    const withoutExtensions = withoutIndex.replace(/.md$/, '');
    const withoutContentPrefix = withoutExtensions.replace('docs/content/', '/');

    acc.push({
      title: data.title,
      url: withoutContentPrefix,
    });

    return acc;
  }, []);

  const nestedData = data.reduce(insert, []);

  return nestedData;
};
