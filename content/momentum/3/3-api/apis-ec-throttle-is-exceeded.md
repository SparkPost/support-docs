---
lastUpdated: "03/26/2020"
title: "ec_throttle_is_exceeded"
description: "ec throttle is exceeded check to see if a throttle is over budget int ec throttle is exceeded name now later const char name struct timeval now struct timeval later This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.ec_throttle_is_exceeded"></a> 
## Name

ec_throttle_is_exceeded — check to see if a throttle is over budget

## Synopsis

`#include "throttle.h"`

| `int **ec_throttle_is_exceeded** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">later</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`struct timeval * <var class="pdparam">later</var>`;<a name="idp63510016"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

check to see if a throttle is over budget

Given the current "now" time value, updates the "later" value to the duration after which the throttle would be under budget.

**<a name="idp63513456"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

the name of the throttle

</dd>

<dt>now</dt>

<dd>

the current time

</dd>

<dt>later</dt>

<dd>

the when the throttle will be under budget

</dd>

</dl>

**<a name="idp63519872"></a> Return Values**

1 is over budget, 0 if under budget, -1 on error.

**Configuration Change. ** This feature is available starting from Momentum 3.0.8.