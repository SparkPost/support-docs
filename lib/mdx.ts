import fs from 'fs';
import path from 'path';
import glob from 'glob';

const SUPPORTED_EXTENSION = 'md';

export const MOMENTUM_PATH: string = path.join(process.cwd(), 'content/momentum/');
export const SUPPORT_PATH: string = path.join(process.cwd(), 'content/support/');

/**
 * Gets all Momentum markdown posts paths
 */
export function getMomentumPostPaths(): string[] {
  // TODO Need to figure out how to support index.md pages
  return glob
    .sync(`content/momentum/**/!(index).${SUPPORTED_EXTENSION}`)
    .map((path) => path.replace(`.${SUPPORTED_EXTENSION}`, ''))
    .map((path) => path.replace('content/', '/'));
}

/**
 * Retrieves a single Momentum post from a slug
 */
export function getMomentumPost(slug: string[] | string): Buffer {
  const fullPath = typeof slug === 'string' ? slug : slug.join('/');
  const postFilePath = path.join(MOMENTUM_PATH, `${fullPath}.${SUPPORTED_EXTENSION}`);
  return fs.readFileSync(postFilePath);
}
