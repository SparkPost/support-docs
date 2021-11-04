---
lastUpdated: "03/26/2020"
title: "ec_ptr_array_destroy"
description: "ec ptr array destroy Destroy an ec ptr array void ec ptr array destroy array ec ptr array array Destroy an ec ptr array created using ec ptr array init array A pointer array See ec ptr array This function returns void It is legal to call this function in..."
---

<a name="apis.ec_ptr_array_destroy"></a> 
## Name

ec_ptr_array_destroy — Destroy an ec_ptr_array

## Synopsis

`#include "misc/ec_ptr_array.h"`

| `void **ec_ptr_array_destroy** (` | <var class="pdparam">array</var>`)`; |   |

`ec_ptr_array * <var class="pdparam">array</var>`;<a name="idp58211456"></a> 
## Description

Destroy an ec_ptr_array created using [ec_ptr_array_init](/momentum/3/3-api/apis-ec-ptr-array-init).

**<a name="idp58213392"></a> Parameters**

<dl class="variablelist">

<dt>array</dt>

<dd>

A pointer array. See [ec_ptr_array](/momentum/3/3-api/structs-ec-ptr-array).

</dd>

</dl>

**<a name="idp58216848"></a> Return Values**

This function returns void.

**<a name="idp58217760"></a> Threading**

It is legal to call this function in any thread.

### Note

While you can use the pointer array functions in any thread, they are not thread safe so use them with caution.

<a name="idp58220192"></a> 
## See Also

[“ec_ptr_array”](/momentum/3/3-api/structs-ec-ptr-array)