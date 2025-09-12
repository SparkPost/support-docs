---
lastUpdated: "02/08/2020"
title: "Mailjet Migration Guide"
description: "Moving to SparkPost for better inbox delivery and higher performance? This Mailjet Migration Guide will help you start fast, spend less and deliver more."
---

Mailjet Migration Guide Overview
--------------------------------

This guide is here to help make your move from Mailjet to SparkPost as straightforward as possible. We'll cover the setup process, explain the equivalent terminology, and call out any differences.

Terminology
-----------

Here is a quick table with the similar terms between the two services:

<table>
<tbody>
<tr>
<th>SparkPost term</th>
<th>Mailjet term</th>
</tr>
<tr>
<td>Transmission</td>
<td>Message</td>
</tr>
<tr>
<td>Recipients</td>
<td>Contacts/Recipients</td>
</tr>
<tr>
<td>Metrics</td>
<td>Statistics</td>
</tr>
<tr>
<td>Message events</td>
<td>Events</td>
</tr>
<tr>
<td>Metadata</td>
<td>EventPayload, Contact Metadata</td>
</tr>
<tr>
<td>Tags</td>
<td>Custom ID</td>
</tr>
<tr>
<td>Sending domain</td>
<td>Sender address</td>
</tr>
<tr>
<td>Suppression list</td>
<td>Exclusion list</td>
</tr>
<tr>
<td>Subaccount</td>
<td>Sub-account</td>
</tr>
<tr>
<td>Relay webhook</td>
<td>Parse webhook</td>
</tr>
<tr>
<td>X-MSYS-API header</td>
<td>X-MAILJET-*, X-MJ-* headers</td>
</tr>
</tbody>
</table>

Where To Get Help
-----------------

If you're ready for the gritty details, check out our [DevHub](https://developers.sparkpost.com/), [API docs](https://developers.sparkpost.com/api) and [pricing](https://www.sparkpost.com/pricing/). If you have general questions, take a walk through our [support articles](https://support.sparkpost.com/). You can also [open a ticket](https://www.sparkpost.com/submit-a-ticket/) with our support team.

Signing Up
----------

