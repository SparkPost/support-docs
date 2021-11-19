---
lastUpdated: "03/26/2020"
title: "ec_spool_ctx_lock"
description: "ec spool ctx lock Lock a spool context int ec spool ctx lock ctx ec spool ctx ctx Lock a spool context ctx The spool context to lock Returns 0 on success or the pid of the process that holds the lock On error it returns 1 It is legal..."
---

<a name="apis.ec_spool_ctx_lock"></a> 
## Name

ec_spool_ctx_lock — Lock a spool context

## Synopsis

`#include "spool.h"`

| `int **ec_spool_ctx_lock** (` | <var class="pdparam">ctx</var>`)`; |   |

`ec_spool_ctx * <var class="pdparam">ctx</var>`;<a name="idp62378112"></a> 
## Description

Lock a spool context.

**<a name="idp62379312"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

The spool context to lock.

</dd>

</dl>

**<a name="idp62382032"></a> Return Values**

Returns `0` on success, or the pid of the process that holds the lock. On error it returns `-1`.

**<a name="idp62383888"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp62385424"></a> 
## See Also

[“ec_spool_ctx”](/momentum/3/3-api/structs-ec-spool-ctx)