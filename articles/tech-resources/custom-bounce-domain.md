---
title: "Creating a Custom Bounce Domain"
description: "You can improve your deliverability and email branding by adding a custom bounce domain A custom bounce domain provides another layer to the branding that some IS Ps care about Note Only one custom bounce domain is permitted per account at this time By adding a bounce domain to your..."
---

By creating a custom bounce domain, you can customize the address that is used for the Return-Path header (which denotes the destination for out-of-band bounces). This bounce domain overrides the default Return-Path (also known as the envelope FROM) value of "sparkpostmail.com" for all messages sent.

Please note the following:

1. Only subdomains can be configured as bounce domains (e.g. “bounce.example.com”)

1. Root domains can only be configured as sending domains (e.g. “example.com"). Adding a CNAME record for your root domain will cause your website to stop working, so please ignore this CNAME verification step in your sending domain configuration.

1. Subdomains can be configured as both sending and bounce domains.

To configure a bounce domain, choose the subdomain you would like to use (e.g. bounce.example.com) and add the following CNAME record to your DNS settings:


| Hostname | Type | Value |
| --- | --- | --- |
| bounce.example.com | CNAME | sparkpostmail.com |

This DNS record will ensure that out-of-band/asynchronous bounces are routed to SparkPost for processing.

Once you have configured your DNS settings, register and verify the domain with SparkPost by following the steps below.

## Using The SparkPost UI

If you prefer to use the SparkPost UI, you can create multiple bounce domains or single bounce domain that will be used for all of your outgoing mail.

1. Select Account and then [Sending Domains](https://app.sparkpost.com/account/sending-domains).
1. Click the New Domain button to add a sending domain. Again, please add a subdomain to avoid any issues with your root domain.
1. Navigate to the DNS for your root domain and add the displayed CNAME record.
1. Select the "Verify CNAME Record" orange text in the CNAME record box.
1. Make sure the domain is verified by the green check mark. Please note that there is up to a 5 minute delay [for compliance verification](https://www.sparkpost.com/docs/getting-started/requirements-for-sending-domains/) before the domain can be used.

 ![](media/custom-bounce-domain/CNAME-verification-2.png)

Once the CNAME record is verified in SparkPost, you will notice an orange button in the CNAME record box that says "Use this domains as your default bounce domain?" Turn this on if you want all of your transmissions to use this bounce domain. If you plan to configure multiple bounce domains, please refer to the end of the article for more information on how to set the bounce domain in your transmission.


## Using The SparkPost API

If you prefer to set up a sending domain as a bounce domain via the API, use the following instructions:

1. Register the domain with SparkPost by using the sending domains [create endpoint](https://developers.sparkpost.com/api/sending-domains.html#sending-domains-create-post)
1. CNAME-verify the domain by using the sending domains [verify endpoint](https://developers.sparkpost.com/api/sending-domains.html#sending-domains-verify-post).  Here's an example API call to CNAME-verify the mail.example.com domain:

    ```
    POST /api/v1/sending-domains/bounce.example.com/verify

    {
      "cname_verify" : true
    }
    ```

1. Optionally set the domain as your account default bounce domain so that it is automatically used as the bounce domain for all messages sent through the account.  Here's an example API call to set example.com as the account default bounce domain:

    ```
    PUT /api/v1/sending-domains/bounce.example.com

    {
      "is_default_bounce_domain" : true
    }
    ```

## Using Multiple Custom Bounce Domains

If you configure multiple bounce domains, you can select one as the bounce domain on a per message basis by:

1. Including it in the transmission return_path field for transmission requests using the REST API

1. Specifying it in the SMTP MAIL FROM command for SMTP injections.


