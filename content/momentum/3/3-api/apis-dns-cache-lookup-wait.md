---
lastUpdated: "03/26/2020"
title: "dns_cache_lookup_wait"
description: "dns cache lookup wait Perform a blocking DNS lookup utilizing the cache dns cache cachenode dns cache lookup wait query dns cache query query Perform a blocking DNS lookup utilizing the cache query The dns cache query A pointer to a dns cache query struct For documentation of this data..."
---

<a name="apis.dns_cache_lookup_wait"></a> 
## Name

dns_cache_lookup_wait — Perform a blocking DNS lookup, utilizing the cache

## Synopsis

`#include "dns-cache.h"`

| `dns_cache_cachenode * **dns_cache_lookup_wait** (` | <var class="pdparam">query</var>`)`; |   |

`dns_cache_query * <var class="pdparam">query</var>`;<a name="idp50509408"></a> 
## Description

Perform a blocking DNS lookup, utilizing the cache.

**<a name="idp50510640"></a> Parameters**

<dl class="variablelist">

<dt>query</dt>

<dd>

The dns cache query. A pointer to a dns_cache_query struct. For documentation of this data structure see [“dns_cache_query”](/momentum/3/3-api/structs-dns-cache-query)

</dd>

</dl>

**<a name="idp50514032"></a> Return Values**

This function returns a reference to a dns_cache_cachenode if present, or NULL if not present. If the answer for a query is present in the cache, this function will return the cache node. If the answer is not present, it will submit the query and block until the answer is available. For documentation of this data structure see [“dns_cache_cachenode”](/momentum/3/3-api/structs-dns-cache-cachenode).

### Note

If the cachenode is returned, it is the caller's responsibility to release its reference by calling [dns_cache_free_node](/momentum/3/3-api/apis-dns-cache-free-node) when it has finished using it.

**<a name="idp50517472"></a> Threading**

It is legal to call this function in any thread but should not be called in the Scheduler thread.

### Note

This function may induce IO blocking or otherwise block the caller. Blocking in the scheduler thread will lead to degraded performance and should be avoided at all costs. If your code is running in the IO subsystem, the core will have already taken steps to ensure that blocking is acceptable. Otherwise, you should look at using the thread pool API to run a job in the IO pool.

<a name="idp50520336"></a> 
## See Also

[dns_cache_free_node](/momentum/3/3-api/apis-dns-cache-free-node), [dns_cache_submit2](/momentum/3/3-api/apis-dns-cache-submit-2), and [dns_cache_lookup](/momentum/3/3-api/apis-dns-cache-lookup).