---
lastUpdated: "03/26/2020"
title: "spool_disk_queue_state"
description: "spool disk queue state Show the state of the queue on disk void spool disk queue state total progress int total int progress Show the state of the queue on disk total The size of the disk queue progress How much of the queue has been processed This function returns..."
---

<a name="apis.spool_disk_queue_state"></a> 
## Name

spool_disk_queue_state — Show the state of the queue on disk

## Synopsis

`#include "spool.h"`

| `void **spool_disk_queue_state** (` | <var class="pdparam">total</var>, |   |
|   | <var class="pdparam">progress</var>`)`; |   |

`int * <var class="pdparam">total</var>`;
`int * <var class="pdparam">progress</var>`;<a name="idp62631776"></a> 
## Description

Show the state of the queue on disk.

**<a name="idp62632992"></a> Parameters**

<dl class="variablelist">

<dt>total</dt>

<dd>

The size of the disk queue.

</dd>

<dt>progress</dt>

<dd>

How much of the queue has been processed.

</dd>

</dl>

**<a name="idp62637584"></a> Return Values**

This function returns void. After execution, `total` contains the disk queue size and `progress` shows how much of the queue has been processed.

**<a name="idp62639504"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp62641360"></a> 
## See Also