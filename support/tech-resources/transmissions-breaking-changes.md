---
title: "Upcoming Breaking Changes to the Transmissions API - Communications Log"
description: "UPDATE: September 2020. On January 12, 2019, single-recipient transmissions and inline content validation will become asynchronous."
---

The [Transmissions API](https://developers.sparkpost.com/api/transmissions/) is among our most heavily used endpoints. We know how critical it is to how our customers integrate email into their applications. That’s why we’re continuously looking for ways to further strengthen its reliability, maximize its performance, and improve the developer experience. It’s also why we’re very careful about making any changes that might impact how our customers use the Transmissions API in their production code.

Usually, these objectives are aligned, but there are times when moving the API forward require an unavoidable breaking change. We will be deploying one of those changes. Read on for the details.

## Update: September X, 2020

As we have continued to make improvements to SparkPost infrastructure, we are moving into the next stage of these changes.  In 2019, this breaking change was put into effect for many of our enterprise customers in US West, and all customers in the EU region.  As we finish 2020 and moving into 2021, we will be completing these changes for the rest of the customers in the US West region.

## Summary of Changes to the Transmissions API

We will be making two significant changes related to how the Transmissions API handles errors:

* Single recipient message generation will become an asynchronous, rather than synchronous, operation.

* All inline content syntax validation will become asynchronous. This will affect both single and multi-recipient transmissions.

These changes will only affect error cases. They will not change the result of any successful (HTTP `200` response) API request. Meaning, if you send a message that was pre-validated and properly formatted (no syntax errors), it will inject without much difference. However, if there is a problem with template syntax or substitution data, these changes mean the Transmissions API will return a 200 response, and then a subsequent “Generation Failure” webhook event and message event.

See below for additional details.

## Making Single-Recipient Transmissions Asynchronous

SparkPost will no longer perform synchronous template validation and message generation on single recipient transmissions.

This means that the Transmissions API will no longer return an HTTP response of `4xx` if there is a problem with the template syntax or substitution data.

Instead, the API will return a `200` response, and then a subsequent “Generation Failure” [webhook event](https://www.sparkpost.com/docs/tech-resources/webhook-event-reference/) that will provide details on the failure. These events will be available via [webhooks](https://www.sparkpost.com/docs/tech-resources/webhook-event-reference/), the [Message Events API](https://www.sparkpost.com/docs/tech-resources/webhook-event-reference/), and as [Message Events in the SparkPost app](https://app.sparkpost.com/reports/message-events)([EU](https://app.eu.sparkpost.com/reports/message-events)). This behavior for single recipient transmissions will be the same as the current behavior for multi-recipient transmissions.

## Making Inline Content Syntax Validation Asynchronous

The second change to the Transmissions API endpoint is that inline content syntax validation will no longer be performed synchronously.

For both single and multi-recipient transmissions, the syntax validation will be done asynchronously, with an HTTP response of `4xx` no longer returned for syntax error on inline content.

Instead, the API will return a `200` response, and then a subsequent "Generation Failure" [webhook event](https://www.sparkpost.com/docs/tech-resources/webhook-event-reference/) that will provide details on the failure. It is recommended that developers utilize the [preview endpoint of the Templates API](https://developers.sparkpost.com/api/templates/#templates-post-preview-a-template) before injecting with an inline content.

## Removal of Description Field

Although we are reviewing customer needs for extended error codes, HTTP error response bodies will be updated by removing the `description` field, and moving the current `description` responses to the `message` field. This is to provide a simpler message body and to return the relevant data to our customers for our HTTP error responses.  For example, if no "content.from" field is found, the current errors message is:

```
{
    "errors": [
        {
            "message": "required field is missing",
            "description": "content.from is a required field",
            "code": "1400"
        }
    ]
}
```

After this change, the message will be returned as:
```
{
    "errors": [
        {
            "message": "content.from is a required field",
            "code": "1400"
        }
    ]
}
```

## Will My 3rd Party Apps Still Work?

In the vast majority of cases, 3rd party apps integrated with SparkPost will continue to function as before. If you are unsure, please check with your 3rd party provider for details and direct them to this page. For instance, the SparkPost WordPress plugin will continue to function with a slight change in behaviour. Before the change, the plugin produces a `4xx` error for a syntax error on inline content. After the change, those transmissions with syntax errors will succeed and a "Generation Failure" event will be emitted instead.

## Chronological Communications Log

This fall, we sent out a series of emails announcing our intention to implement these breaking changes. We’ve listened to and understand your concerns. While we believe these changes are necessary to improve the quality and reliability of our service, we value your feedback and have adjusted our course to address these issues.

**September X, 2020**:

Update to this document to outline these changes will be applied to remaining customers in USW.  Email with subject line "XX" was sent to all impacted premium and enterprise customers.

**September 18, 2018**:

Email with subject line “Operational Alert - Transmissions API Asynchronous Changes” was sent out to all SparkPost accounts regarding three upcoming changes related to error handling:


* Making single recipient template validation and message generation error asynchronous.
* Making all inline content syntax validation asynchronous, impacting both single and multi-recipient transmissions.
* Deprecating extended error codes.

This email stated that the changes would be put into effect, **November 17, 2018**.


> Customers shared concerns, requesting more time outside of the sixty-day window, in order to avoid impacting any major holiday email campaigns, as well as end-of-year code freezes.

----

**October 2 & 3, 2018**:

A second round of emails was sent out to SparkPost accounts, with subject line “Operational Alert - Postponing Transmission API Async Changes”, pushing the date the changes would go into effect back from the original November 17, 2018, to **January 12, 2019**. This decision was made to provide more time to implement any code changes (if needed), and to accommodate especially sensitive requirements, such as end-of-year code freezes and potential impact to holiday email campaigns.

> Customers shared additional concerns surrounding error handling and our plans to deprecate the extended error codes.

----

**November 7, 2018**
Decision made to hold off on deprecating extended error codes until, at least May 2019. The following two asynchronous changes will still be put into effect on **January 12, 2019**:

* Making single recipient template validation and message generation error asynchronous.
* Making all inline content syntax validation asynchronous, impacting both single and multi-recipient transmissions.
