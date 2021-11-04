---
lastUpdated: "03/26/2020"
title: "ec_mailq_insert_active"
description: "ec mailq insert active Insert a message into the active queue void ec mailq insert active mq message mail queue mq ec message message Insert a message into the active queue The location of the message in the active queue is determined by its next attempt time as set by..."
---

<a name="apis.ec_mailq_insert_active"></a> 
## Name

ec_mailq_insert_active — Insert a message into the active queue

## Synopsis

`#include "mail_queue.h"`

| `void **ec_mailq_insert_active** (` | <var class="pdparam">mq</var>, |   |
|   | <var class="pdparam">message</var>`)`; |   |

`mail_queue * <var class="pdparam">mq</var>`;
`ec_message * <var class="pdparam">message</var>`;<a name="idp54447552"></a> 
## Description

Insert a message into the active queue. The location of the message in the active queue is determined by its `next_attempt` time (as set by the [ec_message_set_next_attempt](/momentum/3/3-api/apis-ec-message-set-next-attempt) function).

### Note

The message must **not** be in any other Momentum queue when this function is called. Once this function returns, it takes responsibility for the `ec_message` passed in.

**<a name="idp54452096"></a> Parameters**

<dl class="variablelist">

<dt>mq</dt>

<dd>

A pointer to a mail queue. The mail_queue struct is defined at [“mail_queue”](/momentum/3/3-api/structs-mail-queue).

Mail queues are typically determined by looking at the domain record.

</dd>

<dt>message</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

</dl>

**<a name="idp54458432"></a> Return Values**

This function returns void.

**<a name="idp54459344"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp54460880"></a> 
## See Also

[ec_mailq_dequeue_live_message](/momentum/3/3-api/apis-ec-mailq-dequeue-live-message), [ec_mailq_message_requeue](/momentum/3/3-api/apis-ec-mailq-message-requeue) and [ec_mailq_find_live_message](/momentum/3/3-api/apis-ec-mailq-find-live-message)