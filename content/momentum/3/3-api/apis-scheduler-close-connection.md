---
lastUpdated: "03/26/2020"
title: "scheduler_close_connection"
description: "scheduler close connection Have the scheduler clean up a connection void scheduler close connection dc domain delivery construct dc const char domain Have the scheduler clean up a connection dc A delivery construct For documentation of this data structure see Section 68 11 delivery construct domain A string name of..."
---

<a name="apis.scheduler_close_connection"></a> 
## Name

scheduler_close_connection — Have the scheduler clean up a connection

## Synopsis

`#include "mail_queue.h"`

| `void **scheduler_close_connection** (` | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`delivery_construct * <var class="pdparam">dc</var>`;
`const char * <var class="pdparam">domain</var>`;<a name="idp58872240"></a> 
## Description

Have the scheduler clean up a connection.

**<a name="idp58873456"></a> Parameters**

<dl class="variablelist">

<dt>dc</dt>

<dd>

A `delivery_construct`. For documentation of this data structure see [“delivery_construct”](/momentum/3/3-api/structs-delivery-construct)

</dd>

<dt>domain</dt>

<dd>

A string name of the domain.

</dd>

</dl>

**<a name="idp58879056"></a> Return Values**

This function returns `void`.

**<a name="idp58880416"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp58881952"></a> 
## See Also

[scheduler_reuse_connection](/momentum/3/3-api/apis-scheduler-reuse-connection)