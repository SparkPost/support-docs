---
lastUpdated: "03/26/2020"
title: "dict_unserialize"
description: "dict unserialize Deserialize a dictionary EC Dict dict unserialize str string str Deserialize a dictionary This function takes a string parameter and returns the deserialized dictionary An EC Dict is a typedef of an ec hash table str The Section 68 85 string This function returns the deserialized dictionary It..."
---

<a name="apis.dict_unserialize"></a> 
## Name

dict_unserialize — Deserialize a dictionary

## Synopsis

`#include "ecdict.h"`

| `ECDict **dict_unserialize** (` | <var class="pdparam">str</var>`)`; |   |

`string * <var class="pdparam">str</var>`;<a name="idp50129568"></a> 
## Description

Deserialize a dictionary. This function takes a string parameter and returns the deserialized dictionary. An ECDict is a typedef of an [ec_hash_table](/momentum/3/3-api/structs-ec-hash-table).

**<a name="idp50131616"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

The [“string”](/momentum/3/3-api/structs-string).

</dd>

</dl>

**<a name="idp50134864"></a> Return Value**

This function returns the deserialized dictionary.

**<a name="idp50135808"></a> Threading**

It is legal to call this function in any thread.

<a name="idp50136912"></a> 
## See Also

[dict_serialize](/momentum/3/3-api/apis-dict-serialize)