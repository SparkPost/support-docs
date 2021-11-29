---
lastUpdated: "03/26/2020"
title: "ec_hash_table"
description: "The ec hash table struct has the following members To use this struct include the file echash h The hash table data structure is not thread safe any simultaneous access needs to be coordinated by the API consumer An EC Dict is an ec hash table ec datasource cache query..."
---

The ec_hash_table struct has the following members:

```
typedef struct _ec_hash_bucket {
  const char *k;
  int klen;
  void *data;
  struct _ec_hash_bucket *next;
} ec_hash_bucket;

struct _ec_hash_table {
  u_int32_t sizeof_ec_hash_table;
  ec_hash_bucket **buckets;
  u_int32_t table_size;
  u_int32_t initval;
  u_int32_t num_used_buckets;
  u_int32_t size;
  unsigned dont_rebucket:1;
  unsigned track_version:1;
  unsigned _spare:30;
  ec_atomic_t ref;
  ECHashFreeFunc key_free, data_free;
  ec_atomic_t version;
};
```

To use this struct, include the file `echash.h`.

### Note

The hash table data structure is not thread safe; any simultaneous access needs to be coordinated by the API consumer.

An ECDict is an ec_hash_table.

### <a name="idp45751936"></a> See Also

[ec_datasource_cache_query](/momentum/3/3-api/apis-ec-datasource-cache-query) and [echash_create](/momentum/3/3-api/apis-echash-create)