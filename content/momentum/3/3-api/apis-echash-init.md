---
lastUpdated: "03/26/2020"
title: "echash_init"
description: "echash init Initialize a hash table void echash init h ec hash table h Initialize a hash table You must first create a hash table using echash create h A hash table created using echash create This function returns void It is legal to call this function in any thread..."
---

<a name="apis.echash_init"></a> 
## Name

echash_init — Initialize a hash table

## Synopsis

`#include "echash.h"`

| `void **echash_init** (` | <var class="pdparam">h</var>`)`; |   |

`ec_hash_table * <var class="pdparam">h</var>`;<a name="idp51282608"></a> 
## Description

Initialize a hash table. You must first create a hash table using [echash_create](/momentum/3/3-api/apis-echash-create).

**<a name="idp51284576"></a> Parameters**

<dl class="variablelist">

<dt>h</dt>

<dd>

A hash table created using [echash_create](/momentum/3/3-api/apis-echash-create).

</dd>

</dl>

**<a name="idp51288016"></a> Return Values**

This function returns void.

**<a name="idp51288928"></a> Threading**

It is legal to call this function in any thread.

The hash table data structure is not thread safe; any simultaneous access needs to be coordinated by the API consumer.

<a name="idp51290928"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table)