---
lastUpdated: "03/26/2020"
title: "ec_control_register_command_allsched"
description: "ec control register command allsched Register a command handler deprecated void ec control register command allsched prefix closure func const char prefix void closure ec control function func Register a command handler deprecated Momentum 3 0 offers better AP Is See ec control register command 3 and ec control register..."
---

<a name="apis.ec_control_register_command_allsched"></a> 
## Name

ec_control_register_command_allsched — Register a command handler (deprecated)

## Synopsis

`#include "control.h"`

| `void **ec_control_register_command_allsched** (` | <var class="pdparam">prefix</var>, |   |
|   | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">func</var>`)`; |   |

`const char * <var class="pdparam">prefix</var>`;
`void * <var class="pdparam">closure</var>`;
`ec_control_function <var class="pdparam">func</var>`;<a name="idp49284128"></a> 
## Description

Register a command handler (deprecated).

**<a name="idp49285344"></a> Deprecated**

Momentum 3.0 offers better APIs. See [ec_control_register_command3](/momentum/3/3-api/apis-ec-control-register-command-3) and [ec_control_register_command2](/momentum/3/3-api/apis-ec-control-register-command-2).