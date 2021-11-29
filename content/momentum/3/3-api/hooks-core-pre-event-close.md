---
lastUpdated: "03/26/2020"
title: "pre_event_close"
description: "pre event close void pre event close closure e void closure Event e int has core pre event close hook void register core pre event close hook first hook closure ec hook core pre event close func t hook void closure void register core pre event close hook last hook..."
---

<a name="hooks.core.pre_event_close"></a> 
## Name

pre_event_close

## Synopsis

`#include "hooks/core/pre_event_close.h"`

| `void **pre_event_close** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">e</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`Event * <var class="pdparam">e</var>`;

| `int **has_core_pre_event_close_hook** (` | `)`; |   |

| `void **register_core_pre_event_close_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_event_close_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_pre_event_close_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_event_close_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_pre_event_close_hook** (` | <var class="pdparam">e</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;<a name="idp32760416"></a> 
## Description

*`pre_event_close`* is called immediately before the Event *`e`* is closed and subsequently freed.