---
lastUpdated: "03/26/2020"
title: "ec_fc_load"
description: "ec fc load Load an entry from the cache with the provided key and key length ec fc entry t ec fc load cache key key length ec fc t cache const void key size t key length This reference page was automatically generated from functions found in the header..."
---

<a name="apis.ec_fc_load"></a> 
## Name

ec_fc_load — Load an entry from the cache with the provided key and key_length

## Synopsis

`#include "ec_fc.h"`

| `ec_fc_entry_t * **ec_fc_load** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">key_length</var>`)`; |   |

`ec_fc_t * <var class="pdparam">cache</var>`;
`const void * <var class="pdparam">key</var>`;
`size_t <var class="pdparam">key_length</var>`;<a name="idp52218928"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Load an entry from the cache with the provided key and key_length.

**<a name="idp52221824"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

cache to operate on

</dd>

<dt>key</dt>

<dd>

key to lookup in cache

</dd>

<dt>key_length</dt>

<dd>

length of key in bytes

</dd>

</dl>

**<a name="idp52228224"></a> Return Values**

Returns NULL if an entry cannot be find.