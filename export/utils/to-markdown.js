const toMarkdown = require('to-markdown');
const removeMarkdown = require('remove-markdown');
const striptags = require('striptags');
const _ = require('lodash');

const defaultConfig = {
  header: {
    max: 2,
    min: 3,
    default: 3,
    lines_before: 1,
    lines_after: 2,
    max_length: 10
  },
  base_font_size: 16,
};

function moveSpacesOut(str, wrapper) {
  let spacesBefore=str.replace(/\S.*/, '').length;
  let spacesAfter=str.replace(/\s*\S+/, '').length;
  return `${_.repeat(' ', spacesBefore)}${wrapper}${_.trim(str)}${wrapper}${_.repeat(' ', spacesAfter)}`;
}


function getLinesBefore(str, minimum = 0) {
  return _.max([(str.match(/^(\r\n|\r|\n)/)||['noop'])[0].split(/\r\n|\r|\n/).length, minimum]);
}

function getLinesAfter(str, minimum = 0) {
  return _.max([(str.match(/(\r\n|\r|\n)$/)||['noop'])[0].split(/\r\n|\r|\n/).length, minimum]);
}

function cleanHeader(size, innerHTML, config) {
  innerHTML = striptags(innerHTML);
  const beforeLines = getLinesBefore(innerHTML, config.header.lines_before);
  const afterLines = getLinesAfter(innerHTML, config.header.lines_after);
  innerHTML = innerHTML.replace(/(\*\*|\r\n|\r|\n)/g, '');
  let hPrefix = '';

  if (size > config.header.min)
    return `**${innerHTML}**`;

  if (size < config.header.max) {
    size = config.header.max;
  }

  for(let i = 0; i < size; i++) {
    hPrefix += '#';
  }

  return `${_.repeat('\n', beforeLines)}${hPrefix} ${innerHTML}${_.repeat('\n', afterLines)}`;
}

module.exports = function(htmlString, config = {}) {
  _.defaults(config, defaultConfig);

  let markdown = toMarkdown(htmlString, {
    gfm: true,
    converters: [
      {
        filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        replacement: function(innerHTML, node) {
          let innerFontSize = _.last(_.compact(_.map(node.children, (child) => {
            return parseInt(child.style.fontSize, 10);
          })));

          if (!_.isUndefined(innerFontSize) && innerFontSize <= config.base_font_size && _.words(removeMarkdown(innerHTML)).length > config.header.max_length) {
            return moveSpacesOut(_.trim(innerHTML), '**');
          }

          return cleanHeader(node.tagName.charAt(1), innerHTML, config);
        }
      },
      {
        filter: ['code', 'pre'],
        replacement: function(content, node) {
          content = content.trim();

          // already had code in it...return early
          if (/(^```\n((?!\n```$)[\s\S])*\n```$)|(`[^`\n\r]*`)/gm.test(content)) {
            return content;
          }

          if (/\r|\n/.test(content)) {
            let language = node.className.match(/.*language-(\S+).*/);
            language = language ? _.last(language) : '';
            language = language === 'generic' ? '' : language;

            return `\n\`\`\`${language}\n${content}\n\`\`\`\n`;
          }
          
          return `\`${content}\``;
          return content;
        },
      },
      {
        filter: ['span', 'div'],
        replacement: function(content, node) {
          if (parseInt(node.style.fontSize, 10) > config.base_font_size) {
            return cleanHeader(config.header.default, content, config);
          }

          if (node.style.fontWeight > 400) {
            return moveSpacesOut(content, '**');
          }

          return content;
        }
      },
      {
        filter: ['bold', 'strong'],
        replacement: function(content, node) {
          return moveSpacesOut(content, '**');
        }
      },
      {
        filter: ['i', 'em'],
        replacement: function(content, node) {
          return moveSpacesOut(content, '*');
        }
      },
      {
        filter: ['strike', 's', 'del'],
        replacement: function(content, node) {
          return moveSpacesOut(content, '~~');
        }
      }
    ]
  });

  return markdown;
}
