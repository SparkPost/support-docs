---
lastUpdated: "03/26/2020"
title: "ec_generate_connection_id"
description: "ec generate connection id Generate a connection ID void ec generate connection id cid nowsec message id cid time t nowsec This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of..."
---

<a name="apis.ec_generate_connection_id"></a> 
## Name

ec_generate_connection_id — Generate a connection ID

## Synopsis

`#include "netlistener.h"`

| `void **ec_generate_connection_id** (` | <var class="pdparam">cid</var>, |   |
|   | <var class="pdparam">nowsec</var>`)`; |   |

`message_id * <var class="pdparam">cid</var>`;
`time_t <var class="pdparam">nowsec</var>`;<a name="idp49030576"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Generate a connection ID.

**<a name="idp49033424"></a> Parameters**

<dl class="variablelist">

<dt>cid</dt>

<dd>

The connection ID.

</dd>

<dt>nowsec</dt>

<dd>

Unix timestamp in seconds to use for this connection ID.

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.1-4.