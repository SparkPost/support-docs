---
lastUpdated: "03/26/2020"
title: "msys.dp_config.fcdns"
description: "This table determines the behavior when performing a Full Circle DNS FCDNS Also know as forward confirmed reverse DNS Find below the sample excerpt included in the dp config lua file The elements of this configuration table are as follows check Whether or not to use this configuration item rdns..."
---

This table determines the behavior when performing a Full Circle DNS (FCDNS). (Also know as forward-confirmed reverse DNS.)

Find below the sample excerpt included in the `dp_config.lua` file.

```
msys.dp_config.fcdns = {
  check = true,
  rdns_failure_code = 554,
  fdns_failure_code = 554,
  honor_whitelist = { "global" },
};
```

The elements of this configuration table are as follows:

<dl class="variablelist">

<dt>check</dt>

<dd>

Whether or not to use this configuration item.

</dd>

<dt>rdns_failure_code</dt>

<dd>

The code associated with a failed reverse DNS lookup. Typically this element is assigned the value `554`.

</dd>

<dt>fdns_failure_code</dt>

<dd>

The code associated with a failed forward DNS lookup. Typically this element is assigned the value `554`.

</dd>

<dt>honor_whitelist</dt>

<dd>

A table listing any applicable whitelists set in the `msys.dp_config.whitelist` table.

</dd>

</dl>