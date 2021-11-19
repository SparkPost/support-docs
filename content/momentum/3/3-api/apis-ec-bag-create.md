---
lastUpdated: "03/26/2020"
title: "ec_bag_create"
description: "ec bag create Create a bag ec bag ec bag create void Create a bag Use ec bag delref to destroy a bag created using this function No parameters are passed to this function This function returns an ec bag It is legal to call this function in any thread..."
---

<a name="apis.ec_bag_create"></a> 
## Name

ec_bag_create — Create a bag

## Synopsis

`#include "ec_boh.h"`

| `ec_bag * **ec_bag_create** (` | <var class="pdparam"></var>`)`; |   |

`void<var class="pdparam"></var>`;<a name="idp47294688"></a> 
## Description

Create a bag. Use [ec_bag_delref](/momentum/3/3-api/apis-ec-bag-delref) to destroy a bag created using this function.

**<a name="idp47296656"></a> Parameters**

No parameters are passed to this function.

**<a name="idp47297584"></a> Return Value**

This function returns an ec_bag.

**<a name="idp47298512"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47299616"></a> 
## See Also

[“ec_bag”](/momentum/3/3-api/structs-ec-bag)