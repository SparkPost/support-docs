'use strict';

const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');
const metaParser = require('markdown-it-meta');
const anchorTitles = require('markdown-it-anchor');
const handleImages = require('./handle-images');
let replaceImagesArray = undefined;

if (process.argv.length < 3)
  process.exit();

const filename = process.argv[2];

if (process.argv.length >= 4) {
  replaceImagesArray = process.argv[3].split(',');
 
  for (var i = 0; i < replaceImagesArray.length; i++) {
    if (replaceImagesArray[i].trim() === '') {
      delete replaceImagesArray[i];
    }
  }
}

const md = markdownIt({
  html: true,
  highlight: (str, lang) => {
    return `<pre class="lang:${lang} decode:true">${md.utils.escapeHtml(str)}</pre>`
  }
})
.use(metaParser)
.use(anchorTitles, {
  permalink: true,
  permalinkClass: 'h-and-a-anchor',
  permalinkBefore: true,
  permalinkSymbol: '#'
})
.use(handleImages({ replaceImagesArray }));

try {
  const html = md.render(fs.readFileSync(filename, 'utf8'));
  const { meta, images } = md;
  
  console.log(JSON.stringify({ meta, images, html }, null, 2));
}
catch(e) {}