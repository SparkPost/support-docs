---
lastUpdated: "03/26/2020"
title: "ec_datasource_cache_query"
description: "ec datasource cache query Execute a query against a datasource cache int ec datasource cache query cachename query params closure const char cachename const char query EC Dict params ec datasource closure closure Execute a query against a datasource cache When you are done call ec datasource cache delref on..."
---

<a name="apis.ec_datasource_cache_query"></a> 
## Name

ec_datasource_cache_query — Execute a query against a datasource cache

## Synopsis

`#include "modules/datasource/ecdatasource.h"`

| `(int) **ec_datasource_cache_query** (` | <var class="pdparam">cachename</var>, |   |
|   | <var class="pdparam">query</var>, |   |
|   | <var class="pdparam">params</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`const char * <var class="pdparam">cachename</var>`;
`const char * <var class="pdparam">query</var>`;
`ECDict <var class="pdparam">params</var>`;
`ec_datasource_closure * <var class="pdparam">closure</var>`;<a name="idp49608928"></a> 
## Description

Execute a query against a datasource cache.

When you are done, call [ec_datasource_cache_delref](/momentum/3/3-api/apis-ec-datasource-cache-delref) on any results and destroy your query using [ec_datasource_destroy_query](/momentum/3/3-api/apis-ec-datasource-destroy-query).

**<a name="idp49612160"></a> Parameters**

<dl class="variablelist">

<dt>cachename</dt>

<dd>

A pointer to the datasource cache.

</dd>

<dt>query</dt>

<dd>

A pointer to the query that will be executed.

</dd>

<dt>params</dt>

<dd>

An ECDict of the query parameters. An ECDict is an [ec_hash_table](/momentum/3/3-api/structs-ec-hash-table) struct.

</dd>

<dt>closure</dt>

<dd>

A pointer to the [“ec_datasource_closure”](/momentum/3/3-api/structs-ec-datasource-closure) struct that holds the result set and the completion routine.

</dd>

</dl>

**<a name="idp49621856"></a> Return Values**

The int returned is one of the following values:

*   `ECDS_QUERY_LIMBO`

*   `ECDS_QUERY_FAIL`

*   `ECDS_QUERY_OK`

*   `ECDS_QUERY_ASYNC`

When `ECDS_QUERY_OK` is returned, you can access the result field of the [“ec_datasource_cache_query”](/momentum/3/3-api/structs-ec-datasource-cache-query) struct immediately.

In the event that the query is asynchronous—it returns `ECDS_QUERY_ASYNC`—your callback function is called with the results. Prepare the query with a completion routine by setting the `job` field of the ec_data_closure struct. The `job` field is a struct described at [ec_async_job](/momentum/3/3-api/structs-ec-async-job).

### Note

A query can only be asynchronous if the function calling `ec_datasource_cache_query` is capable of going asynchronous. This requires contextual knowledge about where the query is being executed.

The following code snippet shows how an ec_datasource_closure might be initialized:

<a name="apis.ec_datasource_cache_query.closure.example"></a> 


```
ec_datasource_closure *dsc;
dsc = ec_malloc_size(memtype_campaign_vsize, sizeof(*dsc));
memset(dsc, 0, sizeof(*dsc));

dsc->job.completion = ECTP_COMPLETE_CALLBACK;
dsc->job.r.cb.func = completion;
dsc->job.r.cb.closure = closure;
dsc->job.job_class = ECTP_CLASS_IO;
dsc->errmsg = erroutput;
```

**<a name="idp49637424"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49638848"></a> 
## See Also

[“ec_datasource_query_cache_entry”](/momentum/3/3-api/structs-ec-datasource-query-cache-entry), [“ec_data_source_query_cache”](/momentum/3/3-api/structs-ec-data-source-query-cache) and [“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table)