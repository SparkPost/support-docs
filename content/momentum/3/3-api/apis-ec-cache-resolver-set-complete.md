---
lastUpdated: "03/26/2020"
title: "ec_cache_resolver_set_complete"
description: "ec cache resolver set complete Stores the resolved cache element in the resolver void ec cache resolver set complete resolver elt ec cache resolver resolver ec cache elt elt This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_cache_resolver_set_complete"></a> 
## Name

ec_cache_resolver_set_complete — Stores the resolved cache element in the resolver

## Synopsis

`#include "ec_cache.h"`

| `void **ec_cache_resolver_set_complete** (` | <var class="pdparam">resolver</var>, |   |
|   | <var class="pdparam">elt</var>`)`; |   |

`ec_cache_resolver * <var class="pdparam">resolver</var>`;
`ec_cache_elt * <var class="pdparam">elt</var>`;<a name="idp50948768"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Stores the resolved cache element in the resolver.

The resolver takes a reference on the supplied elt, which will be passed to the completion routines.

It is valid to pass in a NULL elt here; it indicates that the cache lookup could not be satisfied.