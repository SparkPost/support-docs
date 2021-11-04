---
lastUpdated: "03/26/2020"
title: "mid_to_string"
description: "mid to string format a message id as a human readable string int mid to string mid str message id mid string str This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available..."
---

<a name="apis.mid_to_string"></a> 
## Name

mid_to_string — format a message_id as a human readable string

## Synopsis

`#include "spool.h"`

| `int **mid_to_string** (` | <var class="pdparam">mid</var>, |   |
|   | <var class="pdparam">str</var>`)`; |   |

`message_id * <var class="pdparam">mid</var>`;
`string * <var class="pdparam">str</var>`;<a name="idp64143376"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

format a message_id as a human readable string

**<a name="idp64146256"></a> Parameters**

<dl class="variablelist">

<dt>mid</dt>

<dd>

the message_id

</dd>

<dt>str</dt>

<dd>

the string

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.0.17.