---
lastUpdated: "03/26/2020"
title: "msys.dp_config.message_size_limits"
description: "Message size limits Multiple can be defined with different whitelist honoring settings This configuration table defines Find below the sample excerpt included in the dp config lua file The elements of this configuration table are as follows check Whether or not to use this configuration item size The limitation you..."
---

Message size limits. Multiple can be defined, with different whitelist honoring settings.

This configuration table defines

Find below the sample excerpt included in the `dp_config.lua` file.

```
msys.dp_config.message_size_limits = {
  { check = true,
    size = "50m",
    honor_whitelist = { "global" } },
  { check = true,
    size = "20m",
    honor_whitelist = { } }
};
```

The elements of this configuration table are as follows:

<dl class="variablelist">

<dt>check</dt>

<dd>

Whether or not to use this configuration item.

</dd>

<dt>size</dt>

<dd>

The limitation you wish to apply. Use bytes (1024b), kilobytes (50k), megabytes (5m).

</dd>

<dt>honor_whitelist</dt>

<dd>

A table listing any applicable whitelists set in the `msys.dp_config.whitelist` table.

</dd>

</dl>