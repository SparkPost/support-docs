---
lastUpdated: "03/26/2020"
title: "__get_global_mail_queue"
description: "get global mail queue Allocates memory and initializes the global mail queue Skiplist get global mail queue void Allocates memory and initializes the global mail queue This function returns the address of a newly allocated global mail queue This is an address of a Section 68 77 Skiplist Only call..."
---

<a name="apis.get_global_mail_queue"></a> 
## Name

__get_global_mail_queue — Allocates memory and initializes the global mail queue

## Synopsis

`#include "mail_queue.h"`

| `Skiplist * **__get_global_mail_queue** (` | `)`; |   |

`void`;<a name="idp54510864"></a> 
## Description

Allocates memory and initializes the global mail queue.

**<a name="idp54512096"></a> Return Values**

This function returns the address of a newly allocated global mail queue. This is an address of a [“Skiplist”](/momentum/3/3-api/structs-skiplist).

**<a name="idp54513648"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp54515632"></a> 
## See Also

[mail_queue_active_queue_for_binding](/momentum/3/3-api/apis-mail-queue-active-queue-for-binding), [mail_queue_purge_domain_binding](/momentum/3/3-api/apis-mail-queue-purge-domain-binding), [mail_queue_delayed_size](/momentum/3/3-api/apis-mail-queue-delayed-size), and [mail_queue_size](/momentum/3/3-api/apis-mail-queue-size).