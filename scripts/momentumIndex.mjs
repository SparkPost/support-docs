#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import { buildIndex } from './algoliaIndex.mjs';
import algoliaIndexes from '../lib/algoliaIndexes.js';

const { DEFAULT_MOMENTUM_INDEX, momentumIndexName } = algoliaIndexes;

const getAllMomentumPosts = () => {
  return glob.sync(`content/momentum/**/*.md`).map((file) => {
    const withoutIndex = file.includes('index.md') ? file.replace(/\/index.md$/, '') : file;
    const withoutExtensions = withoutIndex.replace(/.md$/, '');
    const url = withoutExtensions.replace(/^content\//, '/');
    const filePath = path.join(path.join(process.cwd(), 'content'), `${url}.md`);
    const indexPath = path.join(path.join(process.cwd(), 'content'), `${url}/index.md`);

    if (fs.existsSync(filePath)) {
      return { url, file, ...matter(fs.readFileSync(filePath, 'utf8')) };
    }

    if (fs.existsSync(indexPath)) {
      return { url, file, ...matter(fs.readFileSync(indexPath, 'utf8')) };
    }
  });
};

(async function () {
  const indexName = momentumIndexName();
  // Production adds to its index; a deploy of unreleased docs rebuilds its own.
  buildIndex(indexName, getAllMomentumPosts, {
    replace: indexName !== DEFAULT_MOMENTUM_INDEX,
    settingsFrom: DEFAULT_MOMENTUM_INDEX,
  });
})();
