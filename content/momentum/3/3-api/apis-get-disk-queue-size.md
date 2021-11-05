---
lastUpdated: "03/26/2020"
title: "get_disk_queue_size"
description: "get disk queue size Gets the number of messages on the disk queue int get disk queue size void Gets the number of messages on the disk queue This function returns the number of messages on the disk queue It is legal to call this function in any thread..."
---

<a name="apis.get_disk_queue_size"></a> 
## Name

get_disk_queue_size — Gets the number of messages on the disk queue

## Synopsis

`#include "spool.h"`

| `int **get_disk_queue_size** (` | `)`; |   |

`void`;<a name="idp62581488"></a> 
## Description

Gets the number of messages on the disk queue.

**<a name="idp62582720"></a> Return Values**

This function returns the number of **messages** on the disk queue.

**<a name="idp62584384"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62585488"></a> 
## See Also