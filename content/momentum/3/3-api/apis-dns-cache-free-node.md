---
lastUpdated: "03/26/2020"
title: "dns_cache_free_node"
description: "dns cache free node Release a reference on a dns cache node void dns cache free node node dns cache cachenode node Release a reference on a dns cache node When the reference count falls to 0 the resources for the node are released After calling dns cache free node..."
---

<a name="apis.dns_cache_free_node"></a> 
## Name

dns_cache_free_node — Release a reference on a dns cache node

## Synopsis

`#include "dns-cache.h"`

| `void **dns_cache_free_node** (` | <var class="pdparam">node</var>`)`; |   |

`dns_cache_cachenode * <var class="pdparam">node</var>`;<a name="idp50468944"></a> 
## Description

Release a reference on a dns cache node. When the reference count falls to 0, the resources for the node are released.

### Note

After calling [dns_cache_free_node](/momentum/3/3-api/apis-dns-cache-free-node), you must assume that the node has been freed.

**<a name="idp50471776"></a> Parameters**

<dl class="variablelist">

<dt>node</dt>

<dd>

The dns cache node. A pointer to a dns_cache_cachenode struct. For documentation of this data structure see [“dns_cache_cachenode”](/momentum/3/3-api/structs-dns-cache-cachenode)

</dd>

</dl>

**<a name="idp50475184"></a> Return Values**

This function returns void.

**<a name="idp50476096"></a> Threading**

It is legal to call this function in any thread.

<a name="idp50477200"></a> 
## See Also

[dns_cache_lookup_wait](/momentum/3/3-api/apis-dns-cache-lookup-wait), [dns_cache_submit2](/momentum/3/3-api/apis-dns-cache-submit-2), and [dns_cache_lookup](/momentum/3/3-api/apis-dns-cache-lookup).