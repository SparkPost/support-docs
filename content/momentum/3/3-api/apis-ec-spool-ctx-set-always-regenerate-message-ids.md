---
lastUpdated: "03/26/2020"
title: "ec_spool_ctx_set_always_regenerate_message_ids"
description: "ec spool ctx set always regenerate message ids Determine whether a spool context regenerates message ids on import void ec spool ctx set always regenerate message ids ctx on ec spool ctx ctx int on Determine whether a spool context regenerates message ids on import ctx The spool context on..."
---

<a name="apis.ec_spool_ctx_set_always_regenerate_message_ids"></a> 
## Name

ec_spool_ctx_set_always_regenerate_message_ids — Determine whether a spool context regenerates message ids on import

## Synopsis

`#include "spool.h"`

| `void **ec_spool_ctx_set_always_regenerate_message_ids** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">on</var>`)`; |   |

`ec_spool_ctx * <var class="pdparam">ctx</var>`;
`int <var class="pdparam">on</var>`;<a name="idp62419312"></a> 
## Description

Determine whether a spool context regenerates message ids on import.

**<a name="idp62420560"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

The spool context.

</dd>

<dt>on</dt>

<dd>

This integer can be set to `0` or `1` indicating whether or not to regenerate the ID. Typically it is set to `1`.

</dd>

</dl>

**<a name="idp62426512"></a> Return Value**

This function returns void.

**<a name="idp62427424"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp62428960"></a> 
## See Also

[“ec_spool_ctx”](/momentum/3/3-api/structs-ec-spool-ctx)