---
title: "Managing your Sending Domains"
description: "A sending domain is a domain that is used to indicate who an email is from via the From header Using a custom sending domain enables you to control what recipients see as the From value in their email clients DNS records can be configured for a sending domain which..."
---

A sending domain is a domain that is used to indicate who an email is from via the `From:` header. Using a custom sending domain enables you to control what recipients see as the `From:` value in their email clients. DNS records can be configured for a sending domain, which allows recipient mail servers to authenticate your messages. The Sending Domains API provides the means to create, list, retrieve, update, and verify a custom sending domain.

**Note**: A Sending Domain can be used to submit a customer-generated DKIM key for that sending domain in sparkpost.com

## Setting up a Sending Domain

1.  In the SparkPost app, navigate to **Configuration** > **Sending Domains** 
1.  Click on **Add a Domain** to continue.
1.  Complete the Sending Domain information on the screen to create the same. In this example we will be using mail.exmaple.com.
1.  Click the Add Domain button to add the Sending Domain to your account.

    ![filled out form screenshot](media/managing-sending-domains/add-a-sending-domain.png)

## Sending Domain Verification

Now that you have created the Sending Domain you are half way home; your sending domain still has to be verified before you can begin using it.

There are three different statuses for a sending domain and they are:

*   Not ready to send
*   Your sending domain is pending review
*   Ready to send​

To verify your Sending Domain you need to add the text information for DKIM to your Sending Domains DNS Record. 

![created domain screenshot](media/managing-sending-domains/sending-domain-page.png)

1. Add the Host Name and Text Value information for the DKIM to your DNS records for your sending domain.  Adjust the Time to Live (TTL) setting as necessary.
1. Sending Domain configuration is complete and you are ready to start sending emails!
