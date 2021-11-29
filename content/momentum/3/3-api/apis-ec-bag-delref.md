---
lastUpdated: "03/26/2020"
title: "ec_bag_delref"
description: "ec bag delref Delete a reference to the specified bag void ec bag delref bag ec bag bag Delete a reference to a bag created using ec bag create bag The bag you wish to delete This function returns void It is legal to call this function in any thread..."
---

<a name="apis.ec_bag_delref"></a> 
## Name

ec_bag_delref — Delete a reference to the specified bag

## Synopsis

`#include "ec_boh.h"`

| `void **ec_bag_delref** (` | <var class="pdparam">bag</var>`)`; |   |

`ec_bag * <var class="pdparam">bag</var>`;<a name="idp47309648"></a> 
## Description

Delete a reference to a bag created using [ec_bag_create](/momentum/3/3-api/apis-ec-bag-create).

**<a name="idp47311584"></a> Parameters**

<dl class="variablelist">

<dt>bag</dt>

<dd>

The bag you wish to delete.

</dd>

</dl>

**<a name="idp47314304"></a> Return Value**

This function returns void.

**<a name="idp47315216"></a> Threading**

It is legal to call this function in any thread.