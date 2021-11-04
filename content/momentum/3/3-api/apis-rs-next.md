---
lastUpdated: "03/26/2020"
title: "rs_next"
description: "rs next Move to the next node in the R Splay Tree and return the data void rs next sl iter R Splay Tree sl struct rsplaynode iter Move to the next node in the R Splay Tree and return the data sl The root of an Section 68 69..."
---

<a name="apis.rs_next"></a> 
## Name

rs_next — Move to the next node in the `RSplayTree` and return the data

## Synopsis

`#include "rsplay.h"`

| `void * **rs_next** (` | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">iter</var>`)`; |   |

`RSplayTree * <var class="pdparam">sl</var>`;
`struct rsplaynode ** <var class="pdparam">iter</var>`;<a name="idp64233600"></a> 
## Description

Move to the next node in the `RSplayTree` and return the data.

**<a name="idp64235264"></a> Parameters**

<dl class="variablelist">

<dt>sl</dt>

<dd>

The root of an [“rsplaytree”](/momentum/3/3-api/structs-rsplaytree).

</dd>

<dt>iter</dt>

<dd>

A pointer to the address of a node in the `RSplayTree`. As a side effect, this will be updated to contain the address of the next node in the tree.

</dd>

</dl>

**<a name="idp64240944"></a> Return Values**

Returns the data in the next node of the `RSplayTree` or `NULL` if the next node is `NULL`.

**<a name="idp64243232"></a> Threading**

It is legal to call this function in any thread.

<a name="idp64244336"></a> 
## See Also

[rs_getlist](/momentum/3/3-api/apis-rs-getlist), [“rsplaynode”](/momentum/3/3-api/structs-rsplaynode), and [“rsplaytree”](/momentum/3/3-api/structs-rsplaytree).