---
lastUpdated: "03/26/2020"
title: "control_allow_writable_config2"
description: "control allow writable config 2 int control allow writable config 2 closure cc argc argv input output void closure command construct cc int argc const char argv ec control context input ec control context output int has core control allow writable config 2 hook void register core control allow writable..."
---

<a name="hooks.core.control_allow_writable_config2"></a> 
## Name

control_allow_writable_config2

## Synopsis

`#include "hooks/core/control_allow_writable_config2.h"`

| `int **control_allow_writable_config2** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">cc</var>, |   |
|   | <var class="pdparam">argc</var>, |   |
|   | <var class="pdparam">argv[]</var>, |   |
|   | <var class="pdparam">input</var>, |   |
|   | <var class="pdparam">output</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`command_construct * <var class="pdparam">cc</var>`;
`int <var class="pdparam">argc</var>`;
`const char * <var class="pdparam">argv[]</var>`;
`ec_control_context * <var class="pdparam">input</var>`;
`ec_control_context * <var class="pdparam">output</var>`;

| `int **has_core_control_allow_writable_config2_hook** (` | `)`; |   |

| `void **register_core_control_allow_writable_config2_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_control_allow_writable_config2_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_control_allow_writable_config2_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_control_allow_writable_config2_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_control_allow_writable_config2_hook** (` | <var class="pdparam">cc</var>, |   |
|   | <var class="pdparam">argc</var>, |   |
|   | <var class="pdparam">argv[]</var>, |   |
|   | <var class="pdparam">input</var>, |   |
|   | <var class="pdparam">output</var>`)`; |   |

`command_construct * <var class="pdparam">cc</var>`;
`int <var class="pdparam">argc</var>`;
`const char * <var class="pdparam">argv[]</var>`;
`ec_control_context * <var class="pdparam">input</var>`;
`ec_control_context * <var class="pdparam">output</var>`;<a name="idp27842752"></a> 
## Description

This hook allows a module to disable "writability" or "run-time reconfiguration" of the command in question. The hook parameters are identical to the parameters to an ec_control_function callback.

Return 1 from this hook to allow the operation to continue, return 0 to prevent it.