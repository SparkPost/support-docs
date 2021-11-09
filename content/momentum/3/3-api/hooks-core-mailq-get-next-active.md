---
lastUpdated: "03/26/2020"
title: "mailq_get_next_active"
description: "mailq get next active ec message mailq get next active closure dr binding slot connh void closure domain record dr int binding slot connection handle connh int has core mailq get next active hook void register core mailq get next active hook first hook closure ec hook core mailq get..."
---

<a name="hooks.core.mailq_get_next_active"></a> 
## Name

mailq_get_next_active

## Synopsis

`#include "hooks/core/mailq_get_next_active.h"`

| `ec_message * **mailq_get_next_active** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">connh</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`connection_handle * <var class="pdparam">connh</var>`;

| `int **has_core_mailq_get_next_active_hook** (` | `)`; |   |

| `void **register_core_mailq_get_next_active_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_mailq_get_next_active_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_mailq_get_next_active_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_mailq_get_next_active_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `ec_message * **call_core_mailq_get_next_active_hook** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">connh</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`connection_handle * <var class="pdparam">connh</var>`;<a name="idp35963216"></a> 
## Description

When Momentum attempts to deliver a message via SMTP, it will fetch the next message off the active queue for the domain in question *`dr`*. The *`binding_slot`* and *`connh`* describe the current connection over which the returned message will be delivered.

Invocation will stop at the first registered function to return a non-NULL *`ec_message`*. If all functions return NULL, the connection in question will either go into the idle pool or be reassociated with a "sibling" domain that shares an MX the current domain.