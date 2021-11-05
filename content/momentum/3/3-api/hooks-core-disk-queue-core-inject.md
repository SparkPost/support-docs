---
lastUpdated: "03/26/2020"
title: "disk_queue_core_inject"
description: "disk queue core inject void disk queue core inject closure em void closure email message em int has core disk queue core inject hook void register core disk queue core inject hook first hook closure ec hook core disk queue core inject func t hook void closure void register core..."
---

<a name="hooks.core.disk_queue_core_inject"></a> 
## Name

disk_queue_core_inject

## Synopsis

`#include "hooks/core/disk_queue_core_inject.h"`

| `void **disk_queue_core_inject** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">em</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`email_message * <var class="pdparam">em</var>`;

| `int **has_core_disk_queue_core_inject_hook** (` | `)`; |   |

| `void **register_core_disk_queue_core_inject_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_disk_queue_core_inject_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_disk_queue_core_inject_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_disk_queue_core_inject_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_disk_queue_core_inject_hook** (` | <var class="pdparam">em</var>`)`; |   |

`email_message * <var class="pdparam">em</var>`;<a name="idp44658144"></a> 
## Description

Functions registered in at this hook will be invoked within disk_queue_core_inject immediately before the message is put into the in-memory queue. This hook will not be called if the message fails to spool in or gets expired within disk_queue_core_inject. The argument em is a message that has just been spooled in from disk.

This Hook is not supported currently.