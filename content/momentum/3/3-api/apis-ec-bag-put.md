---
lastUpdated: "03/26/2020"
title: "ec_bag_put"
description: "ec bag put Put something in the specified bag int ec bag put bag typedname thing ec bag bag const char typedname void thing Put something in the bag bag The ec bag typedname The name of the data type that we are placing in the bag For an explanation..."
---

<a name="apis.ec_bag_put"></a> 
## Name

ec_bag_put — Put something in the specified bag

## Synopsis

`#include "ec_boh.h"`

| `int **ec_bag_put** (` | <var class="pdparam">bag</var>, |   |
|   | <var class="pdparam">typedname</var>, |   |
|   | <var class="pdparam">thing</var>`)`; |   |

`ec_bag * <var class="pdparam">bag</var>`;
`const char * <var class="pdparam">typedname</var>`;
`void * <var class="pdparam">thing</var>`;<a name="idp47380624"></a> 
## Description

Put something in the bag.

**<a name="idp47381824"></a> Parameters**

<dl class="variablelist">

<dt>bag</dt>

<dd>

The ec_bag.

</dd>

<dt>typedname</dt>

<dd>

The name of the data type that we are placing in the bag. For an explanation of this seemingly redundant parameter see [ec_bag_find](/momentum/3/3-api/apis-ec-bag-find).

</dd>

<dt>thing</dt>

<dd>

The item being placed in the bag.

</dd>

</dl>

**<a name="idp47389056"></a> Return Value**

On success, this function returns `1`.

**<a name="idp47390432"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47391536"></a> 
## See Also

[ec_bag_create](/momentum/3/3-api/apis-ec-bag-create)