---
lastUpdated: "03/26/2020"
title: "ec_parse_rfc3464_delivery_status"
description: "ec parse rfc 3464 delivery status Parses an rfc 3464 dsn into its attributes recorded into a EC Dict int ec parse rfc 3464 delivery status mess fields ec message mess EC Dict fields This reference page was automatically generated from functions found in the header files in the development..."
---

<a name="apis.ec_parse_rfc3464_delivery_status"></a> 
## Name

ec_parse_rfc3464_delivery_status — Parses an rfc3464 dsn into its attributes, recorded into a ECDict

## Synopsis

`#include "soft_bounce.h"`

| `int **ec_parse_rfc3464_delivery_status** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">fields</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`ECDict * <var class="pdparam">fields</var>`;<a name="idp58384784"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Parses an rfc3464 dsn into its attributes, recorded into a ECDict.

On success fields is allocated and must be freed by the caller.

**<a name="idp58388192"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

- MDN mail.

</dd>

<dt>fields</dt>

<dd>

- Hash table of header/value pairs. Caller must drop this hash table.

</dd>

</dl>

**<a name="idp58393104"></a> Return Values**

1 if message is an RFC 3464 DSN, otherwise 0.