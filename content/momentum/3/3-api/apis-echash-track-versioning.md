---
lastUpdated: "03/26/2020"
title: "echash_track_versioning"
description: "echash track versioning Enable versioning on a hash table void echash track versioning h ec hash table h Enable versioning on a hash table When versioning is enabled each change to the content of the hash will cause the version field of the hash table to change For a description..."
---

<a name="apis.echash_track_versioning"></a> 
## Name

echash_track_versioning — Enable versioning on a hash table

## Synopsis

`#include "echash.h"`

| `void **echash_track_versioning** (` | <var class="pdparam">h</var>`)`; |   |

`ec_hash_table * <var class="pdparam">h</var>`;<a name="idp51416128"></a> 
## Description

Enable versioning on a hash table. When versioning is enabled, each change to the content of the hash will cause the version field of the hash table to change. For a description of this data structure see [“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table).

The version field is a nearly unique counter that will allow you cheaply determine if a hash table has changed its contents since you last looked at it and recorded its version number.

Since the version counter is a global variable, it is guaranteed that no two hash tables can have the same version number, provided that they are both relatively short lived—it is possible to roll the counter but this should take a very long time to occur.

**<a name="idp51419440"></a> Parameters**

<dl class="variablelist">

<dt>h</dt>

<dd>

The [ec_hash_table](/momentum/3/3-api/structs-ec-hash-table).

</dd>

</dl>

**<a name="idp51422864"></a> Return Value**

This function returns void.

**<a name="idp51423776"></a> Threading**

It is legal to call this function in any thread.