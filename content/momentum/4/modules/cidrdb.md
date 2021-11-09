---
lastUpdated: "03/26/2020"
title: "cidrdb – CIDRDB"
description: "The cidrdb module exposes scripting functions that check the IP of incoming transactions against CIDR blocks defined within a database a blacklist for example For more information on CIDR blocks see http en wikipedia org wiki Classless Inter Domain Routing CIDR blocks The cidrdb module can query the data source..."
---

<a name="idp20169616"></a> 

The cidrdb module exposes scripting functions that check the IP of incoming transactions against CIDR blocks defined within a database, a blacklist for example. For more information on CIDR blocks, see [http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_blocks](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_blocks).

The cidrdb module can query the data source layer or an RBLDNSD-format data file. When using the data source layer, the cidrdb module requires a previous ds_core instantiation with the uri pointing to the database that contains the table from which the CIDR blocks are drawn. For more information, see [“ds_core - Datasource Query Core”](/momentum/4/modules/ds-core).

### <a name="idp20173744"></a> Configuration

This module is loaded automatically as required and does not need to be explicitly included.

### <a name="modules.cidrdb.datasource"></a> Datasource Scope

When using the data source layer as the source for the CIDR data, ensure that you have disabled the limit on the number of rows returned in a data source query by setting `max_rows` to `-1` as shown in the following:

<a name="example.cidrdb.csv"></a> 


```
Datasource "csv" {
    uri = "csv:"
    max_rows = -1
}
```

### <a name="modules.cidrdb.lua.functions"></a> Lua Functions

This module makes the following Lua functions available:

*   [msys.cidr.define](/momentum/4/lua/ref-msys-cidr-define)

*   [msys.cidr.query](/momentum/4/lua/ref-msys-cidr-query)

*   [msys.cidr.reload](/momentum/4/lua/ref-msys-cidr-reload)

### <a name="modules.cidrdb.console"></a> Console Commands

The cidrdb module can be controlled through the `ec_console`. The following commands are available:

<dl class="variablelist">

<dt>cidrdb reload <listname></dt>

<dd>

The reload action will trigger an immediate reload of the specified list.

</dd>

<dt>cidrdb list</dt>

<dd>

List configured CIDR databases. This command outputs:

*`cidr_name`* [refresh in *`secs`* seconds]

To list configured CIDR databases in XML format use **`xml cidrdb list`**             . This command outputs the cidr_name, the refresh interval, and the number of seconds until the next refresh.

</dd>

</dl>