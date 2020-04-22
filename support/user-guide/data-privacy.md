---
title: "Data Privacy"
description: "SparkPost considers respecting data privacy rights a critical component of a successful email program. We have made it even easier for you to fulfill GDPR right to be forgotten and CCPA opt out sale requests made by your customers through our Data Privacy API."
---

## Table of Contents

Use these links to jump to certain sections of this article

* [Overview](#overview)
* [Submitting Requests through the SparkPost App](#submitting-requests-through-the-sparkpost-app)
* [Submitting Requests via API](#submitting-requests-via-api)
* [Processing Time](#processing-time)

### Overview

SparkPost considers respecting data privacy rights a critical component of a successful email program. We have made it even easier for you to fulfill GDPR right to be forgotten and CCPA opt out sale requests made by your customers through our [Data Privacy API](https://developers.sparkpost.com/api/data-privacy/).

### Submitting Requests through the SparkPost App

You can submit individual or bulk requests through the [Data and Privacy](https://app.sparkpost.com/account/data-privacy/single-recipient/) section of the SparkPost app. Click your email address in the upper right corner and then select “Data and Privacy” from the menu. 

Once you are on the Data and Privacy page, you can choose to process a single request or multiple requests by uploading a .csv file.

**Single Recipient**

For a single recipient, select the type of compliance request you are submitting and enter the recipient’s email address. 

If applicable, select if this request applies to the master account, the master and all subaccounts, or one specific subaccount. (Learn more about subaccounts [here](https://www.sparkpost.com/docs/user-guide/subaccounts/).)

Click “submit” to send your request.

**Multiple Recipients**

Click on “Multiple Recipients” to upload a bulk list of recipients. Select the type of compliance request and then upload your .csv file of recipients. Please reference the sample upload template. The maximum number of recipients per upload is 1000 emails.

If applicable, select if this request applies to the master account, the master and all subaccounts, or one specific subaccount. (Learn more about subaccounts [here](https://www.sparkpost.com/docs/user-guide/subaccounts/).) 

Click “submit” to send your request.

If there were any issues reading your uploaded .csv, you will receive an error message with a downloadable list of errors.  Please review and fix the errors, then re-upload your whole list.

Note: you may only select one compliance type for a single .csv file. If you have multiple requests of various compliance types, please upload a separate file and submit a separate request for each compliance type.

### Submitting Requests via API

The API documentation can be found [here](https://developers.sparkpost.com/api/data-privacy/). You will need to create an API key with the permission `Data Privacy Read/Write`.

Select the type of compliance request by choosing the appropriate API path.  Just like in the SparkPost app, you can submit a single recipient or up to 1000 recipients per API call. 

By default, the request will be applied to the master account only. If you would like the request to apply to the master and all subaccounts, you must add the field `include_subaccounts=true` to your API call. If you would like the request to apply to a specific subaccount, you must include the subaccount in the `x-msys-subaccount` header. (Learn more about subaccounts [here](https://www.sparkpost.com/docs/user-guide/subaccounts/).) 

**Subaccount API Usage**

A subaccount may submit data privacy requests directly to SparkPost via API but not in the SparkPost app. The master account will need to create an API key for the subaccount with the `Data Privacy: Read/Write` permission. 

Requests submitted by a subaccount will always only apply to that specific subaccount.

### Processing Time

We will process your request within 30 days regardless of submission method.
