---
lastUpdated: "03/26/2020"
title: "ec_double_list_destroy"
description: "ec double list destroy Destroy a list void ec double list destroy list ec double list list Destroy a list Note This does not free the data pointers list The list to destroy This function returns void It is legal to call this function in any thread Section 68 29..."
---

<a name="apis.ec_double_list_destroy"></a> 
## Name

ec_double_list_destroy — Destroy a list

## Synopsis

`#include "misc/ec_double_list.h"`

| `void **ec_double_list_destroy** (` | <var class="pdparam">list</var>`)`; |   |

`ec_double_list * <var class="pdparam">list</var>`;<a name="idp51007600"></a> 
## Description

Destroy a list. *Note*: This does not free the data pointers.

**<a name="idp51009264"></a> Parameters**

<dl class="variablelist">

<dt>list</dt>

<dd>

The list to destroy.

</dd>

</dl>

**<a name="idp51012000"></a> Return Value**

This function returns void.

**<a name="idp51012912"></a> Threading**

It is legal to call this function in any thread.

<a name="idp51014016"></a> 
## See Also

[“ec_double_list”](/momentum/3/3-api/structs-ec-double-list) and [ec_double_list_init](/momentum/3/3-api/apis-ec-double-list-init)