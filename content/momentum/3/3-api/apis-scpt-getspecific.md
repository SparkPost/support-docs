---
lastUpdated: "03/26/2020"
title: "scpt_getspecific"
description: "scpt getspecific Fetch previously associated pointer value void scpt getspecific thr key scpt thread thr const char key Fetch the pointer value set with scpt setspecific thr The script thread For a description of this data type see Section 68 72 scpt thread key The key associated with the script..."
---

<a name="apis.scpt_getspecific"></a> 
## Name

scpt_getspecific — Fetch previously associated pointer value

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `void * **scpt_getspecific** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">key</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`const char * <var class="pdparam">key</var>`;<a name="idp59148816"></a> 
## Description

Fetch the pointer value set with [scpt_setspecific](/momentum/3/3-api/apis-scpt-setspecific).

**<a name="idp59150592"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

The script thread. For a description of this data type see [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread).

</dd>

<dt>key</dt>

<dd>

The key associated with the script.

</dd>

</dl>

**<a name="idp59156176"></a> Return Value**

This function returns the previously set pointer value.

**<a name="idp59157120"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59158672"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")