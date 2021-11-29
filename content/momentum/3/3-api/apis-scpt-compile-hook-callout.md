---
lastUpdated: "03/26/2020"
title: "scpt_compile_hook_callout"
description: "scpt compile hook callout Compile and register a scriptlet hook implementation entrypoint int scpt compile hook callout hookname coptr const char hookname scpt callout coptr Configuration Change This feature is available starting from Momentum 3 2 Compile and register a scriptlet hook implementation entrypoint Similar to scpt compile callout except..."
---

<a name="apis.scpt_compile_hook_callout"></a> 
## Name

scpt_compile_hook_callout — Compile and register a scriptlet hook implementation entrypoint

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `int **scpt_compile_hook_callout** (` | <var class="pdparam">hookname</var>, |   |
|   | <var class="pdparam">coptr</var>`)`; |   |

`const char * <var class="pdparam">hookname</var>`;
`scpt_callout ** <var class="pdparam">coptr</var>`;<a name="idp59030896"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Compile and register a scriptlet hook implementation entrypoint.

Similar to [scpt_compile_callout](/momentum/3/3-api/apis-scpt-compile-callout), except that the hook signature will be queried from the hook subsystem.

**<a name="idp59034896"></a> Parameters**

<dl class="variablelist">

<dt>hookname</dt>

<dd>

The name of the hook.

</dd>

<dt>coptr</dt>

<dd>

The location of the pointer to the callout.

</dd>

</dl>

**<a name="idp59039488"></a> Return Value**

On success this function returns `1`; On failure, `0` is returned.

**<a name="idp59041312"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59042864"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")