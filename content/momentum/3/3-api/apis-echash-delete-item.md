---
lastUpdated: "03/26/2020"
title: "echash_delete_item"
description: "echash delete item Remove the specified item from the hash table int echash delete item ht k klen ec hash table ht const char k int klen This function removes the specified item from the hash table If keyfree and datafree functions were specified when the table was created they..."
---

<a name="apis.echash_delete_item"></a> 
## Name

echash_delete_item — Remove the specified item from the hash table

## Synopsis

`#include "echash.h"`

| `int **echash_delete_item** (` | <var class="pdparam">ht</var>, |   |
|   | <var class="pdparam">k</var>, |   |
|   | <var class="pdparam">klen</var>`)`; |   |

`ec_hash_table * <var class="pdparam">ht</var>`;
`const char * <var class="pdparam">k</var>`;
`int <var class="pdparam">klen</var>`;<a name="idp51215664"></a> 
## Description

This function removes the specified item from the hash table. If keyfree and datafree functions were specified when the table was created, they will be invoked.

**<a name="idp51217024"></a> Parameters**

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

</dl>

**<a name="idp51223408"></a> Return Values**

On success this function returns `1` and on failure `0`.

**<a name="idp51225232"></a> Threading**

It is legal to call this function in any thread.

The hash table data structure is not thread safe; any simultaneous access needs to be coordinated by the API consumer.

<a name="idp51227232"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table), [echash_create](/momentum/3/3-api/apis-echash-create)