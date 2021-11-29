---
lastUpdated: "03/26/2020"
title: "scriptlet - Lua Policy Scripts"
description: "The scriptlet module enables the use of Lua scripts to enforce policy For details about policy see Chapter 62 Implementing Policy with Momentum To use the scriptlet module the alerting module must be loaded as shown in the following example Example 71 84 scriptlet Configuration The scriptlet module is not..."
---

<a name="idp22734544"></a> 

The scriptlet module enables the use of [Lua](http://www.lua.org/) scripts to enforce policy. For details about policy, see [*Implementing Policy with Momentum*](/momentum/4/4-policy) .

### <a name="modules.scriptlet.configuration"></a> Configuration

To use the scriptlet module, the [alerting](/momentum/4/modules/alerting) module must be loaded, as shown in the following example:

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

The following configuration options are available:

<dl class="variablelist">

<dt>always_gc</dt>

<dd>

Whether or not to always garbage collect. Default value is `false`. With the introduction of threaded Lua, this option is redundant.

</dd>

<dt>gc_pause</dt>

<dd>

Default value is `200`. For more information about this option, see the section on "Garbage Collection" at [http://www.lua.org/manual/5.1/manual.html](http://www.lua.org/manual/5.1/manual.html).

</dd>

<dt>gc_stepmul</dt>

<dd>

Default value is `200`. For more information about this option, see the section on "Garbage Collection" at [http://www.lua.org/manual/5.1/manual.html](http://www.lua.org/manual/5.1/manual.html).

</dd>

<dt>max_spare_per_master</dt>

<dd>

Default value is `5000`.

</dd>

<dt>reap_interval</dt>

<dd>

Controls how often to expire spares from the spare thread cache. Default value is `1`. This is not likely to need changing.

</dd>

<dt>script</dt>

<dd>

In the code example [“scriptlet Configuration”](/momentum/4/modules/scriptlet#modules.scriptlet.code), "boot" is the name of the module that is provided by the script. The boot module is located in the `/opt/msys/ecelerity/libexec/scriptlets/msys` directory. It provides core product features so should always be loaded.

Any number of script stanzas may appear within the scriptlet module. The script stanza has only one option, `source`, which identifies the location of the Lua policy script.

There is a direct correlation between the name of the script stanza and the module it exports. If you are creating your own scripts, the script scope name and the name that a script is registered as must be the same. For detailed information about creating user-defined scripts, see [“Creating Policy Scripts”](/momentum/4/4-implementing-policy-scriptlets#policy.best.practices).

For a complete list of all available Lua functions, see [*Lua Functions Summary*](/momentum/4/4-lua-summary-table) .

</dd>

<dt>script_ttl</dt>

<dd>

Duration that the script is cached; the default timeout is 300 seconds. Increasing this value also changes the time that resources consumed by the script stay in memory, thereby increasing memory usage.

</dd>

</dl>