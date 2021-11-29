---
lastUpdated: "03/26/2020"
title: "dict_key_delete"
description: "dict key delete Remove the specified key int dict key delete a b EC Dict a const char b Remove the specified key a The EC Dict An EC Dict is a typedef of an ec hash table b The key you wish to remove On success this function returns..."
---

<a name="apis.dict_key_delete"></a> 
## Name

dict_key_delete — Remove the specified key

## Synopsis

`#include "ecdict.h"`

| `int **dict_key_delete** (` | <var class="pdparam">a</var>, |   |
|   | <var class="pdparam">b</var>`)`; |   |

`ECDict <var class="pdparam">a</var>`;
`const char * <var class="pdparam">b</var>`;<a name="idp50017424"></a> 
## Description

Remove the specified key.

**<a name="idp50018624"></a> Parameters**

<dl class="variablelist">

<dt>a</dt>

<dd>

The ECDict. An ECDict is a typedef of an [ec_hash_table](/momentum/3/3-api/structs-ec-hash-table).

</dd>

<dt>b</dt>

<dd>

The key you wish to remove.

</dd>

</dl>

**<a name="idp50023904"></a> Return Value**

On success this function returns `1` and on failure `0`.

**<a name="idp50025728"></a> Threading**

It is legal to call this function in any thread.

<a name="idp50026832"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table)