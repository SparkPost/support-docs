---
lastUpdated: "03/26/2020"
title: "msys.dp_config.rbls"
description: "Configure RB Ls Find below the sample excerpt included in the dp config lua file The elements of this configuration option are as follows name The name of the RBL This name must be unique type The legal values for this element are either dns or rbldnsd The other elements..."
---

Configure RBLs.

Find below the sample excerpt included in the `dp_config.lua` file.

```
msys.dp_config.rbls = {
  {
    check = true,
    name = "myrbl",
    type = "dns",
    base = "rbl.myrbl.org",
    record_type = "TXT",
    code = 554,
    reason = "RBL hit on myrbl: %s",
    honor_whitelist = { "global" },
  },
  {
    check = true,
    name = "myrbl2",
    type = "rbldnsd",
    source = "/opt/msys/ecelerity/etc/myrbldnsd.txt",
    refresh = 1800,
    record_type = "A",
    code = 451,
    reason = "RBL hit on myrbl2: %s",
    honor_whitelist = { "global" },
  }
};
```

The elements of this configuration option are as follows:

<dl class="variablelist">

<dt>name</dt>

<dd>

The name of the RBL. This name must be unique.

</dd>

<dt>type</dt>

<dd>

The legal values for this element are either `dns` or `rbldnsd`.

The other elements of this table vary depending upon the value of this element.

</dd>

<dt>base</dt>

<dd>

The base domain to lookup. This element is only applicable when the type is `dns`.

</dd>

<dt>server</dt>

<dd>

The IP address of the DNS server to use, by default. This element is optional. This element is only applicable when the type is `dns`.

</dd>

<dt>source</dt>

<dd>

The path to the rbldnsd source file on disk. This element is only applicable when the type is `rbldnsd`.

</dd>

<dt>refresh</dt>

<dd>

How often to reload the rbldnsd file. This element is only applicable when the type is `rbldnsd`.

</dd>

<dt>code</dt>

<dd>

Numeric SMTP response code to use for an RBL hit. Typically the value of this element is set to `554`.

</dd>

<dt>reason</dt>

<dd>

SMTP string to use for an RBL hit, %s is the RBL message

</dd>

<dt>honor_whitelist</dt>

<dd>

A table listing any applicable whitelists set in the `msys.dp_config.whitelist` table.

</dd>

<dt>process_result</dt>

<dd>

You may define a 'process_result' function to override all processing of the result. See below for more details.

</dd>

</dl>

For any RBL you may define a 'process_result' function to override all processing of the result. The function is defined in the following way:

```
msys.dp_config.rbls = {
  {
  ...
  ...
    process_result = function (ac, vctx, info)
        return vctx:pbp_disconnect(554, "RBL hit: " .. info);
      end,
  },
};
```

The function is passed three parameters:

1.  `ac` – The accept construct

2.  `vctx` – The validation context

3.  `info` – The result returned by the RBL. This will be the first `A` or `TXT` record returned based on how the RBL was configured.

This function returns either `msys.core.VALIDATE_CONT` to continue or `msys.core.VALIDATE_DONE` to terminate processing of the current phase.