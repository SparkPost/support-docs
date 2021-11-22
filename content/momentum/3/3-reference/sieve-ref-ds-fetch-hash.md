---
lastUpdated: "03/26/2020"
title: "ds_fetch_hash"
description: "ds fetch hash query and fetch a row from a datasource as a hash ds fetch hash cachename query params This function issues a query against a datasource cache If the data is available in the cache it will return immediately with the first row of the data If the..."
---

<a name="sieve.ref.ds_fetch_hash"></a> 
## Name

ds_fetch_hash — query and fetch a row from a datasource, as a hash

## Synopsis

`ds_fetch_hash` { *`cachename`* } { *`query`* } [ *`params`* ]

<a name="idp29101568"></a> 
## Description

This function issues a query against a datasource cache. If the data is available in the cache, it will return immediately with the first row of the data. If the data is not cached, the query will be queued to the thread pool and the current Sieve script will be suspended until the query completes. While the Sieve script is suspended, Momentum will continue to schedule other events.

The first row of the data is returned as a hash. The values of the columns are stored in the hash, keyed by the column names. If the datasource can provide multiple values for a column, then the value will be a stringlist containing each possible value for that column, in the order that they were returned from the datasource.

If your query cannot be completed due to an error, the connection validation context variable `datasource_error` will contain the error message. For successful queries, this connection context variable is deleted.

### Note

The ds_core module and datasource drivers are loaded automatically as required and do not need to be explicitly included. See [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core) for more information.

By specifying the optional *`params`* parameter, you can create parameterized queries. Where supported by the underlying datasource driver, parameterized queries are mapped to native prepared statements for more optimal database performance.

Parameterized queries use one of three different kinds of placeholder indicator, depending on the underlying driver. If you want to use the ODBC style `?` parameter marker, then the *`params`* parameter should be a stringlist containing the values to be substituted for each marker.

Alternatively, you may use Oracle style `:name` parameter markers, which are useful for creating more readable queries. If you use these, then *`params`* should be a hash table where the keys of the hash correspond to the names of the parameters; the values in the hash will be substituted for the placeholders.

The last form is similar to Oracle style named markers, except that a dollar sign is used instead of the colon: `$name`. This style of naming is used by datasource drivers where the native query syntax treats the `:` and `?` characters specially. Rather than requiring tedious quoting/escaping of those characters an alternative symbol was chosen.

Most drivers support both `?` and `:name` style parameters. Those that don't, only support the `$name` style. The definitive list of drivers and their supported placeholders can be found in [“Datasource Drivers”](/momentum/3/3-reference/3-reference-modules-ds-core#modules.ds_core.drivers).

<a name="example.ds_fetch_hash"></a> 


```
$prefs = ds_fetch_hash "mssql" "select * from prefs where rcpt = ?"
                  ["%{rcptto_localpart}@%{rcptto_domain}"];

if isset $prefs "antivirus_enable" {
  $enable = $prefs["antivirus_enable"];
  if ec_test "${enable}" :is "1" {
    clamav_avscan;

    if vctx :is "clamav_status" "error" {
      ec_action 451 "temporary issue while running avscan"
            "transient:avscan error %{vctx_mess:clamav_info}";
    }

    if vctx :is "clamav_status" "virus" {
      ec_action 550 text:
5.7.1 rejected by policy: virus.
%{vctx_mess:clamav_info}
.
      "virus:%{vctx_mess:clamav_info}";
    }
  }
}
```

For an explanation of the context variables used in the preceding example see [“antivirus Configuration”](/momentum/3/3-reference/3-reference-modules-antivirus#modules.antivirus.configuration).

<a name="idp29122512"></a> 
## See Also

[ds_execute](/momentum/3/3-reference/sieve-ref-ds-execute), [ds_fetch](/momentum/3/3-reference/sieve-ref-ds-fetch), [ds_fetch_flat](/momentum/3/3-reference/sieve-ref-ds-fetch-flat)