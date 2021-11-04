---
lastUpdated: "04/08/2021"
title: "Best Practices for Managing Webhook Data Streams"
description: "Spark Post and Spark Post Enterprise provide data streams of raw event data via webhooks There are several points of consideration to take into account in order to ensure you correctly receive the event data This article details how our webhooks function so you can successfully set up your endpoint..."
---

SparkPost provides data streams of raw event data via webhooks. There are several points of consideration to take into account in order to ensure you correctly receive the event data. This article details how our webhooks function so you can successfully set up your endpoint to consume streamed event data. For more details on authentication and security see [Webhook Authentication]( https://www.sparkpost.com/docs/tech-resources/webhook-authentication/)

# Webhook Batch Sizes and Projections

Raw event data is streamed in individual batches that may vary from 1 to 350 or more events based on your volume and peak sending rate. Batches are posted at least several times every 30 seconds to 1 minute. Batches may come from multiple servers, so the intervals of data posting may be irregular.

Generally speaking, four events are recorded for each message: injection, delivery, open and click (more are possible depending on if a given user clicks or opens a message multiple times and if the message is not delivered on the first attempt). For projecting how many events you expect during any given time period, we suggest a rough multiplier of 2.5 of your outgoing message volume. For example, if you inject 100,000 messages in an hour, you can expect approximately 250,000 events during that period. (The exact number will vary based on whether or not engagement tracking is enabled, engagement rates, delivery rates, and so forth).

 # Webhook Batch Retry Logic

* The webhook service will reattempt to post batches for which it receives a non 2xx response code.
* A timeout for any particular batch posting attempt will occur after **10 seconds** if the endpoint does not successfully accept a given batch.
* The retry logic for the posting of batches gradually increases in a logarithmic fashion and will cease retrying altogether after 8 hours. This means you can potentially lose event data if your webhook consumer is completely down for 8 hours or longer. 12 total attempts will be made to POST the webhook batch to the webhook endpoint (the initial attempt + 11 retries).

# Helpful Tips on Webhook Consumers for not losing data

*   **DO NOT** syncronously validate the data or load the data into your database.  You may find that sometimes a required field is missing or some other unexpected condition that may require a code change on your side. We only retry for up to 8 hours so you will be at risk of losing data. Store the raw data to disk or S3 and then asyncronously process it. Defer any processing until after the acceptance response to the webhooks system is made (i.e., after the 200 OK response). This also applies to records within a batch - if you do not return a 200 for the batch we will continue to resend even if you processed and stored part of the batch.
*   Two important data elements exist to help you keep track of webhook batches and individual events: 
    * `X-Messagesystems-Batch-Id` - a header in each posting (batch) that uniquely identifies a given batch of data. If you get a duplicate batch, return a 200 response so SparkPost will not keep retrying.
    * `event_id` - a data element within each set of event data that uniquely identifies a given event.  The format of this field is not consistent across events -- for some event types this may be a large integer, while for others it may be a UUID. 
*   It is recommended that you do not set a maximum batch size your endpoint will accept, or that if you do, that it is not excessively small, in order to prevent truncation of data on any attempted batch.
*   From time to time as SparkPost releases new features additional fields or event types will be added to webhooks payloads. Webhooks consumers should be flexible enough to accept additive changes to the payload. Changes to the structure of the payload, removal of fields or events, and changes to datatypes are considered breaking changes and SparkPost will provide reasonable notice to customers.
*   Utilize separate processing & storage for different [Event Types](https://www.sparkpost.com/docs/tech-resources/webhook-event-reference/#event-types).  Message structure & data types are consistent within a given Event Type, but not between Event Types. 

# Monitoring Webhooks

If you have issues with your webhooks, it would be wise to monitor them either on your own endpoint's application logs, or via the webhook or batch-status API, which is detailed [here](https://developers.sparkpost.com/api/webhooks#webhooks-batch-status-get). Use your monitoring tool of choice to alert your technical staff of an issue such as when attempts for a batch exceeds 2.  
You can also view the endpoint status in the Webhhook Batch Status tab in the [app](https://app.sparkpost.com/webhooks/) ([EU](https://app.eu.sparkpost.com/webhooks/)). This will help inform you if there is a problem with the webhooks so it can be remedied before batches hit the 8 hour limit as described in the retry logic above.  

Note that batch status (via both app and the API) does not report batches that succeeded first time. It reports only failed batches and batches that initially failed but later succeeded. The batch status is kept for a 24 hours.

## Disaster Recovery Scenarios

SparkPost will retry sending data for 8 hours.  This is usually sufficient time for customers to detect a problem with their webhook consumer application and fix it.  If data is very important to your business we recommend following the monitoring guidelines above and implementing production alerting and on-call procedures to ensure you catch and fix issues quickly before webhook data expires. In the unfortunate event that you do not recover in a timeley manner you may end up with gaps in your data. These are some general guidelines to use to recover from this scenario.
* Once you have your webhook consumer back up and running and any current batches have been retried successfully you need to determine the approximate start and end gaps in your data.
* Use the [Events API](https://developers.sparkpost.com/api/events/) to download the minutes, hours, or days when your webhook consumer was down.
* In order to avoid duplicate data getting into your reporting database, use the the unique `event_id` to dedup data before adding into your data pipeline and/or reporting database.  Alternatively, depending on how your reporting data is partitioned, delete any partial periods and replace with the full data set downloaded using the Events API.
If you have more detailed questions please submit a support ticket or reach out to your Technical Account Manager.
