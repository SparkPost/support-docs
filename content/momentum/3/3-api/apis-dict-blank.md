---
lastUpdated: "03/26/2020"
title: "dict_blank"
description: "dict blank Create a new dictionary EC Dict dict blank void Create a new dictionary There are no parameters for this function This function returns an EC Dict An EC Dict is a typedef of an ec hash table It is legal to call this function in any thread Section..."
---

<a name="apis.dict_blank"></a> 
## Name

dict_blank — Create a new dictionary

## Synopsis

`#include "ecdict.h"`

| `ECDict **dict_blank** (` | <var class="pdparam"></var>`)`; |   |

`void<var class="pdparam"></var>`;<a name="idp49927712"></a> 
## Description

Create a new dictionary.

**<a name="idp49928912"></a> Parameters**

There are no parameters for this function.

**<a name="idp49929840"></a> Return Value**

This function returns an ECDict. An ECDict is a typedef of an [ec_hash_table](/momentum/3/3-api/structs-ec-hash-table).

**<a name="idp49931520"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49932624"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table)