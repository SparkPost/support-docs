---
lastUpdated: "03/26/2020"
title: "paniclog"
description: "paniclog show last several entries written to paniclog paniclog Momentum maintains in memory the last several messages that were written to the paniclog This command will display the last 10 messages seen on each log level see the debug flags for details..."
---

<a name="console_commands.paniclog"></a> 
## Name

paniclog — show last several entries written to paniclog

## Synopsis

`paniclog`

<a name="idp14754704"></a> 
## Description

Momentum maintains, in memory, the last several messages that were written to the paniclog. This command will display the last 10 messages seen on each log level (see the [debug_flags](/momentum/4/config/ref-debug-flags) for details).

```
10:47:35 /tmp/2025> paniclog
[Sun 30 Nov 2003 10:31:37] [serious] Validating software license.
[Sun 30 Nov 2003 10:31:37] [serious] Validated MAC address 00:01:02:34:4b:b3
[Sun 30 Nov 2003 10:31:37] [serious] Licensed unlimited MultiVIP bindings.
[Sun 30 Nov 2003 10:31:37] [serious] Valid license.
[Sun 30 Nov 2003 10:31:37] [serious] ndbm_cache initialized
```