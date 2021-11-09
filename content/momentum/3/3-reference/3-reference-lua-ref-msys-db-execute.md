---
lastUpdated: "03/26/2020"
title: "msys.db.execute"
description: "msys db execute Execute a query that is not expected to return data success errmsg msys db execute cachename query queryparams options Execute a query that is not expected to return data The parameters are as follows cachename the name of the datasource cache to be queried query the query..."
---

<a name="lua.ref.msys.db.execute"></a> 
## Name

msys.db.execute — Execute a query that is not expected to return data

<a name="idp23322176"></a> 
## Synopsis

```
require('msys.db')
require('msys.datasource')
```

`success, errmsg = msys.db.execute(cachename, query, queryparams, options);`

```
cachename: string
query: string
queryparams: table (optional)
options: table (optional)
```
<a name="idp23325616"></a> 
## Description

Execute a query that is not expected to return data. The parameters are as follows:

*   `cachename` the name of the datasource cache to be queried

*   `query` the query to be presented to the cache

    The query may use placeholder characters in the form `:name, ?` or `$name` depending on the underlying driver. If the `?`placeholder is used, then `queryparams` must be a table with numeric keys, with index `1` corresponding to the first `?` in the query string. Otherwise, the keys must be string keys with names that match up to the defined parameters. For instance, `$name` or `:name` expect to find a parameter in the table using the key name; the leading `$` or `:` is removed before looking up the value.

*   `queryparams` a Lua table object with parameters to bind into the query

    ### Note

    The SQL standard requires the use of the "`IS [NOT] NULL"` syntax in a predicate for matching against `NULL`. A predicate "*`field_name`* = ?" would result in an error if a query parameter is `NULL`. A Lua `nil` is equivalent to an SQL `NULL`.

*   `options` a Lua table object containing additional options that affect this query.

If `options` is specified, it must be a table. The following options are permitted:

*   `nocache` This is a boolean. If set to `true`, bypass the cache and force the query to be presented to the underlying datasource.

*   `raise_error` This is a boolean. If set to `true`, raise an exception (lua_error) on error containing the error string. The default value is `true`.

If the query succeeds, it returns `true`.

If the query fails, it returns `false`. In this case, a second return value, `errmsg`, is a string indicating what failed.

If the query fails and `raise_error` is set to `true` an exception is raised.

The idiom for issuing a query and working with the results is:

<a name="lua.ref.msy.db.execute.example"></a> 


```
require('msys.datasource');
require('msys.db');

local success, errmsg;
local cache, query, raise_error;
...

  success, errmsg = msys.db.execute (cache, query, nil, { raise_error = false });
  if (success == true) then
    print ("Query succeeded");
  elseif (success == false) then
    print ("Query failed: " .. errmsg);
  else
    print ("Unknown state");
  end
...
```

### Note

The data cache used in the preceding example must be defined in your configuration file. For more information see [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core).

<a name="idp23355488"></a> 
## See Also

[msys.db.query](/momentum/3/3-reference/3-reference-lua-ref-msys-db-query), [msys.db.fetch_row](/momentum/3/3-reference/3-reference-lua-ref-msys-db-fetch-row), [“Implementing Policy Using Scriptlets”](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets)