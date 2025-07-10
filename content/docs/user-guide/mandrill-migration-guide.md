---
lastUpdated: "02/08/2020"
title: "Mandrill Migration Guide"
description: "This Mandrill Migration Guide explains how quick and painless migrating to SparkPost from Mandrill can be, reducing the impact to the developer community."
---

Mandrill Migration Guide Overview
---------------------------------

Mailchimp recommends SparkPost as a Mandrill alternative for developers looking for a transactional email provider. To support your move, we've created this Mandrill migration guide to streamline the process. We also recommend reading through our full [getting started guide](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/) for an overview of SparkPost.

Terminology
-----------

We'll start with a comparison of terms:

<table>
<tbody>
<tr>
<th>SparkPost term</th>
<th>Mandrill term</th>
</tr>
<tr>
<td>Transmissions</td>
<td>Messages</td>
</tr>
<tr>
<td>Recipients</td>
<td>Recipients</td>
</tr>
<tr>
<td>Templates</td>
<td>Templates</td>
</tr>
<tr>
<td>Metrics</td>
<td>Time Series Reports</td>
</tr>
<tr>
<td>Message Events</td>
<td>Message Information</td>
</tr>
<tr>
<td>Webhooks</td>
<td>Webhooks</td>
</tr>
<tr>
<td>Metadata</td>
<td>Metadata</td>
</tr>
<tr>
<td>Substitution data</td>
<td>Merge vars</td>
</tr>
<tr>
<td>Tags</td>
<td>Tags</td>
</tr>
<tr>
<td>Sending Domain</td>
<td>Sending Domain</td>
</tr>
<tr>
<td>Bounce Domain</td>
<td>Return Path Address</td>
</tr>
<tr>
<td>Subaccount</td>
<td>Subaccount</td>
</tr>
<tr>
<td>Suppression List</td>
<td>Rejection Blacklist</td>
</tr>
<tr>
<td>Inbound Domain/Relay Webhook</td>
<td>Inbound Domain/Inbound Route</td>
</tr>
<tr>
<td>X-MSYS-API header</td>
<td>X-MC-* headers</td>
</tr>
</tbody>
</table>

### API Differences

-   All calls to the Mandrill API are made with HTTP POST. Calls to SparkPost use the different HTTP methods: GET, POST, PUT, DELETE.
-   The SparkPost API accepts and returns only JSON.

SparkPost API calls are authenticated by passing a valid API key through the [HTTP Authorization Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)

Where To Get Help
-----------------

