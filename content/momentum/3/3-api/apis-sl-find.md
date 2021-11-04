---
lastUpdated: "03/26/2020"
title: "sl_find"
description: "sl find Find a specific node and return the node's data void sl find sl key iter Skiplist sl const void key skiplistnode iter Find a specific node and return the node's data The iter parameter is optional sl The Skiplist key The key iter The list iterator This function..."
---

<a name="apis.sl_find"></a> 
## Name

sl_find — Find a specific node and return the node's data

## Synopsis

`#include "skiplist.h"`

| `void * **sl_find** (` | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">iter</var>`)`; |   |

`Skiplist * <var class="pdparam">sl</var>`;
`const void * <var class="pdparam">key</var>`;
`skiplistnode ** <var class="pdparam">iter</var>`;<a name="idp60972944"></a> 
## Description

Find a specific node and return the node's data. The `iter` parameter is optional.

**<a name="idp60974640"></a> Parameters**

<dl class="variablelist">

<dt>sl</dt>

<dd>

The Skiplist.

</dd>

<dt>key</dt>

<dd>

The key.

</dd>

<dt>iter</dt>

<dd>

The list iterator.

</dd>

</dl>

**<a name="idp60980992"></a> Return Value**

This function returns void.

### Warning

When a value is returned, the memory is owned by the Skiplist. Your memory can become invalid if something else removes this value from the Skiplist.

**<a name="idp60982960"></a> Threading**

It is legal to call this function in any thread but skiplist functions are *not* thread safe.

<a name="idp60984544"></a> 
## See Also

[“Skiplist”](/momentum/3/3-api/structs-skiplist)