---
lastUpdated: "03/26/2020"
title: "msys.db.query"
description: "msys db query Query a datasource msys db query cachename query queryparams options Issue a query to a datasource The parameters are as follows cachename the name of the datasource cache to be queried query the query to be presented to the cache queryparams a Lua table object with parameters..."
---

<a name="lua.ref.msys.db.query"></a> 
## Name

msys.db.query — Query a datasource

<a name="idp26518592"></a> 
## Synopsis

`msys.db.query(cachename, query, queryparams, options);`

```
cachename: string
query: string
queryparams: table, optional
options: table, optional
```
<a name="idp26521376"></a> 
## Description

Issue a query to a datasource. The parameters are as follows:

*   `cachename` the name of the datasource cache to be queried

*   `query` the query to be presented to the cache

*   `queryparams` a Lua table object with parameters to bind into the query

    ### Note

    The SQL standard requires the use of the "`IS [NOT] NULL"` syntax in a predicate for matching against `NULL`. A predicate "*`field_name`* = ?" would result in an error if a query parameter is `NULL`. A Lua `nil` is equivalent to an SQL `NULL`.

*   `options` a Lua table object containing additional options that affect this query

`query` may use placeholder characters in the form `:name, ?` or `$name` depending on the underlying driver. If the `?` placeholder is used, then `queryparams` must be a table with numeric keys, with index `1` corresponding to the first `?` in the query string. Otherwise, the keys must be string keys with names that match up to the defined parameters. For instance, `$name` or `:name` expect to find a parameter in the table using the key name; the leading `$` or `:` is removed before looking up the value.

If `options` is specified, it must be a Lua table object. The following options are permitted:

*   `nocache` bypass the cache and force the query to be presented to the underlying datasource

*   `raise_error` This is a boolean. If set to `true`, raise an exception (lua_error) on error containing the error string. The default value is `true`.

If the query succeeds, it returns: `rowiter`, an iterator returning the rows.

If the query fails and `raise_error` is set to false, it returns:

*   `nil` indicating query failure

*   `errmsg` indicating what failed

If the query fails and `raise_error` is set to `true` an exception is raised.

The idiom for issuing a query and working with the results is as follows:

<a name="lua.ref.msys.db.query.example"></a> 


```
require('msys.db');
require('msys.datasource');
local rowset, row, err;

...
  rowset, err = msys.db.query('mycache', 'select firstname, lastname from names
  where age < ?', {30});

  if rowset == nil then
    print("ERROR: " .. err);
    return;
  end

  for row in rowset do
    print(row.firstname, row.lastname);
  end
...
```

### Note

The data cache used in the preceding example must be defined in your configuration file. For more information see [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core).

Each iteration over the returned rowset yields a table with string keys corresponding to the names of the columns from the row. If the driver does not return names, the values are indexed by their ordinal position instead, with the first column at ordinal position `1`. For drivers that can return multiple values for a given named column (such as LDAP), the values may in turn be tables indexed by ordinal position of the sub-value.

Enable this function with the statement `require('msys.db');`.

### Warning

When using this function you must also include `require('msys.datasource');`.

<a name="idp26556976"></a> 
## See Also

[“Implementing Policy Using Scriptlets”](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets), [msys.db.fetch_row](/momentum/3/3-reference/3-reference-lua-ref-msys-db-fetch-row), [msys.db.execute](/momentum/3/3-reference/3-reference-lua-ref-msys-db-execute)