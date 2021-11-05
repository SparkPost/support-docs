---
lastUpdated: "02/08/2020"
title: "Calling SparkPost From The Browser"
description: "Background API Keys Spark Post uses API keys as authentication tokens you include an API key in each of your requests to identify yourself with Spark Post and for us serve you appropriately As a result your API keys must be considered secret since they identify you and enable API..."
---

## Background: API Keys

SparkPost uses API keys as authentication tokens: you include an API key in each of your requests to identify yourself with SparkPost and for us serve you appropriately.  As a result, **your API keys must be considered secret** since they identify you and enable API access to your SparkPost account.  Someone with your API key could use it to act on your behalf.  Depending on the privileges you grant a given key, that could mean accessing your reporting data, changing account settings or sending unsolicited mail which seems it came from you.  This type of illicit API key use could cost you money, damage your online reputation, leak sensitive information or put your recipients at risk.

To ensure your API keys are not exposed to the public, SparkPost does not allow "client side" API calls, meaning calls from code which executes in browser context.

## Symptoms: 403 Forbidden

SparkPost uses the CORS mechanism to ensure browsers cannot make API calls.  If client side code attempts to make a API request to SparkPost, the browser first makes an "OPTIONS" HTTP call to detect whether it is allowed to use the SparkPost API.  SparkPost will respond to these requests with a "403 Forbidden" response which tells the browser not to make such calls.

## Alternatives

The most common way to call a web-based API such as SparkPost within your app is to make the call from your backend where your API keys and sensitive data are not exposed to the public internet.
