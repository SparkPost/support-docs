---
lastUpdated: "03/26/2020"
title: "pre_mail_queue_maintain_domain"
description: "pre mail queue maintain domain void pre mail queue maintain domain closure dr now rv void closure domain record dr struct timeval now int rv int has core pre mail queue maintain domain hook void register core pre mail queue maintain domain hook first hook closure ec hook core pre..."
---

<a name="hooks.core.pre_mail_queue_maintain_domain"></a> 
## Name

pre_mail_queue_maintain_domain

## Synopsis

`#include "hooks/core/pre_mail_queue_maintain_domain.h"`

| `void **pre_mail_queue_maintain_domain** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">rv</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int * <var class="pdparam">rv</var>`;

| `int **has_core_pre_mail_queue_maintain_domain_hook** (` | `)`; |   |

| `void **register_core_pre_mail_queue_maintain_domain_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_mail_queue_maintain_domain_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_pre_mail_queue_maintain_domain_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_mail_queue_maintain_domain_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_pre_mail_queue_maintain_domain_hook** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">rv</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int * <var class="pdparam">rv</var>`;<a name="idp29638928"></a> 
## Description

This hook is called as a first step of queue maintenance for a domain.

In the event that a domain has messages with next delivery attempts at or before the current time, then queue maintenance will be performed.

*`dr`* is the domain in question. *`now`* is the current time from the perspective of the internal scheduler. *`rv`* is the return value of the parent function -- it is not used or respected by the caller and exists to maintain call likeness to *`post_mail_queue_maintain_domain`*.