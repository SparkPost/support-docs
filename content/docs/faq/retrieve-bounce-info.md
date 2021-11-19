---
lastUpdated: "02/08/2020"
title: "How Do I Retrieve Bounce Info from SparkPost?"
description: "Spark Post provides two options for pulling bounce info from Spark Post a push mechanism and a pull mechanism This article will explain both solutions in detail so that you may choose the one most appropriate to your use case and expertise Push Mechanism Webhooks The push mechanism that Spark..."
---

SparkPost provides two options for pulling bounce info from SparkPost - a push mechanism, and a pull mechanism. This article will explain both solutions in detail, so that you may choose the one most appropriate to your use case and expertise.

### Push Mechanism - Webhooks

The push mechanism that SparkPost has for providing message event data is called "webhooks." Webhooks provide message event data to an HTTP endpoint in JSON format. Webhook setup can be done via the Webhooks API, or within the app, under **Configuration** > **Webhooks**. Creation of a webhook only asks for a few configuration paramaters:

* Name of the webhook
* Target URL
* Type of Authentication (None, Basic Auth and OAuth2 are available options 

Your webhook will need to specify which types of events should be pushed to your endpoint. [This article](https://www.sparkpost.com/docs/tech-resources/webhook-event-reference/) illustrates the available event types, their JSON keys for use with the Webhooks API, and also provides all *key:value* pairs that will appear for each event type in the posted payload. In the app, the question marks next to all of the options will detail the definitions of the events for you. There will likely be some events that are not applicable to you, so add and remove event types to best suit your needs.

Once you set up a webhook, you should click the "test" button in the app (or the "validate" call in the Webhooks API) and then use the option to post an example batch to your endpoint. After a successful test, the webhook will then start to stream production event data to your endpoint from that point forward. If a given connection is not successful in delivering a payload to the endpoint, an error message will be displayed in the app, detailing the time the last successful batch was posted. Please note that the error message will remain in the app if any previous posted batch ever experiences a problem, even though the webhook may be accepting posted payloads of data. The time of last batch successful will likely be very recent if this is the case.

Additional information about webhook best practices and retry logic should be read prior to setting up a webhook endpoint. That article can be found [here](https://www.sparkpost.com/docs/tech-resources/managing-webhook-data/).

### Pull Mechanism - Events API

The pull method available for you to retrieve bounce info is the Events API, and to a more limited extent, the Message Events section nested beneath the reports tab in the app. However, this section in the app is meant to be a quick search only. This option is helpful in situations where you want to track down specific message dispositions or user actions by a single contact.

The Events API, however, contains many more filtering options for obtaining or searching for message events. More information about what searchable filters you can use with a Events API call, please see our documentation on that [here](https://developers.sparkpost.com/api/events/).

It is important to note that there are minor differences present between the data posted by a webhook and information pulled from the  Events API, though both sets of event data are otherwise exactly the same. More detailed information on the minor differences are detailed in [this article](https://www.sparkpost.com/docs/user-guide/comparing-data/).

**Note**: Message Events data is only stored for a maximum of 10 days in a rolling window. If you wish to pull data from the Events API or app, only the last 10 days will be displayed.

### Which Bounce Events and Bounce Classes Should I Review for List Hygiene?

It is important to also know which bounce and event types you should suppress from further mailings and to clean your lists. The following are a list of key value pairs for which you should take suppressive/removal action against your lists when you spot them.

* “Bounce” events that are hard bounces - “bounce_class” = 10, 30, 90

   **Note**: The three bounce classes above are **permanent** failures and should **not** be retried. [Link](https://www.sparkpost.com/docs/deliverability/bounce-classification-codes/) to all bounce classifications
* “Out of Band” events that are hard bounces - “bounce_class” = 10, 30, 90​

   ​**Note**: The three bounce classes above are **permanent** failures and should **not** be retried.
* “Spam Complaints” events
* "Link Unsubscribe" and "List Unsubscribe" events
