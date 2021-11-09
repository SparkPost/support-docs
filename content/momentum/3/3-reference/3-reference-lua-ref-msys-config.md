---
lastUpdated: "03/26/2020"
title: "msys.config"
description: "msys config Set or get configuration values msys config action parameters Corresponds to the config system console command and can be used to get or set configuration values For example This function returns two values The value of the configuration option The textual output from the command what you would..."
---

<a name="lua.ref.msys.config"></a> 
## Name

msys.config — Set or get configuration values

<a name="idp24419360"></a> 
## Synopsis

`msys.config(action, parameters);`

```
action: string
parameters: string
```
<a name="idp24422064"></a> 
## Description

Corresponds to the **config** system console command, and can be used to get or set configuration values. For example:

```
local mob, tmob = msys.config("get", "max_outbound_connections");
local ymob, tymob = msys.config("get", "domain", "yahoo.com", "max_outbound_connections");
```

This function returns two values:

*   The value of the configuration option

*   The textual output from the command (what you would have seen had you typed it via ec_console)

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp24428560"></a> 
## See Also

[config](/momentum/3/3-reference/3-reference-console-commands-config)