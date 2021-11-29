---
lastUpdated: "03/26/2020"
title: "scpt_compile_callout"
description: "scpt compile callout Compile and register a scriptlet entrypoint scpt callout scpt compile callout name rettype params const char name const char rettype const char params Compile and register a scriptlet entrypoint The entrypoint is defined in terms of the C function that it represents Once registered the function can..."
---

<a name="apis.scpt_compile_callout"></a> 
## Name

scpt_compile_callout — Compile and register a scriptlet entrypoint

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `scpt_callout * **scpt_compile_callout** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">rettype</var>, |   |
|   | <var class="pdparam">params</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`const char * <var class="pdparam">rettype</var>`;
`const char * <var class="pdparam">params</var>`;<a name="idp59006832"></a> 
## Description

Compile and register a scriptlet entrypoint.

The entrypoint is defined in terms of the C function that it represents. Once registered, the function can be implemented by a scriptlet and will be bound as part of the scriptlet register_module call.

**<a name="idp59008720"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

The name of the callout.

</dd>

<dt>rettype</dt>

<dd>

The return type of the callout.

</dd>

<dt>params</dt>

<dd>

The parameters.

</dd>

</dl>

**<a name="idp59015120"></a> Return Value**

This function returns a pointer to a scpt_callout. For a description of this data type see [“scpt_callout”](/momentum/3/3-api/structs-scpt-callout).

Only a limited subset of return values are supported; if an unsupported return type is encountered, the entry point will fail to compile and this function will return `NULL`.

The returned entrypoint can be used as a helper to invoke a corresponding method in a scriptlet table.

**<a name="idp59018304"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59019856"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")