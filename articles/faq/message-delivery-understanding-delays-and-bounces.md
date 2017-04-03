---
title: "Message Delivery: Understanding Delays and Bounces"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2444819-message-delivery-understanding-delays-and-bounces"
description: "The final disposition for all messages sent from Spark Post is either delivered or bounced but messages can be delayed and delivery retried a number of times before the final state is determined Delays aka Temporary Failures or 4 xx Errors When we receive a 4 xx rejection from the..."
---

The final disposition for all messages sent from SparkPost is either delivered or bounced but messages can be "delayed" and delivery retried a number of times before the final state is determined.  

 ### Delays (aka Temporary Failures or 4xx Errors) 

When we receive a 4xx rejection from the ISP, we log a "delay" event that includes the timestamp and the attempt count (example: "num_retries":"6") and retry again later.  Our proprietary retry algorithm attempts delivery for each message a certain number of times over a time period; the process is dynamic but it would not be unusual for a message to be retried up to 6 times over 72 hours.  This process cannot be altered or tweaked for SparkPost customers. 

If we hit the maximum number of retries (or maximum time period the message is eligible for delivery) and the remote server still has not accepted the message, we will fail the message with a timeout reason - in this case we will log a "bounce" event.  The bounce classification routine will use the **last** 4xx response string to determine what type of bounce should be recorded.  In addition, we also record the code from the last 4xx code from the ISP in the bounce event, here's an example:
 `"reason":"554 5.4.7 [internal] message timeout (last transfail: 454 4.4.4 [internal] no MX or A for domain)"`**Note**: These types of bounces (those for which the remote server continually rejects the message with a 4xx error) are not usually classified as hard bounces.

### Bounces (aka Permanent Failures or 5xx Errors)

When we receive a 5xx response from the ISP, we will log a "bounce" event and determine the bounce classification based on the 5xx response string.  (Bounces classified as "hard" bounces (code 10) are added to the suppression list.)