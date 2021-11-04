---
lastUpdated: "03/26/2020"
title: "validate_connect"
description: "validate connect void validate connect closure ac c void closure accept construct ac validate context c int has core validate connect hook void register core validate connect hook first hook closure ec hook core validate connect func t hook void closure void register core validate connect hook last hook closure..."
---

<a name="hooks.core.validate_connect"></a> 
## Name

validate_connect

## Synopsis

`#include "hooks/core/validate_connect.h"`

| `void **validate_connect** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">c</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">c</var>`;

| `int **has_core_validate_connect_hook** (` | `)`; |   |

| `void **register_core_validate_connect_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_validate_connect_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_validate_connect_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_validate_connect_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_validate_connect_hook** (` | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">c</var>`)`; |   |

`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">c</var>`;<a name="idp33806336"></a> 
## Description

This hook is invoked after the normal `validate_connect` module callback. The only reason to use this hook point instead of a traditional module callback is that you can guarantee an invocation subsequent to all other modules' `validate_connect` callbacks have been performed. The *`ctx`* parameters is the same used in the traditional `validate_connect` module callback.