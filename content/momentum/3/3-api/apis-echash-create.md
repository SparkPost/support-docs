---
lastUpdated: "03/26/2020"
title: "echash_create"
description: "echash create Create a hash table ec hash table echash create keyfree datafree EC Hash Free Func keyfree EC Hash Free Func datafree This function creates a hash table by allocating memory of the MEMTYPE EC HASH TABLE type Use echash delete or echash delete item to free memory used..."
---

<a name="apis.echash_create"></a> 
## Name

echash_create — Create a hash table

## Synopsis

`#include "echash.h"`

| `ec_hash_table * **echash_create** (` | <var class="pdparam">keyfree</var>, |   |
|   | <var class="pdparam">datafree</var>`)`; |   |

`ECHashFreeFunc <var class="pdparam">keyfree</var>`;
`ECHashFreeFunc <var class="pdparam">datafree</var>`;<a name="idp51131936"></a> 
## Description

This function creates a hash table by allocating memory of the `MEMTYPE_EC_HASH_TABLE` type. Use [echash_delete](/momentum/3/3-api/apis-echash-delete) or [echash_delete_item](/momentum/3/3-api/apis-echash-delete-item) to free memory used by hash table entries.

### Note

The parameters passed to this function **must not**     be transient buffers, because the hash table implementation does not duplicate them. If ECHashFreeFunc functions are specified upon creation, these functions free up memory when you call echash_delete.

The keyfree and datafree functions are optional. If they do not exist, no function is invoked when data or keys are freed.

**<a name="idp51137568"></a> Parameters**

<dl class="variablelist">

<dt>keyfree</dt>

<dd>

A pointer to the hash table keys—the ECHashFreeFunc function will allocate and destroy memory. *Note*: ECHashFreeFunc is defined as folows: `typedef void (*ECHashFreeFunc)(void *);`

</dd>

<dt>datafree</dt>

<dd>

A pointer to the hash table data—the ECHashFreeFunc function will allocate and destroy memory.

</dd>

</dl>

**<a name="idp51143248"></a> Return Values**

This function returns an ec_hash_table.

**<a name="idp51144176"></a> Threading**

It is legal to call this function in any thread.

The hash table data structure is not thread safe; any simultaneous access needs to be coordinated by the API consumer.

<a name="idp51146176"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table), [echash_init](/momentum/3/3-api/apis-echash-init)