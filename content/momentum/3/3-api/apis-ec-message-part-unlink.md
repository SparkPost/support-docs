---
lastUpdated: "03/26/2020"
title: "ec_message_part_unlink"
description: "ec message part unlink Unlink part from the mime tree void ec message part unlink part ec message part part This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum..."
---

<a name="apis.ec_message_part_unlink"></a> 
## Name

ec_message_part_unlink — Unlink part from the mime tree

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_part_unlink** (` | <var class="pdparam">part</var>`)`; |   |

`ec_message_part * <var class="pdparam">part</var>`;<a name="idp56494432"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Unlink part from the mime tree.

Removes part from the mime tree, releasing references held by the tree.

If you do not own a reference of your own on part, you should assume that it has been freed.

**<a name="idp56498368"></a> Parameters**

<dl class="variablelist">

<dt>part</dt>

<dd>

the part to remove from its respective tree

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.