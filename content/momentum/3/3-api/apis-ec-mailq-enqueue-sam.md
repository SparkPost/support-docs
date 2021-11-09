---
lastUpdated: "03/26/2020"
title: "ec_mailq_enqueue_sam"
description: "ec mailq enqueue sam Enqueue multiple messages in a batch atomically prior to running mail queue maintainers void ec mailq enqueue sam head now sp async message head struct timeval now This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.ec_mailq_enqueue_sam"></a> 
## Name

ec_mailq_enqueue_sam — Enqueue multiple messages in a batch "atomically", prior to running mail queue maintainers

## Synopsis

`#include "mail_queue.h"`

| `void **ec_mailq_enqueue_sam** (` | <var class="pdparam">head</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`sp_async_message * <var class="pdparam">head</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp54379968"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Enqueue multiple messages in a batch "atomically", prior to running mail queue maintainers.