---
lastUpdated: "03/26/2020"
title: "dict_drop"
description: "dict drop Remove the specified dictionary void dict drop a EC Dict a Use this function to remove an EC Dict created using dict blank a The EC Dict An EC Dict is a typedef of an ec hash table This function returns void It is legal to call this..."
---

<a name="apis.dict_drop"></a> 
## Name

dict_drop — Remove the specified dictionary

## Synopsis

`#include "ecdict.h"`

| `void **dict_drop** (` | <var class="pdparam">a</var>`)`; |   |

`ECDict <var class="pdparam">a</var>`;<a name="idp49942624"></a> 
## Description

Use this function to remove an ECDict created using [dict_blank](/momentum/3/3-api/apis-dict-blank).

**<a name="idp49944576"></a> Parameters**

<dl class="variablelist">

<dt>a</dt>

<dd>

The ECDict. An ECDict is a typedef of an [ec_hash_table](/momentum/3/3-api/structs-ec-hash-table).

</dd>

</dl>

**<a name="idp49948032"></a> Return Value**

This function returns void.

**<a name="idp49948944"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49950048"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table)