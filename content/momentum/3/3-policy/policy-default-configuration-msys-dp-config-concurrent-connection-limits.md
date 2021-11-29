---
lastUpdated: "03/26/2020"
title: "msys.dp_config.concurrent_connection_limits"
description: "This table determines the behavior with respect to concurrent connection limits Find below the sample excerpt included in the dp config lua file The elements of this configuration table are as follows check Whether or not to use this configuration item mask The CIDR mask to use limit The number..."
---

This table determines the behavior with respect to concurrent connection limits.

Find below the sample excerpt included in the `dp_config.lua` file.

```
msys.dp_config.concurrent_connection_limits = {
  { check = true,
    mask = "/32",
    limit = 10,
    service = "SMTP",
    honor_whitelist = { "global" },
  },
  { check = true,
    mask = "/24",
    limit = 100,
    service = "SMTP",
    honor_whitelist = { "global" },
  },
  -- System-wide connection limit, don't honor the whitelists here
  { check = true,
    mask = "/0",
    limit = 20000,
    service = "SMTP",
  }
};
msys.dp_config.audit_series = {};
```

The elements of this configuration table are as follows:

<dl class="variablelist">

<dt>check</dt>

<dd>

Whether or not to use this configuration item.

</dd>

<dt>mask</dt>

<dd>

The CIDR mask to use.

</dd>

<dt>limit</dt>

<dd>

The number of concurrent connections you wish to allow. When this limit is exceeded, the code `421` is issued along with the message `connection limit exceeded`.

</dd>

<dt>service</dt>

<dd>

The type of service you are using. Typically this will be `SMTP`.

</dd>

<dt>honor_whitelist</dt>

<dd>

A table listing any applicable whitelists set in the `msys.dp_config.whitelist` table.

</dd>

</dl>

In order to use any of the audit series configuration tables you must include `msys.dp_config.audit_series`. These configuration tables are only relevant in a cluster configuration.