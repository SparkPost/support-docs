---
title: "Getting Started on SparkPost Enterprise"
description: "Note This Knowledge Base Article Is For SparkPost Enterprise Only The following article is a collection of helpful introductory topics regarding getting started on migrating traffic to SparkPost Enterprise from your previous email provider Knowing and understanding how to operate your SparkPost Enterprise environment efficiently from the..."
---

**Note:** This Knowledge Base Article Is For SparkPost Enterprise Only 

The following article is a collection of helpful introductory topics regarding getting started on migrating traffic to SparkPost Enterprise from your previous email provider. Knowing and understanding how to operate your SparkPost Enterprise environment efficiently from the outset with some of the helpful pointers below will be key to getting you up and running as quickly as possible.

The topics discussed in this article include:

* [SMTP Injection](#smtp-injection)
* [REST API Injection](#rest-api-injection)
* [META Data and Other Attributes](#metadata-and-other-attributes)
* [Webhooks](#webhooks)
* [System Monitoring Events](#system-monitoring-events)
* [List Hygiene Activities](#list-hygiene-activities)
* [Global Suppression List + Customer-Specific Exclusion List Functionality](#global-suppression-list-customer-specific-exclusion-list-functionality)
* [Transactional / Non-transactional Message Designation](#transactionalnon-transactional-message-designation)
* [Subaccounts](#subaccounts)

## SMTP Injection

SMTP injections typically use two headers, though only one is required (X-Binding), whereas the other (X-MSYS-API header) is optional. The X-MSYS-API header is a JSON-formatted header which will allow you to set open and click tracking options, set metadata, and designate a campaign ID if one is desired. The other, “X-Binding”, is used to set which binding you will use for outgoing mail.  Failure to set the "X-Binding" will result in the message being blackholed.

Examples:

* `X-Binding: marketing`
* `X-MSYS-API: {"options" : {"open_tracking" : true, "click_tracking" : true}, "metadata" :  {"promotions" : "sales"}, "campaign_id" : "summer_clearance_2015"}`

## REST API Injection

* Use the metadata "binding" key for binding assignment (preferred to header-based method, if using REST)
    * Example: "binding" : "marketing"
* Sizing considerations for multiple recipient transmissions:
    * ​5,000 - 10,000 recipients per transmission call is the recommended range for maximizing performance and efficiency.
    * There is a 2GB limit on payload size for each transmission, but we recommend keeping a payload size no greater than 1GB.
    * Performance of the transmission API is better when there are more transmissions and fewer recipients per transmission. Five transmissions of 10,000 recipients generally has better throughput than one transmission with 50,000 recipients.
    * We recommend you inject transmissions in parallel with up to 50 open concurrent connections.

## Metadata and Other Attributes

* Total size of metadata per message (recipient level metadata + transmission-level metadata) cannot exceed 1000 bytes/characters (if it exceeds this limit the data will be truncated within open and click events).
* Tagging links – group or mark links using the “data-msys-linkname” custom attribute for optimal UI experience and performance.
    * Utilizing this custom attribute in your html template code will ensure that the UI will display click information in a human-readable fashion. If links are not tagged, clicks will be aggregated against the title of “raw URL” in the UI.
    * Example: `<a data-msys-linkname="Test_Link" href="http://www.google.com">Test Link</a>`
* `campaign_id` is best suited for attributes that you will use for filtering on the user interface.  The total number of unique campaign_ids should be in the 100s — not in the 10k range.
    * If you routinely re-use the same campaign, it is recommended that you do not name each individual campaign by date, e.g. "Christmas_Campaign_2015-Dec-21". Instead, keep your campaign names generic (e.g. "Christmas_Campaign) and use a combination of metadata and date-time stamps to identify messages belonging to campaigns in either webhook data or Message Events API data.

## Webhooks

In order to respond as quickly to a batch of events, subscribers should defer any processing until after the response to our webhooks system is made. With a 2xx, any non 2xx errors will be eventually retried.
Avoid retries by listening to http close events. These events will notify when SparkPost Enterprise webhooks timeout. Stopping any executing code on a particular batch that timed out will help overall performance since that particular batch will be retried.

## System Monitoring Events

You can expect to see a number of events that are created for purposes of monitoring your SparkPost Enterprise environment - it will be in the range of several thousand per day. **All of these events for monitoring have a campaign_id that starts with “msys*”** (please note the asterisk is a wildcard for a single character or string of characters) – you can easily filter these from your event data.

## List Hygiene Activities

All SparkPost Enterprise customers should take action on the following web hook events and mark the recipients appropriately:

* “Bounce” events that are hard bounces - “bounce_class” = 10, 30, 90​
    * The three bounce classes above are permanent failures and should not be retried.  [Link](http://support.sparkpostelite.com/customer/portal/articles/1929896) to all bounce classifications
* “Out of Band” events that are hard bounces - “bounce_class” = 10, 30, 90​
    * The three bounce classes above are permanent failures and should not be retried.
* “Spam Complaints” events
* "Link Unsubscribe" and "List Unsubscribe" events
    * If you aren't using our Link Unsubscribe feature, then you only need to register for "List Unsubscribe"
* "Generation Failure"
    * These events are a result of one of four conditions.  Previous Hard Bounce (10, 30, 90), previous Link/List Unsubscribe, previous Spam Complaint or recipient matches a proprietary list of know bad domains (eg. gmai.cm, yaho.com, etc.).  The 'raw_reason' is provided in the json payload. These should not be retried.

## Global Suppression List + Customer-Specific Exclusion List Functionality

SparkPost Enterprise maintains a proprietary global suppression list that is on by default for all customers designed to automatically suppress messages targeting addresses that are known spam traps or role accounts (e.g. "postmaster@" or "admin@"). Any message that is attempted which is on the global suppression list will automatically fail. The event data associated with a global suppression will always look like this - ***554 5.7.1 recipient address was suppressed due to system policy.***

There are two separate exclusion lists that are specific to your SparkPost Enterprise environment only, one for transactional messages, and one for non-transactional messages. For an address to be placed on a given exclusion list, it must either hard bounce, unsubscribe (via the list-unsubscribe method or link-unsubscribe method), or complain through a publicly available feedback loop at an ISP. Population of the exclusion list happens automatically via our internal processing, but manual changes can be made to either list through the suppression list API, see [this article](https://www.sparkpost.com/api?_ga=1.143685045.1033930248.1481562971#/reference/suppression-list) if desired. It is recommended, however, that you do not remove any addresses from your exclusion lists unless you are sure a false positive has occurred.

If any address present on the given suppression list for the type of message you are attempting to send (i.e. "transactional" or "non-transactional") is attempted, the message will automatically fail. The event data associated with a customer-specific suppression list event will read - ***554 5.7.1 recipient address was suppressed due to customer policy***                                                                  - 

**Note**: For single recipient transmissions, if a given email address is suppressed, the API response for the rejection will appear inline. However, if you are using multiple recipient transmissions, the API response will initially accept addresses which will be suppressed later in the message generation process. For multiple recipient transmissions which contain a suppressed address, you will notice that an injection event is recorded before the ultimate suppression, but an injection event is not recorded for a single recipient, inline suppression.

## Transactional/Non-Transactional Message Designation

Because SparkPost Enterprise maintains two separate exclusion lists specific to your environment based upon a transactional and non-transactional message designation, it's a good idea to appropriately mark your messages by setting this flag either using the REST API or via the X-MSYSAPI header for SMTP transactions. This is set as a boolean value nested beneath the options object.

Example:

```json
{
  "options": {
    "open_tracking": true,
    "click_tracking": true,
    "transactional": true
  }
}
```

**Note**: This is an optional value - if you do not set it, the system will use the template level designation, if you are using a stored template. Otherwise, the default value **is always non-transactional.**

Ensuring that you set the value properly for all messages from the start will prevent situations from occurring whereby an important transactional message (such as an order confirmation, legal notice, etc.) can still reach a recipient even if they might have complained or unsubscribed from your marketing communications, and thus are present in your non-transactional exclusion list.

## Subaccounts

Subaccounts allow you to support separate business units, mailstreams, or customers (if you are an email service provider) all from within your SparkPost account. Subaccounts enable you to give each of these units direct access to the SparkPost messaging service APIs. If you would like to set up subaccounts in your Enterprise environment, it is strongly recommended that you first review [this article](https://support.sparkpostelite.com/customer/en/portal/articles/2360320-subaccounts-in-sparkpost-and-sparkpost-elite?b_id=8730) first. If you have subsequent questions, please reach out to your TAM.
