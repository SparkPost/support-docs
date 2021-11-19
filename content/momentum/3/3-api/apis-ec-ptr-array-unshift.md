---
lastUpdated: "03/26/2020"
title: "ec_ptr_array_unshift"
description: "ec ptr array unshift puts an item at the front of the array shifts existing data over int ec ptr array unshift array elt ec ptr array array void elt This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.ec_ptr_array_unshift"></a> 
## Name

ec_ptr_array_unshift — puts an item at the front of the array, shifts existing data over

## Synopsis

`#include "misc/ec_ptr_array.h"`

| `int **ec_ptr_array_unshift** (` | <var class="pdparam">array</var>, |   |
|   | <var class="pdparam">elt</var>`)`; |   |

`ec_ptr_array * <var class="pdparam">array</var>`;
`void * <var class="pdparam">elt</var>`;<a name="idp58302160"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

puts an item at the front of the array, shifts existing data over

just like perl's unshift function

**<a name="idp58305536"></a> Return Values**

0 on failure, new array size on success