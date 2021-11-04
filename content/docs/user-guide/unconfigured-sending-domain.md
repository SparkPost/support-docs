---
lastUpdated: "02/08/2020"
title: "550. 5.7.1 Unconfigured Sending Domain"
description: "A sending domain is a domain that is used to indicate who an email is from via the From header Using a custom sending domain enables you to control what recipients see as the From value in their email clients DNS records can be configured for a sending domain which..."
---

A sending domain is a domain that is used to indicate who an email is from via the `From:` header. Using a custom sending domain enables you to control what recipients see as the `From:` value in their email clients. DNS records can be configured for a sending domain, which allows recipient mail servers to authenticate your messages. The Sending Domains API provides the means to create, list, retrieve, update, and verify a custom sending domain.

## Improperly Configured Sending Domain

If you receive the following error message `550 5.7.1 Unconfigured Sending Domain` as a response when sending a transmission, it is because you used a from address whose domain is not one of the sending domains that you created in your account.

### Example

If I use sales@example.com as my message's from address, but the only sending domain in my account is autos.example.com, I will receive a `550 5.7.1` error message when I make a transmission with the REST API or SMTP relay.

### Solution

Changing the from address to sales@autos.example.com will correct the error, because autos.example.com is a configured sending domain.

## Additional Information

Refer to [this Knowledge Base Article](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#preparing-your-from-address) to learn more about how to configure Sending Domains.
