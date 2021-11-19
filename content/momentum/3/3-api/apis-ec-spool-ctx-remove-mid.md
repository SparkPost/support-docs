---
lastUpdated: "03/26/2020"
title: "ec_spool_ctx_remove_mid"
description: "ec spool ctx remove mid Remove the specified message part int ec spool ctx remove mid ctx mid part ec spool ctx ctx message id mid unsigned char part Remove the specified message part from the spool context ctx The spool context mid The message id part The message part..."
---

<a name="apis.ec_spool_ctx_remove_mid"></a> 
## Name

ec_spool_ctx_remove_mid — Remove the specified message part

## Synopsis

`#include "spool.h"`

| `int **ec_spool_ctx_remove_mid** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">mid</var>, |   |
|   | <var class="pdparam">part</var>`)`; |   |

`ec_spool_ctx * <var class="pdparam">ctx</var>`;
`message_id * <var class="pdparam">mid</var>`;
`unsigned char <var class="pdparam">part</var>`;<a name="idp62397024"></a> 
## Description

Remove the specified message part from the spool context.

**<a name="idp62398256"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

The spool context.

</dd>

<dt>mid</dt>

<dd>

The message id.

</dd>

<dt>part</dt>

<dd>

The message part.

</dd>

</dl>

**<a name="idp62404624"></a> Return Values**

On success this function returns `0`; on failure it returns an error number.

**<a name="idp62406560"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62407664"></a> 
## See Also

[“ec_spool_ctx”](/momentum/3/3-api/structs-ec-spool-ctx) and [“message_id”](/momentum/3/3-api/structs-message-id)