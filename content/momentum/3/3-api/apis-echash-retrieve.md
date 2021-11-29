---
lastUpdated: "03/26/2020"
title: "echash_retrieve"
description: "echash retrieve Retrieve the data associated with the specified key int echash retrieve h k klen data ec hash table h const char k int klen void data Retrieve a pointer to the data associated with the specified key h The hash table k The key klen The length of..."
---

<a name="apis.echash_retrieve"></a> 
## Name

echash_retrieve — Retrieve the data associated with the specified key

## Synopsis

`#include "echash.h"`

| `int **echash_retrieve(** (` | <var class="pdparam">h</var>, |   |
|   | <var class="pdparam">k</var>, |   |
|   | <var class="pdparam">klen</var>, |   |
|   | <var class="pdparam">data</var>`)`; |   |

`ec_hash_table * <var class="pdparam">h</var>`;
`const char * <var class="pdparam">k</var>`;
`int <var class="pdparam">klen</var>`;
`void ** <var class="pdparam">data</var>`;<a name="idp51364640"></a> 
## Description

Retrieve a pointer to the data associated with the specified key.

**<a name="idp51365888"></a> Parameters**

<dl class="variablelist">

<dt>h</dt>

<dd>

The hash table

</dd>

<dt>k</dt>

<dd>

The key.

</dd>

<dt>klen</dt>

<dd>

The length of the key `k`.

</dd>

<dt>data</dt>

<dd>

A pointer to the pointer where the retreived data will be found.

</dd>

</dl>

**<a name="idp51374560"></a> Return Values**

This function returns `1` on success and `0` on failure. After successful execution the data is found at *data.

### Warning

When a key or value is returned, the memory is owned by the hash table. Your memory can become invalid if something else removes an entry from the table after you have queried it.

**<a name="idp51377520"></a> Threading**

It is legal to call this function in any thread.

The hash table data structure is not thread safe; any simultaneous access needs to be coordinated by the API consumer.

<a name="idp51379520"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table)