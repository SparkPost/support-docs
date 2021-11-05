---
lastUpdated: "03/26/2020"
title: "sieve_get_hash_item"
description: "sieve get hash item Get the specified hash item int sieve get hash item hash key arg SIEVEARGS hash const char key SIEVEARGS arg Get the specified hash item You must call sieve arg delref when you are done using the item hash A pointer to the ec hash table..."
---

<a name="apis.sieve_get_hash_item"></a> 
## Name

sieve_get_hash_item — Get the specified hash item

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_get_hash_item** (` | <var class="pdparam">hash</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">arg</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">hash</var>`;
`const char * <var class="pdparam">key</var>`;
`SIEVEARGS ** <var class="pdparam">arg</var>`;<a name="idp60134992"></a> 
## Description

Get the specified hash item.

You must call [sieve_arg_delref](/momentum/3/3-api/apis-sieve-arg-delref) when you are done using the item.

**<a name="idp60137424"></a> Parameters**

<dl class="variablelist">

<dt>hash</dt>

<dd>

A pointer to the ec_hash_table of the `SIEVETOKEN value` of the specified `SIEVEARG`.

</dd>

<dt>key</dt>

<dd>

The key to the hash item you wish to return.

</dd>

<dt>arg</dt>

<dd>

The value of the specified `key`.

</dd>

</dl>

**<a name="idp60145200"></a> Return Value**

On success this function returns `1`; on failure, `0`.

**<a name="idp60147024"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60148128"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table), [sieve_set_hash_item](/momentum/3/3-api/apis-sieve-set-hash-item) and [Section 68.76, “SIEVEARGS (sieve_ast)”](structs.sieve_ast "68.76. SIEVEARGS (sieve_ast)")