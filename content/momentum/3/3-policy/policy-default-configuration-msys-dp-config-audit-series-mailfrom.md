---
lastUpdated: "03/26/2020"
title: "msys.dp_config.audit_series.mailfrom"
description: "MAIL FROM rate limiting Note this is disabled by default as there is a potential for a Do S attack using garbage sender addresses Find below the sample excerpt included in the dp config lua file The elements of this configuration table are as follows type The only legal value..."
---

MAIL FROM rate limiting. Note this is disabled by default as there is a potential for a DoS attack using garbage sender addresses.

Find below the sample excerpt included in the `dp_config.lua` file.

```
msys.dp_config.audit_series.mailfrom = {
  type = "string",
  interval = 900,
  buckets = 4,
  thresholds = {
    { check = true,
      startv = 0,
      endv = 3,
      threshold = 100,
      honor_whitelist = { "global" }
    }
  },
  options = {
    persist = true
  }
};
```

The elements of this configuration table are as follows:

<dl class="variablelist">

<dt>type</dt>

<dd>

The only legal value for this element is `string`.

</dd>

<dt>interval</dt>

<dd>

The time interval that you wish to look at measured in seconds. A reasonable value might be `900`.

</dd>

<dt>buckets</dt>

<dd>

A bucket is a window of time of the length defined by "interval". A reasonable value might be `4`.

</dd>

<dt>thresholds</dt>

<dd>

Count over which rejection happens. `thresholds` is a nested table within this configuration option. The following list defines the attributes of the individual thresholds.

<dl class="variablelist">

<dt>check</dt>

<dd>

Whether or not to use this configuration item.

</dd>

<dt>startv</dt>

<dd>

The starting bucket (0 is the current bucket) to query across.

</dd>

<dt>endv</dt>

<dd>

The ending bucket.

</dd>

<dt>threshold</dt>

<dd>

The count that triggers this threshold. When this threshold is exceeded the code `451` is issued with the message `Sender message rate limit exceeded`.

</dd>

<dt>honor_whitelist</dt>

<dd>

A table listing any applicable whitelists set in the `msys.dp_config.whitelist` table.

</dd>

</dl>

</dd>

<dt>options</dt>

<dd>

This item is a table with the following possible keys:

<dl class="variablelist">

<dt>serialize</dt>

<dd>

Write audit series to log. The value may be `true` or `false`; `false` is the default.

When `true`, the log will be written to the directory defined by the `serialize_dir` option in the [inbound_audit](/momentum/3/3-reference/3-reference-modules-inbound-audit) module. The default value for this option is `/var/log/ecelerity/audit_series_persist`.

</dd>

<dt>replicate</dt>

<dd>

Defaults to none, but can be `cluster` to send to all nodes, or `manager` to send only to cluster manager nodes. This requires explicit configuration in the `cluster` stanza to operate correctly. For more information see [Data Replication](/momentum/3/3-reference/3-reference-cluster-config-replication).

</dd>

<dt>persist</dt>

<dd>

When set to `true`, the audit series will be persisted. The persisted series will be reloaded when the engine restarts. The default value is `false`.

</dd>

</dl>

</dd>

</dl>