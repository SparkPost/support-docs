---
lastUpdated: "03/26/2020"
title: "ec_double_list_pop"
description: "ec double list pop pops an item from the tail of the list void ec double list pop list ec double list list This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available..."
---

<a name="apis.ec_double_list_pop"></a> 
## Name

ec_double_list_pop — pops an item from the tail of the list

## Synopsis

`#include "misc/ec_double_list.h"`

| `void * **ec_double_list_pop** (` | <var class="pdparam">list</var>`)`; |   |

`ec_double_list * <var class="pdparam">list</var>`;<a name="idp51044752"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

pops an item from the tail of the list

**<a name="idp51047616"></a> Parameters**

<dl class="variablelist">

<dt>list</dt>

<dd>

the list

</dd>

</dl>

**<a name="idp51050336"></a> Return Values**

the data associated with the tail, or NULL if the list is empty