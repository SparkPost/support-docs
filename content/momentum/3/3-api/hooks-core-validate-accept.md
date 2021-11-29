---
lastUpdated: "03/26/2020"
title: "validate_accept"
description: "validate accept int validate accept closure ac c void closure accept construct ac validate context c int has core validate accept hook void register core validate accept hook first hook closure ec hook core validate accept func t hook void closure void register core validate accept hook last hook closure..."
---

<a name="hooks.core.validate_accept"></a> 
## Name

validate_accept

## Synopsis

`#include "hooks/core/validate_accept.h"`

| `int **validate_accept** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">c</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">c</var>`;

| `int **has_core_validate_accept_hook** (` | `)`; |   |

| `void **register_core_validate_accept_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_validate_accept_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_validate_accept_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_validate_accept_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_validate_accept_hook** (` | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">c</var>`)`; |   |

`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">c</var>`;<a name="idp33759296"></a> 
## Description

Similar in purpose to validate_connect, this hook allows a module to do something at accept time, prior to running the usual connect time hooks. This may mean that the hook implmentor is called from a non-scheduler thread, in which case the underlying descriptor will be set to blocking mode.