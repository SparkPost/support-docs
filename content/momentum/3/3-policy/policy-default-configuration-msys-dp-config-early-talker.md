---
lastUpdated: "03/26/2020"
title: "msys.dp_config.early_talker"
description: "Early talker detection requires that the conntrol module be loaded in the ecelerity conf file For more information about this module see conntrol Module Find below the sample excerpt included in the dp config lua file The elements of this configuration table are as follows check Whether or not to..."
---

Early talker detection, requires that the 'conntrol' module be loaded in the `ecelerity.conf` file. For more information about this module see [conntrol Module](/momentum/3/3-reference/3-reference-modules-conntrol).

Find below the sample excerpt included in the `dp_config.lua` file.

```
msys.dp_config.early_talker = {
  check = true,
  honor_whitelist = { "global" },
};
```

The elements of this configuration table are as follows:

<dl class="variablelist">

<dt>check</dt>

<dd>

Whether or not to perform this operation.

</dd>

<dt>honor_whitelist</dt>

<dd>

A table listing any applicable whitelists set in the `msys.dp_config.whitelist` table.

</dd>

</dl>