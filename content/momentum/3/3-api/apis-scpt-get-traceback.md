---
lastUpdated: "03/26/2020"
title: "scpt_get_traceback"
description: "scpt get traceback Populate the top of the scriptlet stack with a traceback of the current excution stack int scpt get traceback thr skip scpt thread thr int skip Populate the top of the scriptlet stack with a traceback of the current excution stack thr The script thread For a..."
---

<a name="apis.scpt_get_traceback"></a> 
## Name

scpt_get_traceback — Populate the top of the scriptlet stack with a traceback of the current excution stack

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `int **scpt_get_traceback** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">skip</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`int <var class="pdparam">skip</var>`;<a name="idp59127680"></a> 
## Description

Populate the top of the scriptlet stack with a traceback of the current excution stack.

**<a name="idp59128960"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

The script thread. For a description of this data type see [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread).

</dd>

<dt>skip</dt>

</dl>

**<a name="idp59134544"></a> Return Value**

This function returns `1`.

**<a name="idp59136352"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59137904"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")