---
lastUpdated: "03/26/2020"
title: "ds_execute"
description: "ds execute execute a query on a datasource ds execute cachename query params This function executes a query that does not return a result set The query will be queued to the thread pool and the current Sieve script will be suspended until the query completes While the Sieve script..."
---

<a name="sieve.ref.ds_execute"></a> 
## Name

ds_execute — execute a query on a datasource

## Synopsis

`ds_execute` { *`cachename`* } { *`query`* } [ *`params`* ]

<a name="idp28989744"></a> 
## Description

This function executes a query that does not return a result set. The query will be queued to the thread pool and the current Sieve script will be suspended until the query completes. While the Sieve script is suspended, Momentum will continue to schedule other events.

If you need to execute a query that fetches a row or all rows from a datasource, you need to use [ds_fetch](/momentum/3/3-reference/sieve-ref-ds-fetch), [ds_fetch_hash](/momentum/3/3-reference/sieve-ref-ds-fetch-hash). or [ds_fetch_flat](/momentum/3/3-reference/sieve-ref-ds-fetch-flat).

### Note

The ds_core module and datasource drivers are loaded automatically as required and do not need to be explicitly included. See [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core) for more information.

By specifying the optional *`params`* parameter, you can create parameterized queries. Where supported by the underlying datasource driver, parameterized queries are mapped to native prepared statements for more optimal database performance.

Parameterized queries use one of three different kinds of placeholder indicator, depending on the underlying driver. If you want to use the ODBC style `?` parameter marker, then the *`params`* parameter should be a stringlist containing the values to be substituted for each marker.

Alternatively, you may use Oracle style `:name` parameter markers, which are useful for creating more readable queries. If you use these, then *`params`* should be a hash table where the keys of the hash correspond to the names of the parameters; the values in the hash will be substituted for the placeholders.

The last form is similar to Oracle style named markers, except that a dollar sign is used instead of the colon: `$name`. This style of naming is used by datasource drivers where the native query syntax treats the `:` and `?` characters specially. Rather than requiring tedious quoting/escaping of those characters an alternative symbol was chosen.

Most drivers support both `?` and `:name` style parameters. Those that don't, only support the `$name` style. The definitive list of drivers and their supported placeholders can be found in [“Datasource Drivers”](/momentum/3/3-reference/3-reference-modules-ds-core#modules.ds_core.drivers).

<a name="example.ds_execute"></a> 


```
if size :over 1M {
  ($deny) = ds_fetch "mssql" "select deny from LargeMsgSender where sender = ?"
               ["%{vctx_mess:mailfrom_localpart}@%{vctx_mess:mailfrom_domain}"];
  #cache_life should be 0 for real-time check;
  if ec_test :is "${deny}" "1" {
    ec_action 550 "5.7.1 sender rejected by policy";
  } else {
    ds_execute "mssql" "insert into LargeMsgSender values (1, ?)"
               ["%{vctx_mess:mailfrom_localpart}@%{vctx_mess:mailfrom_domain}"];
    ec_action 550 "5.7.1 sender rejected by policy";
  }
}
```

<a name="idp29009440"></a> 
## See Also

[ds_fetch](/momentum/3/3-reference/sieve-ref-ds-fetch). [ds_fetch_flat](/momentum/3/3-reference/sieve-ref-ds-fetch-flat). [ds_fetch_hash](/momentum/3/3-reference/sieve-ref-ds-fetch-hash).