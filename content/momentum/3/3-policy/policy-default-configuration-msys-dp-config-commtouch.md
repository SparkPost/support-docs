---
lastUpdated: "03/26/2020"
title: "msys.dp_config.commtouch"
description: "Scan messages using Commtouch To use this configuration item you must have the commtouch module loaded For more information see commtouch Module Find below the sample excerpt included in the dp config lua file The elements of this configuration table are as follows scan Whether or not to scan using..."
---

Scan messages using Commtouch. To use this configuration item you must have the commtouch module loaded. For more information see [commtouch Module](/momentum/3/3-reference/3-reference-modules-commtouch).

Find below the sample excerpt included in the `dp_config.lua` file.

```
require("msys.commtouch");
msys.dp_config.commtouch = {
  scan = true,
  spam_dispositions = {
    confirmed = "reject",
    bulk = "reject",
    -- suspect = "reject"
  },
  virus_dispositions = {
    virus = "reject",
    high = "reject",
    -- medium = "reject"
  },
  honor_whitelist = { "global" }
};
```

The elements of this configuration table are as follows:

<dl class="variablelist">

<dt>scan</dt>

<dd>

Whether or not to scan using this engine.

</dd>

<dt>spam_disposition</dt>

<dd>

Define the actions to take for the various dispositions. The dispositions are `unknown, suspect, bulk, confirmed` and `none`.

<dl class="variablelist">

<dt>confirmed</dt>

<dd>

The action to take when the scan result is `confirmed`. The legal actions are `reject` and `discard`.

</dd>

<dt>bulk</dt>

<dd>

The action to take when the scan result is `bulk`.

</dd>

<dt>suspect</dt>

<dd>

The action to take when the scan result is `suspect`.

</dd>

</dl>

</dd>

<dt>virus_disposition</dt>

<dd>

Define the actions to take for the various dispositions. The dispositions are `nonvirus, medium, high` and `unknown`.

<dl class="variablelist">

<dt>virus</dt>

<dd>

The action to take when the scan result is `virus`.

</dd>

<dt>high</dt>

<dd>

The action to take when the scan result is `high`.

</dd>

<dt>medium</dt>

<dd>

The action to take when the scan result is `medium`.

</dd>

</dl>

</dd>

<dt>honor_whitelist</dt>

<dd>

A table listing any applicable whitelists set in the `msys.dp_config.whitelist` table.

</dd>

<dt>process_result</dt>

<dd>

Define a function to process the scan result. `process_result` info is a table: { rc = rc, verdict = verdict }. For more information see [“msys.dp_config.beik”](/momentum/3/3-policy/policy-default-configuration-msys-dp-config-beik).

</dd>

</dl>