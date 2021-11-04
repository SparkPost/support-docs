---
lastUpdated: "03/26/2020"
title: "sl_next"
description: "sl next Move iter forward a node and return the new node's data void sl next sl iter Skiplist sl skiplistnode iter Move iter forward a node and return the new node's data sl The Skiplist iter The list iterator This function returns void When a value is returned the..."
---

<a name="apis.sl_next"></a> 
## Name

sl_next — Move iter forward a node and return the new node's data

## Synopsis

`#include "skiplist.h"`

| `void * **sl_next** (` | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">iter</var>`)`; |   |

`Skiplist * <var class="pdparam">sl</var>`;
`skiplistnode ** <var class="pdparam">iter</var>`;<a name="idp61048528"></a> 
## Description

Move iter forward a node and return the new node's data.

**<a name="idp61049760"></a> Parameters**

<dl class="variablelist">

<dt>sl</dt>

<dd>

The Skiplist.

</dd>

<dt>iter</dt>

<dd>

The list iterator.

</dd>

</dl>

**<a name="idp61054304"></a> Return Value**

This function returns void.

### Warning

When a value is returned, the memory is owned by the Skiplist. Your memory can become invalid if something else removes this value from the Skiplist.

**<a name="idp61056272"></a> Threading**

It is legal to call this function in any thread but skiplist functions are *not* thread safe.

<a name="idp61057856"></a> 
## See Also

[“Skiplist”](/momentum/3/3-api/structs-skiplist)