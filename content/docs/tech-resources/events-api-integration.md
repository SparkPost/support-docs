---
lastUpdated: "06/15/2021"
title: "Getting Started with the Events Search API"
description: "How to integrate with the Events API"
---
The SparkPost Events Search API is a new tool providing robust querying capabilities on top of your SparkPost event data. The API provides the capability to debug deliverability issues in mail streams quickly and with granular detail, view the lifecycle of individual email messages, and sync your SparkPost data out to external sources. In this article, we’ll cover how you can get started quickly using the SparkPost Events Search API, some tips and tricks for getting the most out of your Events Search API queries, and a helpful guide for those looking to migrate from the Message Events API to the Events Search API. 

## Prerequisites
Before getting started with the Events Search API, you should first make sure that you have an API key with the “Events Search: Read-Only” grant. This will authorize your integration to access the Events Search API. If you’re not sure if your API key has this grant, log into your SparkPost account and navigate to the Settings > API Keys page.

If you are an existing user of the Message Events API, the API key used for accessing the that API will also work with the Events Search API, so you will not have to update the API keys used in your integration.

Finally, be sure to pull up the API documentation for the Events Search API here [https://developers.sparkpost.com/api/events/](https://developers.sparkpost.com/api/events/), so you can refer to it during this tutorial, and for later reference!

## Integration Best Practices
In the following sections, we’ll cover some useful tips and tricks to keep in mind when building your Events Search API integration. To help, we’ve put together a small example of a script that uses the Events Search API to retrieve click data for a subset of email recipients, over the last 24 hours, which can be found at [https://github.com/SparkPost/events-search-example/blob/main/index.js](https://github.com/SparkPost/events-search-example/blob/main/index.js). In each of these sections, we’ll refer to the specific sections of the example to highlight each. While this example is written specifically in Node.js, the concepts apply to all integrations, regardless of what language it uses.

### Filtering and Keyword Searching
The most powerful feature of the Events Search API is the filtering and keyword searching capabilities. Using multiple filters to narrow down results lets the Events Search API act like a search engine for your SparkPost data, where everything important shows up on the first page. And if you’re not exactly sure what you’re looking for, using keyword search filters can help figure out what you are looking for, so further requests can be refined. Below, you can find a list of all filters, as well as the list of filters that support keyword searching.

Filtering Capability| Query Parameter| Keyword Search Support
:-----|:-----:|:-----:
Date/Time| `from` and `to`|
Event Types| `events`| 
Recipient Addresses| `recipients`| 
Friendly From Addresses| `from_addresses`| 
Bounce Classes| `bounce_classes`| 
Bounce/Failure/Rejection Reasons| `reasons`| X
Subaccounts| `subaccounts`| 
Transmission IDs| `transmissions`| 
Message IDs| `messages`| 
Campaign IDs| `campaigns`| X
Template IDs| `templates`| X
Recipient Domains| `recipient_domains`| X
Subject| `subjects`| X
Sending Domains| `sending_domains`| X
Sending IPs| `sending_ips`| 
IP Pools| `ip_pools`| X
AB Test IDs| `ab_tests`| X
AB Test Version| `ab_test_versions`|

### Pagination
To start your integration, you’ll want to make sure that the code knows how to use the Events Search API pagination, so that queries returning more results than will fit in one response can still access all of the search hits. This means inspecting the response from the Events Search API for the `links` object. If the `links` object is empty, then we’re done! If the `links` object is not empty, then more results are available for retrieval, and additional pages can be requested using the url fragment from the `links.next` key.

```javascript
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
### Error Handling
Another important piece of integration is proper error handling. This includes retrying any requests resulting in a HTTP 5xx that may infrequently occur, and any rate-limited requests. When encountering either of these scenarios, it’s always appropriate to retry the request exactly as it was originally sent. When encountering a rate-limited request, which is indicated by a HTTP 429 status code on the response, it is wise to add a small wait time before retrying the request.

```javascript
.catch((err) => {
      // Gracefully handle a rate limited request or unexpected error (retry)
      if (err.statusCode === 429 || err.statusCode >= 500) {
        console.log('429 or 5xx Request failure, retrying same request');
        return wait(10000).then(() => retrieveEventsData(`${url}`));
      }

      // We encountered something unexpected, so no more retries :(
      console.log('Unexpected error retrieving results, exiting.');
      console.log(err.message);
      console.log(`Last requested page was ${url}`);
    });
```

## Migrating from Message Events
To help you start migrating from the Message Events API to the Events Search API, let’s look at some of the differences between the two APIs that may require code changes to your integration.

### Keyword Searching
The most exciting difference between the Message Events and Events Search API is all the new querying/filtering capabilities available in Events Search. The new filters supported by the Events Search API that are unavailable in the Message Events API are listed below, and provide your integration with many more options for finding the exact data needed faster.

New Filter| New Query Parameter
:-----|:-----
Recipient Domains| `recipient_domains`
Subject| `subjects`
Sending Domains| `sending_domains`
Sending IPs| `sending_ips`
IP Pools|  `ip_pools`
AB Test IDs| `ab_tests`
AB Test Versions|  `ab_test_versions`

Additionally, the Events Search API supports another feature not available in the Message Events API, which is support for keyword searching. Keyword searching is a powerful tool for looking up multiple values for a given filter, without having to know the exact values. For example, to look up events relating to any Yahoo! email address, you may use the keyword searching capability of the `recipient_domains` query parameter to accomplish that without having to know all of the permutations of Yahoo! email domains.

With keyword searching, keywords are determined by natural breaks in phrases by
spaces, dashes, underscores, and in special cases, periods (e.g: `recipient_domains` and `sending_domains`).

Filter| Example Query String| Match Examples
:-----|:-----|:-----
Bounce/Failure/Rejection Reason| ?reasons=5.4.7| 5.4.7 Example text<br/>Example text 5.4.7
Campaign IDs| ?campaigns=friday| friday-20181214<br/>friday-20181207<br/>friday-2018-11-30
Template IDs| ?templates=email| my-first-email<br/>my-email<br/>my\_other\_email
Recipient Domains| ?recipient\_domains=yahoo| mail.yahoo.com<br/>yahoo.com<br/>yahoo.co<br/>yahoo.de<br/>yahoo.co.uk
Subject| ?subjects=Reset| Reset your password<br/>Your Password has been successfully Reset
Sending Domains| ?sending\_domains=example.com| info.example.com<br/>something.example.com<br/>example.com.uk<br/>example.com
IP Pools| ?ip\_pools=admin| admin\_notify<br/>admin\_other
AB Test IDs| ?ab\_tests=password| password-reset<br/>reset-password

### Changes to Filtering
Another difference between the two APIs is some changes to query parameter names for certain filters. Listed below are the Message Events API query parameters, and their Events Search API counterparts that are different from their predecessor. These changes make the query parameter naming convention consistent with other SparkPost APIs, while also more accurately describing the data actually being used for filtering.

Message Events query parameter| Events Search query parameter
:-----|:-----
campaign\_ids| campaigns
template\_ids| templates
friendly\_froms| from\_addresses
reason| reasons
message\_ids| messages

### Changes to Pagination
The pagination functionality of the Events Search API is different from the Message Events API. In the Message Events API, the use of the `page` and `per_page` query parameters allows for paging through the full results of a query (offset pagination). The Events Search API also supports this functionality, but instead uses a new `cursor` query parameter in conjunction with `per_page` (cursor based pagination). Offset pagination may seem like an easier way to page through results at first glance, but has two critical drawbacks. One is that it does not scale with very large datasets, and the second is that the “windowing” of results can be inaccurate when data is being added at a high rate and being queried in real-time. Slack has a very good write up about some of the reasons why they switched to cursor based paging for their APIs [(https://slack.engineering/evolving-api-pagination-at-slack-1c1f644f8e12)](https://slack.engineering/evolving-api-pagination-at-slack-1c1f644f8e12), and we have come to similar conclusions for the new Events Search API.

### Changes to Response Data
In the Events Search API, some fields in the data returned by the API have changed when compared to the data returned by Message Events. The largest of these changes is around the `rcpt_meta` field. In Message Events, the value for the `rcpt_meta` field was not always identical to what was provided in the call the the Transmissions API. Specifically, `rcpt_meta` submitted to the Transmissions API with arrays were manipulated in Message Events to turn the arrays into maps, with the array index as the key, and the value of the array at that index as the value of the key. In Events Search API, this is no longer the case, and will instead return an array, as it was passed in to the Transmission API.

Below is an example demonstrating the difference between the response of the two APIs, if you provided the Transmissions API with the rcpt_meta key containing the following data:

```json
{
  "rcpt_meta": {
    "example": ["foo", "bar"]
  }
}
```

<table>
<tr>
<th>
Message Events Example
</th>
<th>
Events Search Example
</th>
</tr>
<tr>
<td>
<pre><code>{
  "rcpt_meta": {
    "example": {
      "0": "foo"
      "1": "bar"
    }
  }
}</code></pre> 
</td>
<td>
<pre><code>{
  "rcpt_meta": {
    "example": ["foo", "bar"]
  }
}</code></pre>
</td>
</tr>
</table>

Additional data type changes include:
* `customer_id` field is an integer, instead of a string
* `subaccount_id` field, if it exists, is also now an integer, instead of a string
* `latitude` and `longitude`, and `zip` keys inside the `geo_ip` object for engagement events are now floating point numbers, instead of strings
* `tdate` field is removed, please use the `timestamp` field instead
* `injection_time` and the `timestamp` field formats now match, and are always returned in the UTC timezone
