---
lastUpdated: "03/26/2020"
title: "ec_bag_remove"
description: "ec bag remove Remove the specified data type from a bag void ec bag remove bag typedname ec bag bag const char typedname Remove the specified data type from a bag bag The ec bag typedname The data type that you wish to remove for example int This function returns..."
---

<a name="apis.ec_bag_remove"></a> 
## Name

ec_bag_remove — Remove the specified data type from a bag

## Synopsis

`#include "ec_boh.h"`

| `void * **ec_bag_remove** (` | <var class="pdparam">bag</var>, |   |
|   | <var class="pdparam">typedname</var>`)`; |   |

`ec_bag * <var class="pdparam">bag</var>`;
`const char * <var class="pdparam">typedname</var>`;<a name="idp47402352"></a> 
## Description

Remove the specified data type from a bag.

**<a name="idp47403568"></a> Parameters**

<dl class="variablelist">

<dt>bag</dt>

<dd>

The [ec_bag](/momentum/3/3-api/structs-ec-bag).

</dd>

<dt>typedname</dt>

<dd>

The data type that you wish to remove, for example `int`.

</dd>

</dl>

**<a name="idp47409296"></a> Return Values**

This function returns a void pointer.

**<a name="idp47410224"></a> Threading**

It is legal to call this function in any thread.