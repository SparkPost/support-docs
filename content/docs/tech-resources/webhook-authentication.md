---
lastUpdated: "10/01/2021"
title: "Event Webhook Authentication and Security"
description: "Spark Post offers optional but highly recommended security measures that can be implemented when setting up a webhook namely, SSL, OAuth 2.0, mTLS, and Basic Authentication These measures increase the security of your webhook event data and ensure that the data delivered originates from Spark Post OAuth 2..."
---

SparkPost [Event Webhooks](https://developers.sparkpost.com/api/webhooks/) offers some optional (but highly recommended) security measures that can be implemented when setting up a webhook. These measures increase the security of your webhook event data and ensure that the data delivered originates from SparkPost.

## Webhook Network Security

**SSL (TLS)**

Secure Socket Layer (SSL), also known as Transport Layer Security (TLS), are cryptographic protocols that provide communications security over a computer network.  If your Target endpoint supports SSL then you can prefix your endpoint URL with "https://".  The default port is 443, in which case you do not need to specify the port in the URL e.g. https://yourdomain.com/yourendpoint.  If your Target endpoint has SSL enabled on a different port then you may specifcy it in your URL.  E.g. "https://yourdomain.com:81/yourendpoint"

**mTLS**
Event webhooks supports [mTLS](https://en.wikipedia.org/wiki/Mutual_authentication) for transport layer authentication. mTLS is not a separate authentication schema, it is simply a change in how the TLS connection handshake happens.  SparkPost = CLIENT, your app = SERVER.

**IP Whitelisting**
For those customers that require inbound traffic to be whitelisted in a firewall we do maintain the hostname wh.egress.sparkpost.com which lists the egress IPs under the host’s A record. Please let your TAM know that you are whitelisting IPs and SparkPost will notify you if this list changes, with some advance notice.

For non Enterprise customers that require inbound traffic to be whitelisted in a firewall we recommend instead of whitelisting IP addresses to instead whitelist the hostname wh.egress.sparkpost.com.

## Webhook Authentication Set Up

The authentication method is set to "None" by default when creating a new webhook.  To configure either Basic Auth or OAuth 2.0, select the appropriate value from the "Authentication" drop-down list.  While using either authentication method is optional, we strongly encourage our customers to configure one of these two methods for their webhooks.

![](media/webhook-authentication/webhook-no-auth.png) 

**Basic Authentication**

Basic Authentication (Basic Auth) allows users to provide the username and password associated with your HTTP endpoint when setting up a webhook (this is **not** your SparkPost username and password). When webhook data is sent, the Basic Auth fields are included in the header of the HTTP request.
To configure HTTP Basic Auth, provide the username and password that your target URL uses. Remember that the "Basic Auth Username" and "Basic Auth Password" is not the same username and password used to log into SparkPost.

![](media/webhook-authentication/webhook-basic-auth.png) 

**OAuth 2.0**

OAuth 2.0 requires an authentication token, which is issued by an authorization server, in order to connect to your webhook endpoint. The authentication token is checked by the receiving endpoint when accepting the HTTP request.  To configure OAuth 2.0, you need to provide the following information:

* OAuth2 Client ID and OAuth2 Client Secret (which is akin to username and password) that SparkPost will use to request the authentication token from your authorization server
* OAuth2 Token URL i.e. the URL of the authorization server from which SparkPost will request the token

![](media/webhook-authentication/webhook-auth2.png)

The following resources are available to learn more about OAuth 2.0. Please note that SparkPost is not responsible for the content located at these links:

* [Specifications for OAuth 2](http://tools.ietf.org/html/rfc6749-specificationforOauth2)
* [An Introduction to OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)

**Header-Based Token Method (deprecated)**

The Header-Based Token method has been deprecated and is not available for new webhooks.

* Existing webhooks that use the Header-Based Token will continue to work; the token will be part of the HTTP request that delivers the data, and the token will be displayed in the UI.
* No changes are required to existing webhooks that use this token. However, we encourage our customers using this deprecated token method to switch to the more secure Basic Auth or OAuth 2.0 authentication methods.

## FAQ

**Q: How does SparkPost deal with expiring Oauth tokens?**

SparkPost assumes a token is expired if the webhook endpoint returns a response of 400 or 401.

**Q: Will SparkPost request a new OAuth token if our endpoint returns a 400 or 401 status?**

Yes.

**Q: When does SparkPost request a token from the OAuth provider?**

SparkPost requests a token when we are attempting to send data to the webhook target. We also request one when the webhook is initially created, or later modified/updated either via the UI or API.

**Q: Is the Oauth token included in the authorization header?**

Yes, the formation of this header is "Authorization: Bearer {token}".
