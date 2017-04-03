const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const url = require('url');
const slug = require('slug');
const Promise = require('bluebird');
const randomID = require('random-id');
const http = require('follow-redirects').http;
const https = require('follow-redirects').https;
const imageMarkdownPattern = /!\[(.*)\]\((\S+)(?:\s+\"(.+)\")?\)/gm;
const base64Pattern = /^data:image\/(\w+);base64,/i;

module.exports = function(markdown, { storageDir, mediaPath, baseUrl }) {
  let queue = [];

  if (imageMarkdownPattern.test(markdown) && !fs.existsSync(storageDir)) {
    fs.mkdirSync(storageDir);
  }

  markdown = markdown.replace(imageMarkdownPattern, function(match, alt, currentImage, title) {
    const ext = path.extname(currentImage);
    const tempId = randomID();
    let mediaUrl = '';
    let newName = `${slug(alt || title || path.basename(currentImage, ext)).toLowerCase()}${path.extname(currentImage)}`; 
    if (base64Pattern.test(currentImage)) {
      newName = tempId;
      mediaUrl = currentImage;
    }
    else {
      mediaUrl = /^(?:https?:)?\/\//i.test(currentImage) ? currentImage : url.resolve(baseUrl, currentImage);
    }

    const mediaPromise = downloadMedia(mediaUrl, storageDir, newName);
    queue.push(mediaPromise);

    mediaPromise.then((newName) => {
      const replaceWith = newName !== mediaUrl ? `${mediaPath}/${newName}` : newName;
      markdown = markdown.replace(tempId, replaceWith);
    });

    return `![${alt}](${tempId}${!!title ? ` "${title}"` : ''})`;
  });

  return Promise.all(queue).then(() => {
    return markdown;
  });
}

function downloadMedia(mediaUrl, storageDir, newName) {
  return new Promise((resolve, reject) => {
    let request = null;
    const after = (response) => {
      const responseUrl = response.responseUrl.split('?')[0].split('#')[0];
      const urlExt = _.last(path.extname(responseUrl));
      if (path.extname(newName).length === 0) {
        newName += urlExt;
      }

      if (/^\d+$/.test(path.basename(newName, urlExt))) {
        newName = `${path.basename(responseUrl, urlExt)}${urlExt}`;
      }

      const file = fs.createWriteStream(`${storageDir}/${newName}`);
      response.pipe(file);

      file.on('close', function() {
        resolve(newName);
      });
    };
    

    if (mediaUrl.indexOf('http://') !== -1) {
      request = http.get(mediaUrl, after);
    }
    else if (mediaUrl.indexOf('https://') !== -1 || mediaUrl.indexOf('//') === 0) {
      request = https.get(mediaUrl, after);
    }
    else if (base64Pattern.test(mediaUrl)) {
      let ext = _.last(mediaUrl.match(base64Pattern) || ['']);
      let data = mediaUrl.replace(base64Pattern, "");

      newName += ext.length > 0 ? `.${ext}` : '';

      var buffer = new Buffer(data, 'base64');
      fs.writeFile(`${storageDir}/${newName}`, buffer, (error) => {
        if (error)
          return reject(error);

        resolve(newName);
      });
    }
    else {
      resolve(mediaUrl);
    }

    if (request) {
      request.on('error', function (e) {
        reject(e);
      });

      request.on('timeout', function () {
        reject(new Error('Request timed out'));
      });
    }
  });
}