---
lastUpdated: "03/26/2020"
title: "msys.dp_config.relay_authorization"
description: "This policy allows SMTP authenticated users to relay To use this policy you must configure SMTP authentication in ecelerity conf using the auth ds Module and the appropriate ESMTP Listener options Onnet IP addresses If this option is defined the source IP address will be checked against the configured datasource..."
---

This policy allows SMTP-authenticated users to relay. To use this policy you must configure SMTP authentication in `ecelerity.conf` using the [auth_ds Module](/momentum/3/3-reference/3-reference-modules-auth-ds) and the appropriate ESMTP_Listener options.

Onnet IP addresses. If this option is defined, the source IP address will be checked against the configured datasource, and if it matches will be allowed to relay messages.

### Warning

In `default_policy.conf` relaying is allowed from any host because all recipient validation is performed by default_policy.lua. If recipient validation and relay authorization is disabled here, that will make this system an open relay, so use caution.

Find below the sample excerpt included in the `dp_config.lua` file.

```
msys.dp_config.relay_authorization = {
  check = false,

  onnet = {
    type = "rbldnsd",
    refresh = 1800,
    source = "/opt/msys/ecelerity/etc/onnet.txt",
    record_type = "TXT",
    default_value = "",
  };

  onnet = {
    type = "datasource",
    refresh = 1800,
    cachename = "sqlite",
    query = "SELECT 1 as val, cidr FROM onnet",
    cidr_column = "cidr",
    value_column = "val",
    default_value = "",
  };

  -- Allow SMTP-authenticated users to relay
  -- Note that you still must configure SMTP authentication in ecelerity.conf
  -- using the auth_ds module and the appropriate ESMTP_Listener options.
  allow_smtp_auth = true
};
```

The elements of this configuration table are as follows:

<dl class="variablelist">

<dt>check</dt>

<dd>

Whether or not to use this configuration item.

### Warning

By default `msys.dp_config.relay_authorization` is disabled—the `check` element is set to `false`. If you do not enable this policy and you are using the `default_policy.conf` file be sure to change the value of [relay_hosts](/momentum/3/3-reference/3-reference-conf-ref-relay-hosts). If you leave `check` as `false` and you use the `default_policy.conf` file (where `relay_hosts` is set to `( "0.0.0.0/0" )`) your MTA is effectively an open relay.

</dd>

<dt>onnet</dt>

<dd>

IP addresses. If this option is defined, the source IP address will be checked against the configured datasource, and if it matches will be allowed to relay messages.

<dl class="variablelist">

<dt>type</dt>

<dd>

Two types are supported, either from a datasource (such as a database or LDAP) or an RBLDNSD file. This element is required and must be either "datasource" or "rbldnsd". The configuration elements vary depending upon which type is defined.

</dd>

<dt>refresh</dt>

<dd>

This element must be defined and it must be an integer greater than or equal to 0.

</dd>

<dt>source</dt>

<dd>

The path to the rbldnsd source file on disk. This element is only applicable to the "rbldnsd" type.

</dd>

<dt>record_type</dt>

<dd>

The record type is only applicable to the "rbldnsd" type and must be either `A` or `TXT`.

</dd>

<dt>default_value</dt>

<dd>

Must always be `""`.

</dd>

<dt>cachename</dt>

<dd>

The name of the Datasource as defined in `ecelerity.conf`. This element is only applicable to datasources.

</dd>

<dt>query</dt>

<dd>

A `SELECT` query. This option is only applicable to the `datasource` type.

</dd>

<dt>cidr_column</dt>

<dd>

The name of the column containing the CIDR block. This element is only applicable to the `datasource` type.

</dd>

<dt>value_column</dt>

<dd>

The name of the column containing the value (the value is ignored but something must be there).

</dd>

</dl>

</dd>

<dt>allow_smtp_auth</dt>

<dd>

Whether or not to allow SMTP-authenticated users to relay. Note that you still must configure SMTP authentication in `ecelerity.conf` using the auth_ds module and the appropriate ESMTP_Listener options.

</dd>

</dl>