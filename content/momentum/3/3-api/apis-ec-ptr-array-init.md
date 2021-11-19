---
lastUpdated: "03/26/2020"
title: "ec_ptr_array_init"
description: "ec ptr array init Initialize an ec ptr array struct int ec ptr array init array prealloc size free func ec ptr array array int prealloc size ec ptr array free func free func Initialize an ec ptr array struct array A pointer array See ec ptr array prealloc size..."
---

<a name="apis.ec_ptr_array_init"></a> 
## Name

ec_ptr_array_init — Initialize an ec_ptr_array struct

## Synopsis

`#include "misc/ec_ptr_array.h"`

| `(int) **ec_ptr_array_init** (` | <var class="pdparam">array</var>, |   |
|   | <var class="pdparam">prealloc_size</var>, |   |
|   | <var class="pdparam">free_func</var>`)`; |   |

`ec_ptr_array * <var class="pdparam">array</var>`;
`int <var class="pdparam">prealloc_size</var>`;
`ec_ptr_array_free_func <var class="pdparam">free_func</var>`;<a name="idp58246416"></a> 
## Description

Initialize an ec_ptr_array struct.

**<a name="idp58247632"></a> Parameters**

<dl class="variablelist">

<dt>array</dt>

<dd>

A pointer array. See [ec_ptr_array](/momentum/3/3-api/structs-ec-ptr-array).

</dd>

<dt>prealloc_size</dt>

<dd>

If this value is less than `EC_PTR_ARRAY_DEFAULT_PREALLOC` (16), it will be set to `EC_PTR_ARRAY_DEFAULT_PREALLOC`.

</dd>

<dt>ec_ptr_array_free_func</dt>

<dd>

Register a function used to free the elements added to the array.

</dd>

</dl>

**<a name="idp58255792"></a> Return Values**

On success this function returns `1`; on failure `0`.

**<a name="idp58257616"></a> Threading**

It is legal to call this function in any thread.

### Note

While you can use the pointer array functions in any thread, they are not thread safe so use them with caution.

<a name="idp58260048"></a> 
## See Also

[“ec_ptr_array”](/momentum/3/3-api/structs-ec-ptr-array)