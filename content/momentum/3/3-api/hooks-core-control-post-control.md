---
lastUpdated: "03/26/2020"
title: "control_post_control"
description: "control post control void control post control closure cc argc argv input output void closure command construct cc int argc const char argv ec control context input ec control context output int has core control post control hook void register core control post control hook first hook closure ec hook..."
---

<a name="hooks.core.control_post_control"></a> 
## Name

control_post_control

## Synopsis

`#include "hooks/core/control_post_control.h"`

| `void **control_post_control** (` | <var class="pdparam">closure</var>, |   |
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

| `int **has_core_control_post_control_hook** (` | `)`; |   |

| `void **register_core_control_post_control_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_control_post_control_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_control_post_control_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_control_post_control_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_control_post_control_hook** (` | <var class="pdparam">cc</var>, |   |
|   | <var class="pdparam">argc</var>, |   |
|   | <var class="pdparam">argv[]</var>, |   |
|   | <var class="pdparam">input</var>, |   |
|   | <var class="pdparam">output</var>`)`; |   |

`command_construct * <var class="pdparam">cc</var>`;
`int <var class="pdparam">argc</var>`;
`const char * <var class="pdparam">argv[]</var>`;
`ec_control_context * <var class="pdparam">input</var>`;
`ec_control_context * <var class="pdparam">output</var>`;<a name="idp46175616"></a> 
## Description

This hook allows modules to perform arbitrary tasks after running a command in the console. It differs from control_post_command in that control_post_command is run once for a given input line, whereas control_post_control is run after each sub-command parsed out of the input line has run.

There parameters are identical those for an ec_control_function callback, but bear in mind that the command has already run, and that the output will already be populated.