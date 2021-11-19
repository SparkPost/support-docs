---
lastUpdated: "03/26/2020"
title: "ec_control_register_command2"
description: "ec control register command 2 Register a command handler with the system void ec control register command 2 prefix closure func const char prefix void closure ec control function 2 func Register a command handler with the system The command stays registered with the system even across configuration generations Once..."
---

<a name="apis.ec_control_register_command2"></a> 
## Name

ec_control_register_command2 — Register a command handler with the system

## Synopsis

`#include "control.h"`

| `void **ec_control_register_command2** (` | <var class="pdparam">prefix</var>, |   |
|   | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">func</var>`)`; |   |

`const char * <var class="pdparam">prefix</var>`;
`void * <var class="pdparam">closure</var>`;
`ec_control_function2 <var class="pdparam">func</var>`;<a name="idp49234928"></a> 
## Description

Register a command handler with the system.

The command stays registered with the system, even across configuration generations.

Once registered, it cannot be removed, but may be replaced with another command registered at the same prefix.

**<a name="idp49237232"></a> Parameters**

<dl class="variablelist">

<dt>prefix</dt>

<dd>

The command name.

</dd>

<dt>closure</dt>

<dd>

A void pointer to the closure.

</dd>

<dt>func</dt>

<dd>

A void pointer to the command action.

</dd>

</dl>

**<a name="idp49243664"></a> Return Values**

This function returns void.

**<a name="idp49244576"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49245680"></a> 
## See Also

See [ec_control_register_command3](/momentum/3/3-api/apis-ec-control-register-command-3).