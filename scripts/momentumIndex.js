#!/usr/bin/env node

import algoliasearch from 'algoliasearch';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import { remark } from 'remark';
import strip from 'strip-markdown';

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

function transformPostToSearchObject(post) {
  const content = remark().use(strip).processSync(post.content);
  const excerpt = String(content).replace(/\n/g, ' ').substring(0, 200);

  return {
    objectID: post.file,
    slug: post.url,
    title: post.data.title,
    description: post.data.description,
    excerpt,
  };
}

(async function () {
  dotenv.config();
  const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
  const adminKey = process.env.ALGOLIA_SEARCH_ADMIN_KEY;

  if (!appId && !adminKey) {
    console.error('Algolia credentials missing.');
    process.exit(1);
  }

  try {
    const client = algoliasearch(appId, adminKey);
    const index = client.initIndex('next_momentum_documentation');
    const posts = getAllMomentumPosts();
    const transformed = posts.map(transformPostToSearchObject);

    const algoliaResponse = await index.saveObjects(transformed);
    console.log(`Added ${algoliaResponse.objectIDs.length} records to Algolia search`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
