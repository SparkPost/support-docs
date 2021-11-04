---
lastUpdated: "03/26/2020"
title: "ec_spool_ctx_spool_in"
description: "ec spool ctx spool in spool in a message with a given id from a spool context ec message ec spool ctx spool in ctx id ec spool ctx ctx message id id This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis.ec_spool_ctx_spool_in"></a> 
## Name

ec_spool_ctx_spool_in — spool in a message with a given id, from a spool context

## Synopsis

`#include "spool.h"`

| `ec_message * **ec_spool_ctx_spool_in** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">id</var>`)`; |   |

`ec_spool_ctx * <var class="pdparam">ctx</var>`;
`message_id * <var class="pdparam">id</var>`;<a name="idp62464832"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

spool in a message with a given id, from a spool context

This does not add the message to any other data structure; it reads in the message with the specified id and returns it.

**<a name="idp62468288"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

the spool context

</dd>

<dt>id</dt>

<dd>

the message to pull in

</dd>

</dl>

**<a name="idp62472832"></a> Return Values**

Returns the message, or NULL if there was an error.