---
lastUpdated: "02/09/2021"
title: "hot_domains"
description: "Configure the list of high-traffic domains that should be spread across maintainer threads"
---

<a name="conf.ref.hot_domains"></a>
## Name

hot_domains — configure the list of high-traffic domains that should be spread across maintainer threads

## Synopsis

`Hot_Domains = ( "gmail.com" "hotmail.com" )`

<a name="idp23637969"></a>
## Description

 The hot domains subsystem is intended to spread highly-trafficked domains across multiple maintainer threads.

 The maintainer threads in the maintainer pool are responsible for managing the mail queues for all the domains and bindings in the system, and handing off messages to SMTP delivery connections for delivery.

 All domains are assigned to a particular maintainer thread in the maintainer thread pool. Normally a domain is assigned to a thread when a message is received to that domain.

 The hot domains are different, and are assigned to threads during start-up, in a round-robin fashion. This is to try to avoid having multiple high-traffic domains serviced by the same maintainer thread, so reduce the chance that a particular maintainer thread will saturate a CPU core (i.e.: CPU core 100% used). If a maintainer thread saturates a CPU, then it may affect throughput, because the maintainer thread may not be able to process mail queues and service connections fast enough to keep up with reception and delivery rates.

Here is an example of a hot domains configuration from SparkPost production:

```
09:52:44 /tmp/2025> config eval hot_domains
Hot_Domains = (
  "gmail.com"
  "hotmail.com"
  "yahoo.com"
  "google.com"
  "aol.com"
  "mac.com"
  "att.net"
  "comcast.net"
  "naver.com"
  "seznam.cz"
  "mail.ru"
  "web.de"
  "gmx.de"
  "verizon.net"
  "googlemail.com"
  "cox.net"
  "yahoo.co.uk"
  "yahoo.fr"
  "qq.com"
  "yahoo.co.jp"
)
```

## Scope

hot_domains is valid in the global scope.

## See Also

[maintainer_pool](/momentum/4/config/ref-maintainer-pool) configuration option,
[hot_domains list](/momentum/4/console-commands/hot-domains-list) command, [hot_domains list json](/momentum/4/console-commands/hot-domains-list-json) command
