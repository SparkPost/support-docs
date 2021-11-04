---
lastUpdated: "02/08/2020"
title: "Message Delivery: Understanding Delays and Bounces"
description: "The final disposition for all messages sent from Spark Post is either delivered or bounced but messages can be delayed and delivery retried a number of times before the final state is determined Delays aka Temporary Failures or 4 xx Errors When we receive a 4 xx rejection from the..."
---

The final disposition for all messages sent from SparkPost is either delivered or bounced but messages can be "delayed" and delivery retried a number of times before the final state is determined. 

### Delays (aka Temporary Failures or 4xx Errors) 

When we receive a 4xx rejection from the ISP, we log a "delay" event that includes the timestamp and the attempt count (example: "num_retries":"6") and retry again later.  Our proprietary retry algorithm attempts delivery for each message a certain number of times over a time period; the process is dynamic but it would not be unusual for a message to be retried up to 6 times over 72 hours.  This process cannot be altered or tweaked for SparkPost customers. 

If we hit the maximum number of retries (or maximum time period the message is eligible for delivery) and the remote server still has not accepted the message, we will fail the message with a timeout reason - in this case we will log a "bounce" event.  The bounce classification routine will use the **last** 4xx response string to determine what type of bounce should be recorded.  In addition, we also record the code from the last 4xx code from the ISP in the bounce event, here's an example:

"reason":"554 5.4.7 [internal] message timeout (last transfail: 454 4.4.4 [internal] no MX or A for domain)"

**Note**: These types of bounces (those for which the remote server continually rejects the message with a 4xx error) are not usually classified as hard bounces.

There is also another type of delay that you may see:

"reason":"451 4.3.0 [internal] Sending IP temporarily suspended"

These delays are due to the Adaptive Email Delivery (AEN) doing it's job.  The AEN is an integral part of SparkPost that moderates traffic to comply with ISP/server rules and feedback. When we get push back from them, our software detects these bounces and takes the appropriate action to "back off" of the receiving endpoint. Listening to feedback from ISPs allow us to stay on good terms and build a better reputation, resulting in higher deliverability for everyone on the platform.

ISPs or recipient MTAs delay messages for multiple reasons such as mail server busy or over loaded at the time of send, etc. Like other Delays, they are retried until delivered or timing out after 72 hours. 

The AEN is only acting on the behavior of the ISP and is meant to hold onto your message until the ISP is able to accept it rather than receiving a block bounce and not delivering at all.  It works on the concept of better late than never.  

### Bounces (aka Permanent Failures or 5xx Errors)

When we receive a 5xx response from the ISP, we will log a "bounce" event and determine the bounce classification based on the 5xx response string.  (Bounces classified as "hard" bounces (code 10) are added to the suppression list.)
