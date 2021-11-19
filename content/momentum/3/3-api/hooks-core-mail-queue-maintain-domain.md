---
lastUpdated: "03/26/2020"
title: "mail_queue_maintain_domain"
description: "mail queue maintain domain void mail queue maintain domain closure dr now rv void closure domain record dr struct timeval now int rv int has core mail queue maintain domain hook void register core mail queue maintain domain hook first hook closure ec hook core mail queue maintain domain func..."
---

<a name="hooks.core.mail_queue_maintain_domain"></a> 
## Name

mail_queue_maintain_domain

## Synopsis

`#include "hooks/core/mail_queue_maintain_domain.h"`

| `void **mail_queue_maintain_domain** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">rv</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int * <var class="pdparam">rv</var>`;

| `int **has_core_mail_queue_maintain_domain_hook** (` | `)`; |   |

| `void **register_core_mail_queue_maintain_domain_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_mail_queue_maintain_domain_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_mail_queue_maintain_domain_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_mail_queue_maintain_domain_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_mail_queue_maintain_domain_hook** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">rv</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int * <var class="pdparam">rv</var>`;<a name="idp35937872"></a> 
## Description

By registering a function for this hook, Momentum's internal `mail_queue_maintain_domain` function is disabled and replaced by calls to the functions registered.

This function is responsible for putting into action any connections necessary for the delivery of messages in the active queue for the domain *`dr`* across all MultiVIP™ bindings. The number of total connections established should be placed in *`*rv`*.