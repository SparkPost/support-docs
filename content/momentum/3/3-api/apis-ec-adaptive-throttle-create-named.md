---
lastUpdated: "03/26/2020"
title: "ec_adaptive_throttle_create_named"
description: "ec adaptive throttle create named create a named throttle within the adaptive context int ec adaptive throttle create named name is shared maximum time period const char name int is shared uint 64 t maximum unsigned int time period This reference page was automatically generated from functions found in the..."
---

<a name="apis.ec_adaptive_throttle_create_named"></a> 
## Name

ec_adaptive_throttle_create_named — create a named throttle within the adaptive context

## Synopsis

`#include "modules/generic/adaptive.h"`

| `int **ec_adaptive_throttle_create_named** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">is_shared</var>, |   |
|   | <var class="pdparam">maximum</var>, |   |
|   | <var class="pdparam">time_period</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`int <var class="pdparam">is_shared</var>`;
`uint64_t <var class="pdparam">maximum</var>`;
`unsigned int <var class="pdparam">time_period</var>`;<a name="idp46795904"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

create a named throttle within the adaptive context.

If is_shared is specified and in a cluster, the throttle will be shared within the cluster. Otherwise, it is equivalent to ec_throttle_create_named. This and other ec_adaptive_throttle_* are only intended for used in adaptive.lua to evaluate trigger rules!!! Creates a throttle that can be referenced by name.

**<a name="idp46799568"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

the name of the throttle

</dd>

<dt>maximum</dt>

<dd>

the upper bound of increments/events

</dd>

<dt>time_period</dt>

<dd>

number of seconds over which to enforce throttle

</dd>

<dt>the</dt>

<dd>

throttle should be shared

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.3.