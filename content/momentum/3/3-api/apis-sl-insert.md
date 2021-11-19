---
lastUpdated: "03/26/2020"
title: "sl_insert"
description: "sl insert Insert data and return the resulting node void sl insert sl data Skiplist sl void data Insert data and return the resulting node sl The Skiplist data The data On success this function returns the inserted node on failure it returns 0 It is legal to call this..."
---

<a name="apis.sl_insert"></a> 
## Name

sl_insert — Insert data and return the resulting node

## Synopsis

`#include "skiplist.h"`

| `void * **sl_insert** (` | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">data</var>`)`; |   |

`Skiplist * <var class="pdparam">sl</var>`;
`void * <var class="pdparam">data</var>`;<a name="idp61028928"></a> 
## Description

Insert data and return the resulting node.

**<a name="idp61030144"></a> Parameters**

<dl class="variablelist">

<dt>sl</dt>

<dd>

The Skiplist

</dd>

<dt>data</dt>

<dd>

The data.

</dd>

</dl>

**<a name="idp61034672"></a> Return Value**

On success this function returns the inserted node; on failure, it returns `0`.

**<a name="idp61036096"></a> Threading**

It is legal to call this function in any thread but skiplist functions are *not* thread safe.

<a name="idp61037680"></a> 
## See Also

[“Skiplist”](/momentum/3/3-api/structs-skiplist)