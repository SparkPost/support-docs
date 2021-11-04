---
lastUpdated: "03/26/2020"
title: "mail_queue_size"
description: "mail queue size Get the size of a mail queue int mail queue size queue mail queue queue Returns the size of a mail queue including active and delayed messages queue A pointer to a mail queue struct For documentation of this data structure see Section 68 58 mail queue..."
---

<a name="apis.mail_queue_size"></a> 
## Name

mail_queue_size — Get the size of a mail queue

## Synopsis

`#include "mail_queue.h"`

| `int **mail_queue_size** (` | <var class="pdparam">queue</var>`)`; |   |

`mail_queue * <var class="pdparam">queue</var>`;<a name="idp54619824"></a> 
## Description

Returns the size of a mail queue, including active and delayed messages.

**<a name="idp54621088"></a> Parameters**

<dl class="variablelist">

<dt>queue</dt>

<dd>

A pointer to a mail_queue struct. For documentation of this data structure see [“mail_queue”](/momentum/3/3-api/structs-mail-queue)

</dd>

</dl>

**<a name="idp54624448"></a> Return Values**

This function returns the size of a mail queue: the total number of messages in the active and delayed queues.

**<a name="idp54625456"></a> Threading**

It is only legal to call this function in the `Scheduler` thread.

<a name="idp54627008"></a> 
## See Also

[mail_queue_active_queue_for_binding](/momentum/3/3-api/apis-mail-queue-active-queue-for-binding), [mail_queue_delayed_size](/momentum/3/3-api/apis-mail-queue-delayed-size), and [mail_queue_purge_domain_binding](/momentum/3/3-api/apis-mail-queue-purge-domain-binding).