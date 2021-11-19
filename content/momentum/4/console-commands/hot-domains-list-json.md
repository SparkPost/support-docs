---
lastUpdated: "02/25/2021"
title: "hot_domains list json"
description: "The hot_domains list json command shows how the configured hot domains are spread across the maintainer threads, along with with thread ID (Linux process ID) for each of the event loops."
---

<a name="console_commands.hot_domains_list_json"></a>
## Name

hot_domains list json — list details of all hot domains, in JSON format

## Synopsis

`hot_domains list json`

Since Momentum 4.3.1.66

<a name="idp12989330"></a>
## Description

The hot domains subsystem is intended to spread highly-trafficked domains across multiple maintainer threads. The maintainer threads are responsible for managing the mail queues for all the domains and bindings in the system.

The `hot_domains list json` command shows how the configured hot domains are spread across the maintainer threads, along with with thread ID (Linux process ID) for each of the event loops.

```
09:52:41 /tmp/2025> hot_domains list json
[
  { "domain": "gmail.com", "tid": 36880, "event_loop": "0x7f5f6cc9a200" },
  { "domain": "hotmail.com", "tid": 36881, "event_loop": "0x7f5f6cc9a300" },
  { "domain": "yahoo.com", "tid": 36882, "event_loop": "0x7f5f6cc9a400" },
  { "domain": "google.com", "tid": 36883, "event_loop": "0x7f5f6cc9a500" },
  { "domain": "aol.com", "tid": 36884, "event_loop": "0x7f5f6cc9a600" },
  { "domain": "mac.com", "tid": 36885, "event_loop": "0x7f5f6cc9a700" },
  { "domain": "att.net", "tid": 36886, "event_loop": "0x7f5f6cc9a800" },
  { "domain": "comcast.net", "tid": 36887, "event_loop": "0x7f5f6cc9a900" },
  { "domain": "naver.com", "tid": 36888, "event_loop": "0x7f5f6cc9aa00" },
  { "domain": "seznam.cz", "tid": 36889, "event_loop": "0x7f5f6cc9ab00" },
  { "domain": "mail.ru", "tid": 36890, "event_loop": "0x7f5f6cc9ac00" },
  { "domain": "web.de", "tid": 36891, "event_loop": "0x7f5f6cc9ad00" },
  { "domain": "gmx.de", "tid": 36880, "event_loop": "0x7f5f6cc9a200" },
  { "domain": "verizon.net", "tid": 36881, "event_loop": "0x7f5f6cc9a300" },
  { "domain": "googlemail.com", "tid": 36882, "event_loop": "0x7f5f6cc9a400" },
  { "domain": "cox.net", "tid": 36883, "event_loop": "0x7f5f6cc9a500" },
  { "domain": "yahoo.co.uk", "tid": 36884, "event_loop": "0x7f5f6cc9a600" },
  { "domain": "yahoo.fr", "tid": 36885, "event_loop": "0x7f5f6cc9a700" },
  { "domain": "qq.com", "tid": 36886, "event_loop": "0x7f5f6cc9a800" },
  { "domain": "yahoo.co.jp", "tid": 36887, "event_loop": "0x7f5f6cc9a900" }
]
```

[hot_domains list](/momentum/4/console-commands/hot-domains-list) is an alternative version of this command that outputs in a more human-readable format.

### See Also

[hot_domains](/momentum/4/config/ref-hot-domains) configuration option,
[maintainer_pool](/momentum/4/config/ref-maintainer-pool) configuration option,
[hot_domains list](/momentum/4/console-commands/hot-domains-list) command
