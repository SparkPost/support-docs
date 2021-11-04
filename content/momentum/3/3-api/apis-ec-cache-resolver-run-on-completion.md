---
lastUpdated: "03/26/2020"
title: "ec_cache_resolver_run_on_completion"
description: "ec cache resolver run on completion Schedule a function to run when the resolver completes void ec cache resolver run on completion resolver func closure ec cache resolver resolver ec cache resolver completion func func void closure This reference page was automatically generated from functions found in the header files..."
---

<a name="apis.ec_cache_resolver_run_on_completion"></a> 
## Name

ec_cache_resolver_run_on_completion — Schedule a function to run when the resolver completes

## Synopsis

`#include "ec_cache.h"`

| `void **ec_cache_resolver_run_on_completion** (` | <var class="pdparam">resolver</var>, |   |
|   | <var class="pdparam">func</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_cache_resolver * <var class="pdparam">resolver</var>`;
`ec_cache_resolver_completion_func <var class="pdparam">func</var>`;
`void * <var class="pdparam">closure</var>`;<a name="idp50935056"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Schedule a function to run when the resolver completes.

The completion function will be invoked with the cache, key, keylen, resolved element and optional closure pointer.

The resolved element may be NULL if the lookup could not be satisfied.

If the resolved element is not NULL, then the completion func must ec_cache_delref() it when it is done using it.