---
lastUpdated: "03/26/2020"
title: "ec_util_power_2"
description: "ec util power 2 Round input to next highest power of 2 if it is not a power of 2 INLINE uint 32 t ec util power 2 x uint 32 t x This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis.ec_util_power_2"></a> 
## Name

ec_util_power_2 — Round input to next highest power of 2 if it is not a power of 2

## Synopsis

`#include "util.h"`

| `INLINE uint32_t **ec_util_power_2** (` | <var class="pdparam">x</var>`)`; |   |

`uint32_t <var class="pdparam">x</var>`;<a name="idp63963568"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Round input to next highest power of 2 if it is not a power of 2.

**<a name="idp63966464"></a> Parameters**

<dl class="variablelist">

<dt>Integer</dt>

<dd>

to round up.

</dd>

</dl>

**<a name="idp63969184"></a> Return Values**

Returns input rounded up to next highest power of 2.