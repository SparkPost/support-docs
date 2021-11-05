---
lastUpdated: "03/26/2020"
title: "ec_internal_inject_no_log"
description: "ec internal inject no log injects and enqueues and internally generated message void ec internal inject no log mess now ec message mess struct timeval now This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.ec_internal_inject_no_log"></a> 
## Name

ec_internal_inject_no_log — injects and enqueues and internally generated message

## Synopsis

`#include "soft_bounce.h"`

| `void **ec_internal_inject_no_log** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp47981536"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

injects and enqueues and internally generated message.

identical to [ec_internal_inject](/momentum/3/3-api/apis-ec-internal-inject) except that ec_log_reception is not called.

**<a name="idp47985744"></a> See Also**

[ec_internal_inject](/momentum/3/3-api/apis-ec-internal-inject)