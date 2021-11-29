---
lastUpdated: "03/26/2020"
title: "echash_destroy"
description: "echash destroy Destroy a hash table created using echash create void echash destroy h keyfree datafree ec hash table h EC Hash Free Func keyfree EC Hash Free Func datafree Destroy a hash table created using echash create h The hash table that you wish to destroy keyfree A pointer..."
---

<a name="apis.echash_destroy"></a> 
## Name

echash_destroy — Destroy a hash table created using echash_create

## Synopsis

`#include "echash.h"`

| `void **echash_destroy** (` | <var class="pdparam">h</var>, |   |
|   | <var class="pdparam">keyfree</var>, |   |
|   | <var class="pdparam">datafree</var>`)`; |   |

`ec_hash_table * <var class="pdparam">h</var>`;
`ECHashFreeFunc <var class="pdparam">keyfree</var>`;
`ECHashFreeFunc <var class="pdparam">datafree</var>`;<a name="idp51259472"></a> 
## Description

Destroy a hash table created using `echash_create`.

**<a name="idp51261584"></a> Parameters**

<dl class="variablelist">

<dt>h</dt>

<dd>

The hash table that you wish to destroy.

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

**<a name="idp51269056"></a> Return Values**

This function returns void.

**<a name="idp51269968"></a> Threading**

It is legal to call this function in any thread.

The hash table data structure is not thread safe; any simultaneous access needs to be coordinated by the API consumer.

<a name="idp51271968"></a> 
## See Also

[echash_delref](/momentum/3/3-api/apis-echash-delref), [echash_create](/momentum/3/3-api/apis-echash-create)