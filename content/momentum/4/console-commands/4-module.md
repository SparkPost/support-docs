---
lastUpdated: "03/26/2020"
title: "module"
description: "module manage loaded modules online module hooks module list The module list command displays a full list of all loaded modules as illustrated below In addition to supplying information about your configuration the scope name and the instance name shown by the module list command are required when issuing module..."
---

<a name="console_commands.module"></a> 
## Name

module — manage loaded modules online

## Synopsis

`module hooks`

`module list`

<a name="console_commands.module.version_3"></a> 
## Description

The **module list**      command displays a full list of all loaded modules, as illustrated below:

```
16:48:23 /tmp/2025> module list
Module: ec_logger:ec_logger
  Scope_Name: ec_logger
  Instance_Name: ec_logger
  Enabled: enabled
  API: Logger
  Name: ec_logger.c
  Description: Momentum minimalistic logging module
Module: bounce_logger:bounce_logger
  Scope_Name: bounce_logger
  Instance_Name: bounce_logger
  Enabled: enabled
  API: Logger
  Name: $RCSfile: bounce_logger.c,v $
  Description: Eclerity minimalistic logging module $Revision: 1.51 $
Module: ds_core
  Scope_Name: ds_core
  Enabled: enabled
  API: Singleton
  Name: ds_core.c
  Description: generic datasource module
...
```

In addition to supplying information about your configuration, the scope name and the instance name shown by the **module list**      command are required when issuing module-specific commands. For more information, see [“Using Module-Specific Console Commands”](/momentum/4/4-module-specific-console-commands-using).

The **module hooks**       command displays all the dynamic hooks in the system, along with each hook's prototype. The output should be similar to the following:

```
core_config_get_domain_bounces_inline_original_data
	int(generic_module_infrastructure*,int*,constchar*,void**)
core_config_get_reserve_maintenance_interval_data
	int(generic_module_infrastructure*,int*,void**)
...
```