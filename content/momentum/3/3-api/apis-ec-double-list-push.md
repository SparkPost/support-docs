---
lastUpdated: "03/26/2020"
title: "ec_double_list_push"
description: "ec double list push Push an item to the tail of the list void ec double list push list data ec double list list void data Push an item to the tail of the list list The list data The data that will be the new tail It is legal..."
---

<a name="apis.ec_double_list_push"></a> 
## Name

ec_double_list_push — Push an item to the tail of the list

## Synopsis

`#include "misc/ec_double_list.h"`

| `void **ec_double_list_push** (` | <var class="pdparam">list</var>, |   |
|   | <var class="pdparam">data</var>`)`; |   |

`ec_double_list * <var class="pdparam">list</var>`;
`void * <var class="pdparam">data</var>`;<a name="idp51060224"></a> 
## Description

Push an item to the tail of the list.

**<a name="idp51061440"></a> Parameters**

<dl class="variablelist">

<dt>list</dt>

<dd>

The list.

</dd>

<dt>data</dt>

<dd>

The data that will be the new tail.

</dd>

</dl>

**<a name="idp51066016"></a> Threading**

It is legal to call this function in any thread.

<a name="idp51067120"></a> 
## See Also

[“ec_double_list”](/momentum/3/3-api/structs-ec-double-list) and [ec_double_list_init](/momentum/3/3-api/apis-ec-double-list-init)