---
lastUpdated: "03/26/2020"
title: "spool_name_to_mid"
description: "spool name to mid Create a message ID int spool name to mid mid name message id mid const char name Create a message ID mid The message id name The spool name On success this function returns 1 on failure 0 is returned After execution mid contains the message..."
---

<a name="apis.spool_name_to_mid"></a> 
## Name

spool_name_to_mid — Create a message ID

## Synopsis

`#include "spool.h"`

| `int **spool_name_to_mid** (` | <var class="pdparam">mid</var>, |   |
|   | <var class="pdparam">name</var>`)`; |   |

`message_id * <var class="pdparam">mid</var>`;
`const char * <var class="pdparam">name</var>`;<a name="idp62674656"></a> 
## Description

Create a message ID.

**<a name="idp62675856"></a> Parameters**

<dl class="variablelist">

<dt>mid</dt>

<dd>

The message id.

</dd>

<dt>name</dt>

<dd>

The spool name.

</dd>

</dl>

**<a name="idp62680384"></a> Return Values**

On success, this function returns `1`; on failure, `0` is returned. After execution, `mid` contains the message id.

**<a name="idp62682688"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62683792"></a> 
## See Also

[“message_id”](/momentum/3/3-api/structs-message-id)