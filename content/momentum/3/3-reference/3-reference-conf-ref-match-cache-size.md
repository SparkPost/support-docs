---
lastUpdated: "03/26/2020"
title: "match_cache_size"
description: "match cache size the size of the cache that holds the results of looking up matching scopes match cache size 16384 In version 2 2 Momentum creates a separate cache for every scope instance that contains regex domains Consider the following configuration snippet Three caches would be created one for..."
---

<a name="conf.ref.match_cache_size"></a> 
## Name

match_cache_size — the size of the cache that holds the results of looking up matching scopes

## Synopsis

`match_cache_size = 16384`

<a name="idp10110944"></a> 
## Description

In version 2.2, Momentum creates a separate cache for every scope instance that contains regex domains. Consider the following configuration snippet:

```
Binding_Group group {
  Binding foo {
    Domain /yahoo\.co(m|\.uk)$/ {
    }
    Domain /google\.(com|es|ru)$/{
    }
  }
  Domain /yahoo\.co(m|\.uk)$/ {
  }
  Domain /google\.(com|es|ru)$/{
  }
}

Domain /yahoo\.co(m|\.uk)$/ {
}

Domain /google\.(com|es|ru)$/{
}
```

Three caches would be created: one for the global scope, one for the Binding_Group `group` scope, and one for the Binding `foo` scope. match_cache_size determines the maximum number of elements in *each* cache. If your configuration uses regex domains, then, for best performance, the cache size should be larger than the number of unique queries. This should be at least the number of unique destination domains you send to.

### Warning

The Match_Cache_Size **MUST NOT**     be set to `0`; doing so will result in undefined behavior.

<a name="idp10117504"></a> 
## Changes in Version 3

Version 3.0 uses a single global cache. For this reason the default value has increased to `16384`.

In 2.2 `match_cache_size` applied only to regex domains, but in 3.0 it also applies to Peer scopes in listeners, and any user-defined scopes that use matching.

In Momentum version 3.0 it is not necessary to restart the MTA if changes are made to this option using **config set** .

<a name="idp10121872"></a> 
## Scope

match_cache_size is valid in the global scope.

<a name="idp10123520"></a> 
## See Also

[match_cache_life](/momentum/3/3-reference/3-reference-conf-ref-match-cache-life) and [domain](/momentum/3/3-reference/3-reference-conf-ref-domain)