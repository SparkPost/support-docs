---
lastUpdated: "03/26/2020"
title: "scpt_push_ref"
description: "scpt push ref Push a reference onto the stack void scpt push ref thr ref scpt thread thr int ref Push a reference onto the stack thr The script thread For a description of this data type see Section 68 72 scpt thread ref The reference that you wish to..."
---

<a name="apis.scpt_push_ref"></a> 
## Name

scpt_push_ref — Push a reference onto the stack

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `void **scpt_push_ref** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">ref</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`int <var class="pdparam">ref</var>`;<a name="idp59391120"></a> 
## Description

Push a reference onto the stack.

**<a name="idp59392336"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

The script thread. For a description of this data type see [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread).

</dd>

<dt>ref</dt>

<dd>

The reference that you wish to push.

</dd>

</dl>

**<a name="idp59397488"></a> Return Value**

This function returns void.

**<a name="idp59398400"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59399952"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")