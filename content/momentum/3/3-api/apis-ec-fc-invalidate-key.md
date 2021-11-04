---
lastUpdated: "03/26/2020"
title: "ec_fc_invalidate_key"
description: "ec fc invalidate key Remove an entry from the cache with the associated key and key length int ec fc invalidate key cache key key length ec fc t cache const void key size t key length This reference page was automatically generated from functions found in the header files..."
---

<a name="apis.ec_fc_invalidate_key"></a> 
## Name

ec_fc_invalidate_key — Remove an entry from the cache with the associated key and key length

## Synopsis

`#include "ec_fc.h"`

| `int **ec_fc_invalidate_key** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">key_length</var>`)`; |   |

`ec_fc_t * <var class="pdparam">cache</var>`;
`const void * <var class="pdparam">key</var>`;
`size_t <var class="pdparam">key_length</var>`;<a name="idp52198768"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Remove an entry from the cache with the associated key and key length.

**<a name="idp52201680"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

cache to operate on

</dd>

<dt>key</dt>

<dd>

key to invalidate from cache

</dd>

<dt>key_length</dt>

<dd>

length of key in bytes

</dd>

</dl>

**<a name="idp52208080"></a> Return Values**

Returns -1 if an entry with the given key is not found, otherwise returns 0.