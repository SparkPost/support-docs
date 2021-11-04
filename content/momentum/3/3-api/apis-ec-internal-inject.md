---
lastUpdated: "03/26/2020"
title: "ec_internal_inject"
description: "ec internal inject injects and enqueues an internally generated message void ec internal inject mess now ec message mess struct timeval now This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.ec_internal_inject"></a> 
## Name

ec_internal_inject — injects and enqueues an internally generated message

## Synopsis

`#include "soft_bounce.h"`

| `void **ec_internal_inject** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp47944768"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

injects and enqueues an internally generated message.

Ensures that an internally generated message is correctly swapped, has a binding assigned, is logged as a reception and then enqueues the message for delivery. This function is safe to call from a non-scheduler thread.