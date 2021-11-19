---
lastUpdated: "03/26/2020"
title: "dns_cache_lookup"
description: "dns cache lookup Check to see if the results for a given query are in the DNS cache dns cache cachenode dns cache lookup query dns cache query query Check to see if the results for a given query are in the DNS cache query The dns cache query A..."
---

<a name="apis.dns_cache_lookup"></a> 
## Name

dns_cache_lookup — Check to see if the results for a given query are in the DNS cache

## Synopsis

`#include "dns-cache.h"`

| `dns_cache_cachenode * **dns_cache_lookup** (` | <var class="pdparam">query</var>`)`; |   |

`dns_cache_query * <var class="pdparam">query</var>`;<a name="idp50488336"></a> 
## Description

Check to see if the results for a given query are in the DNS cache.

**<a name="idp50489584"></a> Parameters**

<dl class="variablelist">

<dt>query</dt>

<dd>

The dns cache query. A pointer to a dns_cache_query struct. For documentation of this data structure see [“dns_cache_query”](/momentum/3/3-api/structs-dns-cache-query)

</dd>

</dl>

**<a name="idp50492976"></a> Return Values**

This function returns a reference to a dns_cache_cachenode if present, or NULL if not present. For documentation of this data structure see [“dns_cache_cachenode”](/momentum/3/3-api/structs-dns-cache-cachenode).

### Note

This function never blocks; it either has the answer in the cache or returns NULL.

### Note

If the cachenode is returned, it is the caller's responsibility to release its reference by calling [dns_cache_free_node](/momentum/3/3-api/apis-dns-cache-free-node) when it has finished using it.

**<a name="idp50497200"></a> Threading**

It is legal to call this function in any thread.

<a name="idp50498304"></a> 
## See Also

[dns_cache_free_node](/momentum/3/3-api/apis-dns-cache-free-node), [dns_cache_lookup_wait](/momentum/3/3-api/apis-dns-cache-lookup-wait), and [dns_cache_submit2](/momentum/3/3-api/apis-dns-cache-submit-2).