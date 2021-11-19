---
lastUpdated: "03/26/2020"
title: "msys.dp_config.mail_from_domain_validate"
description: "This table configures MAIL FROM domain validation Find below the sample excerpt included in the dp config lua file The elements of this configuration table are as follows check Whether or not to use this configuration item failure code The SMTP code to use when validation fails Typically this is..."
---

This table configures MAIL FROM domain validation.

Find below the sample excerpt included in the `dp_config.lua` file.

```
msys.dp_config.mail_from_domain_validate = {
  check = true,
  failure_code = 554,
  honor_whitelist = { "global" }
};
```

The elements of this configuration table are as follows:

<dl class="variablelist">

<dt>check</dt>

<dd>

Whether or not to use this configuration item.

</dd>

<dt>failure_code</dt>

<dd>

The SMTP code to use when validation fails. Typically this is `554`.

</dd>

<dt>honor_whitelist</dt>

<dd>

A table listing any applicable whitelists set in the `msys.dp_config.whitelist` table.

</dd>

</dl>