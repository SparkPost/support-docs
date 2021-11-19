---
lastUpdated: "02/08/2020"
title: "What counts towards your daily and monthly usage?"
description: "What counts towards your daily and monthly usage All targeted injections including messages you send and attempt to send count toward your daily and monthly usage and sending limits These include Messages that are accepted by Spark Post including those sent to a sinkhole address This is the Injected count..."
---

## What counts towards your daily and monthly usage?

All targeted injections, including messages you send and attempt to send, count toward your daily and monthly usage and sending limits. These include:

* Messages that are accepted by SparkPost, including those sent to a sinkhole address. This is the "Injected" count in the UI and Metrics API.
* Messages that are rejected by SparkPost and emit any type of rejection event. This is the "Rejected" count in the UI and Metrics API. 

The count of Targeted messages is available in the UI and Metrics API.  Targeted is the sum of Injected and Rejected. 

Note that a message addressed to N recipients (whether To, Cc, or Bcc) will increase your usage by N.
