---
lastUpdated: "03/26/2020"
title: "msys.dp_config.beik"
description: "Scan messages using BEIK To use this configuration item you must have the beik module loaded For more information see BEIK Module This module is included in the default policy conf file Find below the sample excerpt included in the dp config lua file The elements of this configuration table..."
---

Scan messages using BEIK. To use this configuration item you must have the beik module loaded. For more information see [BEIK Module](/momentum/3/3-reference/3-reference-modules-beik). This module is included in the `default_policy.conf` file.

Find below the sample excerpt included in the `dp_config.lua` file.

```
require("msys.symantec_beik");
msys.dp_config.beik = {
  scan = true,
  isspam_disposition = "reject",
  honor_whitelist = { "global" },
};
```

The elements of this configuration table are as follows:

<dl class="variablelist">

<dt>scan</dt>

<dd>

Whether or not to scan using this engine.

</dd>

<dt>isspam_disposition</dt>

<dd>

The action to take when the determination is `spam`. The legal options are `reject` or `discard`.

</dd>

<dt>honor_whitelist</dt>

<dd>

A table listing any applicable whitelists set in the `msys.dp_config.whitelist` table.

</dd>

<dt>process_result</dt>

<dd>

Define a function to process the scan result. process_result info is a table: { rc = rc, verdict = verdict }. For more information see below.

</dd>

</dl>

For all of the content scanners, you may define a 'process_result' function to override all processing of the result. The function is defined like so:

```
msys.dp_config.my_scanner = {
...
...
  process_result = function (msg, vctx, info)
      if info.result == "spam" then
        return vctx:pbp_action(555, "No soup for you"), true;
      end
    end,
};
```

The function is passed three parameters:

1.  `msg` – The ec_message

2.  `vctx` – The validation context

3.  `info` – The information returned by the spam classifier. This will differ for each engine. In this case, see the documentation in [BEIK Module](/momentum/3/3-reference/3-reference-modules-beik).

Return values. Must return two values. The first is whether to continue the validate_data phase, which is either msys.core.VALIDATE_CONT to continue or msys.core.VALIDATE_DONE to stop. This does not affect whether the default processing logic will be processed for the spam scanner in question, if you define a process_result function the default logic is never evaluated. The second is a boolean stating whether or not the system-wide 'spam' audit_series should be incremented.

### Note

The `vctx:pbp_action` function used in the example above always returns msys.core.VALIDATE_DONE, and so fulfills one of the requirements for return values for the function assigned to `process_result`. A literal `true` fulfills the other.

The disposition for each content scanner may either be 'discard' or 'reject'.