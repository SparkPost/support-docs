---
lastUpdated: "03/26/2020"
title: "echash_replace"
description: "echash replace Replace the data associated with the specified key int echash replace h k klen data keyfree datafree ec hash table h const char k int klen void data EC Hash Free Func keyfree EC Hash Free Func datafree Replace the data associated with the specified key h The..."
---

<a name="apis.echash_replace"></a> 
## Name

echash_replace — Replace the data associated with the specified key

## Synopsis

`#include "echash.h"`

| `int **echash_replace** (` | <var class="pdparam">h</var>, |   |
|   | <var class="pdparam">k</var>, |   |
|   | <var class="pdparam">klen</var>, |   |
|   | <var class="pdparam">data</var>, |   |
|   | <var class="pdparam">keyfree</var>, |   |
|   | <var class="pdparam">datafree</var>`)`; |   |

`ec_hash_table * <var class="pdparam">h</var>`;
`const char ** <var class="pdparam">k</var>`;
`int * <var class="pdparam">klen</var>`;
`void * <var class="pdparam">data</var>`;
`ECHashFreeFunc <var class="pdparam">keyfree</var>`;
`ECHashFreeFunc <var class="pdparam">datafree</var>`;<a name="idp51336176"></a> 
## Description

Replace the data associated with the specified key.

**<a name="idp51337408"></a> Parameters**

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

<dt>keyfree</dt>

<dd>

The pointer to the hash table keyfree function.

</dd>

<dt>datafree</dt>

<dd>

The pointer to the hash table datafree function.

</dd>

</dl>

### Note

The keyfree and datafree functions are optional. If they do not exist, no function is invoked when data or keys are freed.

**<a name="idp51348944"></a> Return Values**

On success this function returns `1`.

**<a name="idp51350320"></a> Threading**

It is legal to call this function in any thread.

The hash table data structure is not thread safe; any simultaneous access needs to be coordinated by the API consumer.

<a name="idp51352320"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table)