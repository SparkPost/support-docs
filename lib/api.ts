import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';

export const MOMENTUM_PATH: string = path.join(process.cwd(), 'content/momentum/');
export const SUPPORT_PATH: string = path.join(process.cwd(), 'content/support/');

/**
 * Gets all Momentum markdown posts paths
 */
export function getAllMomentumPostPaths(): string[] {
  return glob
    .sync(`content/momentum/**/!(index).md`) // // TODO Need to figure out how to support index.md pages
    .map((path) => path.replace(`.md`, ''))
    .map((path) => path.replace('content/', '/'));
}

/**
 * Retrieves a single Momentum post from a slug
 */
export function getSingleMomentumPost(slug: string[] | string): matter.GrayMatterFile<Buffer> {
  const fullPath = typeof slug === 'string' ? slug : slug.join('/');
  const postFilePath = path.join(MOMENTUM_PATH, `${fullPath}.md`);
  return matter(fs.readFileSync(postFilePath));
}
