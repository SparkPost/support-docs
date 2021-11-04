---
lastUpdated: "03/26/2020"
title: "ec_cache_resolver_wait_for_completion"
description: "ec cache resolver wait for completion Blocks the caller until cache resolution completes ec cache elt ec cache resolver wait for completion cond ec cache resolver cond cond This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.ec_cache_resolver_wait_for_completion"></a> 
## Name

ec_cache_resolver_wait_for_completion — Blocks the caller until cache resolution completes

## Synopsis

`#include "ec_cache.h"`

| `ec_cache_elt * **ec_cache_resolver_wait_for_completion** (` | <var class="pdparam">cond</var>`)`; |   |

`ec_cache_resolver_cond * <var class="pdparam">cond</var>`;<a name="idp50961248"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Blocks the caller until cache resolution completes.

On completion, the calling thread is given a reference to the cache element, woken up, and the cond object implicitly freed.

The caller must ec_cache_delref() the element when it is done with it.