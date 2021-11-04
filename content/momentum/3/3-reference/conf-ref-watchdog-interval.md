---
lastUpdated: "03/26/2020"
title: "watchdog_interval"
description: "watchdog interval if Momentum is unresponsive for this length of time it will be restarted Watchdog Interval 60 Momentum starts as the child process of a parent watchdog process The watchdog attempts to restart Momentum if the MTA has been unresponsive for more than the watchdog interval number of seconds..."
---

<a name="conf.ref.watchdog_interval"></a> 
## Name

watchdog_interval — if Momentum is unresponsive for this length of time, it will be restarted

## Synopsis

`Watchdog_Interval = 60`

<a name="idp12436096"></a> 
## Description

Momentum starts as the child process of a parent watchdog process. The watchdog attempts to restart Momentum if the MTA has been unresponsive for more than the `watchdog_interval` number of seconds. The default value for this option is `60`. When the watchdog restarts the MTA, it generates a trace file. The watchdog can also detect when the MTA has exited anomalously. In this case it also generates a trace file. Trace files are found in the `/var/log/ecelerity/traces` directory and bear the process id number with the extension `trc`, `24536.trc`, for example.

**Configuration Change. ** This option is deprecated as of version 3.5\. As a replacement add the `GIMLI_WATCHDOG_INTERVAL`, `GIMLI_WATCHDOG_START_INTERVAL` and/or `GIMLI_WATCHDOG_STOP_INTERVAL` variables to the environment file. For more information about this file and these variables see [“Environment Variables and Startup Scripts”](/momentum/3/3-reference/conf-ecelerity-conf#conf.environment_variables).

<a name="idp12444624"></a> 
## Scope

watchdog_interval is valid in the global scope.