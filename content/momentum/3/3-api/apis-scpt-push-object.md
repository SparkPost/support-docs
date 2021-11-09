---
lastUpdated: "03/26/2020"
title: "scpt_push_object"
description: "scpt push object Box a C structure to pass into a scriptlet routine void scpt push object thr objtype object scpt thread thr const char objtype void object Box a C structure to pass into a scriptlet routine thr The script thread For a description of this data type see..."
---

<a name="apis.scpt_push_object"></a> 
## Name

scpt_push_object — Box a C structure to pass into a scriptlet routine

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `void **scpt_push_object** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">objtype</var>, |   |
|   | <var class="pdparam">object</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`const char * <var class="pdparam">objtype</var>`;
`void * <var class="pdparam">object</var>`;<a name="idp59255648"></a> 
## Description

Box a C structure to pass into a scriptlet routine.

**<a name="idp59256880"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

The script thread. For a description of this data type see [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread).

</dd>

<dt>objtype</dt>

<dd>

The object type.

</dd>

<dt>object</dt>

<dd>

A pointer to the object.

</dd>

</dl>

**<a name="idp59263872"></a> Return Value**

This function returns void.

**<a name="idp59264784"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59266336"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*                         ](script "Chapter 42. Scriptlet (and Alerting) Functions") and [scpt_push_object2](/momentum/3/3-api/apis-scpt-push-object-2)