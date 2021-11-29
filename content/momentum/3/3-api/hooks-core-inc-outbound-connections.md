---
lastUpdated: "03/26/2020"
title: "inc_outbound_connections"
description: "inc outbound connections void inc outbound connections closure connh void closure connection handle connh int has core inc outbound connections hook void register core inc outbound connections hook first hook closure ec hook core inc outbound connections func t hook void closure void register core inc outbound connections hook last..."
---

<a name="hooks.core.inc_outbound_connections"></a> 
## Name

inc_outbound_connections

## Synopsis

`#include "hooks/core/inc_outbound_connections.h"`

| `void **inc_outbound_connections** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">connh</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`connection_handle * <var class="pdparam">connh</var>`;

| `int **has_core_inc_outbound_connections_hook** (` | `)`; |   |

| `void **register_core_inc_outbound_connections_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_inc_outbound_connections_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_inc_outbound_connections_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_inc_outbound_connections_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_inc_outbound_connections_hook** (` | <var class="pdparam">connh</var>`)`; |   |

`connection_handle * <var class="pdparam">connh</var>`;<a name="idp45198032"></a> 
## Description

Upon successfully establishing an outbound SMTP connection, this hook will be called with the connection handle of said connection.