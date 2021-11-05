---
lastUpdated: "03/26/2020"
title: "premigrate_outbound_connection"
description: "premigrate outbound connection void premigrate outbound connection closure connh src dest void closure connection handle connh domain record src domain record dest int has core premigrate outbound connection hook void register core premigrate outbound connection hook first hook closure ec hook core premigrate outbound connection func t hook void closure..."
---

<a name="hooks.core.premigrate_outbound_connection"></a> 
## Name

premigrate_outbound_connection

## Synopsis

`#include "hooks/core/premigrate_outbound_connection.h"`

| `void **premigrate_outbound_connection** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">connh</var>, |   |
|   | <var class="pdparam">src</var>, |   |
|   | <var class="pdparam">dest</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`connection_handle * <var class="pdparam">connh</var>`;
`domain_record * <var class="pdparam">src</var>`;
`domain_record * <var class="pdparam">dest</var>`;

| `int **has_core_premigrate_outbound_connection_hook** (` | `)`; |   |

| `void **register_core_premigrate_outbound_connection_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_premigrate_outbound_connection_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_premigrate_outbound_connection_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_premigrate_outbound_connection_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_premigrate_outbound_connection_hook** (` | <var class="pdparam">connh</var>, |   |
|   | <var class="pdparam">src</var>, |   |
|   | <var class="pdparam">dest</var>`)`; |   |

`connection_handle * <var class="pdparam">connh</var>`;
`domain_record * <var class="pdparam">src</var>`;
`domain_record * <var class="pdparam">dest</var>`;<a name="idp29763600"></a> 
## Description

When an existing connection_handle *`connh`* is used to transmit the last active message for domain *`src`*, other domains that may shared the mail exchange to which *`conn`* is connected. If any of those domains contain active messages that require delivery the connection is migrated to that domain *`dest`*. This hook is invoked prior to the augmentation of internal data structure to reflect such a migration and is primarily used for accounting purposed.