---
lastUpdated: "03/26/2020"
title: "scpt_push_object_and_allocate"
description: "scpt push object and allocate Allocate room to hold a boxed C structure of a particular type void scpt push object and allocate thr objtype objsize scpt thread thr const char objtype size t objsize Allocate room to hold a boxed C structure of a particular type This is intended..."
---

<a name="apis.scpt_push_object_and_allocate"></a> 
## Name

scpt_push_object_and_allocate — Allocate room to hold a boxed C structure of a particular type

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `void * **scpt_push_object_and_allocate** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">objtype</var>, |   |
|   | <var class="pdparam">objsize</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`const char * <var class="pdparam">objtype</var>`;
`size_t <var class="pdparam">objsize</var>`;<a name="idp59301488"></a> 
## Description

Allocate room to hold a boxed C structure of a particular type.

This is intended to be used by the generated glue code only.

**<a name="idp59303248"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

The script thread. For a description of this data type see [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread).

</dd>

<dt>objtype</dt>

<dd>

The object type.

</dd>

<dt>objsize</dt>

<dd>

The object size.

</dd>

</dl>

**<a name="idp59310240"></a> Return Value**

This function returnsa pointer to the object.

**<a name="idp59311184"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59312736"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")