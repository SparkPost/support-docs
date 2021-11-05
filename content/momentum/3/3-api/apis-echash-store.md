---
lastUpdated: "03/26/2020"
title: "echash_store"
description: "echash store Add data associated with the specified key int echash store h k klen data ec hash table h const char k int klen void data Associate data with a specific key h The hash table k The key klen The length of the key k data The data..."
---

<a name="apis.echash_store"></a> 
## Name

echash_store — Add data associated with the specified key

## Synopsis

`#include "echash.c"`

| `int **echash_store** (` | <var class="pdparam">h</var>, |   |
|   | <var class="pdparam">k</var>, |   |
|   | <var class="pdparam">klen</var>, |   |
|   | <var class="pdparam">data</var>`)`; |   |

`ec_hash_table * <var class="pdparam">h</var>`;
`const char * <var class="pdparam">k</var>`;
`int <var class="pdparam">klen</var>`;
`void * <var class="pdparam">data</var>`;<a name="idp51391776"></a> 
## Description

Associate data with a specific key.

**<a name="idp51392992"></a> Parameters**

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

The data you wish to store.

</dd>

</dl>

**<a name="idp51401616"></a> Return Values**

On success this function returns `1` and on failure `0`.

**<a name="idp51403440"></a> Threading**

It is legal to call this function in any thread.

The hash table data structure is not thread safe; any simultaneous access needs to be coordinated by the API consumer.

<a name="idp51405440"></a> 
## See Also

[echash_retrieve](/momentum/3/3-api/apis-echash-retrieve) and [echash_create](/momentum/3/3-api/apis-echash-create)