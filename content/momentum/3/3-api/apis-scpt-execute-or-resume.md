---
lastUpdated: "03/26/2020"
title: "scpt_execute_or_resume"
description: "scpt execute or resume Execute or resume execution of a thread int scpt execute or resume thr nargs scpt thread thr int nargs Execute or resume execution of a thread You are expected to have prepared the parameters appropriately thr The script thread For a description of this data type..."
---

<a name="apis.scpt_execute_or_resume"></a> 
## Name

scpt_execute_or_resume — Execute or resume execution of a thread

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `int **scpt_execute_or_resume** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">nargs</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`int <var class="pdparam">nargs</var>`;<a name="idp59053824"></a> 
## Description

Execute or resume execution of a thread. You are expected to have prepared the parameters appropriately.

**<a name="idp59055120"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

The script thread. For a description of this data type see [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread).

</dd>

<dt>nargs</dt>

<dd>

The number of arguments.

</dd>

</dl>

**<a name="idp59060272"></a> Return Value**

Returns `SCPT_YIELD`, `SCPT_ERR` or the number of return values, which may be zero.

**<a name="idp59062112"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59063664"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")