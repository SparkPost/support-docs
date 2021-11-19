---
lastUpdated: "03/26/2020"
title: "dns_cache_submit2"
description: "dns cache submit 2 Submit a query to the dns cache void dns cache submit 2 query callback closure flags dns cache query query dns cache callback callback void closure int flags Submit a query to the dns cache When the query completes the completion callback will be called If..."
---

<a name="apis.dns_cache_submit2"></a> 
## Name

dns_cache_submit2 — Submit a query to the dns cache

## Synopsis

`#include "dns-cache.h"`

| `void **dns_cache_submit2** (` | <var class="pdparam">query</var>, |   |
|   | <var class="pdparam">callback</var>, |   |
|   | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`dns_cache_query * <var class="pdparam">query</var>`;
`dns_cache_callback <var class="pdparam">callback</var>`;
`void * <var class="pdparam">closure</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp50550128"></a> 
## Description

Submit a query to the dns cache.

When the query completes, the completion callback will be called. If flags is set to DNS_CACHE_DISPATCH_NOW, and if called from the scheduler thread, then the query will be queued immediately and may call the completion routine before the call to [dns_cache_submit2](/momentum/3/3-api/apis-dns-cache-submit-2) returns.

### Warning

This can make it difficult to write asynchronous code, as things may appear to complete before they have finished starting.

**<a name="idp50553632"></a> Parameters**

<dl class="variablelist">

<dt>query</dt>

<dd>

The dns cache query. A pointer to a dns_cache_query struct. For documentation of this data structure see [“dns_cache_query”](/momentum/3/3-api/structs-dns-cache-query)

</dd>

<dt>callback</dt>

<dd>

The dns cache callback. A pointer to function.

`typedef void (*dns_cache_callback)(dns_cache_cachenode *, void *closure);`

For documentation of a dns_cache_cachenode structure see [“dns_cache_cachenode”](/momentum/3/3-api/structs-dns-cache-cachenode).

</dd>

<dt>closure</dt>

<dd>

A pointer to void.

</dd>

<dt>flags</dt>

<dd>

Integer parameter. Typically either 0 or DNS_CACHE_DISPATCH_NOW.

</dd>

</dl>

**<a name="idp50564032"></a> Return Values**

This function returns void.

**<a name="idp50564944"></a> Threading**

It is only legal to call this function in the `Scheduler` thread.

<a name="idp50566496"></a> 
## See Also

[dns_cache_free_node](/momentum/3/3-api/apis-dns-cache-free-node), [dns_cache_lookup_wait](/momentum/3/3-api/apis-dns-cache-lookup-wait), and [dns_cache_lookup](/momentum/3/3-api/apis-dns-cache-lookup).