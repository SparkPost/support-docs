---
lastUpdated: "03/26/2020"
title: "scheduler_active_queue_reinsert"
description: "scheduler active queue reinsert Reinsert a delivery construct's messages into the active queue for re processing void scheduler active queue reinsert dc domain delivery construct dc const char domain This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.scheduler_active_queue_reinsert"></a> 
## Name

scheduler_active_queue_reinsert — Reinsert a delivery construct's messages into the active queue, for re-processing

## Synopsis

`#include "mail_queue.h"`

| `void **scheduler_active_queue_reinsert** (` | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`delivery_construct * <var class="pdparam">dc</var>`;
`const char * <var class="pdparam">domain</var>`;<a name="idp58859888"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Reinsert a delivery construct's messages into the active queue, for re-processing.

This is necessary in a few instances (banner fail, TLS errors, etc). In general if you have an SMTP failure you should be going into the delayed queue, so don't use this unless you really know what you're doing.