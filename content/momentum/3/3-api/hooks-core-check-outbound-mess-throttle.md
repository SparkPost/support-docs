---
lastUpdated: "03/26/2020"
title: "check_outbound_mess_throttle"
description: "check outbound mess throttle int check outbound mess throttle closure binding id dr now later void closure int binding id domain record dr struct timeval now struct timeval later int has core check outbound mess throttle hook void register core check outbound mess throttle hook first hook closure ec hook..."
---

<a name="hooks.core.check_outbound_mess_throttle"></a> 
## Name

check_outbound_mess_throttle

## Synopsis

`#include "hooks/core/check_outbound_mess_throttle.h"`

| `int **check_outbound_mess_throttle** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">binding_id</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">later</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`int <var class="pdparam">binding_id</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`struct timeval * <var class="pdparam">later</var>`;

| `int **has_core_check_outbound_mess_throttle_hook** (` | `)`; |   |

| `void **register_core_check_outbound_mess_throttle_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_check_outbound_mess_throttle_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_check_outbound_mess_throttle_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_check_outbound_mess_throttle_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_check_outbound_mess_throttle_hook** (` | <var class="pdparam">binding_id</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">later</var>`)`; |   |

`int <var class="pdparam">binding_id</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`struct timeval * <var class="pdparam">later</var>`;<a name="idp45389376"></a> 
## Description

Called when a throttle is checked. Returning non-zero causes the session to be suspended until at least 'later'