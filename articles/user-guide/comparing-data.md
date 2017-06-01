---
title: "Comparing Webhook and Message Event Data"
description: "Webhooks are a way to push real time events from Spark Post or Spark Post Elite to a consumer of your choice If there is a problem receiving data at the consumer end the webhook will retry a number of times but eventually it will stop attempting to send the..."
---

Webhooks are a way to push real-time events from SparkPost or SparkPost Enterprise to a consumer of your choice. If there is a problem receiving data at the consumer end, the webhook will retry a number of times, but eventually, it will stop attempting to send the data. You can request the same event data, but using the API's message events endpoint.

There are a few differences between the format of data received in webhooks and the data retrieved using the API's message events endpoint. You should keep these differences in mind when deciding how to process the message event data.

## Unique Identifier

Each webhook batch contains a header that identifies the batch:
`X-Messagesystems-Batch-Id: 17340760-c541-11e5-8b8b-17d21ae2f599`.
The message events response does not include this header, but each event has a unique `event_id`. This is consistent across both webhooks and message events. 

## Timestamp

Webhook events include a timestamp with a Unix time format: `"timestamp": 1427736822`.

The API's message events timestamp is formatted as a YYYY-MM-DDThh:mm:ss.sTZD string:
`"timestamp": "2016-01-20T15:17:53.000+00:00"`.

You may need to transform that to Unix time, if you were originally storing the data that way.

 ## JSON

The structure of the JSON differs. In the webhook data, each event is nested within an object that describes the category of the event (track_event, gen_event, message_event, unsubscribe_event,relay_event) and an msys object. Here is one example:

### Webhook:

```json
{
  "msys": {
    "track_event": {
      "type": "click",
      "campaign_id": "Example Campaign Name",
    ...
    }
  }
}
```

### Message events:

```json
{
    "results": [
        {
          "type": "click",
          "campaign_id": "Example Campaign Name",
          ...
        }
    ]
}
```

Note that when parsing the JSON, message events data won't have the `msys` and `*_event` objects.
