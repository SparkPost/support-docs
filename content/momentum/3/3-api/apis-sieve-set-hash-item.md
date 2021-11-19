---
lastUpdated: "03/26/2020"
title: "sieve_set_hash_item"
description: "sieve set hash item Set the specified hash item int sieve set hash item hash key arg SIEVEARGS hash const char key SIEVEARGS arg Set the specified hash item hash A pointer to the ec hash table of the SIEVETOKEN value of the specified SIEVEARG key The key to the..."
---

<a name="apis.sieve_set_hash_item"></a> 
## Name

sieve_set_hash_item — Set the specified hash item

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_set_hash_item** (` | <var class="pdparam">hash</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">arg</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">hash</var>`;
`const char * <var class="pdparam">key</var>`;
`SIEVEARGS ** <var class="pdparam">arg</var>`;<a name="idp60799680"></a> 
## Description

Set the specified hash item.

**<a name="idp60800896"></a> Parameters**

<dl class="variablelist">

<dt>hash</dt>

<dd>

A pointer to the ec_hash_table of the `SIEVETOKEN value` of the specified `SIEVEARG`.

</dd>

<dt>key</dt>

<dd>

The key to the hash item you wish to set.

</dd>

<dt>arg</dt>

<dd>

The value of the specified `key`.

</dd>

</dl>

**<a name="idp60808672"></a> Return Value**

On success this function returns `1`; on failure, `0`.

**<a name="idp60810496"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60811600"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table), [sieve_get_hash_item](/momentum/3/3-api/apis-sieve-get-hash-item) and [Section 68.76, “SIEVEARGS (sieve_ast)”](structs.sieve_ast "68.76. SIEVEARGS (sieve_ast)")