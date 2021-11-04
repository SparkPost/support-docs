---
lastUpdated: "03/26/2020"
title: "scpt_push_object_and_allocate2"
description: "scpt push object and allocate 2 Allocate room to hold a boxed C structure of a particular type void scpt push object and allocate 2 thr objtype typep objsize scpt thread thr const char objtype scpt objtype typep size t objsize Allocate room to hold a boxed C structure of..."
---

<a name="apis.scpt_push_object_and_allocate2"></a> 
## Name

scpt_push_object_and_allocate2 — Allocate room to hold a boxed C structure of a particular type

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `void * **scpt_push_object_and_allocate2** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">objtype</var>, |   |
|   | <var class="pdparam">typep</var>, |   |
|   | <var class="pdparam">objsize</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`const char * <var class="pdparam">objtype</var>`;
`scpt_objtype ** <var class="pdparam">typep</var>`;
`size_t <var class="pdparam">objsize</var>`;<a name="idp59325248"></a> 
## Description

Allocate room to hold a boxed C structure of a particular type.

This is intended to be used by the generated glue code only.

**Configuration Change. ** This feature is available starting from Momentum 3.2.

**<a name="idp59328672"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

The script thread. For a description of this data type see [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread).

</dd>

<dt>objtype</dt>

<dd>

The object type.

</dd>

<dt>typep</dt>

<dd>

The in/out parameter. For a discussion of this data type see [“scpt_objtype”](/momentum/3/3-api/structs-scpt-objtype).

</dd>

<dt>objsize</dt>

<dd>

The object size.

</dd>

</dl>

**<a name="idp59338096"></a> Return Value**

This function returns a pointer to the object.

**<a name="idp59339040"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59340592"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")