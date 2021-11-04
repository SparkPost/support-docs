---
lastUpdated: "03/26/2020"
title: "ec_double_list_unshift"
description: "ec double list unshift prepends an item to the head of the list void ec double list unshift list data ec double list list void data This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.ec_double_list_unshift"></a> 
## Name

ec_double_list_unshift — prepends an item to the head of the list

## Synopsis

`#include "misc/ec_double_list.h"`

| `void **ec_double_list_unshift** (` | <var class="pdparam">list</var>, |   |
|   | <var class="pdparam">data</var>`)`; |   |

`ec_double_list * <var class="pdparam">list</var>`;
`void * <var class="pdparam">data</var>`;<a name="idp51112224"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

prepends an item to the head of the list

**<a name="idp51115088"></a> Parameters**

<dl class="variablelist">

<dt>list</dt>

<dd>

the list

</dd>

<dt>data</dt>

<dd>

the data that will be the new head

</dd>

</dl>