---
lastUpdated: "03/26/2020"
title: "ec_double_list_apply"
description: "ec double list apply apply a callback function to each element in the list void ec double list apply list f udata ec double list list EC List Apply Func f void udata This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis.ec_double_list_apply"></a> 
## Name

ec_double_list_apply — apply a callback function to each element in the list

## Synopsis

`#include "misc/ec_double_list.h"`

| `void **ec_double_list_apply** (` | <var class="pdparam">list</var>, |   |
|   | <var class="pdparam">f</var>, |   |
|   | <var class="pdparam">udata</var>`)`; |   |

`ec_double_list * <var class="pdparam">list</var>`;
`ECListApplyFunc <var class="pdparam">f</var>`;
`void * <var class="pdparam">udata</var>`;<a name="idp50989536"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

apply a callback function to each element in the list

Calls f on all elements of the list If f(data) returns non-zero, the element is removed from the list

**<a name="idp50992960"></a> Parameters**

<dl class="variablelist">

<dt>list</dt>

<dd>

the list

</dd>

<dt>f</dt>

<dd>

the callback function

</dd>

<dt>udata</dt>

<dd>

the parameter to pass to the callback function

</dd>

</dl>