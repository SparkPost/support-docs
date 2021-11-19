---
lastUpdated: "03/26/2020"
title: "ec_control_register_command3"
description: "ec control register command 3 Register a command handler with the system int ec control register command 3 prefix closure func const char prefix ec blobject closure ec control function 2 func Configuration Change This feature is available starting from Momentum 3 2 Register a command handler with the system..."
---

<a name="apis.ec_control_register_command3"></a> 
## Name

ec_control_register_command3 — Register a command handler with the system

## Synopsis

`#include "control.h"`

| `int **ec_control_register_command3** (` | <var class="pdparam">prefix</var>, |   |
|   | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">func</var>`)`; |   |

`const char * <var class="pdparam">prefix</var>`;
`ec_blobject * <var class="pdparam">closure</var>`;
`ec_control_function2 <var class="pdparam">func</var>`;<a name="idp49257504"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Register a command handler with the system.

The command handler is scoped to the generation of the configuration, meaning that the command will not be available if the module that registered it is removed from the configuration.

The control function that is dispatched by this function accepts a blobject as a closure, even though the prototype is defined as taking a void*. The blobject allows the command implementation to manage the lifetime of the closure.

This function may only be called from inside a configuration transaction, meaning that it should be called from within your module ext_init function.

**<a name="idp49262320"></a> Parameters**

<dl class="variablelist">

<dt>prefix</dt>

<dd>

The command name.

</dd>

<dt>closure</dt>

<dd>

A void pointer to the closure. For a description of this data type see [“ec_blobject”](/momentum/3/3-api/structs-ec-blobject).

</dd>

<dt>func</dt>

<dd>

A void pointer to the command action.

</dd>

</dl>

**<a name="idp49269360"></a> Return Values**

On success this function returns `1`; on failure, `0`.

**<a name="idp49271184"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49272288"></a> 
## See Also

See [ec_control_register_command2](/momentum/3/3-api/apis-ec-control-register-command-2).