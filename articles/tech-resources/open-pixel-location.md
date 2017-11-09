---
title: "Open Pixel Placement on SparkPost"
description: "The open pixel is a 1x1 transparent gif that we insert into messages to track which recipients open messages (aka renders). The pixel is downloaded from our server which allows us to record which recipient opened which message. Certain ISPs, like Gmail, will clip messages..."
---

## Introduction ##

The open pixel is a 1x1 transparent gif that we insert into messages to track which recipients open messages (aka renders). The pixel is downloaded from our server which allows us to record which recipient opened which message. Certain ISPs, like Gmail, will clip messages beyond a certain size, which can be problematic in tracking opens when the location of the open pixel is inserted at the bottom or potentially the middle of an email body, if the given message size is large. 

In order to address this, SparkPost inserts an open pixel at both the top _and_ the bottom of the message, for outbound messages which have `open_tracking = on`. This also ensures our `rendered` metric accurately reflects the number of recipients who open the message, rather than simply view a fragment in their client's preview pane.

## Open Pixel Message Events and Metrics ##

The open pixel inserted at the top of the message has a unique Message Event type called `initial_open`, while the the open pixel inserted at the bottom of the message will have an event type simply called `open`. 

Top open pixel downloads are also accounted for in our Metrics API and the UI with two specific metrics:

1. `Initial Rendered`: This metric is defined as the total number of open pixel downloads.
1. `Unique Initial Rendered`: This metric is defined as the total number of _unique_ open pixel downloads.

## What Are the Benefits of Using Both a Top and Bottom Open Pixel Together?

A useful way to use the `open` and `initial_open` events would be look at the difference between the two for the same set of messages. If they are the same, then recipients who are opening the message are rendering the entire message in their email client, and potentially reading the entire message as well. On the other hand, if there is a difference between opens and `initial_opens`, it means the entire message has not been rendered, meaning that the message was clipped or was not read in its entirety.

The combination of SparkPost’s `rendered` and `initial_rendered` metrics provides important insight about a recipient's depth of engagement with your message. It will be useful for making decisions about the content of email messages, message length, and what content to include at the top and bottom of the message body.
