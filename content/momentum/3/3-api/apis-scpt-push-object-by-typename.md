---
lastUpdated: "03/26/2020"
title: "scpt_push_object_by_typename"
description: "scpt push object by typename box a C structure to pass into a scriptlet routine void scpt push object by typename thr type name typep object flags scpt thread thr const char type name scpt objtype typep void object int flags Configuration Change This feature is available starting from Momentum..."
---

<a name="apis.scpt_push_object_by_typename"></a> 
## Name

scpt_push_object_by_typename — box a C structure to pass into a scriptlet routine

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `void **scpt_push_object_by_typename** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">type_name</var>, |   |
|   | <var class="pdparam">typep</var>, |   |
|   | <var class="pdparam">object</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`const char * <var class="pdparam">type_name</var>`;
`scpt_objtype ** <var class="pdparam">typep</var>`;
`void * <var class="pdparam">object</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp59353824"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Box a C structure to pass it into a scriptlet routine.

**<a name="idp59356720"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

The script thread. For a description of this data type see [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread).

</dd>

<dt>typename</dt>

<dd>

The name of the type of object being pushed.

</dd>

<dt>typep</dt>

<dd>

The in/out parameter. For a description of this data typer see [“scpt_objtype”](/momentum/3/3-api/structs-scpt-objtype).

</dd>

<dt>object</dt>

<dd>

The object being pushed.

</dd>

<dt>flags</dt>

<dd>

Flags affecting the push operation.

</dd>

</dl>

If `typep` is NULL, it will be ignored. Otherwise, it points to an instance of scpt_objtype that may be NULL. If it is NULL, upon return from `scpt_push_object_by_typename`, that instance will be set to the scpt_objtype corresponding to the objtype string. If `typep` is not NULL upon entry to scpt_push_object_by_typename, it will be used in preference to objtype and this function call will be equivalent to scpt_push_object4().

The intended usage scenario for `typep` is for a call sequence similar to that below, where the objtype string is constant; a static variable can be used to cache the resolved form of the type string, saving hash lookups in the common case:

```
static scpt_objtype *type = NULL;

scpt_push_object_by_typename(thr, "msys.core:_ec_string", &type, str, 0);
```
**<a name="idp59372592"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

The script thread. For a description of this data type see [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread).

</dd>

<dt>value</dt>

<dd>

The double that you wish to push.

</dd>

</dl>

**<a name="idp59377760"></a> Return Value**

This function returns void.

**<a name="idp59378672"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59380224"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")