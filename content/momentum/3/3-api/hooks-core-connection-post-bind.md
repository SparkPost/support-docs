---
lastUpdated: "03/26/2020"
title: "connection_post_bind"
description: "connection post bind int connection post bind closure dr binding slot fd addr addr len void closure domain record dr int binding slot int fd struct sockaddr addr int addr len int has core connection post bind hook void register core connection post bind hook first hook closure ec hook..."
---

<a name="hooks.core.connection_post_bind"></a> 
## Name

connection_post_bind

## Synopsis

`#include "hooks/core/connection_post_bind.h"`

| `int **connection_post_bind** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">fd</var>, |   |
|   | <var class="pdparam">addr</var>, |   |
|   | <var class="pdparam">addr_len</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`int <var class="pdparam">fd</var>`;
`struct sockaddr * <var class="pdparam">addr</var>`;
`int <var class="pdparam">addr_len</var>`;

| `int **has_core_connection_post_bind_hook** (` | `)`; |   |

| `void **register_core_connection_post_bind_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_connection_post_bind_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_connection_post_bind_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_connection_post_bind_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_connection_post_bind_hook** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">fd</var>, |   |
|   | <var class="pdparam">addr</var>, |   |
|   | <var class="pdparam">addr_len</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`int <var class="pdparam">fd</var>`;
`struct sockaddr * <var class="pdparam">addr</var>`;
`int <var class="pdparam">addr_len</var>`;<a name="idp45227728"></a> 
## Description

This hook is invoked subsequent to the bind() call perform prior to any outbound connection attempt. *`dr`* is the domain record whose queue will be attempted on this connection if the connection should be established successfully. *`binding_slot`* is the MultiVIP™ binding slot on which the outbound connection was made. *`fd`* is the file descriptor of the socket itself. *`addr`* and *`addr_len`* represent the destination address that wil be used in a subsequent call to *`connect()`*.

Return 0 on success. Returning non-zero will cause the connection attempt to aborted entirely.