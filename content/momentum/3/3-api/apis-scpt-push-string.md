---
lastUpdated: "03/26/2020"
title: "scpt_push_string"
description: "scpt push string Push a string onto the stack void scpt push string thr buf buflen scpt thread thr const char buf int buflen Push a string onto the stack thr The script thread For a description of this data type see Section 68 72 scpt thread buf The string..."
---

<a name="apis.scpt_push_string"></a> 
## Name

scpt_push_string — Push a string onto the stack

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `void **scpt_push_string** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">buflen</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`const char * <var class="pdparam">buf</var>`;
`int <var class="pdparam">buflen</var>`;<a name="idp59411584"></a> 
## Description

Push a string onto the stack.

**<a name="idp59412800"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

The script thread. For a description of this data type see [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread).

</dd>

<dt>buf</dt>

<dd>

The string buffer.

</dd>

<dt>buflen</dt>

<dd>

The size of the buffer.

</dd>

</dl>

**<a name="idp59419776"></a> Return Value**

This function returns void.

**<a name="idp59420688"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59422240"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")