---
lastUpdated: "03/26/2020"
title: "max_recipients_per_batch"
description: "max recipients per batch maximum number of recipients to send in a single outbound message transaction max recipients per batch 100 For a given multi recipient message leaving the system this configuration directive specifies the maximum number of recipients to be sent for a given batch The default value is..."
---

<a name="conf.ref.max_recipients_per_batch"></a> 
## Name

max_recipients_per_batch — maximum number of recipients to send in a single outbound message transaction

## Synopsis

`max_recipients_per_batch = 100`

<a name="idp25260000"></a> 
## Description

For a given multi-recipient message leaving the system, this configuration directive specifies the maximum number of recipients to be sent for a given batch.

The default value is `100`. For example, if a message has `200` recipients and `max_recipients_per_batch` is set to `100`, then Momentum will attempt to deliver the message in two batches containing 100 recipients.

<a name="idp25264336"></a> 
## Scope

max_recipients_per_batch is valid in the binding, binding_group, domain and global scopes.