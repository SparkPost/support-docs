---
title: "Can attachments be sent when using templates?"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2458261-can-attachments-be-sent-when-using-templates-"
description: "When send messages using the Spark Post REST API the message body can be specified either inline as part of the transmission request or by referring to a stored template When using an inline template you can specify attachments to include in the final message through the content attachments attribute..."
---

When send messages using the SparkPost REST API, the message body can be specified either "inline" as part of the transmission request or by referring to a stored template.  When using an inline template, you can specify attachments to include in the final message through the content.attachments attribute.  However, when using a stored template, the content.attachments attribute is not available. 

If you have a *fixed* attachment to include within a stored template, you can embed it within the template by populating the template's email_rfc822 attribute with a preformed multipart message. In this context, a fixed attachment is one which is the same for all deliveries and recipients.

For more details on using the template email_rfc822 attribute, check out [the templates API reference](https://developers.sparkpost.com/api/templates) and [this blog post on advanced template usage](https://www.sparkpost.com/blog/advanced-email-templates/).