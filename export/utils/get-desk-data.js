const Promise = require('bluebird');
const _ = require('lodash');
const desk = require('./desk')('https://support.sparkpost.com/', {
  username: process.env.DESK_USERNAME,
  password: process.env.DESK_PASSWORD
});
const topicFilter = (topic) => !!topic;
const articleFilter = (article) => !!article;

let articleIdsForBrand = [];

module.exports = getDeskData;

function getDeskData() {
  return getAllArticlesByBrand()
    .then(() => {
      console.log('getting topics...');
      return getAllFromDesk('/api/v2/topics')
    })
    .then(combineEntriesFromDesk)
    .then((topics) => {
      return _.filter(topics, topicFilter);
    })
    .then(getAllArticlesByTopic);
}

function getAllArticlesByBrand() {
  console.log('getting article IDs for SparkPost brand...');
  return getAllFromDesk('/api/v2/brands/7411/articles')
    .then(combineEntriesFromDesk)
    .then((articles) => {
      articleIdsForBrand = _.map(articles, 'id')
      console.log(`${articleIdsForBrand.length} articles will be exported`);
    })
}

function getAllArticlesByTopic(topics) {
  const topicStorage = {};
  let fetchArticlePromises = [];
  console.log('getting articles...');

  _.each(topics, (topic) => {
    let topicId = getId('topics', topic._links.self.href);

    fetchArticlePromises.push(getAllFromDesk(topic._links.articles.href).then(combineEntriesFromDesk)
      .then((articles) => {
        if (articles.length !== 0) {
          articles = _.filter(articles, articleFilter);
          articles = _.filter(articles, (article) => _.includes(articleIdsForBrand, article.id));

          topic.articles = _.map(articles, (article) => {
            return _.pick(article, ['subject', 'keywords', 'created_at', 'updated_at', 'body', 'rating', 'rating_count', 'rating_score', 'public_url', 'internal_notes']);
          });

          topicStorage[topicId] = topic;

          console.log(`Articles retrieved for "${topic.name}"`);
        }
      }));
  });

  return Promise.all(fetchArticlePromises).then(() => {
    return topicStorage;
  });
}

function getId(type, str) {
  return _.last(str.match(new RegExp(`\S*\/${type}\/([0-9]+)\S*`)));
}

function getAllFromDesk(path, limitPages = -1) {
  let queue = [];
  const per_page = 100;

  const firstPromise = desk.get(path, { params: { per_page } }).then((results) => {
    const totalEntries = results.data.total_entries;
    const numberOfPages =  Math.ceil(totalEntries/per_page);

    // start at 2 since we already have the first one
    for (var page = 2; page <= (limitPages < numberOfPages && limitPages !== -1 ? limitPages : numberOfPages); page++) {
      queue.push(desk.get(path, { params: { per_page, page } }));
    }

    return results;
  });


  queue.push(firstPromise);


  return new Promise((resolve, reject) => {
    firstPromise
      .then(() => {
        resolve(queue);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function combineEntriesFromDesk(promises) {
  return Promise.all(promises).then((results) => {
    let entries = [];

    _.each(results, (result) => {
      entries = _.concat(entries, _.get(result, 'data._embedded.entries') || []);
    });

    return entries;
  });
}
