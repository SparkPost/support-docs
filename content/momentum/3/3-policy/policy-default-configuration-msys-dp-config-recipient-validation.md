---
lastUpdated: "03/26/2020"
title: "msys.dp_config.recipient_validation"
description: "Use this policy if you wish to perform per recipient or per domain recipient validation Recipient Validation requires that a datasource be setup in the ecelerity conf file For instructions on how to create datasources see ds core Module The name of this datasource is used as the value for..."
---

Use this policy if you wish to perform per-recipient or per-domain recipient validation.

Recipient Validation requires that a datasource be setup in the `ecelerity.conf` file. For instructions on how to create datasources see [ds_core Module](/momentum/3/3-reference/3-reference-modules-ds-core). The name of this datasource is used as the value for the `ds_name` element.

If this policy is enabled, any `Relay_Domains` defined in `ecelerity.conf` will mean that any recipient in such domains will be allowed without any query against the defined datasource. If you wish to perform per- recipient validation then do **not** define the domains in question using the `Relay_Domains` configuration setting. For more information about this configuration option see [relay_domains](/momentum/3/3-reference/3-reference-conf-ref-relay-domains).

This policy is designed to be used on 'inbound' systems, and may be disabled if the system is an 'outbound' system (in this case relay checking should be enabled).

Find below the sample excerpt included in the `dp_config.lua` file.

```
msys.dp_config.recipient_validation = {
  -- Whether or not to perform recipient validation
  -- Disabled by default, enable if you want to define a recipient validation
  -- policy
  check = true,

  -- Name of the datasource.  If you only want to honor Relay_Domains from
  -- ecelerity.conf then you should not define either ds_name or query.
  -- ds_name = "ldap",

  -- Query, $rcpt is the placeholder for the recipient's email address,
  -- depending on the datasource it may also be ':rcpt'.  If you only
  -- want to check the domain, use $domain or :domain
  -- query = "ldap:///DC=domain,DC=com?mail,status?sub?mail=$rcpt",

  -- Attribute to compare for mailbox status (suspended, active, etc).
  -- Must be queried in the provided URI.  To not perform a status attribute
  -- check comment out the following line.
  -- status_attribute = "status",

  -- Acceptable status values, all other status values will be rejected.
  -- May include Lua-compatible patterns as well as static strings.
  -- status_values = { "active", "online", "other" },

  -- Enable DHA prevention
  dha_prevention = true,
};
```

The elements of this configuration table are as follows:

<dl class="variablelist">

<dt>check</dt>

<dd>

Whether or not to use this configuration item.

</dd>

<dt>ds_name</dt>

<dd>

The name for the datasource. If you only want to honor `Relay_Domains` then you should *not* define either ds_name or query.

</dd>

<dt>query</dt>

<dd>

In the sample code above, `$rcpt` is the placeholder for the recipient's email address, depending on the datasource it may also be `:rcpt`. If you only want to check the domain, use `$domain` or `:domain`. Use the syntax required by the driver for the specific datasource.

</dd>

<dt>status_attribute</dt>

<dd>

Attribute to compare for mailbox status (suspended, active, etc). Must be queried in the provided URI. To not perform a status attribute check comment out this element.

</dd>

<dt>status_values</dt>

<dd>

Acceptable status values, all other status values will be rejected. May include Lua-compatible patterns as well as static strings.

</dd>

<dt>dha_prevention</dt>

<dd>

Enable DHA prevention.

</dd>

</dl>