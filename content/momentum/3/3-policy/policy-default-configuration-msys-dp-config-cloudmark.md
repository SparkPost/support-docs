---
lastUpdated: "03/26/2020"
title: "msys.dp_config.cloudmark"
description: "Scan messages using Cloudmark To use this configuration item you must have the cloudmark module loaded For more information see cloudmark Module Find below the sample excerpt included in the dp config lua file The elements of this configuration table are as follows scan Whether or not to scan using..."
---

Scan messages using Cloudmark. To use this configuration item you must have the cloudmark module loaded. For more information see [cloudmark Module](/momentum/3/3-reference/3-reference-modules-cloudmark).

Find below the sample excerpt included in the `dp_config.lua` file.

```
require("msys.cloudmark");
msys.dp_config.cloudmark = {
  scan = true,
  score_threshold = 95,
  isspam_disposition = "reject",
  honor_whitelist = { "global" }
};
```

The elements of this configuration table are as follows:

<dl class="variablelist">

<dt>scan</dt>

<dd>

Whether or not to scan using this engine.

</dd>

<dt>score_threshold</dt>

<dd>

Set the threshold past which a message will be tagged as spam.

</dd>

<dt>isspam_disposition</dt>

<dd>

Action to take when a message is determined to be spam. Legal actions are `reject` and `discard`.

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