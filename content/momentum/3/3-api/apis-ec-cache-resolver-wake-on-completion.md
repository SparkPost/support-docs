---
lastUpdated: "03/26/2020"
title: "ec_cache_resolver_wake_on_completion"
description: "ec cache resolver wake on completion Allows a thread to block pending completion of the cache resolution ec cache resolver cond ec cache resolver wake on completion resolver ec cache resolver resolver This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.ec_cache_resolver_wake_on_completion"></a> 
## Name

ec_cache_resolver_wake_on_completion — Allows a thread to block, pending completion of the cache resolution

## Synopsis

`#include "ec_cache.h"`

| `ec_cache_resolver_cond * **ec_cache_resolver_wake_on_completion** (` | <var class="pdparam">resolver</var>`)`; |   |

`ec_cache_resolver * <var class="pdparam">resolver</var>`;<a name="idp50973808"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Allows a thread to block, pending completion of the cache resolution.

Allocates an object that will be signalled when cache resolution completes.