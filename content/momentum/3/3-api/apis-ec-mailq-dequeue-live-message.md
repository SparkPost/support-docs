---
lastUpdated: "03/26/2020"
title: "ec_mailq_dequeue_live_message"
description: "ec mailq dequeue live message Removes a message from the mail queues and returns it if found ec message ec mailq dequeue live message mid message id mid Removes a message from the mail queues and returns it if found When this function returns an ec message it must take..."
---

<a name="apis.ec_mailq_dequeue_live_message"></a> 
## Name

ec_mailq_dequeue_live_message — Removes a message from the mail queues and returns it if found

## Synopsis

`#include "mail_queue.h"`

| `ec_message * **ec_mailq_dequeue_live_message** (` | <var class="pdparam">mid</var>`)`; |   |

`message_id * <var class="pdparam">mid</var>`;<a name="idp54358768"></a> 
## Description

Removes a message from the mail queues and returns it if found.

### Note

When this function returns an ec_message, it must take responsibility for that message.

**<a name="idp54361456"></a> Parameters**

<dl class="variablelist">

<dt>mid</dt>

<dd>

A message ID. For a definition of this data structure see [“message_id”](/momentum/3/3-api/structs-message-id).

</dd>

</dl>

**<a name="idp54364768"></a> Return Values**

This function returns an ec_message struct. For a definition of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

**<a name="idp54366304"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp54367840"></a> 
## See Also

[ec_mailq_insert_active](/momentum/3/3-api/apis-ec-mailq-insert-active), [ec_mailq_message_requeue](/momentum/3/3-api/apis-ec-mailq-message-requeue) and [ec_mailq_find_live_message](/momentum/3/3-api/apis-ec-mailq-find-live-message)