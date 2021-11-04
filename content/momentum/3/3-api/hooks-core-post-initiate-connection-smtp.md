---
lastUpdated: "03/26/2020"
title: "post_initiate_connection_smtp"
description: "post initiate connection smtp void post initiate connection smtp closure dr binding slot now conn fd void closure domain record dr int binding slot struct timeval now int conn fd int has core post initiate connection smtp hook void register core post initiate connection smtp hook first hook closure ec..."
---

<a name="hooks.core.post_initiate_connection_smtp"></a> 
## Name

post_initiate_connection_smtp

## Synopsis

`#include "hooks/core/post_initiate_connection_smtp.h"`

| `void **post_initiate_connection_smtp** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">conn_fd</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int <var class="pdparam">conn_fd</var>`;

| `int **has_core_post_initiate_connection_smtp_hook** (` | `)`; |   |

| `void **register_core_post_initiate_connection_smtp_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_initiate_connection_smtp_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_post_initiate_connection_smtp_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_initiate_connection_smtp_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_post_initiate_connection_smtp_hook** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">conn_fd</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int <var class="pdparam">conn_fd</var>`;<a name="idp44844864"></a> 
## Description

Called after an SMTP session initiation has been attempted. The architecture of Momentum is such that a connection is not created for a specific message, but instead for a domain/binding pair. A reasonable guess at which message might have been attempted on that connection would be to look at the active queue for that domain/binding and peek at the first message in the queue.

`dr` is the domain in question. `binding_slot` is the binding in question. `now` is the current time, and `conn_fd` is the return value from `initiate_connection`, either a valid file descriptor or one of the `CONN_ERR` codes from `connection.h`.