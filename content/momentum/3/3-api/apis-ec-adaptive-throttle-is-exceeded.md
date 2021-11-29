---
lastUpdated: "03/26/2020"
title: "ec_adaptive_throttle_is_exceeded"
description: "ec adaptive throttle is exceeded check to see if a throttle is over budget int ec adaptive throttle is exceeded name is shared now later delta const char name int is shared struct timeval now struct timeval later int delta This reference page was automatically generated from functions found in..."
---

<a name="apis.ec_adaptive_throttle_is_exceeded"></a> 
## Name

ec_adaptive_throttle_is_exceeded — check to see if a throttle is over budget

## Synopsis

`#include "modules/generic/adaptive.h"`

| `int **ec_adaptive_throttle_is_exceeded** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">is_shared</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">later</var>, |   |
|   | <var class="pdparam">delta</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`int <var class="pdparam">is_shared</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`struct timeval * <var class="pdparam">later</var>`;
`int <var class="pdparam">delta</var>`;<a name="idp46842320"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

check to see if a throttle is over budget

Given the current "now" time value, updates the "later" value to the duration after which the throttle would be under budget.

**<a name="idp46845760"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

the name of the throttle

</dd>

<dt>indicate</dt>

<dd>

if the throttle is shared or not

</dd>

<dt>now</dt>

<dd>

the current time

</dd>

<dt>later</dt>

<dd>

the when the throttle will be under budget

</dd>

<dt>add</dt>

<dd>

to the current capacity by delta amount when determine if the quota has exceeded or not.

</dd>

</dl>

**<a name="idp46855936"></a> Return Values**

1 is over budget, 0 if under budget, -1 on error.

**Configuration Change. ** This feature is available starting from Momentum 3.3.