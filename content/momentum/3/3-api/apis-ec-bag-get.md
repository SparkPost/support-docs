---
lastUpdated: "03/26/2020"
title: "ec_bag_get"
description: "ec bag get Get a specific data type out of a bag void ec bag get bag typedname ec bag bag const char typedname Get a specific data type out of a bag bag The ec bag typedname The data type that you wish to retrieve for example int This..."
---

<a name="apis.ec_bag_get"></a> 
## Name

ec_bag_get — Get a specific data type out of a bag

## Synopsis

`#include "ec_boh.h"`

| `void * **ec_bag_get** (` | <var class="pdparam">bag</var>, |   |
|   | <var class="pdparam">typedname</var>`)`; |   |

`ec_bag * <var class="pdparam">bag</var>`;
`const char * <var class="pdparam">typedname</var>`;<a name="idp47362192"></a> 
## Description

Get a specific data type out of a bag.

**<a name="idp47363408"></a> Parameters**

<dl class="variablelist">

<dt>bag</dt>

<dd>

The [ec_bag](/momentum/3/3-api/structs-ec-bag).

</dd>

<dt>typedname</dt>

<dd>

The data type that you wish to retrieve, for example `int`.

</dd>

</dl>

**<a name="idp47369136"></a> Return Values**

This function returns a void pointer.

**<a name="idp47370064"></a> Threading**

It is legal to call this function in any thread.