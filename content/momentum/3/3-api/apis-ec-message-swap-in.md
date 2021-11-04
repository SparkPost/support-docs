---
lastUpdated: "03/26/2020"
title: "ec_message_swap_in"
description: "ec message swap in causes the message content to be read in from disk int ec message swap in mess flags ec message mess int flags This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.ec_message_swap_in"></a> 
## Name

ec_message_swap_in — causes the message content to be read in from disk

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_swap_in** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp57198448"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

causes the message content to be read in from disk.

Will update mess so that it can provide you with access to the components requested in flags.

Flags can be one of more of EC_MSG_SWAP_HEADERS, EC_MSG_SWAP_MIME_STRUCTURE and EC_MSG_SWAP_LEGACY_IN_CORE.

### Note

This function may induce IO or otherwise block the caller. Blocking in the scheduler thread will lead to degraded performance and should be avoided at all costs. If your code is running in the IO subsystem, the core will have already taken steps to ensure that blocking is acceptable. Otherwise, you should look at using the thread pool API to run a job in the IO pool.