If you're in a hurry, don't have time to read this Mandrill Migration Guide and just want the gritty details, check out our [Developer Site](https://developers.sparkpost.com/), [API reference](https://developers.sparkpost.com/api/) and [pricing](https://www.sparkpost.com/pricing/). If you have general questions, [take a look through our support articles](https://support.sparkpost.com/).

Signing Up
----------

Sign up for your [SparkPost](https://app.sparkpost.com/join) or [SparkPost EU](https://app.eu.sparkpost.com/join) account. An account created with SparkPost cannot be used with SparkPost EU, and vice-versa. Customers may use accounts in both regions.

If you evaluated SparkPost when Mandrill was converted to a Mailchimp add-on, you may have an existing SparkPost account which could contain your sending domains.

#### SparkPost EU

SparkPost is available in multiple regions. "SparkPost" refers to the SparkPost service hosted in North America. "SparkPost EU" refers to the SparkPost service hosted in Western Europe. An account created with SparkPost cannot be used with SparkPost EU, and vice-versa. Customers may use accounts in both regions.

Setting Up Domains
------------------

*Terminology: MD: sending domain -- SP: sending domain*

To begin sending mail from your own domain, you need to register it with SparkPost. You can create and manage your sending domains from [Sending Domains](https://app.sparkpost.com/account/sending-domains) ([EU](https://app.eu.sparkpost.com/account/sending-domains)) page. We recommend using a subdomain with SparkPost, like "mail.yourdomain.com". You will need to verify your domain by publishing DNS records. [Create a sending domain](https://app.sparkpost.com/account/sending-domains/create) ([EU](https://app.eu.sparkpost.com/account/sending-domains/create)) from your account to see the specific record values. Be sure to delete any Mandrill related records on the domain. SparkPost uses CNAME records for custom Return Paths, so SPF records are not necessary. Once you add a sending domain with SparkPost, you can send from any localpart just like with Mandrill.

Important: Migrate Your Suppression List
----------------------------------------

*Terminology: MD: Blacklist/Whitelist -- SP: Suppression list*

SparkPost's Suppression List operates similar to the Rejection BlackList on Mandrill. As you send, it collects recipients that have unsubscribed, submitted a spam complaint, or hard bounced. It's important that you transfer your Mandrill Rejection Blacklist to your SparkPost Suppression List, in order to protect your sending reputation.

To move your blacklist, do the following:

1.  [Export your Rejection Blacklist](https://mandrill.zendesk.com/hc/en-us/articles/205582997-How-do-I-export-my-Rejection-Blacklist-) from Mandrill to get started.
2.  You can either upload a CSV to your account or use the API:
    -   [Upload a CSV to your account](https://app.sparkpost.com/lists/suppressions/create) ([EU](https://app.eu.sparkpost.com/lists/suppressions/create)). The format is:

        recipient,type,description
        dont@send.com,non_transactional,"Mandrill BlackList"
        spam@complaint.com,non_transaction,"Spam Complaint"
        not@exist.com,transactional,
        not@exist.com,non_transactional,

        The top heading row is required. Types can be either `transactional` or `non_transactinal`, depending on which type of emails should be suppressed. The description is an optional note on why the recipient is suppressed, in quotes.

-   [Suppression List API Bulk Insert](https://developers.sparkpost.com/api/suppression-list/#suppression-list-put-bulk-create-or-update-suppressions)

Migrating to the SparkPost REST API
-----------------------------------

*Terminology: MD: Message -- SP: Transmission*\
*Terminology: MD: Recipients -- SP: Recipients*

After getting your account set up, the best place to get started with the SparkPost API is the [API Reference](https://developers.sparkpost.com/api/). Almost every feature available to your SparkPost account is accessible via the API. The most commonly used part of the API is the [Transmissions API endpoint](https://developers.sparkpost.com/api/transmissions.html), which is broadly equivalent to Mandrill's Messages API. Unlike Mandrill, SparkPost has a single endpoint for sending inline content, templates, and raw email bodies, making it easier by having a single entry point for integrating with our API. A SparkPost transmission is a mailing to one or more recipients, with substitution data for personalization, metadata for tracking, and stored templates.

While you can directly call the API via tools like [Postman](https://www.getpostman.com/), [cURL](https://curl.haxx.se/), or [HTTPie](https://httpie.org/), it's more common to use one of our official client or community libraries:

-   [php-sparkpost](https://github.com/SparkPost/php-sparkpost)
-   [python-sparkpost](https://github.com/SparkPost/python-sparkpost)
-   [node-sparkpost](https://github.com/SparkPost/node-sparkpost)
-   [java-sparkpost](https://github.com/SparkPost/java-sparkpost)
-   [go-sparkpost](https://github.com/SparkPost/gosparkpost)
-   [elixir-sparkpost](https://github.com/SparkPost/elixir-sparkpost)
-   [C#](https://github.com/darrencauthon/csharp-sparkpost)
-   [Ruby](https://github.com/search?l=Ruby&q=sparkpost&type=Repositories&utf8=%E2%9C%93)

Regardless of the tool you use, you need a [API key](https://app.sparkpost.com/account/api-keys) ([EU](https://app.eu.sparkpost.com/account/api-keys)) to use the SparkPost API. You can create as many keys as you need, each with their own privileges so you can compartmentalize access rights across your software stack and organization.

Sending Mail Over SMTP
----------------------

SparkPost accepts email over traditional SMTP. To authenticate, set the SMTP user  to `SMTP_Injection` and the SMTP password to a SparkPost API key with "Send via SMTP" permissions. A full list of SMTP settings can be found on the [SMTP Reference](https://developers.sparkpost.com/api/smtp/).

#### SMTP Headers

Mandrill allows you to set  a variety of headers (X-MC-*) on SMTP requests to customize your emails. SparkPost offers similar access to metadata, tracking options, and more under one SMTP header: X-MSYS-API. For more informations, see the [SMTP Reference](https://developers.sparkpost.com/api/smtp/#header-using-the-x-msys-api-custom-header). To use more advanced features like dynamic content and Templates, you should use the [REST API](https://www.sparkpost.com/migration-guides/mandrill/#migriating-to-the-rest-api).

Templates
---------

When it comes to storing reusable pieces of email content, the Templates feature in Mandrill and SparkPost are very similar. They both support HTML and text content, have publish and draft mechanics, and can be managed either from the [editor on your account](https://app.sparkpost.com/templates) or via the [API](https://developers.sparkpost.com/api/templates). The important difference is how dynamic content is handled. Mandrill supports using either the MailChimp template language or Handlebars. SparkPost Templates and Transmissions support the [SparkPost Template Language](https://developers.sparkpost.com/api/template-language/), which uses a Handlebars-like syntax. If you have many Mandrill-Handlebars templates, we recommend checking out our [Template Migration tool](https://www.sparkpost.com/blog/mandrill-template-migration-tool-mst3k/).

Here are a few example template snippets to show what's possible:

-   Basic substitution: `Hello {{firstName}}`
-   Default values: `Hello {{firstName or 'Captain'}}`
-   Conditionals: `{{if pet.species.name == 'cat'}} Miaow! {{else}} Woof! {{end}}`
-   Iteration: `{{each cartItems}} {{loop_var}} {{end}}`

To explore further, you can create, edit, and preview your templates (using test substitution data) [within SparkPost](https://app.sparkpost.com/templates) ([EU](https://app.eu.sparkpost.com/templates)) or using the [templates API endpoint](https://developers.sparkpost.com/api/templates.html).

Tracking Your Email Activity
----------------------------

SparkPost offers 2 levels of tracking information. The first is aggregate metrics which are rolled up, time windowed summaries of your activity. These are [viewable as customizable time series graphs](https://app.sparkpost.com/reports/summary) and also available using the [Metrics API endpoint](https://developers.sparkpost.com/api/metrics.html). The second level of tracking information exposes the more fine-grained individual activity used to build our aggregate metrics. This individual activity is also available two ways -- through the [Message Events page](https://app.sparkpost.com/reports/message-events) or [API endpoint](https://developers.sparkpost.com/api/message-events). The [Webhooks](https://app.sparkpost.com/account/webhooks) feature delivers events to an HTTP endpoint of your choice as they are generated.

#### Metrics

*Terminology: MD: Time Series Reports -- SP: Metrics*

Your SparkPost account includes an extensive set of metrics for tracking your email activity, stored for 6 months. You can review [summary reports](https://app.sparkpost.com/reports/summary), a [breakdown of bounces](https://app.sparkpost.com/reports/bounces) and [engagement](https://app.sparkpost.com/reports/engagement) (our term for opens and clicks), and more. All of these reports can be narrowed by time window, down to the minute, by campaign ID, which you can set on each transmission, and by other fields such as recipient domain and IP pool. See the [Metrics API Reference](https://developers.sparkpost.com/api/metrics.html) for a complete list of querying and filtering capabilities.

#### Message Events and Webhooks

*Terminology: MD: Message Information -- SP: Message Events*

Message Events are all the individual events that happen around the emails you send. The [Message Events page](https://app.sparkpost.com/reports/message-events) is a searchable view of the last 1000 events. Events are also available by querying the [Message Events API endpoint](https://developers.sparkpost.com/api/message-events.html#message-events-message-events-get). Message Events data is stored for 10 days. The events are also available in a push fashion through [Webhooks](https://app.sparkpost.com/webhooks). For app integration, we recommend webhooks since they offer resilient, low latency, near-real-time access to events as they happen.

#### Metadata

*Terminology: MD: metadata -- SP: metadata*\
*Terminology: MD: tags -- SP: tags*

SparkPost offers metadata and tags as mechanisms for labeling your email activity with information from your application. You can provide metadata with your transmissions, both at the top level and for each individual recipient, with recipient metadata overriding top-level values. Any metadata you provide at message send time will later be available in all events relating to that message. Metadata can also be set using the X-MSYS-API message header when sending with SMTP.

Migrating your Traffic
----------------------

*For high volume and non-transactional senders, please take note of this section.*

We recommend signing up for a SparkPost account and segmenting your traffic between SparkPost and Mandrill, to build your reputation with our service and warm up your dedicated IPs properly. Be sure to follow our best practices guides for [warming up your IPs](https://www.sparkpost.com/docs/deliverability/ip-warm-up-overview/) and [optimizing deliverability and get the best inbox placement rates](https://www.sparkpost.com/docs/deliverability/optimizing-deliverability-and-inbox-placement/).

Subaccounts
-----------

If you send on behalf of your customers, it's a good idea to use [SparkPost's subaccounts](https://www.sparkpost.com/docs/user-guide/subaccounts/) to segment their data. Similar to Mandrill, you are able to see analytics for each subaccount in your [reports](https://app.sparkpost.com/reports/summary). SparkPost also allows you to assign most account assets, like Sending Domains or Templates, to an individual subaccount. Once assigned, only that subaccount and the master account can access the resource.

Inbound Email
-------------

*Terminology: MD: Inbound Route -- SP: Relay Webhook*

Similar to the inbound domains and inbound routes in Mandrill, SparkPost's inbound domains and relay webhooks process and forward email addressed to an HTTP endpoint you control. You will have to set new MX records for SparkPost to receive mail on your behalf. See the [API reference](https://developers.sparkpost.com/api/inbound-domains/) for more information.

Each relay webhook accepts SMTP traffic on your behalf, and forwards JSON-encoded messages to you over HTTP. Unlike Mandrill, SparkPost only allows for one webhook per domain, and forwards all mail sent to the domain over to your endpoint.
