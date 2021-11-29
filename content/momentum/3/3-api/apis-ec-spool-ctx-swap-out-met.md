---
lastUpdated: "03/26/2020"
title: "ec_spool_ctx_swap_out_met"
description: "ec spool ctx swap out met Swap out everything about the message except for the body int ec spool ctx swap out met ctx mid force ec spool ctx ctx message id mid int force Swap out everything about a message such as the envelope size context dictionaries etc except..."
---

<a name="apis.ec_spool_ctx_swap_out_met"></a> 
## Name

ec_spool_ctx_swap_out_met — Swap out everything about the message except for the body

## Synopsis

`#include "spool.h"`

| `int **ec_spool_ctx_swap_out_met** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">mid</var>, |   |
|   | <var class="pdparam">force</var>`)`; |   |

`ec_spool_ctx * <var class="pdparam">ctx</var>`;
`message_id * <var class="pdparam">mid</var>`;
`int <var class="pdparam">force</var>`;<a name="idp62483744"></a> 
## Description

Swap out everything about a message such as the envelope, size, context dictionaries, etc.) except for the body.

**<a name="idp62485040"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

The spool context.

</dd>

<dt>mid</dt>

<dd>

The message id.

</dd>

<dt>force</dt>

<dd>

Set this parameter to `1` to force a swap out. Otherwise set it to `0`.

</dd>

</dl>

**<a name="idp62492320"></a> Return Values**

On success this function returns `EC_MSG_SWAP_RESULT_COMPLETE` or `EC_MSG_SWAP_RESULT_PARTIAL`; on failure `EC_MSG_SWAP_RESULT_ERR` is returned.

**<a name="idp62494624"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62495728"></a> 
## See Also

[“ec_spool_ctx”](/momentum/3/3-api/structs-ec-spool-ctx) and [“message_id”](/momentum/3/3-api/structs-message-id)