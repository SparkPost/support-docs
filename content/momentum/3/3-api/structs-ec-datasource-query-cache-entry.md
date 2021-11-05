---
lastUpdated: "03/26/2020"
title: "ec_datasource_query_cache_entry"
description: "The struct members are as follows To use this struct include the file modules datasource ecdatasource h The members of the ec cache elt struct are as follows To use this struct include the file modules datasource ecdatasource h Members of the ec cache elt struct are as follows To..."
---

The struct members are as follows:

```
struct ec_datasource_query_cache_entry {
  /* the generic cache and cache element we're stored in */
  ec_cache_t *cache;
  ec_cache_elt *elt;

  /* the result data */
  int nrows;
  ec_hash_table **rows;

  /* column information.  This may be NULL for some sources
   * (notably LDAP) where the result data can have wildly changing
   * structure.
   * When set, colnames contains the names of the columns in the
   * order that they appear in the result set. */
  int ncols;
  char **colnames; /* may be NULL for some sources */
};
```

To use this struct, include the file `modules/datasource/ecdatasource.h`.

The members of the `ec_cache_elt` struct are as follows:

```
typedef struct ec_cache_element ec_cache_elt;
typedef struct ec_cache_head    ec_cache_t;
typedef void (*ec_cache_elt_dtor_func)(void *value);

struct ec_cache_element {
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
};
```

To use this struct, include the file `modules/datasource/ecdatasource.h`.

Members of the `ec_cache_elt` struct are as follows:

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

To use this struct, include the file `modules/datasource/ecdatasource.h`.

The ec_fc struct is also typedef'ed as `ec_fc_t`. The struct members are as follows:

```
struct ec_fc {
  char *name;
  unsigned int name_generate;
  struct timeval create;

  unsigned int capacity;
  unsigned int expire;

  ec_fc_entry_dtor destroy_entry;

  struct ec_fc_fifo lru;

  struct ec_fc_fifo *timer;
  uint32_t timer_length;
  uint32_t timer_mask;

  struct ec_fc_st st;

  ck_spinlock_t mutex;

  ck_ht_t key_index;

  ec_atomic_t refs;

  /* XXX: To be removed. */
  void *container;
} CK_CC_CACHELINE;
```

To use this struct, include the file `modules/datasource/ecdatasource.h`.

### <a name="idp45519856"></a> See Also

[ec_datasource_cache_delref](/momentum/3/3-api/apis-ec-datasource-cache-delref) and [ec_datasource_cache_query](/momentum/3/3-api/apis-ec-datasource-cache-query)