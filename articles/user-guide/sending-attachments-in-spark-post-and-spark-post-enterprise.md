---
title: "Sending Attachments in SparkPost and SparkPost Enterprise"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2214831-sending-attachments-in-sparkpost-and-sparkpost-enterprise"
description: "A transmission is a collection of messages belonging to the same campaign It is also known as a mailing The Transmissions API provides the means to manage transmissions Messages in the transmissions are generated and sent to a specified list of recipients using a specified message template The recipient list..."
---

A transmission is a collection of messages belonging to the same campaign. It is also known as a mailing. The Transmissions API provides the means to manage transmissions.

*   Messages in the transmissions are generated and sent to a specified list of recipients using a specified message template.
*   The recipient list can be a stored list created using the Recipient Lists API, or it can be created "inline" as part of a transmission.
*   Similarly, the message template can be a stored template created using the Templates API, or it can be created "inline" as part of a transmission.
*   Messages are generated for the transmission for all specified recipients using the message template and performing substitution of data as necessary.

In addition, engagement tracking options can be set in the transmission to track message opens and clicks.

 ### Attachments Support in the API 

We have added support for attachments using the Transmissions API. Attachments can be any file type or inline images. In a future enhancement, we will include file type validation.

A few notes about this feature:

*   There is a 20 MB content size limit on each message, including content body and all attachments
*   **Attachments are supported with inline templates only.**                                           A future enhancement will include support for attachments with stored templates.

### Attributes

Attachments for a transmission are specified in the content.attachments JSON array where each JSON object in the array is described [here](https://developers.sparkpost.com/api/transmissions.html#header-attachment-attributes).

Inline images for a transmission are specified in the content.inline_images JSON array where each JSON object in the array is described [here](https://developers.sparkpost.com/api/transmissions.html#header-inline-image-attributes).

<style type="text/css">table { border-top: 1px solid #ccc; border-left: 1px solid #ccc; } table th { text-align: left; } th, td { border-bottom: 1px solid #ccc; border-right: 1px solid #ccc; padding: 5px 10px; word-wrap: break-word; }</style>