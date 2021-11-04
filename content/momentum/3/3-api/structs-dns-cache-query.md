---
lastUpdated: "03/26/2020"
title: "dns_cache_query"
description: "This struct is defined as follows To use this struct include the file dns cache h Section 68 12 dns cache cachenode dns cache free node dns cache lookup wait dns cache submit 2 dns cache lookup and dns get domain..."
---

This struct is defined as follows:

```
typedef struct _dns_cache_query {
  u_int8_t query_type;
  union _dns_cache_query_query {
    char *name;
    struct in_addr ip4;
    struct in6_addr ip6;
  } query;
} dns_cache_query;
```

To use this struct, include the file `dns-cache.h`.

### <a name="idp39851520"></a> See Also

[“dns_cache_cachenode”](/momentum/3/3-api/structs-dns-cache-cachenode), [dns_cache_free_node](/momentum/3/3-api/apis-dns-cache-free-node), [dns_cache_lookup_wait](/momentum/3/3-api/apis-dns-cache-lookup-wait), [dns_cache_submit2](/momentum/3/3-api/apis-dns-cache-submit-2), [dns_cache_lookup](/momentum/3/3-api/apis-dns-cache-lookup), and [dns_get_domain](/momentum/3/3-api/apis-dns-get-domain).