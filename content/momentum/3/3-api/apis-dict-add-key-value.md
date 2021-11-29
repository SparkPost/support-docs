---
lastUpdated: "03/26/2020"
title: "dict_add_key_value"
description: "dict add key value Add the specified key value pair void dict add key value a key val EC Dict a const char key const char val Add the specified key value pair to the dictionary a The EC Dict An EC Dict is a typedef of an ec hash..."
---

<a name="apis.dict_add_key_value"></a> 
## Name

dict_add_key_value — Add the specified key/value pair

## Synopsis

`#include "ecdict.h"`

| `void **dict_add_key_value** (` | <var class="pdparam">a</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">val</var>`)`; |   |

`ECDict <var class="pdparam">a</var>`;
`const char * <var class="pdparam">key</var>`;
`const char * <var class="pdparam">val</var>`;<a name="idp49907152"></a> 
## Description

Add the specified key/value pair to the dictionary.

**<a name="idp49908384"></a> Parameters**

<dl class="variablelist">

<dt>a</dt>

<dd>

The ECDict. An ECDict is a typedef of an [ec_hash_table](/momentum/3/3-api/structs-ec-hash-table).

</dd>

<dt>key</dt>

<dd>

The new key.

</dd>

<dt>val</dt>

<dd>

The new value associated with the `key`.

</dd>

</dl>

**<a name="idp49915920"></a> Return Value**

This function returns void.

**<a name="idp49916832"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49917936"></a> 
## See Also

[“ec_hash_iter”](/momentum/3/3-api/structs-ec-hash-iter)