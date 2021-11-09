---
lastUpdated: "03/26/2020"
title: "ec_message_part_insert_after"
description: "ec message part insert after Insert a part after another part int ec message part insert after toinsert insert after ec message part toinsert ec message part insert after This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_message_part_insert_after"></a> 
## Name

ec_message_part_insert_after — Insert a part after another part

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_part_insert_after** (` | <var class="pdparam">toinsert</var>, |   |
|   | <var class="pdparam">insert_after</var>`)`; |   |

`ec_message_part * <var class="pdparam">toinsert</var>`;
`ec_message_part * <var class="pdparam">insert_after</var>`;<a name="idp56421296"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Insert a part after another part.

Inserts "toinsert" as a successor to "insert_after".

The insert operation will update the various part links in the mime tree, which may result in references being added to parts.

The insert may fail if the mime tree is invalid.

**<a name="idp56425728"></a> Parameters**

<dl class="variablelist">

<dt>toinsert</dt>

<dd>

the part being inserted

</dd>

<dt>insert_after</dt>

<dd>

the part which will become the predecessor of "toinsert"

</dd>

</dl>

**<a name="idp56430352"></a> Return Values**

0 on failure, 1 on success.

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.