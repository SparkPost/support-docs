---
lastUpdated: "03/26/2020"
title: "set_delayed_queue_event"
description: "set delayed queue event Schedule a mail queue maintainer for this mail queue void set delayed queue event mq now mail queue mq struct timeval now Schedule a mail queue maintainer for this mail queue mq A pointer to a mail queue struct For documentation of this data structure see..."
---

<a name="apis.set_delayed_queue_event"></a> 
## Name

set_delayed_queue_event — Schedule a mail queue maintainer for this `mail_queue`

## Synopsis

`#include "mail_queue.h"`

| `void **set_delayed_queue_event** (` | <var class="pdparam">mq</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`mail_queue * <var class="pdparam">mq</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp51944800"></a> 
## Description

Schedule a mail queue maintainer for this `mail_queue`.

**<a name="idp51946464"></a> Parameters**

<dl class="variablelist">

<dt>mq</dt>

<dd>

A pointer to a mail_queue struct. For documentation of this data structure see [“mail_queue”](/momentum/3/3-api/structs-mail-queue).

</dd>

<dt>now</dt>

<dd>

A pointer to a timeval struct, which may be NULL.

**Configuration Change. ** Prior to version 3.0, NULL was not an allowed value.

</dd>

</dl>

**<a name="idp51953344"></a> Return Values**

This function returns `void`.

**<a name="idp51954704"></a> Threading**

It is only legal to call this function in the `Scheduler` thread.

<a name="idp51956256"></a> 
## See Also

[mail_queue_size](/momentum/3/3-api/apis-mail-queue-size), [mail_queue_delayed_size](/momentum/3/3-api/apis-mail-queue-delayed-size), and [mail_queue_purge_domain_binding](/momentum/3/3-api/apis-mail-queue-purge-domain-binding).