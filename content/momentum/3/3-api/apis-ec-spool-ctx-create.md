---
lastUpdated: "03/26/2020"
title: "ec_spool_ctx_create"
description: "ec spool ctx create Create a spool context for a location on disk ec spool ctx ec spool ctx create basedir const char basedir Create a spool context for a location on disk basedir The location of the spool on disk This function returns a context representing the spool location..."
---

<a name="apis.ec_spool_ctx_create"></a> 
## Name

ec_spool_ctx_create — Create a spool context for a location on disk

## Synopsis

`#include "spool.h"`

| `ec_spool_ctx * **ec_spool_ctx_create** (` | <var class="pdparam">basedir</var>`)`; |   |

`const char * <var class="pdparam">basedir</var>`;<a name="idp62282512"></a> 
## Description

Create a spool context for a location on disk.

**<a name="idp62283744"></a> Parameters**

<dl class="variablelist">

<dt>basedir</dt>

<dd>

The location of the spool on disk.

</dd>

</dl>

**<a name="idp62286496"></a> Return Values**

This function returns a context representing the spool location. For the definition of this struct see [ec_spool_ctx](/momentum/3/3-api/structs-ec-spool-ctx).

**<a name="idp62288224"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp62289760"></a> 
## See Also

[“ec_spool_ctx”](/momentum/3/3-api/structs-ec-spool-ctx)