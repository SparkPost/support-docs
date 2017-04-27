---
title: "Creating a Custom Bounce Domain"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2371794-creating-a-custom-bounce-domain"
description: "You can improve your deliverability and email branding by adding a custom bounce domain A custom bounce domain provides another layer to the branding that some IS Ps care about Note Only one custom bounce domain is permitted per account at this time By adding a bounce domain to your..."
---

You can improve your deliverability and email branding by adding a custom bounce domain. A custom bounce domain provides another layer to the branding that some ISPs care about. 

**Note**: Only one custom bounce domain is permitted per account at this time.

By adding a bounce domain to your account, you can customize the address that is used for the Return-Path header (which denotes the destination for out-of-band bounces). This custom bounce domain overrides the default Return-Path (also known as the envelope FROM) value of "sparkpostmail.com" for all messages sent.

To configure a custom bounce domain, choose the subdomain you would like to use (e.g. bounces.yourdomain.com) and add the following CNAME record to your DNS settings:

| Name | Type | Data |
| --- | --- | --- |
| bounces.yourdomain.com | CNAME | sparkpostmail.com |

This DNS record will ensure that out-of-band/asynchronous bounces to be routed to SparkPost for processing.

Once you have configured your DNS settings, configure custom bounce domains through the SparkPost user interface, follow the steps below:

1. Select Account and then Bounce Domains from the main menu.
1. Click the New Domain button to add a new bounce domain.
1. Add bounce domain
1. Select test
1. Make sure the domain is verified by the green check mark

Bounce domains can also be [managed by API](https://developers.sparkpost.com/api/bounce-domains). Make sure to use the verify endpoint when using API.