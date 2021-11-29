---
lastUpdated: "03/26/2020"
title: "ec_cache_resolve"
description: "ec cache resolve Look up an element from the cache int ec cache resolve cache key keylen elt resolver ec cache t cache const char key int keylen ec cache elt elt ec cache resolver resolver This reference page was automatically generated from functions found in the header files in..."
---

<a name="apis.ec_cache_resolve"></a> 
## Name

ec_cache_resolve — Look up an element from the cache

## Synopsis

`#include "ec_cache.h"`

| `int **ec_cache_resolve** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">keylen</var>, |   |
|   | <var class="pdparam">elt</var>, |   |
|   | <var class="pdparam">resolver</var>`)`; |   |

`ec_cache_t * <var class="pdparam">cache</var>`;
`const char * <var class="pdparam">key</var>`;
`int <var class="pdparam">keylen</var>`;
`ec_cache_elt ** <var class="pdparam">elt</var>`;
`ec_cache_resolver ** <var class="pdparam">resolver</var>`;<a name="idp50903824"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Look up an element from the cache.

Operates similarly to ec_cache_find: If there is a cache hit, *elt will be set to reference the cache element and EC_CACHE_HIT will be returned. The caller is responsible for delref'ing the cache element when it is done using it.

If there is a cache miss, *elt will be set to NULL and *resolver will be set to a resolver object that represents the resolution process for satisfying the lookup. If this is the first lookup for a given key, a fresh resolver will be created and ec_cache_resolve will return EC_CACHE_MISS. This key will now be considered pending until the resolver is destroyed. The caller is expected to complete the resolution in whatever way it sees fit; once "complete", it should call [ec_cache_resolver_set_complete](/momentum/3/3-api/apis-ec-cache-resolver-set-complete) and release its reference on the resolver.

If there is a cache miss and there is a pending resolver for the requested key, *resolver will be set to reference that resolver and [ec_cache_resolve](/momentum/3/3-api/apis-ec-cache-resolve) will return EC_CACHE_PENDING. The caller is expected to call [ec_cache_resolver_run_on_completion](/momentum/3/3-api/apis-ec-cache-resolver-run-on-completion) to inform the resolver how to wake the caller when the lookup completes. After calling [ec_cache_resolver_run_on_completion](/momentum/3/3-api/apis-ec-cache-resolver-run-on-completion), the caller MUST also call [ec_cache_resolver_delref](/momentum/3/3-api/apis-ec-cache-resolver-delref) to release the resolver context; completion routines are not triggered until all references are released.

It is an error to pass in NULL as the resolver parameter.