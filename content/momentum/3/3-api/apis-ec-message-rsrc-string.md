---
lastUpdated: "03/26/2020"
title: "ec_message_rsrc_string"
description: "ec message rsrc string Returns a string representation of the resources associated with the message void ec message rsrc string message response flags ec message message string response int flags This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.ec_message_rsrc_string"></a> 
## Name

ec_message_rsrc_string — Returns a string representation of the resources associated with the message

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_rsrc_string** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">response</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`string * <var class="pdparam">response</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp56950432"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Returns a string representation of the resources associated with the message.

**<a name="idp56953344"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

the message to enumerate resources from

</dd>

<dt>response</dt>

<dd>

the string to store the conversion into

</dd>

<dt>flags</dt>

<dd>

conversion flags

</dd>

</dl>