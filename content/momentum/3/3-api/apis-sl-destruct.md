---
lastUpdated: "03/26/2020"
title: "sl_destruct"
description: "sl destruct Destroy a Skiplist void sl destruct sl myfree Skiplist sl Free Func myfree Remove all nodes and their clones in other Skiplists free each datum using the myfree function and free Skiplist memory sl The Skiplist myfree This is the optional user defined function that frees a data..."
---

<a name="apis.sl_destruct"></a> 
## Name

sl_destruct — Destroy a Skiplist

## Synopsis

`#include "skiplist.h"`

| `void * **sl_destruct** (` | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">myfree</var>`)`; |   |

`Skiplist * <var class="pdparam">sl</var>`;
`FreeFunc <var class="pdparam">myfree</var>`;<a name="idp60951456"></a> 
## Description

Remove all nodes (and their clones in other Skiplists), free each datum using the `myfree` function and free Skiplist memory.

**<a name="idp60953200"></a> Parameters**

<dl class="variablelist">

<dt>sl</dt>

<dd>

The Skiplist.

</dd>

<dt>myfree</dt>

<dd>

This is the optional, user-defined function that frees a data element in the skiplist. It is defined as: `typedef void (*FreeFunc) (void *);`

</dd>

</dl>

**<a name="idp60958304"></a> Return Value**

This function returns void.

**<a name="idp60959216"></a> Threading**

It is legal to call this function in any thread but skiplist functions are *not* thread safe.

<a name="idp60960800"></a> 
## See Also

[“Skiplist”](/momentum/3/3-api/structs-skiplist) and [sl_init](/momentum/3/3-api/apis-sl-init)