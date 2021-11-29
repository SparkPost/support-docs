---
lastUpdated: "03/26/2020"
title: "ec_bag_addref"
description: "ec bag addref Add a reference to a bag ec bag ec bag addref bag ec bag bag Add a reference to the bag bag The ec bag This function returns a reference to an ec bag It is legal to call this function in any thread..."
---

<a name="apis.ec_bag_addref"></a> 
## Name

ec_bag_addref — Add a reference to a bag

## Synopsis

`#include "ec_boh.h"`

| `ec_bag * **ec_bag_addref** (` | <var class="pdparam">bag</var>`)`; |   |

`ec_bag * <var class="pdparam">bag</var>`;<a name="idp47280080"></a> 
## Description

Add a reference to the bag.

**<a name="idp47281280"></a> Parameters**

<dl class="variablelist">

<dt>bag</dt>

<dd>

The ec_bag.

</dd>

</dl>

**<a name="idp47283984"></a> Return Values**

This function returns a reference to an [ec_bag](/momentum/3/3-api/structs-ec-bag).

**<a name="idp47285632"></a> Threading**

It is legal to call this function in any thread.