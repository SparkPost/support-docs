---
lastUpdated: "03/26/2020"
title: "get_spool_name"
description: "get spool name Get the spool name from the message ID char get spool name mid message id mid Get the spool name from the message ID mid The message id On success this function returns the spool name It is legal to call this function in the Scheduler thread..."
---

<a name="apis.get_spool_name.xml"></a> 
## Name

get_spool_name — Get the spool name from the message ID

## Synopsis

`#include "spool.h"`

| `char * **get_spool_name** (` | <var class="pdparam">mid</var>`)`; |   |

`message_id * <var class="pdparam">mid</var>`;<a name="idp62594864"></a> 
## Description

Get the spool name from the message ID.

**<a name="idp62596080"></a> Parameters**

<dl class="variablelist">

<dt>mid</dt>

<dd>

The message id.

</dd>

</dl>

**<a name="idp62598784"></a> Return Values**

On success, this function returns the spool name.

**<a name="idp62599728"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp62601264"></a> 
## See Also

[“message_id”](/momentum/3/3-api/structs-message-id)