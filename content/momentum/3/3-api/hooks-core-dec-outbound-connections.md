---
lastUpdated: "03/26/2020"
title: "dec_outbound_connections"
description: "dec outbound connections void dec outbound connections closure connh void closure connection handle connh int has core dec outbound connections hook void register core dec outbound connections hook first hook closure ec hook core dec outbound connections func t hook void closure void register core dec outbound connections hook last..."
---

<a name="hooks.core.dec_outbound_connections"></a> 
## Name

dec_outbound_connections

## Synopsis

`#include "hooks/core/dec_outbound_connections.h"`

| `void **dec_outbound_connections** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">connh</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`connection_handle * <var class="pdparam">connh</var>`;

| `int **has_core_dec_outbound_connections_hook** (` | `)`; |   |

| `void **register_core_dec_outbound_connections_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_dec_outbound_connections_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_dec_outbound_connections_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_dec_outbound_connections_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_dec_outbound_connections_hook** (` | <var class="pdparam">connh</var>`)`; |   |

`connection_handle * <var class="pdparam">connh</var>`;<a name="idp45122736"></a> 
## Description

Immediately prior to terminating an outbound SMTP connection, this hook will be called with the connection handle of said connection.