---
lastUpdated: "03/26/2020"
title: "ec_generate_rfc3464_notification"
description: "ec generate rfc 3464 notification creates an RFC 3464 MDN and enqueues void ec generate rfc 3464 notification message action ec message message dsn actype action This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.ec_generate_rfc3464_notification"></a> 
## Name

ec_generate_rfc3464_notification — creates an RFC 3464 MDN and enqueues

## Synopsis

`#include "soft_bounce.h"`

| `void **ec_generate_rfc3464_notification** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">action</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`dsn_actype <var class="pdparam">action</var>`;<a name="idp58372640"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

creates an RFC 3464 MDN and enqueues