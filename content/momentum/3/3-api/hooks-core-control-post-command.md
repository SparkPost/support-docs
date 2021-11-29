---
lastUpdated: "03/26/2020"
title: "control_post_command"
description: "control post command void control post command closure cc response void closure command construct cc string response int has core control post command hook void register core control post command hook first hook closure ec hook core control post command func t hook void closure void register core control post..."
---

<a name="hooks.core.control_post_command"></a> 
## Name

control_post_command

## Synopsis

`#include "hooks/core/control_post_command.h"`

| `void **control_post_command** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">cc</var>, |   |
|   | <var class="pdparam">response</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`command_construct * <var class="pdparam">cc</var>`;
`string * <var class="pdparam">response</var>`;

| `int **has_core_control_post_command_hook** (` | `)`; |   |

| `void **register_core_control_post_command_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_control_post_command_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_control_post_command_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_control_post_command_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_control_post_command_hook** (` | <var class="pdparam">cc</var>, |   |
|   | <var class="pdparam">response</var>`)`; |   |

`command_construct * <var class="pdparam">cc</var>`;
`string * <var class="pdparam">response</var>`;<a name="idp27865264"></a> 
## Description

Given *`cc`*, hooks registered here can perform tasks after the control command processing has completed. *`response`* is provided for output handed back to the console client.