---
lastUpdated: "03/26/2020"
title: "write config"
description: "write config display current running configuration write config path to file Instruct Momentum to display the current running configuration over the console If a file name is passed as a parameter Momentum will open and write the configuration to that file on the server running Momentum not necessarily the machine..."
---

<a name="console_commands.write_config"></a> 
## Name

write config — display current running configuration

## Synopsis

write config *`/path/to/file`*

<a name="idp10915472"></a> 
## Description

Instruct Momentum to display the current running configuration over the console. If a file name is passed as a parameter, Momentum will open and write the configuration to that file on the server running Momentum, **not necessarily the machine from which you are running ec_console** .

To write the current settings to file, issue the command **write config `/var/tmp/ecelerity.new.config`**                                        being sure to choose a directory where you have write permission.

### Warning

Overwriting your existing `ecelerity.conf` file is not recommended. Note that files "included" in your configuration file will **not** be copied. If you wish to make permanent changes to your configuration file, edit the file directly.

If you are in the middle of a transaction (begun with **config begin** ) **write config**        will not show any changes you have made. Use **config showrecurse**             or **config show**      instead. For more information see [config](/momentum/4/console-commands/config).