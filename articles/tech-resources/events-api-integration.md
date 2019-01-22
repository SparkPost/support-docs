---
title: "Getting Started with the Events Search API"
description: "How to integration with the Events API"
---
The SparkPost Events Search API is a new tool providing robust querying capabilities on top of your SparkPost event data. The API provides the capability to debug deliverability issues in mail streams quickly and with granular detail, view the lifecycle of individual email messages, and sync your SparkPost data out to external sources. In this article, we’ll cover how you can get started quickly using the SparkPost Events Search API, some tips and tricks for getting the most out of your Events Search API queries, and a helpful guide for those looking to migrate from the Message Events API to the Events Search API. 

## Prerequisites
Before getting started with the Events Search API, you should first make sure that you have an API key with the “Events Search: Read-Only” grant. This will authorize your integration to access the Events Search API. If you’re not sure if your API key has this grant, log into your SparkPost account and navigate to the Settings > API Keys page.

If you are an existing user of the Message Events API, the API key used for accessing the that API will also work with the Events Search API, so you will not have to update the API keys used in your integration.

Finally, be sure to pull up the API documentation for the Events Search API here [https://developers.sparkpost.com/api/events/](https://developers.sparkpost.com/api/events/), so you can refer to it during this tutorial, and for later reference!

## Integration Best Practices



### Filtering and Keyword Searching

### Pagination
To start your integration, you’ll want to make sure that the code knows how to use the Events Search API pagination, so that queries returning more results than will fit in one response can still access all of the search hits. This means inspecting the response from the Events Search API for the `links` object. If the `links` object isn’t there, then we’re done! If the `links` object is present, then more results are available for retrieval, and additional pages can be requested using the url fragment from the links.next key.

```
return request.get(options)
    .then((res) => {
      const nextPage = res.links.next;
      seenEvents += res.results.length

      console.log(`Retrieved ${seenEvents}/${res.total_count} results...`);

      if (nextPage) {
        console.log('Still more results, retrieving next page...');
        return wait(5000).then(() => retrieveEventsData(`${hostname}${nextPage}`));
      } else {
        console.log('End of results, exiting.');
      }
    })
```
