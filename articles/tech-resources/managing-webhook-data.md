---
title: "Best Practices for Managing Webhook Data Streams"
description: "Spark Post and Spark Post Enterprise provide data streams of raw event data via webhooks There are several points of consideration to take into account in order to ensure you correctly receive the event data This article details how our webhooks function so you can successfully set up your endpoint..."
---

SparkPost and SparkPost Enterprise provide data streams of raw event data via webhooks. There are several points of consideration to take into account in order to ensure you correctly receive the event data. This article details how our webhooks function so you can successfully set up your endpoint to consume streamed event data.

## Webhook Batch Sizes and Projections

Raw event data is streamed in individual batches that may vary from 1 to 1000 or more events based on your volume and peak sending rate. Batches are posted at least several times every 30 seconds to 1 minute. Batches may come from multiple servers, so the intervals of data posting may be irregular.

Generally speaking, four events are recorded for each message: injection, delivery, open and click (more are possible depending on if a given user clicks or opens a message multiple times and if the message is not delivered on the first attempt). For projecting how many events you expect during any given time period, we suggest a rough multiplier of 2.5 of your outgoing message volume. For example, if you inject 100,000 messages in an hour, you can expect approximately 250,000 events during that period. (The exact number will vary based on whether or not engagement tracking is enabled, engagement rates, delivery rates, and so forth).

 ## Webhook Batch Retry Logic

* The webhook service will reattempt to post patches for which it receives a non 2xx response code.
* A timeout for any particular batch posting attempt will occur after **10 seconds** if the endpoint does not successfully accept a given batch.
* The retry logic for the posting of batches gradually increases in a logarithmic fashion and will cease retrying altogether after 8 hours.  (This means you can potentially lose event data if your webhook consumer is completely down for 8 hours or longer.)

## Helpful Tips on Webhook Consumers

*   Consumers of webhook data streams should defer any processing until after the acceptance response to the webhooks system is made (i.e., after the 200 OK response). 
*   Two important data elements exist to help you keep track of webhook batches and individual events:
    * `X-Messagesystems-Batch-Id` - a header in each posting (batch) that uniquely identifies a given batch of data
    * `event_id` - a data element within each set of event data that uniquely identifies a given event.  The format of this field is not consistent across events -- for some event types this may be a large integer, while for others it may be a UUID
*   It is recommended that you do not set a maximum batch size your endpoint will accept, or that if you do, that it is not excessively small, in order to prevent truncation of data on any attempted batch.
*   Utilize separate processing & storage for different [Event Types](https://www.sparkpost.com/docs/tech-resources/webhook-event-reference/#event-types).  Message structure & data types are consistent within a given Event Type, but not between Event Types.

## ​Monitoring Webhooks

If you have issues with your webhooks, it would be wise to monitor them either on your endpoint, or via the batch-status API, which is detailed [here](https://developers.sparkpost.com/api/webhooks#webhooks-batch-status-get). This will help inform you if there is a problem with the webhooks so it can be remedied before batches hit the 8 hour limit as described in the retry logic above.
