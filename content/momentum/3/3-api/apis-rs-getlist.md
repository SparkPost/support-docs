---
lastUpdated: "03/26/2020"
title: "rs_getlist"
description: "rs getlist Returns the address of the tail node in the R Splay Tree struct rsplaynode rs getlist sl R Splay Tree sl Returns the address of the tail node in the R Splay Tree sl The root of an Section 68 69 rsplaytree Returns the address of the tail..."
---

<a name="apis.rs_getlist"></a> 
## Name

rs_getlist — Returns the address of the *tail* node in the `RSplayTree`

## Synopsis

`#include "rsplay.h"`

| `struct rsplaynode * **rs_getlist** (` | <var class="pdparam">sl</var>`)`; |   |

`RSplayTree * <var class="pdparam">sl</var>`;<a name="idp64212368"></a> 
## Description

Returns the address of the *tail* node in the `RSplayTree`.

**<a name="idp64214464"></a> Parameters**

<dl class="variablelist">

<dt>sl</dt>

<dd>

The root of an [“rsplaytree”](/momentum/3/3-api/structs-rsplaytree).

</dd>

</dl>

**<a name="idp64217728"></a> Return Values**

Returns the address of the *tail* [“rsplaynode”](/momentum/3/3-api/structs-rsplaynode), or `NULL` for an empty list.

**<a name="idp64220112"></a> Threading**

It is legal to call this function in any thread.

<a name="idp64221216"></a> 
## See Also

[rs_next](/momentum/3/3-api/apis-rs-next), [“rsplaynode”](/momentum/3/3-api/structs-rsplaynode), and [“rsplaytree”](/momentum/3/3-api/structs-rsplaytree).