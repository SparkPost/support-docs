---
lastUpdated: "03/26/2020"
title: "dict_key_exists"
description: "dict key exists Determine whether the specified key exists int dict key exists a b EC Dict a const char b Determine whether the specified key exists a The EC Dict An EC Dict is a typedef of an ec hash table key The key Returns 1 if the key..."
---

<a name="apis.dict_key_exists"></a> 
## Name

dict_key_exists — Determine whether the specified key exists

## Synopsis

`#include "ecdict.h"`

| `int **dict_key_exists** (` | <var class="pdparam">a</var>, |   |
|   | <var class="pdparam">b</var>`)`; |   |

`ECDict <var class="pdparam">a</var>`;
`const char * <var class="pdparam">b</var>`;<a name="idp50037472"></a> 
## Description

Determine whether the specified key exists.

**<a name="idp50038688"></a> Parameters**

<dl class="variablelist">

<dt>a</dt>

<dd>

The ECDict. An ECDict is a typedef of an [ec_hash_table](/momentum/3/3-api/structs-ec-hash-table).

</dd>

<dt>key</dt>

<dd>

The key.

</dd>

</dl>

**<a name="idp50043952"></a> Return Value**

Returns `1` if the key exists otherwise `0` is returned.

**<a name="idp50045760"></a> Threading**

It is legal to call this function in any thread.

<a name="idp50046864"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table)