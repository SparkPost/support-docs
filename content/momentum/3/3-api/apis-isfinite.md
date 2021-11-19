---
lastUpdated: "03/26/2020"
title: "isfinite"
description: "isfinite indicates if a number has a finite value int isfinite d double d This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may change in behavior when..."
---

<a name="apis.isfinite"></a> 
## Name

isfinite — indicates if a number has a finite value

## Synopsis

`#include "util.h"`

| `int **isfinite** (` | <var class="pdparam">d</var>`)`; |   |

`double <var class="pdparam">d</var>`;<a name="idp64109632"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

indicates if a number has a finite value.

**<a name="idp64112496"></a> Parameters**

<dl class="variablelist">

<dt>d</dt>

<dd>

the number to check

</dd>

</dl>

**<a name="idp64115216"></a> Return Values**

[isfinite](/momentum/3/3-api/apis-isfinite) returns a non-zero value if and only if its argument has a finite (zero, subnormal, or normal) value.