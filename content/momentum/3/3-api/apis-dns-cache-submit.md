---
lastUpdated: "03/26/2020"
title: "dns_cache_submit"
description: "dns cache submit Submit a query to the dns cache void dns cache submit q cb cl dns cache query q dns cache callback cb void cl This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.dns_cache_submit"></a> 
## Name

dns_cache_submit — Submit a query to the dns cache

## Synopsis

`#include "dns-cache.h"`

| `void **dns_cache_submit** (` | <var class="pdparam">q</var>, |   |
|   | <var class="pdparam">cb</var>, |   |
|   | <var class="pdparam">cl</var>`)`; |   |

`dns_cache_query * <var class="pdparam">q</var>`;
`dns_cache_callback <var class="pdparam">cb</var>`;
`void * <var class="pdparam">cl</var>`;<a name="idp50533072"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Submit a query to the dns cache.

When the query completes, the completion callback will be called. If called from the scheduler thread, then the query will be queued immediately and may call the completion routine before the call to [dns_cache_submit](/momentum/3/3-api/apis-dns-cache-submit) returns.

This can make it difficult to write asynchronous code, as things may appear to complete before they have finished starting.

This function is equivalent to dns_cache_submit2(q, cb, cl, DNS_CACHE_DISPATCH_NOW).

**<a name="idp50538256"></a> See Also**

[dns_cache_submit2](/momentum/3/3-api/apis-dns-cache-submit-2).