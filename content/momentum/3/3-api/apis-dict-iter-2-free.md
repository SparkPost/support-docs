---
lastUpdated: "03/26/2020"
title: "dict_iter2_free"
description: "dict iter 2 free Free the iterator object created by dict iter 2 void dict iter 2 free a i EC Dict a EC Dict Iterator i Free an iterator created using dict iter 2 Mainly used by LUA scripting a An EC Dict is a typedef of an ec..."
---

<a name="apis.dict_iter2_free"></a> 
## Name

dict_iter2_free — Free the iterator object created by dict_iter2

## Synopsis

`#include "ecdict.h"`

| `void **dict_iter2_free** (` | <var class="pdparam">a</var>, |   |
|   | <var class="pdparam">i</var>`)`; |   |

`ECDict <var class="pdparam">a</var>`;
`ECDict_Iterator * <var class="pdparam">i</var>`;<a name="idp49996560"></a> 
## Description

Free an iterator created using [dict_iter2](/momentum/3/3-api/apis-dict-iter-2).

Mainly used by LUA scripting.

**<a name="idp49998800"></a> Parameters**

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

**Configuration Change. ** This feature is available starting from Momentum 3.1.

**<a name="idp50006480"></a> Return Value**

This function returns void.

**<a name="idp50007392"></a> Threading**

It is legal to call this function in any thread.