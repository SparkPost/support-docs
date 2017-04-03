---
title: "How Do I Generate a Dynamic From Header with a Default Value?"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2233995-how-do-i-generate-a-dynamic-from-header-with-a-default-value-"
description: "Introduction and Use Case Oftentimes businesses need to generate a dynamic from header which displays an email as being from a specific individual or business segment but want to fall back against a default friendly from if substitution values for the from header are not available JSON Examples and Resulting..."
---

## Introduction and Use Case

Oftentimes businesses need to generate a *dynamic from header*             which displays an email as being from a specific individual or business segment, but want to fall back against a default friendly from if substitution values for the from header are not available.

## JSON Examples and Resulting Formed Headers

Because if/then conditional statements are **not allowed**         in formulating headers, and null values cannot be present for any substitution value placed in a header, the following solution requires your transmission API call to *not* include the substitution variable fields if you have no values for them. The following two examples will show this in action.

### Example 1  Substitution values are present for dynamic friendly from

The following is a snippet from a JSON example of a transmission API call. Only the relevant parts to this discussion of the entire call are shown here.

"metadata": {
        "place": "Bedrock",
        "binding": "notifications",
        "fname": "John",
        "lname": "Doe"
      },
      "substitution_data": {
        "customer_type": "Platinum"
      }
    }
  ],
  "content": {
    "from": {
      "name": "{{fname}} {{lname or 'Default Sending Friendly From Name'}}",
      "email": "email@customer.com"

If the above JSON is submitted via the transmission API, the resulting fully formed from header will read as follows:

"John Doe <email@customer.com>"

*****Notice how the default name in single quotes after the **or** conditional is ignored, since we have supplied substitution values in the metadata object.

### Example 2  Substitution values are NOT present for dynamic friendly from

The following is an example of correctly formed JSON for a transmission API call where you do **not** have substitution values to dynamically place in the from header.

"metadata": {
        "place": "Bedrock",
        "binding": "notifications"
      },
      "substitution_data": {
        "customer_type": "Platinum"
      }
    }
  ],
  "content": {
    "from": {
      "name": "{{fname}} {{lname or 'Default Sending Friendly From Name'}}",
      "email": "email@customer.com"

This will result in a fully formed from header which reads, "Default Sending Friendly From Name <email@customer.com>". 

### Example 3  Substitution values are NOT present for dynamic friendly from but ARE still included in the API call as empty metadata fields

If you attempt to maintain a rigid API call structure which leaves metadata fields blank (e.g. "fname": "" or "lname":""), your API call **will** be accepted, but your default friendly from name **will not appear.**             Instead, what will be used as the friendly from in your from header will be the local part of the from email address. To fully illustrate this, here is some example JSON:

"metadata": {
        "place": "Bedrock",
        "binding": "notifications",
        "fname": "",
        "lname": ""
      },
      "substitution_data": {
        "customer_type": "Platinum"
      }
    }
  ],
  "content": {
    "from": {
      "name": "{{fname}} {{lname or 'Default Sending Friendly From Name'}}",
      "email": "email@customer.com"

The JSON above will result in a fully formed from address that reads, "email <email@customer.com>".

![](media/how-do-i-generate-a-dynamic-from-header-with-a-default-value/Image_Note_Tag_New_original.png)

Because capitalization is often not done in email addresses, and the fact that you cannot have spaces, it is **highly recommended**             you do not fall back on this option, as it can make your emails appear spam-like, or worse, like phishing attempts.