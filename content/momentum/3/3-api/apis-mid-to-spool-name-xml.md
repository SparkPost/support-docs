---
lastUpdated: "03/26/2020"
title: "mid_to_spool_name"
description: "mid to spool name Get the spool name from the message ID int mid to spool name mid buffer message id mid char buffer Get the spool name from the message ID mid The message id buffer The buffer for the spool name This buffer must be at least SPOOL..."
---

<a name="apis.mid_to_spool_name.xml"></a> 
## Name

mid_to_spool_name — Get the spool name from the message ID

## Synopsis

`#include "spool.h"`

| `int **mid_to_spool_name** (` | <var class="pdparam">mid</var>, |   |
|   | <var class="pdparam">buffer</var>`)`; |   |

`message_id * <var class="pdparam">mid</var>`;
`char * <var class="pdparam">buffer</var>`;<a name="idp62612128"></a> 
## Description

Get the spool name from the message ID.

**<a name="idp62613344"></a> Parameters**

<dl class="variablelist">

<dt>mid</dt>

<dd>

The message id.

</dd>

<dt>buffer</dt>

<dd>

The buffer for the spool name. This buffer must be at least `SPOOL_NAME_LEN` +1 in length. This constant is defined in `spool.h`.

</dd>

</dl>

**<a name="idp62618848"></a> Return Values**

On success, this function returns the length of the spool name.

**<a name="idp62619808"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62620912"></a> 
## See Also

[“message_id”](/momentum/3/3-api/structs-message-id)