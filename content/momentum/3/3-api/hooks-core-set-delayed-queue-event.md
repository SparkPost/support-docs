---
lastUpdated: "03/26/2020"
title: "set_delayed_queue_event"
description: "set delayed queue event int set delayed queue event closure mq now void closure mail queue mq struct timeval now int has core set delayed queue event hook void register core set delayed queue event hook first hook closure ec hook core set delayed queue event func t hook void..."
---

<a name="hooks.core.set_delayed_queue_event"></a> 
## Name

set_delayed_queue_event

## Synopsis

`#include "hooks/core/set_delayed_queue_event.h"`

| `int **set_delayed_queue_event** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">mq</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`mail_queue * <var class="pdparam">mq</var>`;
`struct timeval * <var class="pdparam">now</var>`;

| `int **has_core_set_delayed_queue_event_hook** (` | `)`; |   |

| `void **register_core_set_delayed_queue_event_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_set_delayed_queue_event_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_set_delayed_queue_event_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_set_delayed_queue_event_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_set_delayed_queue_event_hook** (` | <var class="pdparam">mq</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`mail_queue * <var class="pdparam">mq</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp36977552"></a> 
## Description

This hook is called to schedule a mail queue maintainer for a mail queue. The default implementation will cancel the maintainer if the queue is empty, else if there are messages in the active queue it will schedule for now + delayed_queue_scan_interval, else (delayed messages only) it will schedule for the next attempt time of the first delayed message or now + delayed_queue_scan_interval, whichever is sooner. You can override this behavior by registering this hook and returning nonzero when you are done; returning 0 will cause the default implementation to run. To cancel an existing maintainer event, you may call mail_queue_stop_maintainer. When creating a mailtainer, the timed event worker must be mail_queue_maintainer, and the closure must be the domain name, which you allocate as a MEMTYPE_STRING. *`now`* may be NULL, in which case you should call get_now to get the time.