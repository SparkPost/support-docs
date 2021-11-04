---
lastUpdated: "02/08/2020"
title: "Sending Attachments"
description: "A transmission is a collection of messages belonging to the same campaign It is also known as a mailing The Transmissions API provides the means to manage transmissions Messages in the transmissions are generated and sent to a specified list of recipients using a specified message template The recipient list..."
---

A transmission is a collection of messages belonging to the same campaign. It is also known as a mailing. The Transmissions API provides the means to manage transmissions.

* Messages in the transmissions are generated and sent to a specified list of recipients using a specified message template.
* The recipient list can be a stored list created using the Recipient Lists API, or it can be created "inline" as part of a transmission.
* Similarly, the message template can be a stored template created using the Templates API, or it can be created "inline" as part of a transmission.
* Messages are generated for the transmission for all specified recipients using the message template and performing substitution of data as necessary.

In addition, engagement tracking options can be set in the transmission to track message opens and clicks.

## Attachments Support in SMTP API

You can embed the attachment within your standard RFC-822 content and send via SMTP.  

## Attachments Support in the Transmissions API

We have added support for attachments using the Transmissions API. Attachments can be any file type or inline images. In a future enhancement, we will include file type validation.

A few notes about this feature:

* There is a 20 MB content size limit on each message, including content body and all attachments
* **Attachments are supported with inline templates only.** We may include support for attachments with stored templates in the future.

## Attributes

Attachments for a transmission are specified in the `content.attachments` JSON array where each JSON object in the array is described [here](https://developers.sparkpost.com/api/transmissions.html#header-attachment-attributes).

Inline images for a transmission are specified in the `content.inline_images` JSON array where each JSON object in the array is described [here](https://developers.sparkpost.com/api/transmissions.html#header-inline-image-attributes).

Alternatively, if you have a fixed attachment you can embed it witin the email_rfc822 attribute, see [Sending RFC-822 content](https://developers.sparkpost.com/api/transmissions/#transmissions-post-send-rfc822-content)
