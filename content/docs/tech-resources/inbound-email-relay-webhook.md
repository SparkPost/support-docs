---
lastUpdated: "02/03/2021"
title: "Enabling Inbound Email Relaying & Relay Webhooks"
description: "What is a Relay Webhook A Relay Webhook calls your consumer when a user sends an email to one of your domains Spark Post will receive an email sent to your Inbound Domain e g any local part your inbounddomain com format that email as a JSON payload and POST..."
---

## What is a Relay Webhook?

A Relay Webhook calls your consumer when a user sends an email to one of your domains. SparkPost will receive an email sent to your Inbound Domain (e.g., any.local.part@your.inbounddomain.com), format that email as a JSON payload, and POST it to your consumer. A Relay Webhook is not a mailbox; if you need a mailbox you should sign up for a service like gmail, yahoo, live, etc.

## What can I use a Relay Webhook for?

A relay webhook allows you to programmatically record and/or respond to inbound replies with greater efficiency. These are just a few of the use cases that you may have for setting up a relay webhook:

1. To record any replies to campaigns that occur (message body included) by streaming this data to your webhook endpoint. This allows you to search for customer replies in your database or CRM software later, and can potentially satisfy security/archival compliance guidelines your company has set.
1. Relay webhooks can be integrated with an application that can perform a number of routing actions or additional actions. For example, inbound messages can be further routed to appropriate personnel by using a matching expression against the subject line. Auto-responders are another popular integration for relay webhooks.
1. A relay webhook allows you to accept replies rather than using a "donotreply@" reply-to address in your mailings. This has the positive effect on the end recipient in that they feel they have a response mechanism to your email if they need one.

## Best Practices

Best practice recommendations for use of a relay webhook are simple and short. 

1. Choose a reply-to address that is clearly associated with your company and/or the sending domain you are using in your messages. If there is a large discrepancy between the two, it can potentially create some confusion for the end user, who may wonder if their reply is being routed to a different/wrong entity.
1. Including a reply-to address on a email that looks to be a real address (i.e. *not* "donotreply@") indicates that there will be at least an auto-response that will be generated against their reply, or better yet, that a human will read the reply. Do not set up a relay webhook, unless you are certain that end users replying do not expect action against their reply of some sort.

## Getting Started

Before you start you will need the following:

* A Relay Webhook consumer: This is code that you write and host. This is what will process inbound emails relayed through SparkPost. You will need to have this ready before you set up your Relay Webhook. For testing, you could use a service like requestbin.com (https://requestbin.com) to set up a temporary consumer.
* An API key with "Inbound Domains: Read/Write" and "Relay Webhooks: Read/Write" permissions. You're going to make some API calls, so you might want to download [Postman](https://www.postman.com) and get the free [SparkPost Postman collection](https://www.postman.com/run-collection/81ee1dd2790d7952b76a) to make this easier.

Once you have these, there are three steps to setting up your Relay Webhook:

* adding MX records for your Inbound Domain
* setting up an Inbound Domain in SparkPost
* setting up a Relay Webhook in SparkPost

**Note**: You *cannot* use a domain already and in use as a bounce domain (CNAME or MX verified) as an inbound domain. If the domain is not yet verified, an attempt to create the same domain as an inbound domain will be accepted. However, an attempt to create an inbound domain via the API when the domain is already CNAME or MX verified will yield a `409 conflict error` as a result:

```{
    "errors": [
        {
            "message": "resource conflict",
            "description": "A CNAME or MX verified sending domain with similar attributes already exists.",
            "code": "1602"
        }
    ]
}
```

## Add MX Records

DNS changes can take a while to propagate so you should do this first; your Inbound Domain and Relay Webhook won't work until SparkPost can find your new MX records. Every provider is slightly different in how you do this, but you will need to create 3 MX records with the following values (subsitute your domain name for “your.inbounddomain.com”) for a SparkPost Account, or 1 MX record for an Enterprise Account:

### SparkPost Account

| Name                   | Type | Data                  | Priority |
|:-----------------------|:-----|:----------------------|:---------|
| your.inbounddomain.com | MX   | rx1.sparkpostmail.com | 10       |
| your.inbounddomain.com | MX   | rx2.sparkpostmail.com | 10       |
| your.inbounddomain.com | MX   | rx3.sparkpostmail.com | 10       |

### SparkPost EU Account

| Name                   | Type | Data                     | Priority |
|:-----------------------|:-----|:-------------------------|:---------|
| your.inbounddomain.com | MX   | rx1.eu.sparkpostmail.com | 10       |
| your.inbounddomain.com | MX   | rx2.eu.sparkpostmail.com | 10       |
| your.inbounddomain.com | MX   | rx3.eu.sparkpostmail.com | 10       |

### Enterprise Account

| Name                   | Type | Data                  | Priority |
|:-----------------------|:-----|:----------------------|:---------|
| your.inbounddomain.com | MX   | <yourdomain>.mx.e.sparkpost.com | 10       |

You can check your MX record propagation [here](https://www.whatsmydns.net/#MX).

## Create an Inbound Domain

This is the domain that users will send email to. You can send a POST request to https:<span></span>//api.sparkpost.com/api/v1/inbound-domains or use our [Postman collection](https://www.postman.com/run-collection/81ee1dd2790d7952b76a) to create your [Inbound Domain](https://developers.sparkpost.com/api/inbound-domains.html). Make sure to set your API key as the Authorization header under the "headers" tab and to set your domain under the "body" tab.

## Create a Relay Webhook

Now that you have your InboundDomain set up, you can create your Relay Webhook by sending a POST request to https:<span></span>//api.sparkpost.com/api/v1/relay-webhooks. This step links your consumer with the Inbound Domain. If you are using Postman make sure to update the Authorization header and set the required name, target and match.domain properties in the body. The match.domain property should be the same as the Inbound Domain you set up in the previous step. See our [docs](https://developers.sparkpost.com/api/relay-webhooks.html) for property definitions and other optional properties.  

## Test it Out!

Send an email to [test@your.inbounddomain.com](http://test@your.inbounddomain.com) and watch your consumer for the payload. This should be pretty quick (less than a minute). You can see the payload properties [here](https://developers.sparkpost.com/api/relay-webhooks.html). 

## Troubleshooting and FAQ

If your webhook doesn’t seem to be working, you can try these steps: 

* Make sure your DNS has propagated for your Inbound Domain using [MX Toolbox](https://www.whatsmydns.net/#MX) or a command-line tool like dig.
* Double check the domain you are using when you send a test email and make sure it matches your Inbound Domain.
* Check your consumer logs to see if there are any errors.
* You can subscribe to events broadcast by Relay Webhooks using SparkPost’s [Event Webhooks](https://developers.sparkpost.com/api/webhooks.html). These will help you troubleshoot errors from your consumer endpoint.
* Inbound emails (including attachments) are limited to 20MB.​
* To extract attachments follow [these instructions](https://www.sparkpost.com/docs/tech-resources/extracting-email-attachments-from-relay-webhooks/).
* Speed up integration time by reviewing this [example app](https://github.com/SparkPost/sp-forwarding-service).

Unlike webhooks, relay webhooks do not batch - individual messages are pushed to the relay webhook endpoints when received.

Unlike webhooks, the relay webhook retry logic is similar (but not identical) to messages sent through SparkPost. Any relay webhook push that fails will be re-attempted first at 300 seconds, and then repeatedly tried up to 7 times with a back-off algorithm.
