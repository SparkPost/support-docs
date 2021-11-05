#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import { buildIndex } from './algoliaIndex.mjs';

const getAllSupportPosts = () => {
  return glob.sync(`content/docs/**/!(index).md`).map((file) => {
    const withoutExtensions = file.replace(/.md$/, '');
    const url = withoutExtensions.replace(/^content\//, '/');
    const filePath = path.join(path.join(process.cwd(), 'content'), `${url}.md`);

    if (fs.existsSync(filePath)) {
      return { url, file, ...matter(fs.readFileSync(filePath, 'utf8')) };
    }
  });
};

(async function () {
  buildIndex('next_support_documentation', getAllSupportPosts);
})();
