---
lastUpdated: "03/26/2020"
title: "control_allow_writable_config"
description: "control allow writable config int control allow writable config closure cc response void closure command construct cc string response int has core control allow writable config hook void register core control allow writable config hook first hook closure ec hook core control allow writable config func t hook void closure..."
---

<a name="hooks.core.control_allow_writable_config"></a> 
## Name

control_allow_writable_config

## Synopsis

`#include "hooks/core/control_allow_writable_config.h"`

| `int **control_allow_writable_config** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">cc</var>, |   |
|   | <var class="pdparam">response</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`command_construct * <var class="pdparam">cc</var>`;
`string * <var class="pdparam">response</var>`;

| `int **has_core_control_allow_writable_config_hook** (` | `)`; |   |

| `void **register_core_control_allow_writable_config_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_control_allow_writable_config_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_control_allow_writable_config_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_control_allow_writable_config_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_control_allow_writable_config_hook** (` | <var class="pdparam">cc</var>, |   |
|   | <var class="pdparam">response</var>`)`; |   |

`command_construct * <var class="pdparam">cc</var>`;
`string * <var class="pdparam">response</var>`;<a name="idp41190608"></a> 
## Description

Given *`cc`*, hooks registered here can disable "writability" or "run-time reconfiguration" of the command in question. *`response`* is provided for output handed back to the console client.