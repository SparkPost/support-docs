---
lastUpdated: "03/26/2020"
title: "ec_throttle_destroy_named"
description: "ec throttle destroy named destroy a named throttle int ec throttle destroy named name const char name This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may change..."
---

<a name="apis.ec_throttle_destroy_named"></a> 
## Name

ec_throttle_destroy_named — destroy a named throttle

## Synopsis

`#include "throttle.h"`

| `int **ec_throttle_destroy_named** (` | <var class="pdparam">name</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;<a name="idp63491888"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

destroy a named throttle

**<a name="idp63494736"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

the name of the throttle

</dd>

</dl>

**<a name="idp63497472"></a> Return Values**

returns 1 if the throttle existed and was destroyed, 0 otherwise.

**Configuration Change. ** This feature is available starting from Momentum 3.0.13.