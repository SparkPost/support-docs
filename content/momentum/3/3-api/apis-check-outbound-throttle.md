---
lastUpdated: "03/26/2020"
title: "check_outbound_throttle"
description: "check outbound throttle check an outbound throttle int check outbound throttle ob mess throttle now later throttle ob mess throttle struct timeval now struct timeval later This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.check_outbound_throttle"></a> 
## Name

check_outbound_throttle — check an outbound throttle

## Synopsis

`#include "throttle.h"`

| `int **check_outbound_throttle** (` | <var class="pdparam">ob_mess_throttle</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">later</var>`)`; |   |

`throttle * <var class="pdparam">ob_mess_throttle</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`struct timeval * <var class="pdparam">later</var>`;<a name="idp63438272"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

check an outbound throttle.

A helper for use in constructing outbound throttling hooks.

**Configuration Change. ** This feature is available starting from Momentum 3.0.13.