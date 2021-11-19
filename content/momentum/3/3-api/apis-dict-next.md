---
lastUpdated: "03/26/2020"
title: "dict_next"
description: "dict next Fetch the next key value pair int dict next a i key val EC Dict a EC Dict Iterator i const char key const char val If there is another key value pair in the dictionary fetch it a The EC Dict An EC Dict is a typedef..."
---

<a name="apis.dict_next"></a> 
## Name

dict_next — Fetch the next key/value pair

## Synopsis

`#include "ecdict.h"`

| `int **dict_next** (` | <var class="pdparam">a</var>, |   |
|   | <var class="pdparam">i</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">val</var>`)`; |   |

`ECDict <var class="pdparam">a</var>`;
`ECDict_Iterator * <var class="pdparam">i</var>`;
`const char ** <var class="pdparam">key</var>`;
`const char ** <var class="pdparam">val</var>`;<a name="idp50083200"></a> 
## Description

If there is another key/value pair in the dictionary, fetch it.

**<a name="idp50084448"></a> Parameters**

<dl class="variablelist">

<dt>a</dt>

<dd>

The ECDict. An ECDict is a typedef of an [ec_hash_table](/momentum/3/3-api/structs-ec-hash-table).

</dd>

<dt>i</dt>

<dd>

The iterator. An ECDict_Iterator is a typedef of an [ec_hash_iter](/momentum/3/3-api/structs-ec-hash-iter).

</dd>

<dt>key</dt>

<dd>

The current key.

</dd>

<dt>val</dt>

<dd>

The value associated with the `key`.

</dd>

</dl>

**<a name="idp50094576"></a> Return Value**

Returns `1` if there is a next key. Otherwise, `0` is returned. `* key` points to the next key and `* val` to the associated value.

### Warning

When a key or value is returned, the memory is owned by the dictionary. Your memory can become invalid if something else removes an entry from the dictionary after you have queried it.

**<a name="idp50098432"></a> Threading**

It is legal to call this function in any thread.

<a name="idp50099536"></a> 
## See Also

[“ec_hash_iter”](/momentum/3/3-api/structs-ec-hash-iter)