---
lastUpdated: "03/26/2020"
title: "ec_throttle_delta"
description: "ec throttle delta adjust the counter for a named throttle int ec throttle delta name amount const char name int amount This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of..."
---

<a name="apis.ec_throttle_delta"></a> 
## Name

ec_throttle_delta — adjust the counter for a named throttle

## Synopsis

`#include "throttle.h"`

| `int **ec_throttle_delta** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">amount</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`int <var class="pdparam">amount</var>`;<a name="idp63473808"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

adjust the counter for a named throttle

Adjust the counter in the throttle by delta. Delta may be negative.

**<a name="idp63477184"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

the name of the throttle

</dd>

<dt>amount</dt>

<dd>

the number to adjust by

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.0.8.