---
lastUpdated: "03/26/2020"
title: "post_event_read"
description: "post event read void post event read closure e buf buflen void closure Event e const char buf ssize t buflen int has core post event read hook void register core post event read hook first hook closure ec hook core post event read func t hook void closure void..."
---

<a name="hooks.core.post_event_read"></a> 
## Name

post_event_read

## Synopsis

`#include "hooks/core/post_event_read.h"`

| `void **post_event_read** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">e</var>, |   |
|   | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">buflen</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`Event * <var class="pdparam">e</var>`;
`const char * <var class="pdparam">buf</var>`;
`ssize_t <var class="pdparam">buflen</var>`;

| `int **has_core_post_event_read_hook** (` | `)`; |   |

| `void **register_core_post_event_read_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_event_read_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_post_event_read_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_event_read_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_post_event_read_hook** (` | <var class="pdparam">e</var>, |   |
|   | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">buflen</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;
`const char * <var class="pdparam">buf</var>`;
`ssize_t <var class="pdparam">buflen</var>`;<a name="idp42093504"></a> 
## Description

*`post_event_read`* is called immediately after a successful read on the Event *`e`* if *`e->trace`* is true.