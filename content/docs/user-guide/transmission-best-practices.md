---
lastUpdated: "02/08/2020"
title: "Transmission Best Practices"
description: "This is a guide to best practices for sending transmissions and monitoring the results for errors and is intended for a technical audience Multiple Recipient Transmissions Generally when sending promotional mailings to a large number of recipients it makes sense to send multi recipient transmissions to maximize performance For best..."
---

This is a guide to best practices for sending transmissions and monitoring the results for errors. It is intended for a technical audience. 

## Multiple Recipient Transmissions

Generally, when sending promotional mailings to a large number of recipients, it makes sense to send multi-recipient transmissions to maximize performance. For best results, each transmission request should contain no more than 10,000 recipients, and in some cases, smaller transmissions (like 2000 recipients) may be more efficient if large amounts of unique personalization are being done on unique messages.

## Understanding Failure Scenarios & Monitoring for Errors

In nearly all cases, your API request will receive a response that contains a clear description of the results. A 200 OK message indicates a successful call, but you should inspect the response output for “errors” and “results” like this example:

```json
{
  "errors": [
    {
      "message": "transmission created, but with validation errors",
      "description": "message submitted for generation successfully",
      "code": "2000"
    }
  ],
  "results": {
    "rcpt_to_errors": [
      {
        "message": "invalid data format/type",
        "description": "invalid recipient address.email: normdexample.com",
        "code": "1300"
      }
    ]
  }
}
```

**Synchronous Failures: 500 or 503 Status Codes**

A 500  or 503 error (synchronous failure) can occur for different reasons, but the key point is that
our service did not accept responsibility for the request (see this article for more on our extended error codes).

**Timeouts: 504 Gateway Timeout**

If you receive a 504 Gateway Timeout, in most cases, the transmission was not successful. However, in some rare instances, the 504 may be returned even though the transmission was successful.

If you receive a 504 after making a transmission request, you can inspect event data from web hooks/message events API for that transmission, and if there is no evidence of the transmission after 1 hour, retry the transmission.

For other network timeouts where it is unclear if your request reached the server, you can also monitor and retry.

**Monitoring for Errors**

There are two ways to track transmission errors:

* The response to your original transmission request.
* Data sent to your webhook endpoint (more information on our webhooks can be found here). 

## Tracking Individual Transmissions

Individual, unique transmissions will have a random number assigned to them by our service automatically. This field appears in all message event types as `transmission_id`. Alternatively, you can add a unique key:value pair to the transmission's metadata that will appear in webhook event data.

The metadata element in the request:

```json
"metadata": {
  "batch_number": "batch_1001"
}
```
Can be found in the `rcpt_meta` element of the webhook event data:

```json
{
  "rcpt_meta": {
    "transmitter_code": "bam bam",
    "place": "Bedrock",
    "batch_number": "batch_1001"
  }
}
```

With unique identifiers appearing in the rcpt_meta, resulting from metadata included in your transmission call, you can easily search for each transmission in the webhook events.

You can also parse the server response or the webhook event data for error messages:

```json
{
  "errors": [
    {
      "message": "transmission created, but with validation errors",
      "description": "message submitted for generation successfully",
      "code": "2000"
    }
  ],
  "results": {
    "rcpt_to_errors": [
      {
        "message": "invalid data format/type",
        "description": "invalid recipient address.email: normdexample.com",
        "code": "1300"
      }
    ],
    "total_rejected_recipients": 1,
    "total_accepted_recipients": 1,
    "id": "48189673721435781"
  }
}
```

## Retrying Transmissions

Generally, you should retry a transmission when:

* You receive a 500 or 503 status, with one of the error codes described here.
* You receive a 504 gateway timeout, and after waiting an hour, have seen no evidence that the transmission succeeded.
