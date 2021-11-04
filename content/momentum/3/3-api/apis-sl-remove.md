---
lastUpdated: "03/26/2020"
title: "sl_removet"
description: "sl remove Remove a node by key int sl remove sl key myfree Skiplist sl const void key Free Func myfree Remove node and all it's clones by key and free datum with the myfree function sl The Skiplist key The key myfree This is the optional user defined function..."
---

<a name="apis.sl_remove"></a> 
## Name

sl_remove — Remove a node by key

## Synopsis

`#include "skiplist.h"`

| `int **sl_remove** (` | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">myfree</var>`)`; |   |

`Skiplist * <var class="pdparam">sl</var>`;
`const void * <var class="pdparam">key</var>`;
`FreeFunc <var class="pdparam">myfree</var>`;<a name="idp61085968"></a> 
## Description

Remove node (and all it's clones) by key and free datum with the `myfree` function.

**<a name="idp61087664"></a> Parameters**

<dl class="variablelist">

<dt>sl</dt>

<dd>

The Skiplist.

</dd>

<dt>key</dt>

<dd>

The key.

</dd>

<dt>myfree</dt>

<dd>

This is the optional, user-defined function that frees a data element in the skiplist. It is defined as: `typedef void (*FreeFunc) (void *);`

</dd>

</dl>

**<a name="idp61094576"></a> Return Value**

On success this function returns the height of the resulting skiplist and `0` on error.

**<a name="idp61095984"></a> Threading**

It is legal to call this function in any thread but skiplist functions are *not* thread safe.

<a name="idp61097568"></a> 
## See Also

[“Skiplist”](/momentum/3/3-api/structs-skiplist)