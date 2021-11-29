---
lastUpdated: "03/26/2020"
title: "sli_removet"
description: "sli remove Remove a node by key int sli remove sl m myfree Skiplist sl skiplistnode m Free Func myfree This function is similar to sl remove but you pass in the node that you wish to remove Any clones will also be removed sl The Skiplist m The node..."
---

<a name="apis.sli_remove"></a> 
## Name

sli_remove — Remove a node by key

## Synopsis

`#include "skiplist.h"`

| `int **sli_remove** (` | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">myfree</var>`)`; |   |

`Skiplist * <var class="pdparam">sl</var>`;
`skiplistnode * <var class="pdparam">m</var>`;
`FreeFunc <var class="pdparam">myfree</var>`;<a name="idp61131360"></a> 
## Description

This function is similar to [sl_remove](/momentum/3/3-api/apis-sl-remove), but you pass in the node that you wish to remove. Any clones will also be removed.

**<a name="idp61133376"></a> Parameters**

<dl class="variablelist">

<dt>sl</dt>

<dd>

The Skiplist.

</dd>

<dt>m</dt>

<dd>

The node that you wish to remove.

</dd>

<dt>myfree</dt>

<dd>

This is the optional, user-defined function that frees a data element in the skiplist. It is defined as: `typedef void (*FreeFunc) (void *);`

</dd>

</dl>

**<a name="idp61140320"></a> Return Value**

On success this function returns the height of the resulting skiplist or `0` on error.

**<a name="idp61141728"></a> Threading**

It is legal to call this function in any thread but skiplist functions are *not* thread safe.

<a name="idp61143312"></a> 
## See Also

[“Skiplist”](/momentum/3/3-api/structs-skiplist)