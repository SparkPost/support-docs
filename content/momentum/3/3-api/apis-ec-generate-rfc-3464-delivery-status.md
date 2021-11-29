---
lastUpdated: "03/26/2020"
title: "ec_generate_rfc3464_delivery_status"
description: "ec generate rfc 3464 delivery status renders an RFC 3464 report block into the provided string void ec generate rfc 3464 delivery status output mess custom fields action attempt string output ec message mess EC Dict custom fields dsn actype action struct timeval attempt This reference page was automatically generated..."
---

<a name="apis.ec_generate_rfc3464_delivery_status"></a> 
## Name

ec_generate_rfc3464_delivery_status — renders an RFC3464 report block into the provided string

## Synopsis

`#include "soft_bounce.h"`

| `void **ec_generate_rfc3464_delivery_status** (` | <var class="pdparam">output</var>, |   |
|   | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">custom_fields</var>, |   |
|   | <var class="pdparam">action</var>, |   |
|   | <var class="pdparam">attempt</var>`)`; |   |

`string * <var class="pdparam">output</var>`;
`ec_message * <var class="pdparam">mess</var>`;
`ECDict <var class="pdparam">custom_fields</var>`;
`dsn_actype <var class="pdparam">action</var>`;
`struct timeval * <var class="pdparam">attempt</var>`;<a name="idp58320336"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

renders an RFC3464 report block into the provided string.