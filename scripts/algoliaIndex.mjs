#!/usr/bin/env node

import algoliasearch from 'algoliasearch';
import dotenv from 'dotenv';
import { remark } from 'remark';
import strip from 'strip-markdown';

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

export async function buildIndex(indexName, getPosts) {
  dotenv.config();
  const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
  const adminKey = process.env.ALGOLIA_SEARCH_ADMIN_KEY;

  if (!appId && !adminKey) {
    console.error('Algolia credentials missing.');
    process.exit(1);
  }

  try {
    const client = algoliasearch(appId, adminKey);
    const index = client.initIndex(indexName);
    const posts = getPosts();
    const transformed = posts.map(transformPostToSearchObject);

    const algoliaResponse = await index.saveObjects(transformed);
    console.log(`Added ${algoliaResponse.objectIDs.length} records to Algolia search`);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
