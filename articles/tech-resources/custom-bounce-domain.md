---
title: "Creating a Custom Bounce Domain"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2371794-creating-a-custom-bounce-domain"
description: "You can improve your deliverability and email branding by adding a custom bounce domain A custom bounce domain provides another layer to the branding that some IS Ps care about Note Only one custom bounce domain is permitted per account at this time By adding a bounce domain to your..."
---

You can improve your deliverability and email branding by adding a bounce domain to each of your sending domains. A bounce domain provides another layer to the branding that some ISPs care about.

By using your sending domain as your bounce domain, you can customize the address that is used for the Return-Path header (which denotes the destination for out-of-band bounces). This bounce domain overrides the default Return-Path (also known as the envelope FROM) value of "sparkpostmail.com" for all messages sent.

To configure a bounce domain, choose the subdomain you would like to use (e.g. mail.yourdomain.com) and add the following CNAME record to your DNS settings:


| Hostname | Type | Value |
| --- | --- | --- |
| mail.yourdomain.com | CNAME | sparkpostmail.com |

This DNS record will ensure that out-of-band/asynchronous bounces are routed to SparkPost for processing.

Once you have configured your DNS settings, register and verify the domain with  SparkPost by following the steps below:

1. Register the domain with SparkPost by using the sending domains [create endpoint](https://developers.sparkpost.com/api/sending-domains.html#sending-domains-create-post)
1. CNAME-verify the domain by using the sending domains [verify endpoint](https://developers.sparkpost.com/api/sending-domains.html#sending-domains-verify-post).  Here's an example API call to CNAME-verify the mail.example.com domain:

    ```
    POST /api/v1/sending-domains/mail.example.com/verify

    {
      "cname_verify" : true
    }
    ```

1. Optionally set the domain as your account default bounce domain so that it is automatically used as the bounce domain for all messages sent through the account.  Here's an example API call to set mail.example.com as the account default bounce domain:

    ```
    PUT /api/v1/sending-domains/mail.example.com

    {
      "is_default_bounce_domain" : true
    }
    ```

Alternately, you may configure multiple CNAME-verified sending domains and select one as the bounce domain on a per message basis by including it in the [transmission `return_path`](https://developers.sparkpost.com/api/transmissions.html#header-transmission-attributes) field for transmission requests using the REST API, or by specifying it in the SMTP MAIL FROM command for SMTP injections.

After CNAME-verifying or marking the domain as the account default bounce domain, there is up to a 5 minute delay [for compliance verification](https://www.sparkpost.com/docs/getting-started/requirements-for-sending-domains/) before the domain may be used as a message's bounce domain.

If you prefer to use the SparkPost app, then you can create a single bounce domain that will be used for all of your outgoing mail.

1. Select Account and then Bounce Domains from the main menu.
1. Click the New Domain button to add a new bounce domain.
1. Add bounce domain
1. Select test
1. Make sure the domain is verified by the green check mark
