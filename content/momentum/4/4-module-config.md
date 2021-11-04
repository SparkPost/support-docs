---
lastUpdated: "10/05/2021"
title: "Modules"
description: "Momentum's module API is at the core of how it is extended When a module is loaded it is named based on the module name specified in the configuration Some modules can have multiple instances loaded with different configurations e g to log different sets of information into different log..."
---

Momentum's module API is at the core of how it is extended. When a module is loaded, it is named based on the *`module_name`* specified in the configuration. Some modules can have multiple instances loaded with different configurations (e.g. to log different sets of information into different log files), while other modules are singletons and can only be loaded once.

All modules load automatically if you use any of the options they declare or use other resources provided by them. However, the module must be explicitly loaded to set its configuration options. Note that you do not need to explicitly declare modules that do not have options (apart from the `enabled` and `debug_level` options common to all modules). To determine if the module is loaded implicitly, refer to the specific module in [*Modules Reference*](/momentum/4/modules/) .

### <a name="module_config.config"></a> Module Configuration

Modules can be configured by altering the configuration files or by setting options with the **config** command from the console.

Generally, modules are defined in the configuration files as follows:

modulename "*`instancename`*" {
  option1 = value1
  option2 = value2
  ...
}

Most modules have a module name, a scope name, and one or more instance names. However, singleton modules do not have instance names and can only be loaded once. To determine whether a module is a singleton, refer to [*Modules Summary*](/momentum/4/modules/summary-all-modules) or use the **module list**      command from the console. The following is an example partial output:

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
  Instance_Name: ec_logger
  Enabled: enabled
  API: Logger
  Name: ec_logger.c
  Description: Momentum minimalistic logging module
...
```

Whether a module is a singleton effects how module-specific console commands are invoked. For details, see [“Using Module-Specific Console Commands”](/momentum/4/4-module-specific-console-commands-using).

You can also set configuration options from the console at runtime. Note that you also need to know whether a module is a singleton to set options using this method. For details, see [“Setting and Getting Module Options from the Console”](/momentum/4/modules/options-console).

Some modules (typically antivirus modules) must be loaded in "passive" mode. To load a module passively, set the `enabled` option to `false`. For example, use the following syntax in the `ecelerity.conf` file:

```
symbolname "name" {
  enabled = false
  debug_level = DEBUG 
  ...
}
```

Note that the `enabled` and `debug_level` options are common to all modules.

### <a name="module_config.debugging"></a> Module Debugging

During troubleshooting, it can be useful to have debugging information sent to the `paniclog`. Module debug levels can be set in the configuration files or from the console. Note that if the module that you wish to debug is not explicitly loaded, you must add it to your configuration file. The default debugging level is `ERROR`, which will cause `ERROR` and `CRITICAL` messages to be logged to the `paniclog`.

To set module debug levels in your configuration, set the `debug_level` option within the module stanza:

modulename "*`Instance_Name`*" {
  ...
  debug_level = DEBUG
}

The following is an example of setting the debug level of the bounce_logger module in the `ecelerity.conf` file:

```
bounce_logger "bounce_logger1"
{
   debug_level = "NOTICE"
   bouncelog = "/var/log/ecelerity/bouncelog.ec"
   bouncelog_mode = 0644
   heartbeat = 60
}
```

To set module debug levels in the console, use the **config** command:

config set *`Scope_Name`* *`Instance_Name`* Debug_Level *`value`*

The following is an example of setting the debug level of the bounce_logger module in the console:

`config set bounce_logger bounce_logger1 Debug_Level DEBUG`

The debug level is set in the same way as any other module option. For a list of all the debug levels, see [Table 72.1, “Debug levels”](/momentum/4/config/ref-debug-flags#conf.ref.debug.levels).

Be sure to turn off debugging when you are finished, otherwise log files can become excessively large.

### <a name="module_config.compiled.lua"></a> Creating and Installing a Compiled Lua Module

You can build a native-C module that implements Lua functionality. A sample module with extensive notes is provided in the `/opt/msys/ecelerity/docs/lua_sample.c` file. This sample adds functionality to enable suspend and resume actions and the ability to receive core Momentum data structures as parameters.

The examples in this file are trivial but demonstrate best-practice coding paradigms for integrating with Lua. To build these examples perform the following:

1.  During installation, install the Ecelerity developer tools on the build machine. (To add this package after installation, download msys-ecelerity-devel-*`version.os.arch`*.rpm from the Message Systems website.)

2.  Follow the instructions in `/opt/msys/ecelerity/docs/lua_sample.c` and compile the source code using `/opt/msys/ecelerity/bin/ecxs`.

    shell> /opt/msys/ecelerity/bin/ecxs -c *`/path/to/`*lua_sample.c
3.  Install the module so that it can be found at runtime:

    ```
    shell> cp lua_sample.so /opt/msys/ecelerity/libexec/lua
    shell> chmod +x /opt/msys/ecelerity/libexec/lua/lua_sample.so
    ```

To run the example, create the following Lua script using the instructions given at [“Creating Policy Scripts”](/momentum/4/4-implementing-policy-scriptlets#policy.best.practices):

```
require("lua_sample");
local mod = {};

function mod:validate_data(msg, ac, vctx)
  print("size", lua_sample.size_by_two(msg))
  lua_sample.sleep(5);
  print("after sleep")
  print("answer", lua_sample.mul_by_seven(6));
end

msys.registerModule("sample", mod);
```

Save this file as `samplescript.lua`.

Configure the following scriptlet stanza in your `ecelerity.conf` file:

```
scriptlet "scriptlet" {
  script "sample" {
   source = "samplescript"
  }
}
```

For detailed information about how Lua is implemented in Momentum, see [“scriptlet - Lua Policy Scripts”](/momentum/4/modules/scriptlet) and [“Policy Scriptlets”](/momentum/4/4-implementing-policy-scriptlets).

### <a name="module_config.test.lua"></a> Testing Lua Modules

As of Momentum 4.4, a new test script has been added under `/opt/msys/ecelerity/docs/lua_sample.t`. This test serves as an example of how to use the `ec_runtests.pl` test harness to test Lua modules, as well as how to build an extension to Momentum's built-in Lua functionality.

In order to run tests, you must have the `msys-ecelerity-devel` package installed first.
Since the test needs to compile a module, the `msys_ecelerity_devel` package will install gcc on your system. It also requires the use of the `openssl-devel` package.
The versions we used during development were `gcc-4.8.5-44` and `openssl-devel-1.0.2k-21`.

To run the test, execute the following commands (`sudo` can be omitted if running as a privileged user):

```
cd /opt/msys/ecelerity/docs
sudo ../bin/ec_runtests.pl -kvnc1 lua_sample.t
```

You should then see an output similar to the following on success:

```
1..4
Working in installed Momentum environment
ok 1 - Server Startup
ok 2 - Mail goes in ok
ok 3 - Confirmed the lua module ran and printed logs inside the panic log.
ok 4 - Server Shutdown
ok     5909 ms ( 0.00 usr  0.00 sys +  0.57 cusr  0.18 csys =  0.75 CPU)
[14:17:31]
All tests successful.
Files=1, Tests=4, 5.91827 wallclock secs ( 0.01 usr  0.00 sys +  0.57 cusr  0.18 csys =  0.76 CPU)
Result: PASS
```
