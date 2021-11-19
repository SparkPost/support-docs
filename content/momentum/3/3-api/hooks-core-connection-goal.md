---
lastUpdated: "03/26/2020"
title: "connection_goal"
description: "connection goal void connection goal closure dr binding slot aq goal void closure domain record dr int binding slot Skiplist aq int goal int has core connection goal hook void register core connection goal hook first hook closure ec hook core connection goal func t hook void closure void register..."
---

<a name="hooks.core.connection_goal"></a> 
## Name

connection_goal

## Synopsis

`#include "hooks/core/connection_goal.h"`

| `void **connection_goal** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">aq</var>, |   |
|   | <var class="pdparam">goal</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`Skiplist * <var class="pdparam">aq</var>`;
`int * <var class="pdparam">goal</var>`;

| `int **has_core_connection_goal_hook** (` | `)`; |   |

| `void **register_core_connection_goal_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_connection_goal_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_connection_goal_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_connection_goal_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_connection_goal_hook** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">aq</var>, |   |
|   | <var class="pdparam">goal</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`Skiplist * <var class="pdparam">aq</var>`;
`int * <var class="pdparam">goal</var>`;<a name="idp36474544"></a> 
## Description

This hook allows developers to override Momentum's internal connection allocation algorithms. *`dr`* is the domain to which an currently active message is scheduled for immediate delivery. *`binding_slot`* is the MultiVIP™ binding slot over which the message should be sent. *`aq`* is the current active queue for that domain/binding. *`goal`* points to an integer which represents the number of total desired connections.

This hook as no return and thus the last registered hook that chooses to unilaterally set *`*goal`* will override all previous goal calculations.