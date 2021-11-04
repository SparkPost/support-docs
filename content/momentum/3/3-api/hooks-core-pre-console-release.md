---
lastUpdated: "03/26/2020"
title: "pre_console_release"
description: "pre console release void pre console release closure void closure int has core pre console release hook void register core pre console release hook first hook closure ec hook core pre console release func t hook void closure void register core pre console release hook last hook closure ec hook..."
---

<a name="hooks.core.pre_console_release"></a> 
## Name

pre_console_release

## Synopsis

`#include "hooks/core/pre_console_release.h"`

| `void **pre_console_release** (` | <var class="pdparam">closure</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;

| `int **has_core_pre_console_release_hook** (` | `)`; |   |

| `void **register_core_pre_console_release_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_console_release_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_pre_console_release_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_console_release_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_pre_console_release_hook** (` | `)`; |   |

<a name="idp32618176"></a> 
## Description

This hook is called immediately before the daemonization of the ecelerity process. It is the last point in time a hook is called prior to the closing of the standard input, output and error STREAMS.

As this hook is called prior to module initialization, it must be registered from the *`module_config_setup`* callout hook.