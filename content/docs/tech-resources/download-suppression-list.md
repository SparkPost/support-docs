---
lastUpdated: "02/08/2020"
title:  How Do I Download My Entire Suppression List
description: How to retrieve an entire suppression list using cursor based paging.
---

SparkPost's Suppression API takes advantage of paging cursors to retrieve large datasets.  Using the `cursor` parameter allows users to download their entire suppression list if they wish or a full subset of their list if they wish to provide filter parameters like `domain` or `type`.

### How?
First things first, you'll need to add the `cursor` query parameter to your request with the special value `initial`.  This will retrieve the first page of results. When using the `cursor` query parameter each page retrieves 1,000 results by default. If you'd like, you can supply `per_page` as a query parameter with a value up to 10,000 to make fewer requests.
```sh
curl -H "Authorization: <keys>" https://api.sparkpost.com/api/v1/suppression-list/\?cursor\=initial&per_page=10000
```
Every response from the suppression API has 3 top level properties: `"results"`, `"links"`, and `"total_count"`.  When `cursor` is passed as a query parameter, the `"links"` array has references to the first (initial) page and the next page with appropriate cursors defined.  Using the URL in the "next" reference will allow the user to retrieve the second page and so forth.

### Seems Tedious
Doing this manually is obviously a lot of work if you have a large list.  However its pretty simple to do if you have a  script.  I wrote an example nodejs script to handle the paging automatically.  
```js
let request = require('request')
  , _ = require('lodash')
  , apiKey = '<keys>'
  , requestOptions = {
      json: true,
      gzip: true, 
      headers: {
        Authorization: apiKey
      }
    };

function getSuppressions (link, cb) {
  requestOptions.uri = `https://api.sparkpost.com${link}`;
  request(requestOptions, (err, res) => {
    cb(err || res.errors, res.body.results); // do things with the data
    let nextLink =  _.find(res.body.links, {rel: 'next'});// undefined if it doesn't exist
    if (nextLink && res.body.results.length > 0) {
      getSuppressions(nextLink.href, cb);
    }
  });
}

function outputResults (results) {
  _.forEach(results, (suppression)=> {
    console.log(JSON.stringify(suppression));
  });
}

getSuppressions(`/api/v1/suppression-list?cursor=initial&per_page=10000`, (err, results) => {
  if (err) {
    throw err;
  }
  outputResults(results);
});
```
It logs the suppressions to the console but they can easily be piped to a new line delimited json file.  To use it :
* Put the code above in `get-all-suppressions.js` replacing `<keys>` with your API key
* `npm i lodash request`
* `node get-all-suppressions >> suppressions.ndjson`
