---
lastUpdated: "02/08/2020"
title: "What are the differences between CC, BCC, and archive recipients?"
description: "SparkPost allows you to designate recipients with the X MSYS API header as cc bcc or archive recipients. SparkPost will generate a unique message for each valid CC BCC and Archive recipient."
---

SparkPost allows you to designate recipients with the [X-MSYS-API](https://www.sparkpost.com/api#/reference/smtp-api) header as cc, bcc, or archive recipients. SparkPost will generate a unique message for each valid CC, BCC, and Archive recipient.  This means that CC, BCC, and Archive recipients have the same reporting events as "regular" recipients (i.e., deliveries, clicks, and opens).  Furthermore, "regular" recipients will see the CC recipients in the CC field and will NOT see the BCC recipients in the BCC field.  However, there are subtle differences between these messages in the headers which you should be aware of and they include:

### The List-Unsubscribe and X-MSFBL Headers

The List-Unsubscribe and X-MSFBL headers will differ between "archive" and "to" because the actual recipient address is encoded as part of those header values. The List-Unsubscribe value is part of the data that goes into the DKIM signature calculation so therefore the DKIM signature will also differ.

Features of the BCC recipient include:

* The "BCC" recipient will have the BCC header, which the "archive" recipient will not have.
* The "BCC" recipient receives unique click and open tracking links in the body of the message.

### Archive Messages

It is possible to specify a list of one or more recipients who will receive a copy* of the message that was sent to the recipient specified in the “To” header.  In particular, any encoded links intended for the RCPT TO recipient will appear “as is” in messages destined for the archive recipients.  This feature is useful for use cases that require the copy of sent messages to be forwarded to a mail store for archiving or auditing purposes.

### Notes

*   The “rcpt_type” field present in webhook/Message Events API data is used to specify whether the recipient is a CC, BCC or Archive recipient.
	* If the [REST API is used to send cc or bcc messages](https://www.sparkpost.com/docs/faq/cc-bcc-with-rest-api/) (please note that archive is **not** supported via the REST API), the "rcpt_type" field **does not appear** in the webhook or Message Events API data. We recommend that you include recipient-level metadata for tracking which type each recipient address belongs to.
*   Each Archive, CC, and BCC recipient is counted in the standard targeted and accepted metrics.
*   Archive messages do not include a BCC header.
*   The total number of CC, BCC and archive recipients cannot exceed 1000.
*   The To header must contain exactly one recipient.
*   Each sent message will contain the following headers:
    *   To: will contain the single “To” recipient
    *   CC: will contain the list of CC recipients
    *   BCC: will be present only for the BCC recipients
*   The To, CC, and BCC recipient will each have their own unique click-tracking links.
