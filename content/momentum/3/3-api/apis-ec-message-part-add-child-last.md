---
lastUpdated: "03/26/2020"
title: "ec_message_part_add_child_last"
description: "ec message part add child last Add part as the last child of another part int ec message part add child last parent child ec message part parent ec message part child This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.ec_message_part_add_child_last"></a> 
## Name

ec_message_part_add_child_last — Add part as the last child of another part

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_part_add_child_last** (` | <var class="pdparam">parent</var>, |   |
|   | <var class="pdparam">child</var>`)`; |   |

`ec_message_part * <var class="pdparam">parent</var>`;
`ec_message_part * <var class="pdparam">child</var>`;<a name="idp56162176"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Add part as the last child of another part.

parent must be a valid container type with a valid boundary string.

Adds child as the last child part of the parent part.

**<a name="idp56166048"></a> Parameters**

<dl class="variablelist">

<dt>parent</dt>

<dd>

the parent part

</dd>

<dt>child</dt>

<dd>

the part that will become a child

</dd>

</dl>

**<a name="idp56170624"></a> Return Values**

0 on failure, 1 on success.

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.