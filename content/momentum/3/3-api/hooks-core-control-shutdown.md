---
lastUpdated: "03/26/2020"
title: "control_shutdown"
description: "control shutdown void control shutdown closure void closure int has core control shutdown hook void register core control shutdown hook first hook closure ec hook core control shutdown func t hook void closure void register core control shutdown hook last hook closure ec hook core control shutdown func t hook..."
---

<a name="hooks.core.control_shutdown"></a> 
## Name

control_shutdown

## Synopsis

`#include "hooks/core/control_shutdown.h"`

| `void **control_shutdown** (` | <var class="pdparam">closure</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;

| `int **has_core_control_shutdown_hook** (` | `)`; |   |

| `void **register_core_control_shutdown_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_control_shutdown_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_control_shutdown_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_control_shutdown_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_control_shutdown_hook** (` | `)`; |   |

<a name="idp46007792"></a> 
## Description

This hook is invoked when an instance shutdown occurs. This is typically in event that a **shutdown** command was issued over ec_console. However, this may also be called in the event of an unexpected crash.

See also [control_shutdown_ex](/momentum/3/3-api/hooks-core-control-shutdown-ex), which provides more information on why the instance is being shutdown.