---
lastUpdated: "03/26/2020"
title: "Module Overview"
description: "All modules in version 3 0 load automatically if you use any of the options they declare or use other resources provided by them In order to set configuration options modules must be explicitly loaded However you need not explicitly declare modules such as the jlog module that don't have..."
---

All modules in version 3.0 load automatically if you use any of the options they declare, or use other resources provided by them. In order to set configuration options, modules must be explicitly loaded. However, you need not explicitly declare modules, such as the jlog module, that don't have options (apart from the `enabled` and `debug_level` options common to all modules).

Examples of modules that will typically load implicitly are:

*   antivirus

*   cidrdb

*   compress_spool

*   http_io

*   jlog

*   persist_io

*   sievelib

*   suppress_spool

Modules are most easily configured from the web console as described in [“Changing Module Configuration Options”](/momentum/3/3-reference/web-3-administration#web3.module_config) but they can also be configured by manually altering the configuration file or by setting options using the system console. Use the [config](/momentum/3/3-reference/3-reference-console-commands-config) command to set configuration options from the system console.

Some modules, typically antivirus modules, must be loaded in "passive" mode. To load a module in passive mode, use the web console to set the `Enabled` option to `false`. Use the following syntax if you are manually changing the `ecelerity.conf` file:

```
symbolname "name" {
  Enabled = false
  ...
}
```

The `Enabled` option is common to all modules as is the `Debug_Level` option.

### <a name="modules.overview.debugging"></a> Module Debugging

During troubleshooting, it can be useful to have debugging information sent to the paniclog. Module debug levels can be set in the `ecelerity.conf` file, from the web console or from the system console. The default debugging level is `ERROR`, which will cause `ERROR` and `CRITICAL` messages to be logged to the paniclog. Find below an example of setting the debug level of the bounce_logger module:

```
bounce_logger "bounce_logger1"
{
   debug_level = "NOTICE"
   bouncelog = "/var/log/ecelerity/bouncelog.ec"
   bouncelog_mode = 0644
   heartbeat = 60
}
```

For a list of all the debug levels see [Table 9.28, “Debug levels”](/momentum/3/3-reference/3-reference-conf-ref-debug-flags#conf.ref.debug.levels). Setting debug levels from the system console is described in [the section called “Setting Module-Level Debugging from the System Console”](/momentum/3/3-reference/3-reference-module-specific-console-commands-using#modules.console.debugging).

Be sure to turn off debugging when you are finished otherwise log files can become excessively large.

If the module that you wish to debug is not explicitly loaded, then you must add it to your configuration file.