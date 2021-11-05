---
lastUpdated: "03/26/2020"
title: "dict_iter2"
description: "dict iter 2 To create an iterator object void dict iter 2 a i EC Dict a EC Dict Iterator i Configuration Change This feature is available starting from Momentum 3 1 Create a dictionary iterator This API is mainly used by LUA scripting To free this object use dict..."
---

<a name="apis.dict_iter2"></a> 
## Name

dict_iter2 — To create an iterator object

## Synopsis

`#include "ecdict.h"`

| `void **dict_iter2** (` | <var class="pdparam">a</var>, |   |
|   | <var class="pdparam">i</var>`)`; |   |

`ECDict <var class="pdparam">a</var>`;
`ECDict_Iterator ** <var class="pdparam">i</var>`;<a name="idp49976112"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.1.

Create a dictionary iterator. This API is mainly used by LUA scripting.

To free this object, use [dict_iter2_free](/momentum/3/3-api/apis-dict-iter-2-free).

**<a name="idp49980064"></a> Parameters**

<dl class="variablelist">

<dt>a</dt>

<dd>

An ECDict is a typedef of an [ec_hash_table](/momentum/3/3-api/structs-ec-hash-table).

</dd>

<dt>i</dt>

<dd>

The ECDict_Iterator. This iterator is a typedef of an [ec_hash_iter](/momentum/3/3-api/structs-ec-hash-iter).

</dd>

</dl>

**<a name="idp49986080"></a> Return Value**

This function returns void.

**<a name="idp49986992"></a> Threading**

It is legal to call this function in any thread.