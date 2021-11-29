---
lastUpdated: "03/26/2020"
title: "validate_config"
description: "validate config check the validity of the configuration files opt msys ecelerity bin validate config This script checks the validity of configuration files It returns the following messages Configuration valid Your configuration is valid No configuration found There is no configuration file No message is displayed Your configuration is invalid..."
---

<a name="executable.validate_config"></a> 
## Name

validate_config — check the validity of the configuration files

## Synopsis

`/opt/msys/ecelerity/bin/validate_config`

<a name="idp7288816"></a> 
## Description

This script checks the validity of configuration files. It returns the following messages:

*   `Configuration valid` - Your configuration is valid.

*   `No configuration found` - There is no configuration file.

*   *No message is displayed*                      - Your configuration is invalid.

Using the **ec_dump_config** command may provide more information.

This script is especially useful for confirming the validity of manual changes to a configuration file.

<a name="idp7296768"></a> 
## See Also

[“Changing Configuration Files”](/momentum/4/conf-overview#conf.manual.changes), [ec_dump_config](/momentum/4/executable/ec-dump-config)