Sign up for your [SparkPost](https://app.sparkpost.com/join) or [SparkPost EU](https://app.eu.sparkpost.com/join) account.

Note: Please create only a single account of each type for your organization. If you need separate environments or to send on behalf of multiple clients, please use subaccounts. Both of these are explained in more detail below.

Sending Your First Email
------------------------

At this point, you can send email immediately provided you use the sparkpostbox.com domain in your 'From' address (e.g. "From: something@sparkpostbox.com"). Each SparkPost account has a 5-email, lifetime allowance of mail from this 'sandbox' domain and it's meant as an easy exploration and testing feature. To begin sending real production emails, both Mailjet and SparkPost expect you will use a domain of your own.

If you would like to jump straight in and send your first email, check out the [REST API section](https://www.sparkpost.com/migration-guides/mailjet/#migrating-to-the-rest-api) below. You can also send via [SMTP](https://www.sparkpost.com/migration-guides/mailjet/#sending-mail-over-smtp) if you prefer.

Setting Up A Sending Domain
---------------------------

*Terminology: MJ: sender address -- SP: sending domain*

To begin sending mail from your own domain, you need to register it with SparkPost. You can create and manage your sending domains from [Sending Domains](https://app.sparkpost.com/account/sending-domains) ([EU](https://app.eu.sparkpost.com/account/sending-domains)) page.

Verify your sending domain by publishing DKIM DNS records or verify via any email address. Once you add a sending domain with SparkPost, you can send from any localpart with that domain like if you added *@example.com as a sender address in Mailjet.

Once a domain is verified, you are able to send from any address from that domain.

*Note: SparkPost only requires that you complete 1 type of domain ownership verification. However, we recommend that you configure DKIM on your domains, as this will improve your domain's reputation, and thus, your chances of consistently hitting the inbox.*

Important: Migrate Your Suppression List
----------------------------------------

*Terminology: MJ: Exclusion list -- SP: Suppression list*

When you use any modern email service, it will maintain a list of addresses you shouldn't send mail to. For example, you should avoid sending emails to anyone who has unsubscribed or reported a message of yours as spam. It's like your own personal "do not call" list.

When switching email providers it is important to avoid sending to these addresses again to avoid incurring very high bounce and complaint rates early on. Migrating your suppression list from your old service into the new should be one of your first actions.

Mailjet collects a list of address who you should avoid sending in your exclusion list. Be sure to download this from Mailjet and upload it through the [SparkPost app](https://app.sparkpost.com/lists/suppressions/create) ([EU](https://app.eu.sparkpost.com/lists/suppressions/create)) or [via the API](https://developers.sparkpost.com/api/suppression-list.html#suppression-list-bulk-insert-update).

Migrating to the SparkPost REST API
-----------------------------------

*Terminology: MJ: Message -- SP: Transmission\
**Terminology: MJ:  Contacts/Recipients -- SP: Recipients*

The SparkPost [transmissions endpoint](https://developers.sparkpost.com/api/transmissions.html) is broadly equivalent to the Mailjet v3 Send API.  Each transmission call should have either inline content or a template and one or more recipients which can have substitution data and metadata for tracking.

While you can directly call the API via tools like [Postman](https://www.getpostman.com/), [cURL](https://curl.haxx.se/), or [HTTPie](https://httpie.org/), it's more common to use one of our official client or community libraries:

-   [php-sparkpost](https://github.com/SparkPost/php-sparkpost)
-   [python-sparkpost](https://github.com/SparkPost/python-sparkpost)
-   [node-sparkpost](https://github.com/SparkPost/node-sparkpost)
-   [java-sparkpost](https://github.com/SparkPost/java-sparkpost)
-   [go-sparkpost](https://github.com/SparkPost/gosparkpost)
-   [elixir-sparkpost](https://github.com/SparkPost/elixir-sparkpost)
-   [C#](https://github.com/darrencauthon/csharp-sparkpost)
-   [Ruby](https://github.com/search?l=Ruby&q=sparkpost&type=Repositories&utf8=%E2%9C%93)

Regardless of the tool you use, you need a [API key](https://app.sparkpost.com/account/api-keys) ([EU](https://app.eu.sparkpost.com/account/api-keys)) to use the SparkPost API. With Mailjet you need both a public and a private key -- with SparkPost you use a single key. You can create as many keys as you need, each with their own privileges so you can compartmentalize access rights across your software stack and organization.

Sending Mail Over SMTP
----------------------

SparkPost also accepts email over traditional SMTP -- with a few modern twists. To authenticate, set the SMTP password to a SparkPost API key with "Send via SMTP" permissions. In short, you can set metadata, tags, and configuration options by including a custom header named X-MSYS-API in your messages which is roughly analogous to Mailjet's X-MAILJET- and X-MJ- headers. You can read the full [SparkPost SMTP API](https://developers.sparkpost.com/api/smtp-api.html) reference documentation here.

*Note: If you'd like to use advanced features like dynamic message generation with templates and personalization, you should use the REST API's *[transmission](https://developers.sparkpost.com/api/transmissions.html)*, *[*template*](https://developers.sparkpost.com/api/templates.html)* and *[*substitution*](https://developers.sparkpost.com/api/substitutions-reference.html)* capabilities.*

Templates
---------

[SparkPost templates](https://developers.sparkpost.com/api/substitutions-reference.html) offer the same variable substitution capabilities, conditional blocks, structured data, and loops that are available with Mailjet's template language. Where Mailjet uses both double curly braces and curly braces with percent signs for different blocks, SparkPost only uses double curly braces. SparkPost can also store templates within your account for re-use and to separate content management from the API calls that trigger delivery.

Here are a few example template snippets to show what's possible:

-   Basic substitution: `Hello {{firstName}}`
-   Default values: `Hello {{firstName or 'Captain'}}`
-   Conditionals: `{{if pet.species.name == 'cat'}} Miaow! {{else}} Woof! {{end}}`
-   Iteration: `{{each cartItems}} {{loop_var}} {{end}}`

To explore further, you can create, edit, and preview your templates (using test substitution data) [within SparkPost](https://app.sparkpost.com/templates) ([EU](https://app.eu.sparkpost.com/templates)) or using the [templates API endpoint](https://developers.sparkpost.com/api/templates.html).

Tracking Your Email Activity
----------------------------

SparkPost offers 2 levels of tracking information. The first is aggregate metrics which are broadly equivalent to Mailjets key performance statistics -- rolled-up, time-windowed summaries of your activity. These are viewable as [customizable time series graphs](https://app.sparkpost.com/reports/summary) ([EU](https://app.eu.sparkpost.com/reports/summary)) and also are available programmatically using the [metrics API](https://developers.sparkpost.com/api/metrics.html) endpoint. The second level of tracking information exposes the more fine-grained individual activity used to build our aggregate metrics. This individual activity is also available two ways -- through the [message events](https://app.sparkpost.com/reports/message-events) ([EU](https://app.eu.sparkpost.com/reports/message-events)) page, or through the [message events API](https://developers.sparkpost.com/api/message-events.html) endpoint and [webhooks](https://developers.sparkpost.com/api/webhooks.html) which let you process the data however you like.

#### Metrics

Your SparkPost account includes an [extensive set of metrics](https://developers.sparkpost.com/api/metrics.html) for tracking your email activity. You can review [summary reports](https://app.sparkpost.com/reports/summary) ([EU](https://app.eu.sparkpost.com/reports/summary)), a [breakdown of bounces](https://app.sparkpost.com/reports/bounces) ([EU](https://app.eu.sparkpost.com/reports/bounces)) and [engagement](https://app.sparkpost.com/reports/engagement) ([EU](https://app.sparkpost.com/reports/engagement)) (our term for opens and clicks), and more. All of these reports can be narrowed by time window and are calculated down to the minute. If you choose to set a campaign ID on your transmissions, metrics can also be filtered using those campaign ID values and by other fields such as recipient domain and IP pool. See the documentation linked above for a complete list of querying and filtering capabilities.

SparkPost stores all your metrics for 6 months.

#### Message Events and Webhooks

SparkPost's message events API endpoint provides similar functionality Mailjet's event and statistics API endpoints. The message events API is a searchable list of the last 10 days of events of all types. Those events are available in pull fashion by [querying the message events endpoint directly](https://developers.sparkpost.com/api/message-events.html#message-events-message-events-get) and in push fashion if you use [the webhooks feature](https://developers.sparkpost.com/api/webhooks.html), like the Mailjet's event callback url. For app integrations we recommend webhooks since they offer resilient, low latency, near-real-time access to events as they happen.

### Sidebar: Events Specifications

The SparkPost API includes embedded JSON specifications and sample event generation services for both [message events](https://developers.sparkpost.com/api/message-events.html#message-events-events-samples) and [webhooks](https://developers.sparkpost.com/api/webhooks.html#webhooks-events-samples-get).

Inbound Email
-------------

*Terminology: MJ: Parse Webhook -- SP: Relay Webhook*

SparkPost's relay webhooks process and forward email addressed to an HTTP endpoint you control, much like using Mailjet's Parse API. Unlike Mailjet, SparkPost offers this feature on the free tier. Each relay webhook accepts SMTP traffic on your behalf, and forwards JSON-encoded messages to you over HTTP.

*Note: SparkPost requires that you *[*register your inbound domain*](https://developers.sparkpost.com/api/inbound-domains.html)* before you can receive inbound mail through a relay webhook.*
