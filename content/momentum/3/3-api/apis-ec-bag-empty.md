---
lastUpdated: "03/26/2020"
title: "ec_bag_empty"
description: "ec bag empty Empty a bag void ec bag empty bag ec bag bag Empty a bag bag The ec bag This function returns void It is legal to call this function in any thread..."
---

<a name="apis.ec_bag_empty"></a> 
## Name

ec_bag_empty — Empty a bag

## Synopsis

`#include "ec_boh.h"`

| `void **ec_bag_empty** (` | <var class="pdparam">bag</var>`)`; |   |

`ec_bag * <var class="pdparam">bag</var>`;<a name="idp47324464"></a> 
## Description

Empty a bag.

**<a name="idp47325664"></a> Parameters**

<dl class="variablelist">

<dt>bag</dt>

<dd>

The [ec_bag](/momentum/3/3-api/structs-ec-bag).

</dd>

</dl>

**<a name="idp47329072"></a> Return Values**

This function returns void.

**<a name="idp47329984"></a> Threading**

It is legal to call this function in any thread.