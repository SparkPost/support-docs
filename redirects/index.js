const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const YAML = require('js-yaml');
const escapeStringRegexp = require('escape-string-regexp');

const newBaseUrl = 'https://www.sparkpost.com/docs';
const articlesFolder = './articles/';
const redirects = {};

_.each(fs.readdirSync(articlesFolder), (topic) => {
  console.log(`Processing "${topic}"`);

  _.each(fs.readdirSync(path.join(articlesFolder, topic)), (article) => {
    console.log(`Processing "${topic}/${article}"`);
    processArticle(topic, article);
  });
});

fs.writeFileSync(path.join(__dirname, '/redirects.conf'), _.map(redirects, (toUrl, fromUrl) => {
  return `rewrite ${fromUrl} ${toUrl} last`;
}).join('\n'));


function processArticle(topic, article) {
  if (article === 'media') {
    return;
  }

  let metadata = getMetadata(path.join(articlesFolder, topic, article));

  if (article === 'index.md') {
    return redirects[`^\/customer\/portal\/topics\/${metadata.desk_id}[\S]*`] = `${newBaseUrl}/${topic}`;
  }

  let deskId = _.last(metadata.redirect_from.match(/articles\/(\d+)/));

  return redirects[`^\/customer\/portal\/articles\/${deskId}[\S]*`] = `${newBaseUrl}/${topic}/${article.replace('.md', '')}`;
}

function getMetadata(path) {
  const fileLines = fs.readFileSync(path,  'utf8').split('\n');
  let metaLines = [];
 
  // skip the first line
  for (var i = 1; i < fileLines.length; i++) {
    if (fileLines[i].match(/^---$/)) {
      break;
    }

    metaLines.push(fileLines[i].replace(/%22/g, '\\\"'));
  }
  
  return YAML.safeLoad(metaLines.join('\n'));
}