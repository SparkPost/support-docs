---
lastUpdated: "03/26/2020"
title: "veto_host_connection"
description: "veto host connection int veto host connection closure host dr binding slot max conns cur conns void closure host record host domain record dr int binding slot int max conns int cur conns int has core veto host connection hook void register core veto host connection hook first hook closure..."
---

<a name="hooks.core.veto_host_connection"></a> 
## Name

veto_host_connection

## Synopsis

`#include "hooks/core/veto_host_connection.h"`

| `int **veto_host_connection** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">host</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">max_conns</var>, |   |
|   | <var class="pdparam">cur_conns</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`host_record * <var class="pdparam">host</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`int <var class="pdparam">max_conns</var>`;
`int <var class="pdparam">cur_conns</var>`;

| `int **has_core_veto_host_connection_hook** (` | `)`; |   |

| `void **register_core_veto_host_connection_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_veto_host_connection_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_veto_host_connection_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_veto_host_connection_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_veto_host_connection_hook** (` | <var class="pdparam">host</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">max_conns</var>, |   |
|   | <var class="pdparam">cur_conns</var>`)`; |   |

`host_record * <var class="pdparam">host</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`int <var class="pdparam">max_conns</var>`;
`int <var class="pdparam">cur_conns</var>`;<a name="idp36724032"></a> 
## Description

`veto_host_connection` is called when an MX is being selected for a domain, to determine if a particular host is not suitable (i.e. if a new connection to it should not be permitted). The function should return 1 if a new connection to this host should not be permitted. *`host`*: *`dr`*: *`binding_slot`*: *`max_conns`*: *`cur_conns`*: