---
lastUpdated: "03/26/2020"
title: "ec_control_register_command"
description: "ec control register command Register a command handler deprecated void ec control register command prefix closure func const char prefix void closure ec control function func Register a command handler deprecated Momentum 3 0 offers better AP Is See ec control register command 3 and ec control register command 2..."
---

<a name="apis.ec_control_register_command"></a> 
## Name

ec_control_register_command — Register a command handler (deprecated)

## Synopsis

`#include "control.h"`

| `void **ec_control_register_command** (` | <var class="pdparam">prefix</var>, |   |
|   | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">func</var>`)`; |   |

`const char * <var class="pdparam">prefix</var>`;
`void * <var class="pdparam">closure</var>`;
`ec_control_function <var class="pdparam">func</var>`;<a name="idp49221568"></a> 
## Description

Register a command handler (deprecated).

**<a name="idp49222784"></a> Deprecated**

Momentum 3.0 offers better APIs. See [ec_control_register_command3](/momentum/3/3-api/apis-ec-control-register-command-3) and [ec_control_register_command2](/momentum/3/3-api/apis-ec-control-register-command-2).