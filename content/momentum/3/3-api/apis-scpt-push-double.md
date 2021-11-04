---
lastUpdated: "03/26/2020"
title: "scpt_push_double"
description: "scpt push double pushes a double on to the stack void scpt push double thr value scpt thread thr double value Push a double on to the stack thr The script thread For a description of this data type see Section 68 72 scpt thread value The double that you..."
---

<a name="apis.scpt_push_double"></a> 
## Name

scpt_push_double — pushes a double on to the stack

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `void **scpt_push_double** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`double <var class="pdparam">value</var>`;<a name="idp59215408"></a> 
## Description

Push a double on to the stack.

**<a name="idp59216624"></a> Parameters**

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

**<a name="idp59221792"></a> Return Value**

This function returns void.

**<a name="idp59222704"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59224256"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")