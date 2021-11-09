---
lastUpdated: "03/26/2020"
title: "ds_fetch_flat"
description: "ds fetch flat query and fetch all rows from a datasource ds fetch flat cachename query params This function issues a query against a datasource cache If the data is available in the cache it will return a string list immediately containing all rows of the result If the data..."
---

<a name="sieve.ref.ds_fetch_flat"></a> 
## Name

ds_fetch_flat — query and fetch all rows from a datasource

## Synopsis

`ds_fetch_flat` { *`cachename`* } { *`query`* } [ *`params`* ]

<a name="idp29065168"></a> 
## Description

This function issues a query against a datasource cache. If the data is available in the cache, it will return a string list immediately containing all rows of the result. If the data is not cached, the query will be queued to the thread pool and the current Sieve script will be suspended until the query completes. While the Sieve script is suspended, Momentum will continue to schedule other events.

All rows of the data are returned as a stringlist. For example, if you select two columns from a datasource, Index 0 of the list holds the value of the first column of the first row returned from the datasource, Index 1 the second column of the first row, Index 2 the first column of the second row, and so on. If you need to work with a datasource that can return multiple values for a particular column in a particular row, then you may use [ds_fetch_hash](/momentum/3/3-reference/sieve-ref-ds-fetch-hash) to retrieve the row as a hash instead.

If your query cannot be completed due to an error, the connection validation context variable `datasource_error` will contain the error message. For successful queries, this connection context variable is deleted.

### Note

The ds_core module and datasource drivers are loaded automatically as required and do not need to be explicitly included. See [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core) for more information.

By specifying the optional *`params`* parameter, you can create parameterized queries. Where supported by the underlying datasource driver, parameterized queries are mapped to native prepared statements for more optimal database performance.

Parameterized queries use one of three different kinds of placeholder indicator, depending on the underlying driver. If you want to use the ODBC style `?` parameter marker, then the *`params`* parameter should be a stringlist containing the values to be substituted for each marker.

Alternatively, you may use Oracle style `:name` parameter markers, which are useful for creating more readable queries. If you use these, then *`params`* should be a hash table where the keys of the hash correspond to the names of the parameters; the values in the hash will be substituted for the placeholders.

The last form is similar to Oracle style named markers, except that a dollar sign is used instead of the colon: `$name`. This style of naming is used by datasource drivers where the native query syntax treats the `:` and `?` characters specially. Rather than requiring tedious quoting/escaping of those characters an alternative symbol was chosen.

Most drivers support both `?` and `:name` style parameters. Those that don't, only support the `$name` style. The definitive list of drivers and their supported placeholders can be found in [“Datasource Drivers”](/momentum/3/3-reference/3-reference-modules-ds-core#modules.ds_core.drivers).

<a name="example.ds_fetch_flat"></a> 


```
$address = envelope "to";
$aliases = ds_fetch_flat "mydb" "select expansion from alias where user = ?" [$address];
ec_forward "sender@mailfrom.com" $aliases "forwarded via sieve";
```

<a name="idp29085728"></a> 
## See Also

[ds_execute](/momentum/3/3-reference/sieve-ref-ds-execute), [ds_fetch](/momentum/3/3-reference/sieve-ref-ds-fetch), [ds_fetch_hash](/momentum/3/3-reference/sieve-ref-ds-fetch-hash)