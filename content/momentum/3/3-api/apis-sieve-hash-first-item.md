---
lastUpdated: "03/26/2020"
title: "sieve_hash_first_item"
description: "sieve hash first item Get the first item from a hash table and add a reference to it int sieve hash first item hash iter key item SIEVEARGS hash ec hash iter iter const char key SIEVEARGS item Get the first item from an ec hash table and add a..."
---

<a name="apis.sieve_hash_first_item"></a> 
## Name

sieve_hash_first_item — Get the first item from a hash table and add a reference to it

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_hash_first_item** (` | <var class="pdparam">hash</var>, |   |
|   | <var class="pdparam">iter</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">item</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">hash</var>`;
`ec_hash_iter * <var class="pdparam">iter</var>`;
`const char ** <var class="pdparam">key</var>`;
`SIEVEARGS ** <var class="pdparam">item</var>`;<a name="idp60258128"></a> 
## Description

Get the first item from an ec_hash_table and add a reference to it.

You must call [sieve_arg_delref](/momentum/3/3-api/apis-sieve-arg-delref) when you are done using the item.

**<a name="idp60260592"></a> Parameters**

<dl class="variablelist">

<dt>hash</dt>

<dd>

A pointer to the ec_hash_table of the `SIEVETOKEN value` of the specified `SIEVEARG`.

</dd>

<dt>iter</dt>

<dd>

The hash iterator. For more information about this data type see [ec_hash_iter](/momentum/3/3-api/structs-ec-hash-iter).

</dd>

<dt>key</dt>

<dd>

The key to the hash item you wish to return.

</dd>

<dt>item</dt>

<dd>

The value of the specified `key`.

</dd>

</dl>

**<a name="idp60270992"></a> Return Value**

On success this function returns `1`; on failure, `0`.

**<a name="idp60272816"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60273920"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table), [sieve_get_hash_item](/momentum/3/3-api/apis-sieve-get-hash-item) and [Section 68.76, “SIEVEARGS (sieve_ast)”](structs.sieve_ast "68.76. SIEVEARGS (sieve_ast)")