---
lastUpdated: "02/08/2020"
title: "What are Out of Band Bounces (OBB)?"
description: "In order to explain what Out Of Band bounces or OBB sometimes also called Asynchronous Bounces are we first need to understand how a recipient server accepts email In most cases a recipient server will either accept or reject an email as it comes in In those cases it will..."
---

In order to explain what out of band bounces (or OBB, sometimes also called Asynchronous Bounces) are, we first need to understand how a recipient server accepts email.

In most cases, a recipient server will either accept or reject an email as it comes in. In those cases it will look at the email, and issue a code 250, which means the message is accepted. If it’s going to bounce, it will issue a code in the 400’s or 500’s, such as a 550.

However, there are some recipient servers that are configured to accept incoming emails in a holding state, and determine later whether the emails are going to be sent to the inbox, or rejected and bounced. Thus, these bounces can take a while to appear, and in this case you may see both an acceptance of the email, and later a bounce. This is why we call them Out of Band, because the bounce would arrive outside of the normal email server transaction.

## Why is the recipient occasionally missing from the Out of Band event?

SparkPost uses three different headers on our outbound messages to attempt to glean recipients from out out of band bounces:

1. `X-MSFBL` header: We encode the `rcpt_to`, `metadata`, `account ID`, and `subaccount ID` in this header.
2. `Message-ID` header: This is a unique value assigned to every individual message sent through SparkPost.
3. `Return-Path` header: We use VERP (variable envelope return path) to encode the account ID and subaccount (if used) that sent the message.

When out of band bounces are returned to SparkPost, we rely on the headers in the message being sent back to us by the ISP in order to attempt to ascertain the recipient. Unfortunately, there is no RFC standard format for out of band bounces, so we often receive out of band bounces which are missing the necessary headers to identify the original recipient, which have been stripped by the ISP.

If we receive the `Message-ID` header in the out of band bounce, we can identify the recipient and the unique message that generated the out of band bounce.

If we receive the `X-MSFBL` header back in the out of band bounce, we can determine the intended recipient, but we will not be able to exactly match it to the unique message the out of band bounce belongs to.

If we receive an out of band bounce which contains neither the `X-MSFBL` or `Message-ID` headers, we can only determine the account ID and subaccount the out of band bounce belongs to, and will increment the number of out of band bounces in the UI/Metrics API reporting by 1.
