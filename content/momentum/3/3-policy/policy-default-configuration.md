---
lastUpdated: "03/26/2020"
title: "Configuration Details"
description: "Each configuration option is a Lua table This section describes these tables and their elements You may wish to whitelist IP addresses that will not be subjected to the policy in question When whitelist support is enabled each default policy can optionally honor one or more whitelists Whitelists can be..."
---


Each configuration option is a Lua table. This section describes these tables and their elements.

## <a name="policy.default.configuration.msys.dp_config.whitelist"></a> msys.dp_config.whitelist

You may wish to whitelist IP addresses that will not be subjected to the policy in question. When whitelist support is enabled, each default policy can optionally honor one or more whitelists.

Whitelists can be text files or datasources. For instructions on how to create datasources see [ds_core Module](/momentum/3/3-reference/3-reference-modules-ds-core).

Find below the sample excerpt included in the `dp_config.lua` file.

```
msys.dp_config.whitelist = {
  {
    name = "global",
    type = "rbldnsd",
    refresh = 1800,
    source = "/opt/msys/ecelerity/etc/whitelist.txt",
    record_type = "TXT",
    default_value = "",
  },
  {
    name = "global_datasource",
    type = "datasource",
    refresh = 1800,
    cachename = "sqlite",
    query = "SELECT 1 as val, cidr FROM whitelist",
    cidr_column = "cidr",
    value_column = "val",
    default_value = "",
  }
};
```

The elements of this configuration option are as follows:

<dl class="variablelist">

<dt>name</dt>

<dd>

The name you wish to give to the whitelist. This name should be unique.

Throughout the configuration file the `honor_whitelist` element, supported by various configuration options, is assigned the name(s) given to a whitelist defined by this configuration option.

</dd>

<dt>type</dt>

<dd>

Define the type of whitelist. The legal values for this option are either `datasource` or `rbldnsd`. The other elements of this table vary depending upon the value of this element.

To create a datasource whitelist, you can define a database with a single table containing a single field. Populate this field with the desired domain names. For instructions on creating a datasource that references this database see [ds_core Module](/momentum/3/3-reference/3-reference-modules-ds-core).

</dd>

<dt>refresh</dt>

<dd>

How often to reload the rbldnsd or the datasource.

A recommended value for this option is `1800`.

</dd>

<dt>source</dt>

<dd>

Define the path to the rbldnsd source file on disk. This option is only applicable when the type is `rbldnsd`.

</dd>

<dt>record_type</dt>

<dd>

Legal values for this option are either `A` or `TXT`. This option is only applicable when the type is `rbldnsd`.

</dd>

<dt>default_value</dt>

<dd>

This option is applicable to both rbldnsds and datasources and must always be `""`.

</dd>

<dt>cachename</dt>

<dd>

The name of a datasource as defined in the `ecelerity.conf`

</dd>

<dt>query</dt>

<dd>

Define the `SELECT` statement when the type is a datasource.

</dd>

<dt>cidr_column</dt>

<dd>

The name of the column in the table that contains the CIDR block. This is only applicable when the type is `datasource`.

</dd>

<dt>value_column</dt>

<dd>

The name of the column containing the value (the value is ignored for the purposes of the whitelist but something must be there).

This is only applicable when the type is `datasource`.

</dd>

</dl>

### <a name="policy.default.configuration.msys.dp_config.whitelist.custom"></a> Custom Whitelists

Note that you can define custom policies to create your own whitelists (for example, based on something other than connecting IP, like envelope parameters). You may then use the Default Policy whitelist "honor" mechanism by setting the whitelist as follows:

`msys.pbp.set_whitelist(vctx, "my_whitelist_name", true);`

Then you may put "my_whitelist_name" as one of the "honor_whitelist" table entries if you wish a specific policy to honor that whitelist.