---
lastUpdated: "03/26/2020"
title: "ec_mailq_get_pending_enqueues"
description: "ec mailq get pending enqueues Fetch the number of pending enqueue requests unsigned int ec mailq get pending enqueues void This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum..."
---

<a name="apis.ec_mailq_get_pending_enqueues"></a> 
## Name

ec_mailq_get_pending_enqueues — Fetch the number of pending enqueue requests

## Synopsis

`#include "mail_queue.h"`

| `unsigned int **ec_mailq_get_pending_enqueues** (` | `)`; |   |

`void`;<a name="idp54434256"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Fetch the number of pending enqueue requests.

Useful for throttling injections if a system is too busy.

**<a name="idp54437632"></a> Return Values**

number of pending enqueue requests system-wide