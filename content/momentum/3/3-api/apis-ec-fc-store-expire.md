---
lastUpdated: "03/26/2020"
title: "ec_fc_store_expire"
description: "ec fc store expire Store entry in the cache with the provided key key length and expiration time int ec fc store expire cache entry key key length expire ec fc t cache ec fc entry t entry const void key size t key length unsigned int expire This reference..."
---

<a name="apis.ec_fc_store_expire"></a> 
## Name

ec_fc_store_expire — Store entry in the cache with the provided key, key length and expiration time

## Synopsis

`#include "ec_fc.h"`

| `int **ec_fc_store_expire** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">entry</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">key_length</var>, |   |
|   | <var class="pdparam">expire</var>`)`; |   |

`ec_fc_t * <var class="pdparam">cache</var>`;
`ec_fc_entry_t * <var class="pdparam">entry</var>`;
`const void * <var class="pdparam">key</var>`;
`size_t <var class="pdparam">key_length</var>`;
`unsigned int <var class="pdparam">expire</var>`;<a name="idp52365504"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Store entry in the cache with the provided key, key length and expiration time.

**<a name="idp52368416"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

cache to operate on

</dd>

<dt>entry</dt>

<dd>

entry to store in cache

</dd>

<dt>key</dt>

<dd>

key to associate with entry when stored in cache

</dd>

<dt>key_length</dt>

<dd>

length of key in bytes

</dd>

<dt>expire</dt>

<dd>

expiration time of entry in seconds

</dd>

</dl>