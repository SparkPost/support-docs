---
lastUpdated: "03/26/2020"
title: "msys.db.fetch_row"
description: "msys db fetch row If successful return the first row of the query result as a table msys db fetch row cachename query queryparams options Issue a query to a datasource The parameters are as follows cachename the name of the datasource cache to be queried query the query to..."
---

<a name="lua.ref.msys.db.fetch_row"></a> 
## Name

msys.db.fetch_row — If successful, return the first row of the query result as a table

<a name="idp26480096"></a> 
## Synopsis

`msys.db.fetch_row(cachename, query, queryparams, options);`

```
cachename: string
query: string
queryparams: table, optional
options: table, optional
```
<a name="idp26482880"></a> 
## Description

Issue a query to a datasource. The parameters are as follows:

*   `cachename` the name of the datasource cache to be queried

*   `query` the query to be presented to the cache

*   `queryparams` a Lua table object with parameters to bind into the query

    ### Note

    The SQL standard requires the use of the "`IS [NOT] NULL"` syntax in a predicate for matching against `NULL`. A predicate "*`field_name`* = ?" would result in an error if a query parameter is `NULL`. A Lua `nil` is equivalent to an SQL `NULL`.

*   `options` a Lua table object containing additional options that affect this query. If `options` is specified, it must be a Lua table object. Only the following option is permitted:

    *   `nocache` bypass the cache and force the query to be presented to the underlying datasource

    *   `raise_error` This is a boolean. If set to `true`, raise an exception (lua_error) on error containing the error string. The default value is `true`.

If the query fails and `raise_error` is set to false, it returns:

*   `nil` indicating query failure

*   `errmsg` indicating what failed

If the query fails and `raise_error` is set to `true` an exception is raised.

If the query returns no data, `nil` is returned. Otherwise, the first row of the query results is returned as a table.

<a name="lua.ref.msys.db.fetch_row.example"></a> 


```
...
  r, e = msys.db.fetch_row (cache, query, nil, { raise_error = false });
  if (r ~= nil) then
    for k, v in pairs(r) do
      print(k, v);
    end
  elseif (e ~= nil) then
    print "Query failed";
  else
    print "No match";
  end
...
```

### Note

The data cache used in the preceding example must be defined in your configuration file. For more information see [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core).

### Warning

When using this function you must also include `require('msys.datasource');`.

Enable this function with the statement `require('msys.db');`.

<a name="idp26511296"></a> 
## See Also

[“Implementing Policy Using Scriptlets”](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets), [msys.db.query](/momentum/3/3-reference/3-reference-lua-ref-msys-db-query), [msys.db.execute](/momentum/3/3-reference/3-reference-lua-ref-msys-db-execute)