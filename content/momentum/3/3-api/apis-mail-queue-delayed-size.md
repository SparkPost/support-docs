---
lastUpdated: "03/26/2020"
title: "mail_queue_delayed_size"
description: "mail queue delayed size Get the size of a delayed queue int mail queue delayed size queue mail queue queue Returns the size of this mail queue's delayed queue queue A pointer to a mail queue struct For documentation of this data structure see Section 68 58 mail queue This..."
---

<a name="apis.mail_queue_delayed_size"></a> 
## Name

mail_queue_delayed_size — Get the size of a delayed queue

## Synopsis

`#include "mail_queue.h"`

| `int **mail_queue_delayed_size** (` | <var class="pdparam">queue</var>`)`; |   |

`mail_queue * <var class="pdparam">queue</var>`;<a name="idp54573824"></a> 
## Description

Returns the size of this mail queue's delayed queue.

**<a name="idp54575056"></a> Parameters**

<dl class="variablelist">

<dt>queue</dt>

<dd>

A pointer to a mail_queue struct. For documentation of this data structure see [“mail_queue”](/momentum/3/3-api/structs-mail-queue)

</dd>

</dl>

**<a name="idp54578416"></a> Return Values**

This function returns the number of messages in this mail queue's delayed queue.

**<a name="idp54579392"></a> Threading**

It is only legal to call this function in the `Scheduler` thread.

<a name="idp54580944"></a> 
## See Also

[__get_global_mail_queue](/momentum/3/3-api/apis-get-global-mail-queue), [mail_queue_active_queue_for_binding](/momentum/3/3-api/apis-mail-queue-active-queue-for-binding), [mail_queue_size](/momentum/3/3-api/apis-mail-queue-size), and [mail_queue_purge_domain_binding](/momentum/3/3-api/apis-mail-queue-purge-domain-binding).