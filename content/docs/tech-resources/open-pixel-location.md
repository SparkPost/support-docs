---
lastUpdated: "02/08/2020"
title: "Open Pixel Placement on SparkPost"
description: "The open pixel is a 1x1 transparent gif that we insert into messages to track which recipients open messages (aka renders). When an end recipient has images turned on in their client, the pixel is downloaded from our server which allows us to record which recipient opened which message..."
---

## Introduction ##

The open pixel is a 1x1 transparent gif that we insert into messages to track which recipients open messages (aka renders). When an end recipient has images turned on in their client, the pixel is downloaded from our server, which allows us to record which recipient opened which message. Certain ISPs, like Gmail, will clip messages beyond a certain size, which can be problematic in tracking opens when the location of the open pixel is inserted at the bottom of an email body, if the given message size is large. For example, Gmail will truncate messages larger than 102kb.

In order to address this issue, SparkPost inserts an open pixel at both the top _and_ bottom of a message, for outbound messages which have `open_tracking = on`. This also ensures our `rendered` metric accurately reflects the number of recipients who open the message, rather than simply view a fragment in their client's preview pane.

## Open Pixel Message Events and Metrics ##

The open pixel inserted at the top of the message has a unique Message Event type called `initial_open`, while the the open pixel inserted at the bottom of the message will have an event type simply called `open`. 

Top open pixel downloads are also accounted for in our Metrics API and UI reporting with two specific metrics:

1. `Initial Rendered`: This metric is defined as the total number of open pixel downloads.
1. `Unique Initial Rendered`: This metric is defined as the total number of _unique_ open pixel downloads.

## What Are the Benefits of Using Both a Top and Bottom Open Pixel Together?

A useful way to use the `open` and `initial_open` events would be look at the difference between the two for the same set of messages. If they are the same, then recipients who are opening the message are rendering the entire message in their email client, leading to a better end-user experience. On the other hand, if there is a difference between opens and `initial_opens`, it means the entire message has not been rendered, meaning that the message was likely clipped.

The combination of SparkPost’s `rendered` and `initial_rendered` metrics provides important insight about a recipient's depth of engagement with your message. It will be useful for making decisions about the content of email messages, message length, and what content to include at the top and bottom of the message body.

## Initial Open Pixel Control and Notes

In order for the initial open pixel to function correctly, your content _must_ include both valid HTML and BODY tags.

To enable/disable the feature, set the `initial_open_pixel_tracking` string in the `options` object to `false` or `true` at the account API endpoint. For example, to turn the initial open pixel off:

```PUT /api/v1/account
{
 "company_name": "SparkPost",
 "options": {
   "initial_open_pixel_tracking": false
 }
}

Response:

{
 "results": {
   "message": "Account has been updated"
 }
}
