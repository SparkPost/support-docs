---
lastUpdated: "03/26/2020"
title: "ec_data_source_query_cache"
description: "The members of this struct are as follows To use this struct include the file modules datasource ecdatasource h ec datasource cache query and Section 68 26 ec datasource closure..."
---

The members of this struct are as follows:

```
struct ec_data_source_query_cache {
  ec_cache_t *dbcache;
  u_int32_t cache_life;
  u_int32_t cache_size;
  int serialized; /* use cluster replication for the cache */
  int no_cache; /* don't use the cache, pass everything to backend */
  char *name;
  ec_ptr_array uris;
  ec_atomic_t last_uri;
  struct ec_datasource_driver_record *rec; /* private state */
  char *charset; /* charset to assume for data, if the driver doesn't specify */
  int32_t max_rows; /* maximum number of rows to fetch and cache */
  ECDict confdict;
  /* @since 3.0.15 */
  int jobclass;
};
```

To use this struct, include the file `modules/datasource/ecdatasource.h`.

### <a name="idp46551616"></a> See Also

[ec_datasource_cache_query](/momentum/3/3-api/apis-ec-datasource-cache-query) and [“ec_datasource_closure”](/momentum/3/3-api/structs-ec-datasource-closure)