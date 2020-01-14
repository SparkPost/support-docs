---
title: "Accepted"
description: "This reporting tab showcases statistics surrounding messages that were accepted With regard to the Accepted Rate the higher the better Targeted The number of messages you sent Spark Post Sent The number of messages that have been delivered or attempted to deliver by Spark Post includes multiple delivery attempts including..."
---

This Signals Analytics report showcases statistics surrounding messages that were accepted. With regard to the accepted rate, the higher the better!

![](media/accepted/accepted-page.png)


**Sent**: The number of messages that have been delivered (or attempted to deliver) by SparkPost (includes multiple delivery attempts, including all In-Band Bounces).

**Accepted:** The number of messages that were accepted by the receiving server.

**Average Latency (First):** In many cases, SparkPost will reach out to a recipient server, the server will accept it, and that’s the end of the transaction. For those emails, this is how long it took, on average, for the transaction to occur from send to inbox. Note: this is in seconds.

**Average Latency (Subsequent):** In some cases, the recipient email server doesn’t accept the first attempt. There could be throttling based on reputation, or there could be an issue with the server. In cases such as these, SparkPost will continue to attempt to send until it gets a response or ultimately times out. The Subsequent avg latency means that SparkPost has continued to attempt to send for this many hours until the recipient servers accepted the email. Note: this can be in hours.

**Average Message Size:** The size of your emails can impact the sending speed. Are they full of images and links? Do they have an attachment (not recommended)? Large emails can impact latency as well.

**Accepted Rates:** As previously mentioned, SparkPost will retry emails if they don’t get an initial response from the recipient server. This is a really great tool to use if you are seeing latency and want to pinpoint if it’s coming from a particular recipient server.

You can also put a domain name in the search window, and it will show how many emails were accepted on the first attempt that way – for a more domain-centric look.
