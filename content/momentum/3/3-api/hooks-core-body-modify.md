---
lastUpdated: "03/26/2020"
title: "body_modify"
description: "body modify void body modify closure mess iop void closure const ec message mess io object iop int has core body modify hook void register core body modify hook first hook closure ec hook core body modify func t hook void closure void register core body modify hook last hook..."
---

<a name="hooks.core.body_modify"></a> 
## Name

body_modify

## Synopsis

`#include "hooks/core/body_modify.h"`

| `void **body_modify** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">iop</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const ec_message * <var class="pdparam">mess</var>`;
`io_object ** <var class="pdparam">iop</var>`;

| `int **has_core_body_modify_hook** (` | `)`; |   |

| `void **register_core_body_modify_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_body_modify_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_body_modify_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_body_modify_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_body_modify_hook** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">iop</var>`)`; |   |

`const ec_message * <var class="pdparam">mess</var>`;
`io_object ** <var class="pdparam">iop</var>`;<a name="idp38348176"></a> 
## Description

The `body_modify` hook allows modules to make arbitrary changes or transforms to the message body. The provided message should not be modified directly. Instead, the hook should create an io_object representing the new message body and set iop to this value. If, upon entrance to the hook, *iop is not the NULL pointer, it points to a message body modified by another instance of the hook (to allow chaining). If *iop is NULL, no other modules have modified the body and the contents of mess can be used instead. On return from the hook, if *iop is set, the specified io_object will be sent to the remote host instead of the message body present in the spool.