---
lastUpdated: "03/26/2020"
title: "post_mail_queue_maintain_domain"
description: "post mail queue maintain domain void post mail queue maintain domain closure dr now rv void closure domain record dr struct timeval now int rv int has core post mail queue maintain domain hook void register core post mail queue maintain domain hook first hook closure ec hook core post..."
---

<a name="hooks.core.post_mail_queue_maintain_domain"></a> 
## Name

post_mail_queue_maintain_domain

## Synopsis

`#include "hooks/core/post_mail_queue_maintain_domain.h"`

| `void **post_mail_queue_maintain_domain** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">rv</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int * <var class="pdparam">rv</var>`;

| `int **has_core_post_mail_queue_maintain_domain_hook** (` | `)`; |   |

| `void **register_core_post_mail_queue_maintain_domain_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_mail_queue_maintain_domain_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_post_mail_queue_maintain_domain_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_mail_queue_maintain_domain_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_post_mail_queue_maintain_domain_hook** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">rv</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int * <var class="pdparam">rv</var>`;<a name="idp44871856"></a> 
## Description

This hook is called as a last step of queue maintenance for a domain.

In the event that a domain has messages with next delivery attempts at or before the current time, then queue maintenance will be performed.

*`dr`* is the domain in question. *`now`* is the current time from the perspective of the internal scheduler. *`rv`* is the return value of the parent function. *`*rv`* contains the return value from the internal queue maintenance (the number of induced connection attempts as a result of the call) and may be examined and/or modified by this hook.