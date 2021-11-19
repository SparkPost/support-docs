---
lastUpdated: "03/26/2020"
title: "ec_mailq_message_requeue"
description: "ec mailq message requeue Re enqueues a message after a delivery attempt void ec mailq message requeue message now ec message message struct timeval now Re enqueues a message after a delivery attempt The domain to which the message is to be requeued to must be assigned to the message..."
---

<a name="apis.ec_mailq_message_requeue"></a> 
## Name

ec_mailq_message_requeue — Re-enqueues a message after a delivery attempt

## Synopsis

`#include "mail_queue.h"`

| `void **ec_mailq_message_requeue** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp54472976"></a> 
## Description

Re-enqueues a message after a delivery attempt.

### Note

The domain to which the message is to be requeued to must be assigned to the message prior to calling this function. Such assignment may happen with `ec_message_assign_domain` or `ec_message_assign_domain_by_name`.

Once this function returns, it takes responsibility for the `ec_message` passed in.

**<a name="idp54477152"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

An ec_message struct. For the definition of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>now</dt>

<dd>

A struct timeval.

</dd>

</dl>

**<a name="idp54482320"></a> Return Values**

This function returns void.

**<a name="idp54483232"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp54484768"></a> 
## See Also

[ec_mailq_dequeue_live_message](/momentum/3/3-api/apis-ec-mailq-dequeue-live-message), [ec_mailq_insert_active](/momentum/3/3-api/apis-ec-mailq-insert-active) and [ec_mailq_find_live_message](/momentum/3/3-api/apis-ec-mailq-find-live-message)