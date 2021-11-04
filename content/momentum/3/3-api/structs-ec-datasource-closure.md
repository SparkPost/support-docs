---
lastUpdated: "03/26/2020"
title: "ec_datasource_closure"
description: "This struct is also typedef ed as ec data closure The struct members are as follows To use this struct include the file modules datasource ecdatasource h Values for the status field are ECDS QUERY LIMBO 0 uninitialized ECDS QUERY FAIL 1 query failed ECDS QUERY OK 2 query succeeded..."
---

This struct is also typedef'ed as `ec_data_closure`. The struct members are as follows:

```
struct _ec_datasource_closure {
  ec_async_job job;
  int status;
  /* the query: on completion, q.result holds the result; the caller
   * is responsible for delref'ing it */
  struct ec_datasource_cache_query q;
  /* if the status indicates an error, and the caller has set errmsg
   * to a valid string pointer, the error message will be printed
   * to it. */
  string *errmsg;
};
```

To use this struct, include the file `modules/datasource/ecdatasource.h`.

Values for the status field are:

*   `ECDS_QUERY_LIMBO` (0) – uninitialized

*   `ECDS_QUERY_FAIL` (1) – query failed

*   `ECDS_QUERY_OK` (2) – query succeeded

*   `ECDS_QUERY_ASYN` (3) – query queued; will notify when complete

The query status field determines what action to take after executing a query. For more information see [ec_datasource_cache_query](/momentum/3/3-api/apis-ec-datasource-cache-query).

### <a name="idp45763440"></a> See Also

[“ec_async_job”](/momentum/3/3-api/structs-ec-async-job) and [“ec_datasource_cache_query”](/momentum/3/3-api/structs-ec-datasource-cache-query)