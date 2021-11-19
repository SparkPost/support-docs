---
lastUpdated: "03/26/2020"
title: "ec_double_list_init"
description: "ec double list init Initialize a new list int ec double list init list ts ec double list list int ts Initialize a new double linked list list The list to be initialized ts If non zero enables the internal mutex lock On success this function returns 0 on failure..."
---

<a name="apis.ec_double_list_init"></a> 
## Name

ec_double_list_init — Initialize a new list

## Synopsis

`#include "misc/ec_double_list.h"`

| `int **ec_double_list_init** (` | <var class="pdparam">list</var>, |   |
|   | <var class="pdparam">ts</var>`)`; |   |

`ec_double_list * <var class="pdparam">list</var>`;
`int <var class="pdparam">ts</var>`;<a name="idp51025312"></a> 
## Description

Initialize a new double linked list.

**<a name="idp51026528"></a> Parameters**

<dl class="variablelist">

<dt>list</dt>

<dd>

The list to be initialized.

</dd>

<dt>ts</dt>

<dd>

If non-zero, enables the internal mutex lock.

</dd>

</dl>

**<a name="idp51031104"></a> Return Value**

On success, this function returns `0`; on failure `-1` is returned.

**<a name="idp51032928"></a> Threading**

It is legal to call this function in any thread.

<a name="idp51034032"></a> 
## See Also

[“ec_double_list”](/momentum/3/3-api/structs-ec-double-list) and [ec_double_list_destroy](/momentum/3/3-api/apis-ec-double-list-destroy)