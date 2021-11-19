---
lastUpdated: "03/26/2020"
title: "cidrdb – CIDRDB"
description: "The cidrdb module exposes scripting functions which check the IP of incoming transactions against CIDR blocks defined within a database a blacklist for example For more information on CIDR blocks see the following http en wikipedia org wiki Classless Inter Domain Routing CIDR blocks The cidrdb module can query the..."
---

<a name="idp18302816"></a> 

The cidrdb module exposes scripting functions which check the IP of incoming transactions against CIDR blocks defined within a database, a blacklist for example. For more information on CIDR blocks see the following: [http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_blocks](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_blocks).

The cidrdb module can query the data source layer, or an RBLDNSD-format data file. When using the data source layer, the cidrdb module requires a previous ds_core instantiation with the uri pointing to the database which contains the table from which the CIDR blocks are drawn. See [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core) for more information.

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

When using the data source layer as the source for the CIDR data, ensure that you have disabled the limit on the number of rows returned in a data source query by setting `max_rows` to `-1` as shown in the following:

<a name="example.cidrdb.csv"></a> 


```
Datasource "csv" {
    uri = "csv:"
    max_rows = -1
}
```

### <a name="modules.cidrdb.runtime"></a> Runtime Usage

**<a name="idp18314704"></a> Lua Functions**

This module makes a number of Lua functions available. These are:

*   [msys.cidr.define](/momentum/3/3-reference/3-reference-lua-ref-msys-cidr-define), [msys.cidr.reload](/momentum/3/3-reference/3-reference-lua-ref-msys-cidr-reload), [msys.cidr.query](/momentum/3/3-reference/3-reference-lua-ref-msys-cidr-query)

For more information follow the preceding links.

**<a name="idp18320640"></a> Sieve Commands**

When loaded, cidrdb provides a set of Sieve actions that can be used to perform queries. See [cidrdb](/momentum/3/3-reference/sieve-ref-cidrdb) for more details.

### <a name="modules.cidrdb.console"></a> cidrdb Management Using Console Commands

The cidrdb module can be controlled through the `ec_console`; the following commands are available:

**<a name="modules.cidrdb.console.reload"></a> 14.16.2.1. cidrdb reload **

The reload action will trigger an immediate reload of the specified list.

**<a name="modules.cidrdb.console.list"></a> 14.16.2.2. cidrdb list**

List configured CIDR databases. This command outputs:

*`cidr_name`* [refresh in *`secs`* seconds]

To list configured CIDR databases in XML format use **`xml cidrdb list`**             . This command outputs the cidr_name, the refresh interval and the number of seconds until the next refresh.