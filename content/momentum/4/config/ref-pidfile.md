---
lastUpdated: "03/26/2020"
title: "pidfile"
description: "pidfile set the PID file path pidfile path to ecelerity pid Sets the path to the PID file This is used by ec ctl to determine whether Momentum is running The PID file can be used by other processes to determine if the instance is running therefore each instance must..."
---

<a name="conf.ref.pidfile"></a> 
## Name

pidfile — set the PID file path

## Synopsis

`pidfile = "/path/to/ecelerity.pid"`

<a name="idp25782672"></a> 
## Description

Sets the path to the PID file. This is used by **ec_ctl** to determine whether Momentum is running.

The PID file can be used by other processes to determine if the instance is running; therefore, each instance must have its own PID file.

<a name="idp25785584"></a> 
## Scope

pidfile is valid in the global scope.

<a name="idp25787408"></a> 
## See Also