---
lastUpdated: "03/26/2020"
title: "ec_message_part_insert_before"
description: "ec message part insert before Insert a part ahead of another part int ec message part insert before toinsert insert before ec message part toinsert ec message part insert before This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.ec_message_part_insert_before"></a> 
## Name

ec_message_part_insert_before — Insert a part ahead of another part

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_part_insert_before** (` | <var class="pdparam">toinsert</var>, |   |
|   | <var class="pdparam">insert_before</var>`)`; |   |

`ec_message_part * <var class="pdparam">toinsert</var>`;
`ec_message_part * <var class="pdparam">insert_before</var>`;<a name="idp56442192"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Insert a part ahead of another part.

Determines the predecessor of the "insert_before" part, and inserts "toinsert" after it.

The insert operation will update the various part links in the mime tree, which may result in references being added to parts.

The insert may fail if the mime tree is invalid.

**<a name="idp56446672"></a> Parameters**

<dl class="variablelist">

<dt>toinsert</dt>

<dd>

the part being inserted

</dd>

<dt>insert_before</dt>

<dd>

the part which will become the successor to "toinsert"

</dd>

</dl>

**<a name="idp56451296"></a> Return Values**

0 on failure, 1 on success.

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.