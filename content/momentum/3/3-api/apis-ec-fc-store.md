---
lastUpdated: "03/26/2020"
title: "ec_fc_store"
description: "ec fc store Store entry in the cache with the provided key and key length int ec fc store cache entry key key length ec fc t cache ec fc entry t entry const void key size t key length This reference page was automatically generated from functions found in..."
---

<a name="apis.ec_fc_store"></a> 
## Name

ec_fc_store — Store entry in the cache with the provided key and key length

## Synopsis

`#include "ec_fc.h"`

| `int **ec_fc_store** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">entry</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">key_length</var>`)`; |   |

`ec_fc_t * <var class="pdparam">cache</var>`;
`ec_fc_entry_t * <var class="pdparam">entry</var>`;
`const void * <var class="pdparam">key</var>`;
`size_t <var class="pdparam">key_length</var>`;<a name="idp52342048"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Store entry in the cache with the provided key and key length.

**<a name="idp52344944"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

cache to operate on

</dd>

<dt>entry</dt>

<dd>

entry to associate key with and add to cache

</dd>

<dt>key</dt>

<dd>

key to associate with entry

</dd>

<dt>key_length</dt>

<dd>

length of key in bytes

</dd>

</dl>

**<a name="idp52353200"></a> Return Values**

Returns 0 on success, non-zero on failure.