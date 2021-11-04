---
lastUpdated: "03/26/2020"
title: "dns_cache_submit3"
description: "dns cache submit 3 Submit a query to the dns cache asking an alternative ares channel void dns cache submit 3 q cb cl flags mychannel dns cache query q dns cache callback cb void cl int flags ares channel mychannel This reference page was automatically generated from functions found..."
---

<a name="apis.dns_cache_submit3"></a> 
## Name

dns_cache_submit3 — Submit a query to the dns cache, asking an alternative ares channel

## Synopsis

`#include "dns-cache.h"`

| `void **dns_cache_submit3** (` | <var class="pdparam">q</var>, |   |
|   | <var class="pdparam">cb</var>, |   |
|   | <var class="pdparam">cl</var>, |   |
|   | <var class="pdparam">flags</var>, |   |
|   | <var class="pdparam">mychannel</var>`)`; |   |

`dns_cache_query * <var class="pdparam">q</var>`;
`dns_cache_callback <var class="pdparam">cb</var>`;
`void * <var class="pdparam">cl</var>`;
`int <var class="pdparam">flags</var>`;
`ares_channel <var class="pdparam">mychannel</var>`;<a name="idp50580752"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Submit a query to the dns cache, asking an alternative ares channel.

When the query completes, the completion callback will be called. If flags is set to DNS_CACHE_DISPATCH_NOW, and if called from the scheduler thread, then the query will be queued immediately and may call the completion routine before the call to [dns_cache_submit2](/momentum/3/3-api/apis-dns-cache-submit-2) returns.

This can make it difficult to write asynchronous code, as things may appear to complete before they have finished starting.

Also note that while two different servers may return different answers for the same query, the cache is unified, so whomever resolves a domain first will control its value in the cache.

**<a name="idp50586128"></a> See Also**

[dns_cache_submit2](/momentum/3/3-api/apis-dns-cache-submit-2).