---
lastUpdated: "03/26/2020"
title: "mail_queue_active_queue_for_binding"
description: "mail queue active queue for binding Returns the active queue for a binding Skiplist mail queue active queue for binding mq binding create mail queue mq int binding int create Returns the active queue for a given binding queue A pointer to a mail queue struct For documentation of this..."
---

<a name="apis.mail_queue_active_queue_for_binding"></a> 
## Name

mail_queue_active_queue_for_binding — Returns the active queue for a binding

## Synopsis

`#include "mail_queue.h"`

| `Skiplist * **mail_queue_active_queue_for_binding** (` | <var class="pdparam">mq</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">create</var>`)`; |   |

`mail_queue * <var class="pdparam">mq</var>`;
`int <var class="pdparam">binding</var>`;
`int <var class="pdparam">create</var>`;<a name="idp54529088"></a> 
## Description

Returns the active queue for a given binding.

**<a name="idp54530320"></a> Parameters**

<dl class="variablelist">

<dt>queue</dt>

<dd>

A pointer to a mail_queue struct. For documentation of this data structure see [“mail_queue”](/momentum/3/3-api/structs-mail-queue).

</dd>

<dt>binding</dt>

<dd>

The binding slot.

</dd>

<dt>create</dt>

<dd>

An integer, typically 0 or 1\. If you intend to insert a new message into the queue, then pass `1` to this parameter. Alternatively, pass this parameter `0` if you are simply searching for a message in the queue.

</dd>

</dl>

**<a name="idp54538448"></a> Return Values**

This function returns the address of the active queue for the binding (or NULL if it is empty). It returns a pointer to a Skiplist. For documentation of this data structure see [“Skiplist”](/momentum/3/3-api/structs-skiplist)

**<a name="idp54540096"></a> Threading**

It is only legal to call this function in the `Scheduler` thread.

<a name="idp54541648"></a> 
## See Also

[__get_global_mail_queue](/momentum/3/3-api/apis-get-global-mail-queue), [mail_queue_size](/momentum/3/3-api/apis-mail-queue-size), [mail_queue_delayed_size](/momentum/3/3-api/apis-mail-queue-delayed-size), and [mail_queue_purge_domain_binding](/momentum/3/3-api/apis-mail-queue-purge-domain-binding).