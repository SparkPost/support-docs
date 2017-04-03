'use strict'
module.exports = function({ replaceImagesArray }) {
  return function handleImages(md) {
    const defaultImageRender = md.renderer.rules.image;

    md.images = md.images || []
    md.renderer.rules.image = function (tokens, idx, options, env, self) {
      let token = tokens[idx];
      let src = getAttr(token, 'src') || '';
      let alt = getAttr(token, 'alt') || self.renderInlineAsText(token.children, options, env) || '';
      let title = getAttr(token, 'title') || '';

      md.images.push({ src, alt, title });

      if (replaceImagesArray) {
        return replaceImagesArray.shift();
      }

      return defaultImageRender(tokens, idx, options, env, self);
    };
  }
}

function getAttr(token, attr) {
  let index = token.attrIndex(attr);
  
  if (index === -1)
    return undefined;

  return token.attrs[index][1];
}