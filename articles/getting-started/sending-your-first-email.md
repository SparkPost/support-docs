---
title: "Sending Your First Email"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/1929887-sending-your-first-email"
description: "Sending an Email Transmission API SMTP Injection There are two ways to send email transmissions using Spark Post Send email via SMTP Send email via REST API Sending email via SMTP What you'll need Your account configured A verified Sending Domain An API Key with the Send via SMTP permission..."
---

## Sending an Email (Transmission API/SMTP Injection) 

There are two ways to send email (transmissions) using SparkPost:

* [Send email via SMTP](https://support.sparkpost.com/customer/portal/articles/1929887-sending-your-first-email#send-email-via-smtp "Send email via SMTP")
* [Send email via REST API](https://support.sparkpost.com/customer/portal/articles/1929887-sending-your-first-email#send-email-via-rest-api "Send email via REST API")

## Sending email via SMTP

**What you'll need:**

* [Your account configured](https://support.sparkpost.com/customer/portal/articles/1929853-getting-started-with-sparkpost):
    * [A verified Sending Domain](https://support.sparkpost.com/customer/portal/articles/1933318-create-sending-domains)
    * [An API Key with the "Send via SMTP" permission enabled](https://support.sparkpost.com/customer/portal/articles/1933377-create-api-keys)
* Access to an application or service which allows you to enable SparkPost as your SMTP Relay

Once you have your account configured, a valid sending domain configured in SparkPost, and an API key with the required permissions to inject via SMTP, you'll be able to configure any service or application to send via SMTP using the parameters provided on the 'API & SMTP' section under the 'Account' tab on the dashboard.

Note that you should connect to smtp.sparkpostmail.com on port 587 using SSL/TLS and use AUTH LOGIN. Remember, you must issue your STARTTLS command with your application *prior* to issuing your AUTH LOGIN commands.

Also, it is highly recommended that if you are sending via SMTP injection, that you become familiar with our X-MSYS-API header. This header allows you to do several useful things, like turn click and open tracking off, designate what messages are transactional or non-transactional, add metadata, etc. More information about the X-MSYS-API header can be found [in our documentation](https://developers.sparkpost.com/api/smtp-api).

## Send email via REST API

**What you'll need:**

* [Your account configured](https://support.sparkpost.com/customer/portal/articles/1929853-getting-started-with-sparkpost):
    * [A verified Sending Domain](https://support.sparkpost.com/customer/portal/articles/1933318-create-sending-domains)
    * [An API Key with the required permissions for Transmissions](https://support.sparkpost.com/customer/portal/articles/1933377-create-api-keys)
* Application to make RESTful requests (we'll use [cURL](http://en.wikipedia.org/wiki/CURL) in the following example)

There are several ways that you can use SparkPost's RESTful APIs. To keep things straightforward, we're just going to create a simple Transmission with the Template content and Recipients defined "inline" to the request. For the following example, we are just going to use cURL.

1. Open your terminal or command line tool that has access to cURL
1. Use the following endpoint to access the SparkPost APIs: [https://api.sparkpost.com/api/v1/](https://api.sparkpost.com/api/v1/)
1. We're going to use the following cURL request to create a new Transmission (send an email) with SparkPost. The [Transmission API](https://www.sparkpost.com/documentation/transmissions-api) is explained in great detail in our API documentation; it's highly recommended that you review it for all available usage options. Please note that in the below example ([also available here as a Gist](https://gist.github.com/bdeanindy/d31ef1550f3a65b02d19 "SparkPost Transmission API cURL POST Example")), you MUST modify the payload for your request. Please make sure to review the payload for any `<REPLACE_WITH...>` markers and replace with your SparkPost account's specific values (making sure to remove the surrounding < less than and > greater than delimiters.

Now that you have your Transmission configured, press enter and within a few seconds you should see your first email arriving in your inbox.