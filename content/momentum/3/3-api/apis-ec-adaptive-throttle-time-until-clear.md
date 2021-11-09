---
lastUpdated: "03/26/2020"
title: "ec_adaptive_throttle_time_until_clear"
description: "ec adaptive throttle time until clear check to see how long it will be until a throttle is under budget int ec adaptive throttle time until clear name is shared delta const char name int is shared int delta This reference page was automatically generated from functions found in the..."
---

<a name="apis.ec_adaptive_throttle_time_until_clear"></a> 
## Name

ec_adaptive_throttle_time_until_clear — check to see how long it will be until a throttle is under budget

## Synopsis

`#include "modules/generic/adaptive.h"`

| `int **ec_adaptive_throttle_time_until_clear** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">is_shared</var>, |   |
|   | <var class="pdparam">delta</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`int <var class="pdparam">is_shared</var>`;
`int <var class="pdparam">delta</var>`;<a name="idp46868528"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

check to see how long it will be until a throttle is under budget

A simpler to use variant of [ec_throttle_is_exceeded](/momentum/3/3-api/apis-ec-throttle-is-exceeded), this function will return the number of seconds until the throttle will be under budget, or 0 if it is currently under budget.

when is_shared is true, the replication of counts lags behind. So, if you call this function right after ec_adaptive_throttle_delta, you won't see the effect of the amount just added. In that case, set delta = 1

**<a name="idp46873280"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

the name of the throttle

</dd>

<dt>indicate</dt>

<dd>

if the throttle is shared or not

</dd>

<dt>add</dt>

<dd>

to the current capacity by delta amount when determine if the quota has exceeded or not.

</dd>

</dl>

**<a name="idp46879776"></a> Return Values**

the number of seconds until the throttle is under budget

**Configuration Change. ** This feature is available starting from Momentum 3.3.