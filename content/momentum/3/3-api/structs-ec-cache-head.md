---
lastUpdated: "03/26/2020"
title: "ec_cache_head"
description: "This struct is defined as follows To use this struct include the file ec cache int h Also the following typedef applies to this data type typedef struct ec cache head ec cache t ec cache create ec cache create 2 ec cache delref ec cache destroy ec cache find..."
---

This struct is defined as follows:

```
struct ec_cache_head {
  unsigned int max_size;
  unsigned int max_life;
  ec_cache_stats2 stats;
  ec_cache_elt_dtor_func dtor;
  pthread_rwlock_t lock;
  Skiplist cache;
  ec_hash_table pending;
  char *name;
  Event *e;
  ec_fc_t *fc;  
};
```

To use this struct, include the file `ec_cache_int.h`. Also, the following typedef applies to this data type: `typedef struct ec_cache_head ec_cache_t;`.

### <a name="idp41814000"></a> See Also

[ec_cache_create](/momentum/3/3-api/apis-ec-cache-create), [ec_cache_create2](/momentum/3/3-api/apis-ec-cache-create-2), [ec_cache_delref](/momentum/3/3-api/apis-ec-cache-delref), [ec_cache_destroy](/momentum/3/3-api/apis-ec-cache-destroy), [ec_cache_find](/momentum/3/3-api/apis-ec-cache-find), and [ec_cache_insert](/momentum/3/3-api/apis-ec-cache-insert).