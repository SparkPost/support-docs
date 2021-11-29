---
lastUpdated: "03/26/2020"
title: "dec_inbound_connections"
description: "dec inbound connections void dec inbound connections closure conntype fd ac void closure char conntype int fd accept construct ac int has core dec inbound connections hook void register core dec inbound connections hook first hook closure ec hook core dec inbound connections func t hook void closure void register..."
---

<a name="hooks.core.dec_inbound_connections"></a> 
## Name

dec_inbound_connections

## Synopsis

`#include "hooks/core/dec_inbound_connections.h"`

| `void **dec_inbound_connections** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">conntype</var>, |   |
|   | <var class="pdparam">fd</var>, |   |
|   | <var class="pdparam">ac</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`char * <var class="pdparam">conntype</var>`;
`int <var class="pdparam">fd</var>`;
`accept_construct * <var class="pdparam">ac</var>`;

| `int **has_core_dec_inbound_connections_hook** (` | `)`; |   |

| `void **register_core_dec_inbound_connections_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_dec_inbound_connections_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_dec_inbound_connections_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_dec_inbound_connections_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_dec_inbound_connections_hook** (` | <var class="pdparam">conntype</var>, |   |
|   | <var class="pdparam">fd</var>, |   |
|   | <var class="pdparam">ac</var>`)`; |   |

`char * <var class="pdparam">conntype</var>`;
`int <var class="pdparam">fd</var>`;
`accept_construct * <var class="pdparam">ac</var>`;<a name="idp45100512"></a> 
## Description

Immediately prior to terminating a connection this hook will be invoked once. *`conntype`* represents the type of connection (e.g. "SMTP"). *`fd`* is the file descriptor of the connection. *`ac`* is the *`accept_construct`* associated with the session.