---
lastUpdated: "03/26/2020"
title: "echash_delref"
description: "echash delref Delete a reference to a hash table void echash delref ht ec hash table ht Delete a reference to a hash table Use echash destroy to destroy a hash table If the refcount falls to zero This function implicitly calls echash delete with the keyfree datafree functions supplied..."
---

<a name="apis.echash_delref"></a> 
## Name

echash_delref — Delete a reference to a hash table

## Synopsis

`#include "echash.h"`

| `(void) **echash_delref** (` | <var class="pdparam">ht</var>`)`; |   |

`ec_hash_table * <var class="pdparam">ht</var>`;<a name="idp51237888"></a> 
## Description

Delete a *reference* to a hash table. Use [echash_destroy](/momentum/3/3-api/apis-echash-destroy) to destroy a hash table.

### Note

If the refcount falls to zero, This function implicitly calls `echash_delete` with the keyfree datafree functions supplied when the hash was created.

**<a name="idp51241744"></a> Parameters**

<dl class="variablelist">

<dt>ht</dt>

<dd>

The hash table that you wish to delete.

</dd>

</dl>

**<a name="idp51244480"></a> Return Values**

This function returns void.

**<a name="idp51245392"></a> Threading**

It is legal to call this function in any thread.

The hash table data structure is not thread safe; any simultaneous access needs to be coordinated by the API consumer.

<a name="idp51247392"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table), [echash_create](/momentum/3/3-api/apis-echash-create)