---
lastUpdated: "02/08/2020"
title: "How can I account for all messages attempted through SparkPost?"
description: "Injection Phase For all messages you pass to Spark Post defined as accepted in REST transmissions or 250 Ok for SMTP injections an injection event OR one of three error events is logged An injection event is recorded if Spark Post is able to generate a message and queue it..."
---

### Injection Phase 

For all messages you pass to SparkPost (defined as “accepted” in REST transmissions or 250Ok for SMTP injections), an **injection** event OR one of three error events is logged.  An **injection** event is recorded if SparkPost is able to generate a message and queue it for delivery. The three error situations occur when a message cannot be generated and queued for delivery; in these cases a corresponding error event is logged rather than an **injection** event as follows:

1. **"generation_rejection"** – typically occurs when the recipient address is suppressed because the recipient is on the customer’s suppression list (reason will be marked as “customer policy”) or the recipient address is suppressed because they are on SparkPost’s proprietary suppression list (reason will be marked as “system policy”)
2. **"generation_failure"** – typically occurs when there is an error parsing the template, such as incorrect template language syntax
3. **"policy_rejection"** – can be for a variety of reasons including: reaching a daily or monthly limit, having an unconfigured sending domain, or suppression for SMTP-injected messages

All messages handed off to SparkPost are included in the “targeted” count available in the UI and the metrics API. So, the metric *targeted* is equal to the sum of injection + generation_rejection + generation_failure + policy_rejection events.

### Delivery Phase 

For ALL messages which SparkPost is able to generate and queue for delivery (again, there will be an **injection** event for these messages), there will be a corresponding "**delivery**" OR "**bounce**" event when the message has reached its final disposition (i.e., when the delivery phase is complete). 

All messages successfully delivered by SparkPost are included in the “accepted” count available in the UI and the metrics API. 

### Tracking Individual Messages 

The message_id available on raw event data (provided by webhooks, via Message Events report or Message Events API) is a unique identifier assigned to every message handed off to SparkPost. You can search for ALL events for a given message by using this identifier on raw event data collected by webhooks or by using the [message events API](https://developers.sparkpost.com/api/message-events).

### To Summarize 

* An **injection** event is recorded for all messages that SparkPost is able to process and queue for delivery. If you do not find an **injection** event for a message you passed to SparkPost, you will see one of three error events as noted above.
* For all messages queued for delivery (injected), you will see a **delivery** or a **bounce** event that indicates the final message disposition – it was either accepted by the recipient’s mailbox provider or not (with reasons provided).
	* If you find an **injection** event for a message you attempted and no corresponding **delivery** or **bounce**, the message is still being retried and you may see corresponding **delay** events until the delivery phase is complete (generally up to 72 hours).
