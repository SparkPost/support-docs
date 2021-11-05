---
lastUpdated: "03/26/2020"
title: "sl_init"
description: "sl init Initialize a Skiplist void sl init sl Skiplist sl Initialize a Skiplist sl The Skiplist This function returns void It is legal to call this function in any thread but Skiplist functions are not thread safe Section 68 77 Skiplist..."
---

<a name="apis.sl_init"></a> 
## Name

sl_init — Initialize a Skiplist

## Synopsis

`#include "skiplist.h"`

| `void * **sl_init** (` | <var class="pdparam">sl</var>`)`; |   |

`Skiplist * <var class="pdparam">sl</var>`;<a name="idp61011680"></a> 
## Description

Initialize a Skiplist.

**<a name="idp61012880"></a> Parameters**

<dl class="variablelist">

<dt>sl</dt>

<dd>

The Skiplist.

</dd>

</dl>

**<a name="idp61015584"></a> Return Value**

This function returns void.

**<a name="idp61016496"></a> Threading**

It is legal to call this function in any thread but Skiplist functions are *not* thread safe.

<a name="idp61018080"></a> 
## See Also

[“Skiplist”](/momentum/3/3-api/structs-skiplist)