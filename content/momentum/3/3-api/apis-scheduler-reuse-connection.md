---
lastUpdated: "03/26/2020"
title: "scheduler_reuse_connection"
description: "scheduler reuse connection Have the scheduler re use the connection void scheduler reuse connection dc domain newe delivery construct dc const char domain Event newe Have the scheduler re use the connection The caller is responsible for creating newe as a copy of the original event allocating newe with the..."
---

<a name="apis.scheduler_reuse_connection"></a> 
## Name

scheduler_reuse_connection — Have the scheduler re-use the connection

## Synopsis

`#include "mail_queue.h"`

| `void **scheduler_reuse_connection** (` | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">newe</var>`)`; |   |

`delivery_construct * <var class="pdparam">dc</var>`;
`const char * <var class="pdparam">domain</var>`;
`Event * <var class="pdparam">newe</var>`;<a name="idp58933568"></a> 
## Description

Have the scheduler re-use the connection. The caller is responsible for creating `newe` as a copy of the original event, allocating `newe` with the memtype `MEMTYPE_EVENT`. This function takes ownership of `newe`, and will ensure that the memory for `newe` is released.

**<a name="idp58937184"></a> Parameters**

<dl class="variablelist">

<dt>dc</dt>

<dd>

A `delivery_construct`. For documentation of this data structure see [“delivery_construct”](/momentum/3/3-api/structs-delivery-construct)

</dd>

<dt>domain</dt>

<dd>

A string name of the domain

</dd>

<dt>newe</dt>

<dd>

An `event`. For documentation of this data structure see [“Event”](/momentum/3/3-api/structs-event).

</dd>

</dl>

**<a name="idp58945648"></a> Return Values**

This function returns `void`.

**<a name="idp58947008"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp58948544"></a> 
## See Also

[scheduler_close_connection](/momentum/3/3-api/apis-scheduler-close-connection)