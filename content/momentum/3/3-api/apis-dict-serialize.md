---
lastUpdated: "03/26/2020"
title: "dict_serialize"
description: "dict serialize Serialize a dictionary for writing to disk or network int dict serialize d dest EC Dict d string dest Serialize a dictionary for writing to disk or network a An EC Dict is a typedef of an ec hash table dest The Section 68 85 string This function..."
---

<a name="apis.dict_serialize"></a> 
## Name

dict_serialize — Serialize a dictionary, for writing to disk or network

## Synopsis

`#include "ecdict.h"`

| `int **dict_serialize** (` | <var class="pdparam">d</var>, |   |
|   | <var class="pdparam">dest</var>`)`; |   |

`ECDict <var class="pdparam">d</var>`;
`string * <var class="pdparam">dest</var>`;<a name="idp50110352"></a> 
## Description

Serialize a dictionary, for writing to disk or network.

**<a name="idp50111584"></a> Parameters**

<dl class="variablelist">

<dt>a</dt>

<dd>

An ECDict is a typedef of an [ec_hash_table](/momentum/3/3-api/structs-ec-hash-table).

</dd>

<dt>dest</dt>

<dd>

The [“string”](/momentum/3/3-api/structs-string).

</dd>

</dl>

**<a name="idp50117392"></a> Return Value**

This function returns the length of the serialized string.

**<a name="idp50118336"></a> Threading**

It is legal to call this function in any thread.

<a name="idp50119440"></a> 
## See Also

[dict_unserialize](/momentum/3/3-api/apis-dict-unserialize)