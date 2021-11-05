---
lastUpdated: "03/26/2020"
title: "ec_double_list_shift"
description: "ec double list shift Shift the head of the list off the list void ec double list shift list ec double list list Shifts the head of the list off the list list The list This function returns the data associated with the head or NULL if the list is..."
---

<a name="apis.ec_double_list_shift"></a> 
## Name

ec_double_list_shift — Shift the head of the list off the list

## Synopsis

`#include "misc/ec_double_list.h"`

| `void * **ec_double_list_shift** (` | <var class="pdparam">list</var>`)`; |   |

`ec_double_list * <var class="pdparam">list</var>`;<a name="idp51094256"></a> 
## Description

Shifts the head of the list off the list.

**<a name="idp51095472"></a> Parameters**

<dl class="variablelist">

<dt>list</dt>

<dd>

The list.

</dd>

</dl>

**<a name="idp51098192"></a> Return Values**

This function returns the data associated with the head, or `NULL` if the list is empty.

**<a name="idp51099616"></a> Threading**

It is legal to call this function in any thread.

<a name="idp51100720"></a> 
## See Also

[“ec_double_list”](/momentum/3/3-api/structs-ec-double-list) and [ec_double_list_init](/momentum/3/3-api/apis-ec-double-list-init)