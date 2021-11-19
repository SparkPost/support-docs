---
lastUpdated: "03/26/2020"
title: "sl_getlist"
description: "sl getlist Get the first node in a Skiplist struct skiplistnode sl getlist sl Skiplist sl Get the first node according to the main index in a Skiplist sl The Skiplist On success this function returns the first node on failure NULL is returned It is legal to call this..."
---

<a name="apis.sl_getlist"></a> 
## Name

sl_getlist — Get the first node in a Skiplist

## Synopsis

`#include "skiplist.h"`

| `struct skiplistnode * **sl_getlist** (` | <var class="pdparam">sl</var>`)`; |   |

`Skiplist * <var class="pdparam">sl</var>`;<a name="idp60994656"></a> 
## Description

Get the first node (according to the main index) in a Skiplist.

**<a name="idp60995904"></a> Parameters**

<dl class="variablelist">

<dt>sl</dt>

<dd>

The Skiplist.

</dd>

</dl>

**<a name="idp60998608"></a> Return Value**

On success this function returns the first node; on failure, `NULL` is returned.

**<a name="idp61000016"></a> Threading**

It is legal to call this function in any thread but Skiplist functions are *not* thread safe.

<a name="idp61001600"></a> 
## See Also

[“Skiplist”](/momentum/3/3-api/structs-skiplist)