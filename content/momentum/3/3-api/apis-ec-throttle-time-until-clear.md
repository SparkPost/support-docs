---
lastUpdated: "03/26/2020"
title: "ec_throttle_time_until_clear"
description: "ec throttle time until clear check to see how long it will be until a throttle is under budget int ec throttle time until clear name const char name This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_throttle_time_until_clear"></a> 
## Name

ec_throttle_time_until_clear — check to see how long it will be until a throttle is under budget

## Synopsis

`#include "throttle.h"`

| `int **ec_throttle_time_until_clear** (` | <var class="pdparam">name</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;<a name="idp63530976"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

check to see how long it will be until a throttle is under budget

A simpler to use variant of [ec_throttle_is_exceeded](/momentum/3/3-api/apis-ec-throttle-is-exceeded), this function will return the number of seconds until the throttle will be under budget, or 0 if it is currently under budget.

**<a name="idp63535056"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

the name of the throttle

</dd>

</dl>

**<a name="idp63537792"></a> Return Values**

the number of seconds until the throttle is under budget

**Configuration Change. ** This feature is available starting from Momentum 3.0.8.