---
lastUpdated: "03/26/2020"
title: "dict_iter"
description: "dict iter Create a dictionary iterator EC Dict Iterator dict iter a EC Dict a Create a dictionary iterator a An EC Dict is a typedef of an ec hash iter Returns an EC Dict Iterator This iterator is a typedef of an ec hash iter It is legal to..."
---

<a name="apis.dict_iter"></a> 
## Name

dict_iter — Create a dictionary iterator

## Synopsis

`#include "ecdict.h"`

| `ECDict_Iterator **dict_iter** (` | <var class="pdparam">a</var>`)`; |   |

`ECDict <var class="pdparam">a</var>`;<a name="idp49959712"></a> 
## Description

Create a dictionary iterator.

**<a name="idp49960928"></a> Parameters**

<dl class="variablelist">

<dt>a</dt>

<dd>

An ECDict is a typedef of an [ec_hash_iter](/momentum/3/3-api/structs-ec-hash-iter).

</dd>

</dl>

**<a name="idp49964368"></a> Return Value**

Returns an ECDict_Iterator. This iterator is a typedef of an [ec_hash_iter](/momentum/3/3-api/structs-ec-hash-iter).

**<a name="idp49966048"></a> Threading**

It is legal to call this function in any thread.