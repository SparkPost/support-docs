---
lastUpdated: "03/26/2020"
title: "dns_cache_cachenode"
description: "This struct is defined as follows To use this struct include the file dns cache h Section 68 13 dns cache query dns cache free node dns cache lookup wait dns cache submit 2 dns cache lookup and dns get domain..."
---

This struct is defined as follows:

```
typedef struct _dns_cache_cachenode {
  dns_cache_query query;
  ec_atomic_t refcnt;
  u_int8_t answer_type;   /* This should match unless CNAME */
  u_int8_t answer_count;
  u_int8_t resolver_status;
  union _dns_cache_cachenode_answer {
    char **name;
    struct in_addr *ip4;
    struct in6_addr *ip6;
  } answer;
  void *__private;
  u_int64_t expiry;
  int *preference;
  pthread_cond_t cv;
  int *weight;
  int *port;
} dns_cache_cachenode;
```

To use this struct, include the file `dns-cache.h`.

### <a name="idp46139488"></a> See Also

[“dns_cache_query”](/momentum/3/3-api/structs-dns-cache-query), [dns_cache_free_node](/momentum/3/3-api/apis-dns-cache-free-node), [dns_cache_lookup_wait](/momentum/3/3-api/apis-dns-cache-lookup-wait), [dns_cache_submit2](/momentum/3/3-api/apis-dns-cache-submit-2), [dns_cache_lookup](/momentum/3/3-api/apis-dns-cache-lookup), and [dns_get_domain](/momentum/3/3-api/apis-dns-get-domain).