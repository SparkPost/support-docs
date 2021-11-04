---
lastUpdated: "03/26/2020"
title: "msys.dp_config.keyword_filter"
description: "This configuration table defines keywords to search for The datasource scopes that may be needed by this module are configured in the default policy conf file The supported character sets are UTF 8 GBK ISO 8859 1 ISO 2022 JP Big 5 All datasource character sets are found in the..."
---

This configuration table defines keywords to search for. The datasource scopes that may be needed by this module are configured in the `default_policy.conf` file.

The supported character sets are:

*   UTF-8

*   GBK

*   ISO-8859-1

*   ISO-2022-JP

*   Big5

All datasource character sets are found in the `/opt/msys/ecelerity/etc/sample-configs/default_policy.conf` file and are enabled.

Find below the sample excerpt included in the `dp_config.lua` file.

```
msys.dp_config.keyword_filter = {
  { scan = false,
    name = "keywords",
    path = "/opt/msys/ecelerity/etc/conf/default/keyword_filter.txt",
    charset = "UTF-8",
    disposition = "reject",
    honor_whitelist = { "global" },
  }
};
```

The elements of this configuration table are as follows:

<dl class="variablelist">

<dt>scan</dt>

<dd>

Whether or not to scan for keywords.

</dd>

<dt>name</dt>

<dd>

Name of the keyword filter, must be unique among keyword filters

</dd>

<dt>path</dt>

<dd>

The absolute path of the file on disk. Store in `/opt/msys/ecelerity/etc/conf/default/` and add to the repository as described in [Best Practices for Adding Configuration Files](/momentum/3/3-reference/conf-adding-configuration-files).

</dd>

<dt>charset</dt>

<dd>

Define the character set of the file

The default value for this element is `UTF-8`.

</dd>

<dt>disposition</dt>

<dd>

The default value for this element is `reject`. The legal values are `reject` or `discard`.

</dd>

<dt>honor_whitelist</dt>

<dt>process_result</dt>

<dd>

Define a function to process the results. This is explained in detail below.

</dd>

</dl>

Takes msg, vctx and number of matches found in the subject and message together. Note that each MIME part is scanned individually, and the num_found value represents how many were found in the subject plus the MIME part being scanned. The subject header is scanned along with each MIME part.

The file format is one keyword per line. You may search for multiple words in a pattern by separating the words with the '|' character

```
process_result = function (msg, vctx, num_found)
    if num_found >= 2 then
      return vctx:pbp_action(554, "Keyword matches");
    end
  end,
```