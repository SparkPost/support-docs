---
lastUpdated: "03/26/2020"
title: "sl_set_compare"
description: "sl set compare Set the comparison functions void sl set compare sl comp compk Skiplist sl Skiplist Comparator comp Skiplist Comparator compk Set the data to data and key to data comparison functions sl The Skiplist comp A Skiplist comparator A Skiplist comparator is defined as follows typedef int Skiplist..."
---

<a name="apis.sl_setcompare"></a> 
## Name

sl_set_compare — Set the comparison functions

## Synopsis

`#include "skiplist.h"`

| `void **sl_set_compare** (` | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">comp</var>, |   |
|   | <var class="pdparam">compk</var>`)`; |   |

`Skiplist * <var class="pdparam">sl</var>`;
`SkiplistComparator <var class="pdparam">comp</var>`;
`SkiplistComparator <var class="pdparam">compk</var>`;<a name="idp61109136"></a> 
## Description

Set the data to data and key to data comparison functions.

**<a name="idp61110368"></a> Parameters**

<dl class="variablelist">

<dt>sl</dt>

<dd>

The Skiplist.

</dd>

<dt>comp</dt>

<dd>

A Skiplist comparator. A Skiplist comparator is defined as follows: `typedef int (*SkiplistComparator) (const void *, const void *);` .

</dd>

<dt>compk</dt>

<dd>

A Skiplist comparator.

</dd>

</dl>

**<a name="idp61117312"></a> Return Value**

This function returns void.

**<a name="idp61118224"></a> Threading**

It is legal to call this function in any thread but skiplist functions are *not* thread safe.

<a name="idp61119808"></a> 
## See Also

[“Skiplist”](/momentum/3/3-api/structs-skiplist)