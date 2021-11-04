---
lastUpdated: "03/26/2020"
title: "ec_ptr_array_remove"
description: "ec ptr array remove remove an item from an ec ptr array and compact the array void ec ptr array remove array slot ec ptr array array int slot This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_ptr_array_remove"></a> 
## Name

ec_ptr_array_remove — remove an item from an ec_ptr_array, and compact the array

## Synopsis

`#include "misc/ec_ptr_array.h"`

| `void **ec_ptr_array_remove** (` | <var class="pdparam">array</var>, |   |
|   | <var class="pdparam">slot</var>`)`; |   |

`ec_ptr_array * <var class="pdparam">array</var>`;
`int <var class="pdparam">slot</var>`;<a name="idp58287376"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

remove an item from an ec_ptr_array, and compact the array

frees array->items[slot], shifts all the elements after it down by one and decrements array size; safe to call with out-of-range slot

**Configuration Change. ** This feature is available as of version 3.0.