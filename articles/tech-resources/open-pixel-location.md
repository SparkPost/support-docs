---
title: "Open Pixel Placement on SparkPost"
description: "The Spark Post web hooks interface allows you to push web hook events of your choice to your own endpoint for processing You can also retrieve event level data through the Message Events API There are three 3 main categories of webhook events in Spark Post Message Events Describe the..."
---

The open pixel is a 1x1 transparent gif that we insert into messages to track which recipients open messages (aka renders). The pixel is downloaded from our server which allows us to record which recipient opened which message. Certain ISPs, like Gmail, will clip messages beyond a certain size, which can be problematic in tracking opens when the location of the open pixel is inserted at the bottom or potentially the middle of an email body, if the given message size is large. In order to address this, SparkPost inserts an open pixel at both the top and the bottom 

Historically, SparkPost insert this pixel at the bottom of outgoing messages for customers who choose open tracking = on.
