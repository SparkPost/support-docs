---
lastUpdated: "03/26/2020"
title: "echash_delete"
description: "echash delete This function removes an item from the hash table and calls the specified keyfree and datafree functions int echash delete ht k klen keyfree datafree ec hash table ht const char k int klen EC Hash Free Func keyfree EC Hash Free Func datafree Remove an item from..."
---

<a name="apis.echash_delete"></a> 
## Name

echash_delete — This function removes an item from the hash table and calls the specified keyfree and datafree functions

## Synopsis

`#include "echash.h"`

| `int **echash_delete** (` | <var class="pdparam">ht</var>, |   |
|   | <var class="pdparam">k</var>, |   |
|   | <var class="pdparam">klen</var>, |   |
|   | <var class="pdparam">keyfree</var>, |   |
|   | <var class="pdparam">datafree</var>`)`; |   |

`ec_hash_table * <var class="pdparam">ht</var>`;
`const char * <var class="pdparam">k</var>`;
`int <var class="pdparam">klen</var>`;
`ECHashFreeFunc <var class="pdparam">keyfree</var>`;
`ECHashFreeFunc <var class="pdparam">datafree</var>`;<a name="idp51159792"></a> 
## Description

Remove an item from a hash table and call the keyfree and datafree functions passed in.

**<a name="idp51161504"></a> Parameters**

<dl class="variablelist">

<dt>ht</dt>

<dd>

The hash table.

</dd>

<dt>k</dt>

<dd>

The key to the item that you wish to remove.

</dd>

<dt>klen</dt>

<dd>

The length of the key.

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

If you wish to use the `ECHashFreeFunc` functions passed in when the hash table was created, use [echash_delete_item](/momentum/3/3-api/apis-echash-delete-item) instead of this function.

The keyfree and datafree functions are optional. If they do not exist, no function is invoked when data or keys are freed.

**<a name="idp51174784"></a> Return Values**

On success this function returns `1` and on failure `0`.

**<a name="idp51176608"></a> Threading**

It is legal to call this function in any thread.

The hash table data structure is not thread safe; any simultaneous access needs to be coordinated by the API consumer.

<a name="idp51178608"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table), [echash_delete_item](/momentum/3/3-api/apis-echash-delete-item) and [echash_create](/momentum/3/3-api/apis-echash-create)