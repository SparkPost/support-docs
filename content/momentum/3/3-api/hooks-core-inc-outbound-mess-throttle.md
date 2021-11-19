---
lastUpdated: "03/26/2020"
title: "inc_outbound_mess_throttle"
description: "inc outbound mess throttle void inc outbound mess throttle closure binding id dr void closure int binding id domain record dr int has core inc outbound mess throttle hook void register core inc outbound mess throttle hook first hook closure ec hook core inc outbound mess throttle func t hook..."
---

<a name="hooks.core.inc_outbound_mess_throttle"></a> 
## Name

inc_outbound_mess_throttle

## Synopsis

`#include "hooks/core/inc_outbound_mess_throttle.h"`

| `void **inc_outbound_mess_throttle** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">binding_id</var>, |   |
|   | <var class="pdparam">dr</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`int <var class="pdparam">binding_id</var>`;
`domain_record * <var class="pdparam">dr</var>`;

| `int **has_core_inc_outbound_mess_throttle_hook** (` | `)`; |   |

| `void **register_core_inc_outbound_mess_throttle_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_inc_outbound_mess_throttle_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_inc_outbound_mess_throttle_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_inc_outbound_mess_throttle_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_inc_outbound_mess_throttle_hook** (` | <var class="pdparam">binding_id</var>, |   |
|   | <var class="pdparam">dr</var>`)`; |   |

`int <var class="pdparam">binding_id</var>`;
`domain_record * <var class="pdparam">dr</var>`;<a name="idp29066336"></a> 
## Description

When a message begins to be delivered, this hook is called with the binding ID and domain record associated with the message.