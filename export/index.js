const Promise = require('bluebird');
const fs = require('fs');
const _ = require('lodash');
const rimraf = require('rimraf');
const path = require('path');
const removeMarkdown = require('remove-markdown');
const toMarkdown = require('./utils/to-markdown');
const localizeMedia = require('./utils/localize-media');
const getDeskData = require('./utils/get-desk-data');

const destination = path.join(__dirname, '../articles');
const runLocal = _.last(process.argv) === '--local';

rimraf(destination, () => {
  fs.mkdirSync(destination);

  if (runLocal) {
    let topics = JSON.parse(fs.readFileSync('local.json', 'utf8'));
    downloadAllTopics(topics);
  }
  else {
    getDeskData().then(downloadAllTopics);
  }
});

function downloadAllTopics(topics) {
  const topicPromises = _.map(topics, downloadTopic);
  const numberOfTopics = _.keys(topics).length;
  let completedTopics = 0;

  Promise.each(topicPromises, (topic) => {
    completedTopics++;
    console.log(`Completed "${topic.name}" | ${completedTopics} of ${numberOfTopics}`)

    if (completedTopics === numberOfTopics) {
      console.log(`Downloaded ${numberOfTopics} topics`)
    }
  });
}


function downloadTopic(topic) {
  const topicSlug = _.kebabCase(topic.name);
  const topicDir = `${destination}/${topicSlug}`;
  let processArticlePromises = [];
  console.log(`Starting ${topic.name}`);

  if (!fs.existsSync(topicDir)) {
    fs.mkdirSync(topicDir);
    fs.mkdirSync(`${topicDir}/media`);
    fs.writeFileSync(`${topicDir}/index.md`, `---\nname: "${topic.name}"\ndesk_id: ${topic.id}\ndescription: "${topic.description}"\n---\n`)
  }
  _.each(topic.articles, (article) => {
    let markdown = toMarkdown(article.body);
    const articleSlug = _.kebabCase(article.subject);
    const articleFile = `${topicDir}/${articleSlug}.md`;
    const articleMediaDir = `${topicDir}/media/${articleSlug}`;

    processArticlePromises.push(localizeMedia(markdown, {
      storageDir: articleMediaDir,
      mediaPath: path.relative(topicDir, articleMediaDir),
      baseUrl: 'https://support.sparkpost.com/',
    }).then((markdown) => {
      console.log(`Converted "${topic.name} > ${article.subject}"`);
      markdown = `---\ntitle: "${article.subject}"\nredirect_from: "${article.public_url}"\ndescription: "${_.slice(_.words(removeMarkdown(markdown)), 0, 50).join(' ')}..."\n---\n\n${markdown}`;

      fs.writeFileSync(articleFile, markdown);
    }));
  });

  return Promise.all(processArticlePromises).then(() => topic);
}
