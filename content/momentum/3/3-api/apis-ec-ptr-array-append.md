---
lastUpdated: "03/26/2020"
title: "ec_ptr_array_append"
description: "ec ptr array append Append to an ec ptr array int ec ptr array append array element ec ptr array array void element Append an item to an ec ptr array array An ec ptr array See ec ptr array element The pointer that you wish to append On success..."
---

<a name="apis.ec_ptr_array_append"></a> 
## Name

ec_ptr_array_append — Append to an ec_ptr_array

## Synopsis

`#include "misc/ec_ptr_array.h"`

| `int **ec_ptr_array_append** (` | <var class="pdparam">array</var>, |   |
|   | <var class="pdparam">element</var>`)`; |   |

`ec_ptr_array * <var class="pdparam">array</var>`;
`void * <var class="pdparam">element</var>`;<a name="idp58190944"></a> 
## Description

Append an item to an ec_ptr_array.

**<a name="idp58192160"></a> Parameters**

<dl class="variablelist">

<dt>array</dt>

<dd>

An ec_ptr_array. See [ec_ptr_array](/momentum/3/3-api/structs-ec-ptr-array).

</dd>

<dt>element</dt>

<dd>

The pointer that you wish to append.

</dd>

</dl>

**<a name="idp58197472"></a> Return Values**

On success this function returns the index of the appended item. On failure, `-1` is returned.

**<a name="idp58198896"></a> Threading**

It is legal to call this function in any thread.

### Note

While you can use the pointer array functions in any thread, they are not thread safe so use them with caution.

<a name="idp58201328"></a> 
## See Also

[“ec_ptr_array”](/momentum/3/3-api/structs-ec-ptr-array)