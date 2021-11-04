---
lastUpdated: "02/08/2020"
title: "How Are Messages Retried?"
description: "Both Spark Post and Spark Post Enterprise employ the same settings for message retries including message expiration settings i e the maximum amount of time we will retry a message before we fail it for max attempts and retry intervals which is the time between successive delivery attempts Messages that..."
---

Both SparkPost and SparkPost Enterprise employ the same settings for message retries, including message expiration settings (i.e., the maximum amount of time we will retry a message before we fail it for max attempts) and retry intervals, which is the time between successive delivery attempts.

Messages that fail delivery with a **non-permanent** failure code returned by the receiving MTA will continue to be retried from the delayed queue until the message is either:

1. Successfully delivered.
2. Receives a permanent failure error code back from the receiving MTA.
3. Reaches the message expiration time, at which point SparkPost will automatically fail the message.

### Retry Interval Logic 

SparkPost and SparkPost Enterprise employ an exponential back-off scheme for retrying messages that are sent to the delayed queue and they are:

* On the first failure the message is sent to the delayed queue and retried **20 minutes** later.
* On the second failure, the retry interval doubles to **40 minutes**.
* On the third failure, the retry interval quadruples to **80 minutes**.
* On the fourth failure, the retry interval multiplies by eight, to become **160 minutes**.

This process continues until the message is delivered, or the message expiration timeout is reached, whichever comes first.

### Message Expiration 

The message expiration setting is **72 hours**, which is the maximum amount of time a given message can be attempted before it will automatically fail.
