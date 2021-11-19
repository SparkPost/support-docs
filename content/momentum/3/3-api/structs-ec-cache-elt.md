---
lastUpdated: "03/26/2020"
title: "ec_cache_elt"
description: "This struct is defined as follows To use this struct include the file ec cache h ec cache create ec cache create 2 ec cache delref ec cache destroy ec cache find and ec cache insert..."
---

This struct is defined as follows:

```
typedef struct ec_cache_element {
  char *key;
  void *value;
  ec_atomic_t ref;
  int keylen;
  /* last use time */
  time_t last;
  /* time at which this element expires */
  time_t expiry_time;

  /* this represents the actual cache entry */
  ec_fc_entry_t entry;
  ec_cache_elt_dtor_func dtor;
} ec_cache_elt;
```

To use this struct, include the file `ec_cache.h`.

### <a name="idp37434896"></a> See Also

[ec_cache_create](/momentum/3/3-api/apis-ec-cache-create), [ec_cache_create2](/momentum/3/3-api/apis-ec-cache-create-2), [ec_cache_delref](/momentum/3/3-api/apis-ec-cache-delref), [ec_cache_destroy](/momentum/3/3-api/apis-ec-cache-destroy), [ec_cache_find](/momentum/3/3-api/apis-ec-cache-find), and [ec_cache_insert](/momentum/3/3-api/apis-ec-cache-insert).