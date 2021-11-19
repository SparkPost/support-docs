---
lastUpdated: "03/26/2020"
title: "ec_cache_resolver_delref"
description: "ec cache resolver delref Release a resolver object reference void ec cache resolver delref resolver ec cache resolver resolver This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and..."
---

<a name="apis.ec_cache_resolver_delref"></a> 
## Name

ec_cache_resolver_delref — Release a resolver object reference

## Synopsis

`#include "ec_cache.h"`

| `void **ec_cache_resolver_delref** (` | <var class="pdparam">resolver</var>`)`; |   |

`ec_cache_resolver * <var class="pdparam">resolver</var>`;<a name="idp50921152"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Release a resolver object reference.

After calling this function, you should treat resolver as though it had been freed.

When the final reference on a resolver is released, the completion functions will be invoked.