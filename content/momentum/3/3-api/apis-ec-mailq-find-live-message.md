---
lastUpdated: "03/26/2020"
title: "ec_mailq_find_live_message"
description: "ec mailq find live message Finds a message in the message queues and returns it ec message ec mailq find live message mid message id mid This function finds a message in the message queues and returns it The message is still queued mid A message id struct For a..."
---

<a name="apis.ec_mailq_find_live_message"></a> 
## Name

ec_mailq_find_live_message — Finds a message in the message queues and returns it

## Synopsis

`#include "mail_queue.h"`

| `ec_message * **ec_mailq_find_live_message** (` | <var class="pdparam">mid</var>`)`; |   |

`message_id * <var class="pdparam">mid</var>`;<a name="idp54391360"></a> 
## Description

This function finds a message in the message queues and returns it. The message is still queued.

**<a name="idp54392640"></a> Parameters**

<dl class="variablelist">

<dt>mid</dt>

<dd>

A message_id struct. For a definition of this data structure see [“message_id”](/momentum/3/3-api/structs-message-id).

</dd>

</dl>

**<a name="idp54395968"></a> Return Values**

This function returns an ec_message struct. For a definition of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

**<a name="idp54397504"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp54399040"></a> 
## See Also

[ec_mailq_dequeue_live_message](/momentum/3/3-api/apis-ec-mailq-dequeue-live-message), [ec_mailq_message_requeue](/momentum/3/3-api/apis-ec-mailq-message-requeue) and [ec_mailq_insert_active](/momentum/3/3-api/apis-ec-mailq-insert-active)