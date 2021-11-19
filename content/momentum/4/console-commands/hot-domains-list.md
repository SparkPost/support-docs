---
lastUpdated: "02/09/2021"
title: "hot_domains list"
description: "The hot_domains list command shows how the configured hot domains are spread across the maintainer threads, along with with thread ID (Linux process ID) for each of the event loops."
---

<a name="console_commands.hot_domains_list"></a>
## Name

hot_domains list — list details of all hot domains

## Synopsis

`hot_domains list`

Since Momentum 4.3.1.66

<a name="idp12989329"></a>
## Description

The hot domains subsystem is intended to spread highly-trafficked domains across multiple maintainer threads. The maintainer threads are responsible for managing the mail queues for all the domains and bindings in the system.

The `hot_domains list` command shows how the configured hot domains are spread across the maintainer threads, along with with thread ID (Linux process ID) for each of the event loops.

```
09:41:21 /tmp/2025> hot_domains list
Hot domain: gmail.com
	Event loop instance pointer: 0x7f5f6cc9a200
	Thread ID (TID/PID): 36880

Hot domain: hotmail.com
	Event loop instance pointer: 0x7f5f6cc9a300
	Thread ID (TID/PID): 36881

Hot domain: yahoo.com
	Event loop instance pointer: 0x7f5f6cc9a400
	Thread ID (TID/PID): 36882

Hot domain: google.com
	Event loop instance pointer: 0x7f5f6cc9a500
	Thread ID (TID/PID): 36883

Hot domain: aol.com
	Event loop instance pointer: 0x7f5f6cc9a600
	Thread ID (TID/PID): 36884

...
```

[hot_domains list json](/momentum/4/console-commands/hot-domains-list-json) is an alternative version of this command that outputs JSON.

A use-case for this command is to understand which of the maintainer event loops is using a lot of CPU. It may be that the hot domains configuration needs modifying to spread the domains out better across the maintainer event loops.

E.g.: with this configuration (from ec_console):

```
09:44:43 /tmp/2025> config eval maintainer_pool
Maintainer_pool = "mpool"

09:44:54 /tmp/2025> config showrecurse eventloop mpool
concurrency = 12
```

you can see the CPU usage for the maintainer threads using this command from the shell:

```
$ top -b -n 1 -H -p $(cat /var/run/ecelerity.pid.instance )  | sort -n | grep evt-mpool
36880 ecuser    20   0  598g  28g 260m S  3.9 31.0 895:33.75 evt-mpool
36881 ecuser    20   0  598g  28g 260m S  0.0 31.0 265:36.02 evt-mpool
36882 ecuser    20   0  598g  28g 260m S  0.0 31.0 441:03.08 evt-mpool
36883 ecuser    20   0  598g  28g 260m S  0.0 31.0 242:12.17 evt-mpool
36884 ecuser    20   0  598g  28g 260m S  3.9 31.0 371:17.59 evt-mpool
36885 ecuser    20   0  598g  28g 260m S  2.0 31.0 236:30.89 evt-mpool
36886 ecuser    20   0  598g  28g 260m S  0.0 31.0 242:02.16 evt-mpool
36887 ecuser    20   0  598g  28g 260m S  0.0 31.0 247:28.92 evt-mpool
36888 ecuser    20   0  598g  28g 260m S  0.0 31.0 236:43.63 evt-mpool
36889 ecuser    20   0  598g  28g 260m S  0.0 31.0 240:08.36 evt-mpool
36890 ecuser    20   0  598g  28g 260m S  0.0 31.0 239:55.99 evt-mpool
36891 ecuser    20   0  598g  28g 260m S  0.0 31.0 236:51.27 evt-mpool
```

### See Also

[hot_domains](/momentum/4/config/ref-hot-domains) configuration option,
[maintainer_pool](/momentum/4/config/ref-maintainer-pool) configuration option,
[hot_domains list json](/momentum/4/console-commands/hot-domains-list-json) command
