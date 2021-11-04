---
lastUpdated: "02/08/2020"
title: "Posting Custom Headers with Webhooks Delivery"
description: "As an additional security measure for webhooks batch POSTs, you may wish to include custom headers so that batches can be securely sent to your webhook endpoint(s). This gives you the option of rejecting webhook batches if these custom headers and associated values are not included in the batch."
---

As an additional security measure for webhooks batch POSTs, you may wish to include custom headers so that batches can be securely sent to your webhook endpoint(s). This gives you the option of rejecting webhook batches if these custom headers and associated values are not included in the batch.

The SparkPost webhooks API supports setting custom headers that will be included in every webhooks batch delivery through the `custom_headers` object. The following is an example:

```json
{
  "name": "Example webhook",
  "target": "http://client.example.com/example-webhook",
  "custom_headers": {
    "x-api-key": "abcd"
  },
  "auth_type": "oauth2",
  "auth_request_details": {
    "url": "http://client.example.com/tokens",
    "body": {
      "client_id": "CLIENT123",
      "client_secret": "9sdfj791d2bsbf",
      "grant_type": "client_credentials"
    }
  },
  "events": [
    "delivery",
    "injection",
    "open",
    "click"
  ]
}
```

**Validation Rules**:

Validation rules will be enforced as follows:

* No invalid characters in header keys or values
* A maximum of 5 headers may be provided
* Custom_headers on POST body must be properly formatted as an object with keys as strings or numbers (alphanumeric)
* Total header size must be smaller than 3000 bytes

More information about webhooks creation through the webhooks API can be found [here](https://developers.sparkpost.com/api/webhooks/#webhooks-post-create-a-webhook).
