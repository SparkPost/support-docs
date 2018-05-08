---
title: "Reporting Metrics - Definitions"
description: "Spark Post's aggregated time series statistics are referred to as Metrics This type of reporting data is available in the dashboard or through the Metrics API This document outlines the definition of each metric Standard Metrics Targeted Number of messages passed to Spark Post some will be accepted and others..."
---

SparkPost's aggregated, time-series statistics are referred to as "Metrics". This type of reporting data is available in the dashboard or through the [Metrics API](https://developers.sparkpost.com/api/metrics.html). This document outlines the definition of each metric. 

## Standard Metrics

**Targeted**

Number of messages passed to SparkPost - some will be accepted and others will be rejected.  This is the number of recipients marked as "Accepted" in the REST transmission response.

**Accepted**

Number of messages accepted by the recipient's mailbox provider for delivery -- often referred to as a "delivered".  NOTE:  Recipients that have a delivery and an out-of-band bounce are not included in this count.​

​**Rendered**

Number of times messages are displayed (often referred to as "opened"); a raw count of opens.​

**Clicks**
Number of clicks on tracked links; a raw count of clicks.

## Other Metrics

**Accepted Rate**

The percentage of messages that are accepted by the recipient's mailbox provider for delivery.  Calculated by *number of messages accepted / number of messages targeted*

**Admin Bounce Rate**

The percentage of messages that are bounced by SparkPost - suppression logic is the most common type of admin bounce.  Calculated by *number of admin bounces / number of messages targeted*

**Admin Bounced**

Number of messages that are bounced by SparkPost - suppression logic is the most common type of admin bounce.

**Bounce Rate**

The percentage of messages that bounce except admin bounces.  Calculated by *number of bounces / number of messages sent*

**Average Delivery Message Size**

Average size (in bytes) of all delivered messages, including attachments.

**Average Latency First Attempt**

Average time between the time SparkPost accepts a message and the time of the first delivery attempt with the recipient's mailbox provider.

**Average Latency Second and Higher Attempts**

Average time between the time SparkPost accepts a message and the time of the any delivery attempt after the first attempt.

**Block Bounce Rate**

The percentage of messages that are "blocked" bounced.  Calculated by *number of blocked bounces / number of messages sent*

**Block Bounced**

Number of messages that are "blocked" bounced by the recipient's mailbox provider.  (A block bounce occurs when a message is rejected due to message and content filtering rules such as URL blocks, IP blocks, lack of proper headers, etc.,)

**Bounced**

Number of messages that are bounced for all reasons except admin bounces.  (Includes the less common out-of-band bounces.)

**Click-Through Rate (approximated)**

Percentage of “accepted” messages that have at least one click.

**Delayed**

Number of times that messages are temporarily rejected by the recipient's mailbox provider; a raw count of delay events.  Note - this is a raw count of all delays (4xx rejections) and does not represent the number of messages that are currently delayed or how many messages were ever delayed.

**Delayed First Attempt**

Number of messages that are temporarily rejected by the recipient's mailbox provider on the first delivery attempt.

**Delivered First Attempt**

Number of messages that are accepted by the recipient's mailbox provider on the first delivery attempt.

**Delivered Second and Higher Attempts**

Number of messages that are accepted by the recipient's mailbox provider on any delivery attempt other than the first attempt.

**Delivery Message Volume**

Total size of delivered messages in bytes (includes attachments). 

**Generation Failure**

Number of messages that SparkPost is unable to generate - a common reason for this event is a template syntax error. 

**Generation Rejection**

Number of messages that SparkPost is unable to generate for policy reasons - a common reason for this event is a suppressed recipient.

**Hard Bounce Rate**

The percentage of messages that are "hard" bounced.  Calculated by *number of hard bounces / number of messages sent.*

**Hard Bounced**

Number of messages that are "hard" bounced by the recipient's mailbox provider.  (A hard bounce occurs when recipient's mailbox provider states that the recipient's email address is not a valid address.)

**Injected**

Number of messages for which SparkPost attempts delivery.  This is the number of messages targeted minus any that SparkPost was not able to attempt delivery.

**Open Rate**

Percentage of “accepted” messages that are either rendered or have at least one click.

**Policy Rejection**

Number of messages that SparkPost is unable to generate for policy reasons - a common reason for this event is when a daily limit is exceeded.

**Rejected**

Number of messages that SparkPost is unable to generate for various reasons. Calculated by the sum of generation rejections + generation failures + policy rejections.

**Sent**

Number of messages for which SparkPost attempts delivery.  This is the number of messages targeted minus any that SparkPost is not able to attempt delivery.

**Soft Bounce Rate**

The percentage of messages that are "soft" bounced.  Calculated by *number of soft bounces / number of messages sent*

**Soft Bounced**

Number of messages that are "soft" bounced by the recipient's mailbox provider.  (A soft bounce occurs when recipient's mailbox provider states that message cannot be accepted at this time, common example: mailbox full.)

**Spam Complaints**

Number of spam complaints that are received by SparkPost.

**Undetermined Bounce Rate**

The percentage of messages that bounce for "undetermined" reasons.  Calculated by *number of undetermined bounces / number of messages sent.*

**Undetermined Bounced**

Number of messages that bounce by the recipient's mailbox provider for "undetermined" reasons. 

**Unique Clicks (approximated)**

Number of messages that have at least one link clicked.

**Unique Confirmed Opens (approximated)**

Number of messages opened or have at least one link clicked.

**Unique Rendered (approximated)**

Number of unique recipients who open a message.
