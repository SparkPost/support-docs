---
lastUpdated: "03/26/2020"
title: "ec_datasource_cache_query"
description: "The members of this struct are as follows To use this struct include the file modules datasource ecdatasource h The ec data cache query is a typedef of this struct ec datasource cache query Section 68 27 ec datasource query cache entry Section 68 24 ec data source query cache..."
---

The members of this struct are as follows:

```
struct ec_datasource_cache_query {
  char *query;
  int query_len;
  const char *desired_charset;
  unsigned no_cache:1;
  unsigned no_fetch:1;

  int params_positional; /* if non-zero, holds the number of positional params */
  ecdata_value *positional_params;

  /* if params_positional == 0, then this holds a hash of name => ecdata_value */
  ec_hash_table *params;

  /* after initial processing by the cache layer, this is the serialized
   * representation of the query */
  char *key;
  int key_len;

  /* after a call to _cache_query(), this points at the result from the cache */
  struct ec_datasource_query_cache_entry *result;

  /* reference to the cache this query is/will be associated with */
  ec_data_source_query_cache *cache;
};
```

To use this struct, include the file `modules/datasource/ecdatasource.h`.

### <a name="idp46500288"></a> Typedef

The ec_data_cache_query is a typedef of this struct.

### <a name="idp46501600"></a> See Also

[ec_datasource_cache_query](/momentum/3/3-api/apis-ec-datasource-cache-query), [“ec_datasource_query_cache_entry”](/momentum/3/3-api/structs-ec-datasource-query-cache-entry) [“ec_data_source_query_cache”](/momentum/3/3-api/structs-ec-data-source-query-cache) and [“ec_datasource_closure”](/momentum/3/3-api/structs-ec-datasource-closure)