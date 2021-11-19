---
lastUpdated: "03/26/2020"
title: "ec_spool_ctx_unlock"
description: "ec spool ctx unlock Unlock a spool context Note that it is not safe to unlock the global spool context int ec spool ctx unlock ctx ec spool ctx ctx Unlock a spool context Note that it is not safe to unlock the global spool context ctx The spool context..."
---

<a name="apis.ec_spool_ctx_unlock"></a> 
## Name

ec_spool_ctx_unlock — Unlock a spool context. Note that it is not safe to unlock the global spool context

## Synopsis

`#include "spool.h"`

| `int **ec_spool_ctx_unlock** (` | <var class="pdparam">ctx</var>`)`; |   |

`ec_spool_ctx * <var class="pdparam">ctx</var>`;<a name="idp62506336"></a> 
## Description

Unlock a spool context. Note that it is not safe to unlock the global spool context.

**<a name="idp62507600"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

The spool context to unlock.

</dd>

</dl>

**<a name="idp62510320"></a> Return Values**

Returns `0` on success; on error `-1` is returned.

**<a name="idp62512128"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62513232"></a> 
## See Also

[“ec_spool_ctx”](/momentum/3/3-api/structs-ec-spool-ctx)