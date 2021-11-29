---
lastUpdated: "03/26/2020"
title: "ec_ptr_array_get"
description: "ec ptr array get retrieve from a sparse ec ptr array void ec ptr array get array slot ec ptr array array int slot This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.ec_ptr_array_get"></a> 
## Name

ec_ptr_array_get — retrieve from a sparse ec_ptr_array

## Synopsis

`#include "misc/ec_ptr_array.h"`

| `void * **ec_ptr_array_get** (` | <var class="pdparam">array</var>, |   |
|   | <var class="pdparam">slot</var>`)`; |   |

`ec_ptr_array * <var class="pdparam">array</var>`;
`int <var class="pdparam">slot</var>`;<a name="idp58231072"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

retrieve from a sparse ec_ptr_array

if 0 <= slot < array->size, returns array->items[slot]; else returns NULL

**Configuration Change. ** This feature is available as of version 3.0.