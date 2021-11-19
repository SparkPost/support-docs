---
lastUpdated: "03/26/2020"
title: "Setting and Getting Module Options from the Console"
description: "There are no module specific commands related to setting or getting module options To set or get module specific options use the command Note that there is no between the Scope Name and the Instance Name and that no Instance Name is specified if the module is a singleton For..."
---

There are no module-specific commands related to setting or getting module options. To set or get module-specific options, use the command:

`config [set | eval | get] Scope_Name [Instance_Name] option [value]`

Note that there is no ‘`:`’ between the Scope_Name and the Instance_Name and that no Instance_Name is specified if the module is a singleton.

For example, the event types logged by the ec_logger can be toggled as follows:

config set ec_logger *`ec_logger1`* log_transient_failures off

If the command is successful, then `Set` is output to the screen.

For a complete discussion of the **config** command, see [config](/momentum/4/console-commands/config).