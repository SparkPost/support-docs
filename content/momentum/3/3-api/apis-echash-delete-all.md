---
lastUpdated: "03/26/2020"
title: "echash_delete_all"
description: "echash delete all This function removes all entries from a hash table and calls the specified keyfree and datafree functions void echash delete all ht keyfree datafree ec hash table ht EC Hash Free Func keyfree EC Hash Free Func datafree This function removes all entries from a hash table..."
---

<a name="apis.echash_delete_all"></a> 
## Name

echash_delete_all — This function removes all entries from a hash table and calls the specified keyfree and datafree functions

## Synopsis

`#include "echash.h"`

| `void **echash_delete_all** (` | <var class="pdparam">ht</var>, |   |
|   | <var class="pdparam">keyfree</var>, |   |
|   | <var class="pdparam">datafree</var>`)`; |   |

`ec_hash_table * <var class="pdparam">ht</var>`;
`ECHashFreeFunc <var class="pdparam">keyfree</var>`;
`ECHashFreeFunc <var class="pdparam">datafree</var>`;<a name="idp51191376"></a> 
## Description

This function removes all entries from a hash table and calls the specified keyfree and datafree functions.

**<a name="idp51192672"></a> Parameters**

<dl class="variablelist">

<dt>ht</dt>

<dd>

The hash table.

</dd>

<dt>keyfree</dt>

<dd>

A pointer to the hash table keys function.

</dd>

<dt>datafree</dt>

<dd>

A pointer to the hash table data function.

</dd>

</dl>

### Note

The keyfree and datafree functions are optional. If they do not exist, no function is invoked when data or keys are freed.

**<a name="idp51200112"></a> Return Values**

This function returns void.

**<a name="idp51201024"></a> Threading**

It is legal to call this function in any thread.

The hash table data structure is not thread safe; any simultaneous access needs to be coordinated by the API consumer.

<a name="idp51203024"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table), [echash_delete_item](/momentum/3/3-api/apis-echash-delete-item) and [echash_create](/momentum/3/3-api/apis-echash-create)