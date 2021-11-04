---
lastUpdated: "03/26/2020"
title: "echash_next"
description: "echash next Move to the next item in the hash table int echash next h iter k klen data ec hash table h ec hash iter iter const char k int klen void data Move to the next item found after the specified key If a next item exists the..."
---

<a name="apis.echash_next"></a> 
## Name

echash_next — Move to the next item in the hash table

## Synopsis

`#include "echash.h"`

| `int **echash_next** (` | <var class="pdparam">h</var>, |   |
|   | <var class="pdparam">iter</var>, |   |
|   | <var class="pdparam">k</var>, |   |
|   | <var class="pdparam">klen</var>, |   |
|   | <var class="pdparam">data</var>`)`; |   |

`ec_hash_table * <var class="pdparam">h</var>`;
`ec_hash_iter * <var class="pdparam">iter</var>`;
`const char ** <var class="pdparam">k</var>`;
`int * <var class="pdparam">klen</var>`;
`void ** <var class="pdparam">data</var>`;<a name="idp51303968"></a> 
## Description

Move to the next item found after the specified key. If a next item exists, the data associated with this position is found in `* data`.

### Note

Do not write to a hash table while iterating over its contents.

**<a name="idp51306688"></a> Parameters**

<dl class="variablelist">

<dt>h</dt>

<dd>

The hash table

</dd>

<dt>iter</dt>

<dd>

The hash iterator. For a description of this struct see [ec_hash_iter](/momentum/3/3-api/structs-ec-hash-iter).

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

Upon successful execution data * contains the the data associated with the next key.

</dd>

</dl>

**<a name="idp51317984"></a> Return Values**

On success this function returns `1`.

**<a name="idp51319360"></a> Threading**

It is legal to call this function in any thread.

### Warning

When a key or value is returned, the memory is owned by the hash table. Your memory can become invalid if something else removes an entry from the table after you have queried it.

The hash table data structure is not thread safe; any simultaneous access needs to be coordinated by the API consumer.

<a name="idp51322448"></a> 
## See Also

[“ec_hash_iter”](/momentum/3/3-api/structs-ec-hash-iter)