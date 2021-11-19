---
lastUpdated: "03/26/2020"
title: "annotate_batch"
description: "annotate batch Allow a module to assume responsibility for batch annotation int core annotate batch closure head void closure sp async message head This hook allows a module to assume responsibility for batch annotation Add the custom annotation to the message context of each message in the batch When using..."
---

<a name="hooks.core.annotate_batch"></a> 
## Name

annotate_batch — Allow a module to assume responsibility for batch annotation

## Synopsis

`#include "hooks/core/annotate_batch.h"`

| `int **core_annotate_batch** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">head</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`sp_async_message * <var class="pdparam">head</var>`;<a name="idp40734608"></a> 
## Description

This hook allows a module to assume responsibility for batch annotation. Add the custom annotation to the message context of each message in the batch. When using this hook you must also use the `assess_batch` hook to read this custom annotation.

**<a name="idp40736480"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>head</dt>

<dd>

This parameter is the `sp_async_message` head pointer that contains the whole batch. For a description of this data type see [sp_async_message](/momentum/3/3-api/structs-sp-async-message).

</dd>

</dl>

**<a name="idp40297984"></a> Return Values**

If this hook returns `1`, then the standard batch annotation is not performed and no other implementations of this hook are called.

**<a name="idp40299456"></a> Threading**

This hook will be called in the `Scheduler` thread.

<a name="idp40301296"></a> 
## See Also

[“ec_message”](/momentum/3/3-api/structs-ec-message) and [assess_batch](/momentum/3/3-api/hooks-core-assess-batch)