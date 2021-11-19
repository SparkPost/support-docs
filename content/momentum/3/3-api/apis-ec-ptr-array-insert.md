---
lastUpdated: "03/26/2020"
title: "ec_ptr_array_insert"
description: "ec ptr array insert insert into a sparse ec ptr array int ec ptr array insert array slot elt ec ptr array array int slot void elt This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_ptr_array_insert"></a> 
## Name

ec_ptr_array_insert — insert into a sparse ec_ptr_array

## Synopsis

`#include "misc/ec_ptr_array.h"`

| `int **ec_ptr_array_insert** (` | <var class="pdparam">array</var>, |   |
|   | <var class="pdparam">slot</var>, |   |
|   | <var class="pdparam">elt</var>`)`; |   |

`ec_ptr_array * <var class="pdparam">array</var>`;
`int <var class="pdparam">slot</var>`;
`void * <var class="pdparam">elt</var>`;<a name="idp58271696"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

insert into a sparse ec_ptr_array

puts elt into array->items[slot], extending array->items if necessary; intervening slots will be filled with NULLs

**<a name="idp58275120"></a> Return Values**

true if insert worked, false if out of memory

**Configuration Change. ** This feature is available as of version 3.0.