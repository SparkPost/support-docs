#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import { buildIndex } from './algoliaIndex.mjs';

const getAllAnalystPosts = () => {
  return glob.sync(`content/analyst/**/!(index).md`).map((file) => {
    const withoutExtensions = file.replace(/.md$/, '');
    const url = withoutExtensions.replace(/^content\//, '/');
    const filePath = path.join(path.join(process.cwd(), 'content'), `${url}.md`);

    if (fs.existsSync(filePath)) {
      return { url, file, ...matter(fs.readFileSync(filePath, 'utf8')) };
    }
  });
};

(async function () {
  buildIndex('next_analyst_documentation', getAllAnalystPosts);
})();
