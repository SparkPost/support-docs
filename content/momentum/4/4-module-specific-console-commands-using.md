---
lastUpdated: "03/26/2020"
title: "Using Module-Specific Console Commands"
description: "How module specific console commands are issued depends upon whether a module is a singleton To determine whether a module is a singleton refer to Chapter 65 Modules Summary or use the module list command from the console This command displays a full list of all loaded modules The following..."
---

How module-specific console commands are issued depends upon whether a module is a singleton. To determine whether a module is a singleton, refer to [*Modules Summary*](/momentum/4/modules/summary-all-modules) or use the **module list**      command from the console. This command displays a full list of all loaded modules. The following is an example partial output:

```
...
Module: ds_core
  Scope_Name: ds_core
  Enabled: enabled
  API: Singleton
  Name: ds_core.c
  Description: generic datasource module
Module: ec_logger:ec_logger
  Scope_Name: ec_logger
  Instance_Name: ec_logger1
  Enabled: enabled
  API: Logger
  Name: ec_logger.c
  Description: Momentum minimalistic logging module
...
```

This output shows both a singleton (ds_core) and a non-singleton (ec_logger) module. The instance name of a non-singleton module is the name that you choose when the module is created.

Non-singleton module commands are issued using `Scope_Name:Instance_Name` followed by the command. For example, when you have an ec_logger module named `ec_logger1`, issue the `help` command in the following way:

`ec_logger:ec_logger1 help`

Singleton module commands are executed by using the module scope name followed by the command. For example, to flush a cache named *`sqlite`*, issue the `ds_core flush` command in the following way:

`ds_core flush sqlite`

For a list of module-specific console commands, see [*Console Commands Summary*](/momentum/4/4-console-commands) .