---
lastUpdated: "03/26/2020"
title: "scriptlet – Module"
description: "The scriptlet module enables the use of Lua scripts to enforce policy providing a more flexible alternative to Sieve In version 3 0 scriptlets are the preferred scripting method If you are unfamiliar with Lua you can create basic policy scripts using the web UI For more information see Section..."
---

<a name="idp21042592"></a> 

The scriptlet module enables the use of [Lua](http://www.lua.org/) scripts to enforce policy, providing a more flexible alternative to Sieve. In version 3.0, scriptlets are the preferred scripting method.

### Note

If you are unfamiliar with Lua, you can create basic policy scripts using the web UI. For more information see [“The Policy Configuration Editor”](/momentum/3/3-reference/web-3-policy-editor). Note that scripts created manually cannot be edited in the web UI and those created using the web UI cannot be edited by hand.

<a name="modules.scriptlet.code"></a> 


```
alerting {}

scriptlet "scriptlet" {
  script_ttl = 300
  script "boot" {
    source = "msys.boot"
  }
}
```

To use the scriptlet module, the alerting module must be loaded. For more information see [“alerting – alerting”](/momentum/3/3-reference/3-reference-modules-alerting).

### <a name="modules.scriptlet.configuration"></a> Configuration

The scriptlet module is not a singleton; however, only one named instance of the scriptlet module may appear in a configuration at a given time. For example, this configuration is valid (each instance name is identical; i.e., "scriptlet"):

```
scriptlet "scriptlet" {
 <options>
}

scriptlet "scriptlet" {
 <options>
}
```

Whereas this configuration is invalid (each instance name is different; i.e., "scriptlet" and "other_name"):

```
scriptlet "scriptlet" {
 <options>
}

scriptlet "other_name" {
 <options>
}
```

<dl class="variablelist">

<dt>always_gc</dt>

<dd>

Whether or not to always garbage collect. The default value for this option is `false`. With the introduction of threaded Lua, this option is redundant.

</dd>

<dt>gc_pause</dt>

<dd>

The default value for this option is `200`. For more information about this option see the section on "Garbage Collection" at [http://www.lua.org/manual/5.1/manual.html](http://www.lua.org/manual/5.1/manual.html).

</dd>

<dt>gc_stepmul</dt>

<dd>

The default value for this option is `200`. For more information about this option see the section on "Garbage Collection" at [http://www.lua.org/manual/5.1/manual.html](http://www.lua.org/manual/5.1/manual.html).

</dd>

<dt>reap_interval</dt>

<dd>

This option controls how often to expire spares from the spare thread cache. The default value for this option is `120`. This is not likely to need changing.

</dd>

<dt>script</dt>

<dd>

In the code example [“scriptlet module”](/momentum/3/3-reference/3-reference-modules-scriptlet#modules.scriptlet.code), "boot" is the name of the module that is provided by the script. The boot module is located in the `/opt/msys/ecelerity/libexec/scriptlets/msys` directory. It provides core product features so should always be loaded. There's a direct correlation between the name of the script stanza and the module it exports. If you are creating your own scripts, the script scope name and the name that a script is registered as must be the same. For more information see [“Implementing Policy Using Scriptlets”](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets).

Any number of script stanzas may appear within the scriptlet module. The script stanza has only one option, `source`. If you have created any Lua scripts using the policy editor, there will be a script stanza named `policyeditor` with its `source` option set to `policy.policyeditor`. This indicates that the module name is `policyeditor.lua` and that it is saved in the `policy` directory below either the `/opt/msys/ecelerity/etc/conf/default` or `/opt/msys/ecelerity/etc/conf/global` directory.

User-defined scripts should also be saved in either the `/opt/msys/ecelerity/etc/conf/default` or `/opt/msys/ecelerity/etc/conf/global` directory or a directory below these directories because these directories are in the Lua search path and are also under version control. Use [eccfg](/momentum/3/3-reference/executable-eccfg) to add your scripts to the repository. Make sure that scripts are owned by `ecuser` and commit newly created scripts from the appropriate directory in the following way:

```
shell> /opt/msys/ecelerity/bin/eccfg commit --add-all \
  --username admin --password password
```

If you plan to create your own Lua scripts see [“Best Practices for Manually Created Policy Scripts”](/momentum/3/3-reference/policy-best-practices).

For a complete list of all available Lua functions see [“Lua Functions List”](/momentum/3/3-reference/3-reference-lua-summary-table).

### Note

You can use either a ‘`.`’ or a ‘`/`’ as a directory separator when specifying the `source` of a script stanza.

</dd>

<dt>script_ttl</dt>

<dd>

The duration that the script is cached; the default timeout is 300 seconds. Increasing this value also changes the time that resources consumed by the script stay in memory, thereby increasing memory usage.

</dd>

</dl>

When creating your own scripts, the built-in helper functions for creating policy and alerting scripts may prove useful. The policy helper functions are found in `/opt/msys/ecelerity/libexec/scriptlets/msys/policyeditor.lua`. Include this file by adding `require("msys.policyeditor");` to your script.

If you are upgrading to version 3.0 from 2.2 and wish to convert a regex_binding2 module to a Lua script see [migrate_regex_binding2](/momentum/3/3-reference/executable-migrate-regex-binding-2).

### <a name="modules.scriptlet.shutdown"></a> Scriptlets and Shutdown

### Note

The procedure described in this section is only applicable prior to Momentum 3.5.1.

Restarting an MTA that uses Lua policy scripts can result in duplicate deliveries when the MTA is shut down under load. This is because some messages may not be deleted from the spool on shutdown. As a workaround, follow these steps when shutting down the ecelerity process:

1.  Open ec_console and temporarily set `max_spare_per_master` to `0` by entering the following command: **`config set scriptlet scriptlet1 max_spare_per_master 0`**                                                 .

2.  Reset the frequency for expiring threads out of the spare thread cache: **`config set scriptlet scriptlet1 reap_interval 60`**                                           .

3.  Temporarily limit the number of messages per session: **`config set esmtp_listener max_receptions_per_connection 1`**                                                    

4.  Wait at least the `reap_interval` (reset to `60` seconds in step 2) for old Lua threads to be aged out.

5.  Restart the ecelerity process. See [ec_ctl](/momentum/3/3-reference/executable-ec-ctl). Note that on restart any options set from ec_console will revert to their default values.