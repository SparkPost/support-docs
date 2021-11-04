---
lastUpdated: "02/01/2021"
title: "Data Privacy"
description: "Submit GDPR and CCPA data privacy requests."
---

Respecting data privacy rights is a critical component of a successful email program. Our [Data Privacy API](https://developers.sparkpost.com/api/data-privacy/) makes it easy for you you to fulfill GDPR right to be forgotten and CCPA opt out sale requests made by your recipients.

All data privacy requests are processed within 30 days of submission.

## Submitting Data Privacy Requests

You can submit data privacy requests through the [Data and Privacy page](https://app.sparkpost.com/account/data-privacy/single-recipient/)([EU](https://app.eu.sparkpost.com/account/data-privacy/single-recipient/)). You have the option to submit a request for one recipient or multiple recipients at a time.

For a single recipient, select the compliance type for the request, fill in the recipient address, and submit the request.

For multiple recipients, you will need to upload a CSV file of recipients. The format for the file is one address per line:

```
recipient@example.com
recipient2@example.com
```
The maximum number of recipients per upload is 1000 emails.

If there are any issues reading your uploaded file, you will receive an error message with a downloadable list of errors.  Please review and fix the errors, then re-upload your whole list.

Note: You may only select one compliance type per CSV file. If you have requests of different compliance types, please submit a separate request for each compliance type.

### Subaccount Requests
If applicable, select if this request applies to the primary account, the primary and all subaccounts, or one specific subaccount. Learn more about subaccounts [here](https://www.sparkpost.com/docs/user-guide/subaccounts/).

## Submitting Requests via API

The [Data Privacy API](https://developers.sparkpost.com/api/data-privacy/) lets you automate data privacy requests. Make sure your API key has the permission `Data Privacy Read/Write`. You can create a new key or update a current key from the [API Key page](https://app.sparkpost.com/account/api-keys)([EU](https://app.eu.sparkpost.com/account/api-keys)).

Just like in the app, you can submit a single recipient or up to 1000 recipients per API call.

Requests are applied only to the primary account by default. To apply the request to the primary and all subaccounts, set `include_subaccounts=true`. To apply the request to a specific subaccount, include the subaccount in the `x-msys-subaccount` header. Learn more about subaccounts [here](https://www.sparkpost.com/docs/user-guide/subaccounts/).

### Subaccount API Usage

Subaccounts may submit data privacy requests directly to SparkPost via API but not through the SparkPost app. The primary account will need to create an API key for the subaccount with the `Data Privacy: Read/Write` permission.

Requests submitted by a subaccount will always only apply to that specific subaccount.
