---
lastUpdated: "02/08/2020"
title: "Preparing For Asynchronous Suppressions"
description: "How to prepare your code for upcoming changes to suppression list checking in the Transmissions API endpoint and SMTP"
---

This article describes how to tell if you are affected by the upcoming transmissions API endpoint change for asynchronous suppressions [described here](https://www.sparkpost.com/blog/upcoming-api-transmission-endpoint-changes/) and also how to prepare. 

## What Is Changing?

The [change announcement here](https://www.sparkpost.com/blog/upcoming-api-transmission-endpoint-changes/) has all the details including timing. Here is a short recap.

1. The Transmissions API endpoint will no longer return `400` when you send to a single recipient who appears on a suppression list.

2. The [Webhooks](https://developers.sparkpost.com/api/webhooks.html) and [Message Events](https://developers.sparkpost.com/api/message-events.html) services will no longer produce `policy_rejection` or `generation_rejection` events to indicate a suppression has occurred. Instead, an `injection` and a `bounce` event will be emitted for each suppressed message.

3. The new `bounce` event will include the following fields:
     - **bounce_class**: `25`
     - **error_code**: `554`
     - **reason**:
         - `Recipient address was suppressed due to customer policy`
         - OR
         - `Recipient address was suppressed due to system policy`

## Am I Affected?

You may be affected if:
 - You have code that makes single-recipient API calls to `/api/v1/transmissions` and specifically handles the `400` status _and_ either of the suppression error messages.
 - You have code that processes `generation_rejection` or `policy_rejection` events from either [Webhooks](https://developers.sparkpost.com/api/webhooks.html) or [Message Events](https://developers.sparkpost.com/api/webhooks.html).

The proportion of customers who fall into these categories is likely extremely low and, after this change, the main detectable difference for most API users will be a slightly lower level of API call errors.

## How Do I Prepare?

Note: While keeping your SparkPost client library up-to-date is always a good idea, updating will not negate this change since it affects how your code and 3rd party apps _interpret_ the information that SparkPost provides.

In most cases, your existing code will continue to work as before. If you fall into one of the categories outlined above, you should take the following actions:
 - If you process `generation_rejection` or `policy_rejection` events to detect suppressions, begin also processing `bounce` events as specified above.
 - If you detect suppressions in your single-recipient transmissions calls by checking for `400` status and a suppression error message, *you app will continue to function* but your suppression detection code will become redundant. If you need to detect suppressions, use the `bounce` event specified above.

## Will My 3rd Party Apps Still Work?
In the vast majority of cases, 3rd party apps integrated with SparkPost will continue to function as before. If you are unsure, please check with your 3rd party provider for details and direct them to this page and our [announcement of this change](https://www.sparkpost.com/blog/upcoming-api-transmission-endpoint-changes/).

For instance, the [SparkPost WordPress plugin](https://wordpress.org/plugins/sparkpost/) will continue to function with a slight change in behaviour. Before the change, the plugin produces an error when sending a single-recipient transmission to a suppressed address. After the change, those single-recipient, suppressed transmissions will succeed and a `bounce` event will be emitted instead.

