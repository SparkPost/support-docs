---
lastUpdated: "03/26/2020"
title: "ec_throttle_create_named"
description: "ec throttle create named create a named throttle int ec throttle create named name maximum time period const char name uint 64 t maximum unsigned int time period This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.ec_throttle_create_named"></a> 
## Name

ec_throttle_create_named — create a named throttle

## Synopsis

`#include "throttle.h"`

| `int **ec_throttle_create_named** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">maximum</var>, |   |
|   | <var class="pdparam">time_period</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`uint64_t <var class="pdparam">maximum</var>`;
`unsigned int <var class="pdparam">time_period</var>`;<a name="idp63453216"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

create a named throttle

Creates a throttle that can be referenced by name.

**<a name="idp63456560"></a> Parameters**

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

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.0.6.