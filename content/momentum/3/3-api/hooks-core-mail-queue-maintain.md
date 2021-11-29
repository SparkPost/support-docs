---
lastUpdated: "03/26/2020"
title: "__mail_queue_maintain"
description: "mail queue maintain int mail queue maintain closure dr binding slot sl now goalsz reserve void closure domain record dr int binding slot Skiplist sl struct timeval now int goalsz int reserve int has core mail queue maintain hook void register core mail queue maintain hook first hook closure ec..."
---

<a name="hooks.core.__mail_queue_maintain"></a> 
## Name

__mail_queue_maintain

## Synopsis

`#include "hooks/core/__mail_queue_maintain.h"`

| `int **__mail_queue_maintain** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">goalsz</var>, |   |
|   | <var class="pdparam">reserve</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`Skiplist * <var class="pdparam">sl</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int <var class="pdparam">goalsz</var>`;
`int <var class="pdparam">reserve</var>`;

| `int **has_core___mail_queue_maintain_hook** (` | `)`; |   |

| `void **register_core___mail_queue_maintain_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core___mail_queue_maintain_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core___mail_queue_maintain_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core___mail_queue_maintain_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core___mail_queue_maintain_hook** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">goalsz</var>, |   |
|   | <var class="pdparam">reserve</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`Skiplist * <var class="pdparam">sl</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int <var class="pdparam">goalsz</var>`;
`int <var class="pdparam">reserve</var>`;<a name="idp43621184"></a> 
## Description

This hook is called from within regular mail queue maintenance on a per binding basis. *`binding_slot`* refers to the current MultiVIP™ binding that has messages in its active queue *`sl`*.

If goalsz is greater than zero, then a predetermined number of connections should be established. However, this should not cause the total number of connections in the system to exceed the configured maximum minus *`reserve`*.

If a non-zero value is returned, no further callbacks will be called. Functions implementing passive analysis or other accounting should hook here first, perform their function and return `0` to allow the default Momentum *`__mail_queue_maintain`* to act.