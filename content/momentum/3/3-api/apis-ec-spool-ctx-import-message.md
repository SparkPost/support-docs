---
lastUpdated: "03/26/2020"
title: "ec_spool_ctx_import_message"
description: "ec spool ctx import message import a message from a spool context into the system spool int ec spool ctx import message src id ec spool ctx src message id id This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.ec_spool_ctx_import_message"></a> 
## Name

ec_spool_ctx_import_message — import a message from a spool context into the system spool

## Synopsis

`#include "spool.h"`

| `int **ec_spool_ctx_import_message** (` | <var class="pdparam">src</var>, |   |
|   | <var class="pdparam">id</var>`)`; |   |

`ec_spool_ctx * <var class="pdparam">src</var>`;
`message_id * <var class="pdparam">id</var>`;<a name="idp62361776"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

import a message from a spool context into the system spool.

The import will try to preserve the message id if possible, or re-generate if it would conflict with something else already in the system.

**<a name="idp62365264"></a> Parameters**

<dl class="variablelist">

<dt>src</dt>

<dd>

the spool from which to import the message

</dd>

<dt>id</dt>

<dd>

the id of the message within the src context

</dd>

</dl>