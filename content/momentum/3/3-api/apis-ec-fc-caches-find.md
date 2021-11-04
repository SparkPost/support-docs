---
lastUpdated: "03/26/2020"
title: "ec_fc_caches_find"
description: "ec fc caches find Find a cache with the provided name ec fc t ec fc caches find name const char name This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.ec_fc_caches_find"></a> 
## Name

ec_fc_caches_find — Find a cache with the provided name

## Synopsis

`#include "ec_fc.h"`

| `ec_fc_t * **ec_fc_caches_find** (` | <var class="pdparam">name</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;<a name="idp52045280"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Find a cache with the provided name.

Must call ec_fc_delref after done with result.

**<a name="idp52048640"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

name of cache to find

</dd>

</dl>

**<a name="idp52051376"></a> Return Values**

Returns NULL if no entry was found, otherwise returns non-zero.