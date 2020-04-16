---
title: "Getting Started with Engagement Tracking"
description: "This guide outlines some of the different ways you can do engagement tracking with SparkPost"
---

With SparkPost, there are a multitide of ways to configure engagement tracking with our customers.  This guide will outline some of the initial options, and provide references to other guides for configuring custom tracking domains and different ways to use **HTTPS** with your custom tracking domains.

## Getting Started
Customers can view their engagement through the use of SparkPosts Events.  These events can be searched and viewed in many different ways.  They can be viewed within [SparkPost Signals](https://www.sparkpost.com/docs/reporting/signals-analytics/), queried and searched via the [Events API](https://developers.sparkpost.com/api/events/) or sent to your own environments through the use of [Event Webhooks](https://developers.sparkpost.com/api/webhooks/) to name a few.


### Notes on Click Tracking
SparkPost click tracking links are highly dependent on the size of the original link supplied within the REST Transmission or SMTP request.  If there are concerns over link length within an email with SparkPost's click tracking enabled, first verify the original link length.

> Link sizes of over **4096** bytes will be rejected on redirection

## REST Transmissions with Engagement Tracking
Transmissions sent via the SparkPost Transmissions API have engagement tracking on by default for all customers.  This includes a top tracking pixel, and bottom open pixel, and click tracking on all links within the email content.  These options can be configured via [Transmissions API](https://developers.sparkpost.com/api/transmissions/) level options.  For example, if you wish to use open tracking, but not click tracking, you can set the following options in your JSON payload for a REST transmission

> **Note:** The `open_tracking` option is not required to be set in the example below, as it defaults to `true`.  It is set explicitly for this example.


```json
{
  "options": {
    "open_tracking": true,
    "click_tracking": false,
    "transactional": true,
    "ip_pool": "my_ip_pool",
  },
  "campaign_id": "click_sample",
  "recipients": [
    ...
  ],
  "content": { ... }
}
```

If for some reason, you cannot or do not wish to set your tracking configuration with Transmissions API level options, you can request different default settings for your account.  Please contact support through the SparkPost app, or your Technical Account Manager.

## SMTP Engagement Tracking
The SparkPost SMTP engagement tracking is turned off by default for new accounts.  This can be turned on account wide by following this [Guide](https://www.sparkpost.com/docs/tech-resources/smtp-engagement-tracking/).

To enable click and open tracking in SMTP messages, add the X-MSYS-API header as follows:

```json
X-MSYS-API: { "options" : { "open_tracking" : true, "click_tracking" : true } }
```

For more information on SMTP Engagement Tracking, check out this [Guide](https://www.sparkpost.com/docs/tech-resources/smtp-engagement-tracking/) to configure your account settings or leverage the [SMTP API](https://developers.sparkpost.com/api/smtp/) to control your engagement tracking. 


## Next Steps
Look at setting up a [Custom Tracking Domain](https://www.sparkpost.com/docs/tech-resources/enabling-multiple-custom-tracking-domains/) for your SparkPost mail, which can provide features like [Mobile Universal and App Links](https://www.sparkpost.com/docs/tech-resources/enabling-multiple-custom-tracking-domains/) and **HTTPS** tracking links through [CDN Hosting](https://www.sparkpost.com/docs/tech-resources/enabling-https-engagement-tracking-on-sparkpost/) or the use of a [Reverse Proxy](https://www.sparkpost.com/docs/tech-resources/using-proxy-https-tracking-domain/).