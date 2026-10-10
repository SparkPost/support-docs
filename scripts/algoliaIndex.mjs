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

dotenv.config();

export async function buildIndex(indexName, getPosts, { replace = false, settingsFrom } = {}) {
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

    // Replacing with nothing (for example without the content submodule)
    // would empty the index.
    if (replace && transformed.length === 0) {
      console.error(`No pages found; not replacing ${indexName}.`);
      process.exit(1);
    }
    if (settingsFrom && settingsFrom !== indexName) {
      // Every rebuild takes production's ranking, synonyms and rules; a new
      // index would otherwise have Algolia's defaults.
      await client.copyIndex(settingsFrom, indexName, { scope: ['settings', 'synonyms', 'rules'] }).wait();
    }
    // replaceAllObjects also drops the records of pages that no longer exist.
    const algoliaResponse = replace
      ? await index.replaceAllObjects(transformed, { safe: true })
      : await index.saveObjects(transformed);
    console.log(`Added ${algoliaResponse.objectIDs.length} records to Algolia search`);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
