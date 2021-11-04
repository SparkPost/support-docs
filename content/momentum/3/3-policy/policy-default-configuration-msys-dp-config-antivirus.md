---
lastUpdated: "03/26/2020"
title: "msys.dp_config.antivirus"
description: "enable AV scanning In order for AV scanning to work you must separately load the antivirus module in ecelerity conf and configure each engine you reference in the configuration stanza below Valid engines are platform dependent and can be found in the Momentum documentation Find below the sample excerpt included..."
---

enable AV scanning. In order for AV scanning to work you must separately load the antivirus module in `ecelerity.conf`, and configure each engine you reference in the configuration stanza below. Valid engines are platform dependent and can be found in the Momentum documentation.

Find below the sample excerpt included in the `dp_config.lua` file.

```
require("msys.av");
msys.dp_config.antivirus = {
  { scan = true,
    engine = "csapi",
    virus_disposition = "disinfect",
    honor_whitelist = { "global" }
  },
  { scan = true,
    engine = "clamav",
    virus_disposition = "reject",
    honor_whitelist = { "global" }
  }
};
```

The elements of this configuration table are as follows:

<dl class="variablelist">

<dt>scan</dt>

<dd>

Whether or not to scan using the defined engine

</dd>

<dt>engine</dt>

<dd>

Define the scanning engine to use. Use the module name of any installed engine. For available engines see [Summary Module Information](/momentum/3/3-reference/modules-summary). The csapi module is configured in the `default_policy.conf` file.

### Note

If you use [csapi](/momentum/3/3-reference/3-reference-modules-csapi) be sure to set the concurrency of the [CPU threadpool](/momentum/3/3-reference/3-reference-conf-ref-threadpool) to a value that is less than the max_concurrency of the csapi module.

</dd>

<dt>virus_disposition</dt>

<dd>

Valid values for this element are `disinfect, reject` or `discard`. The `disinfect` action replaces any infected MIME parts with a text string.

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