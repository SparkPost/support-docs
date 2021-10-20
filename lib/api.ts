import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter, { GrayMatterFile } from 'gray-matter';
import yaml from 'js-yaml';

export const MOMENTUM_PATH: string = path.join(process.cwd(), 'content/momentum/');
export const SUPPORT_PATH: string = path.join(process.cwd(), 'content/support/');

/**
 * Gets all Momentum markdown posts paths.
 * This tells Next.js which routes the site needs.
 */
export const getAllMomentumPostPaths = (): string[] => {
  return (
    glob
      .sync(`content/momentum/**/*.md`)
      // Replace `/index.md` paths with their parent directory for pretty urls
      .map((path) => (path.includes('index.md') ? path.replace(/\/index.md$/, '') : path))
      // Rip out trailing `.md` extensions
      .map((path) => path.replace(/.md$/, ''))
      // Rip out the prefixed `content`
      .map((path) => path.replace(/^content\//, '/'))
  );
};

/**
 * Retrieves a single Momentum post from a slug.
 */
export const getSingleMomentumPost = (slug: string[] | string): GrayMatterFile<string> | void => {
  const postPath = typeof slug === 'string' ? slug : slug.join('/');
  const filePath = path.join(MOMENTUM_PATH, `${postPath}.md`);
  const indexPath = path.join(MOMENTUM_PATH, `${postPath}/index.md`);

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
export const getMomentumNavigation = (): unknown | void => {
  const filePath = path.join(MOMENTUM_PATH, `navigation.yml`);

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    return yaml.load(data);
  }

  return;
};
