---
lastUpdated: "03/26/2020"
title: "smpp_append_encoded_integer"
description: "smpp append encoded integer Encode an integer into an octet string void smpp append encoded integer os u octets string os unsigned long u long octets Configuration Change This feature is available starting from Momentum 3 2 Encode an integer into an octet string os The input octet string u..."
---

<a name="apis.smpp_append_encoded_integer"></a> 
## Name

smpp_append_encoded_integer — Encode an integer into an octet string

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `void **smpp_append_encoded_integer** (` | <var class="pdparam">os</var>, |   |
|   | <var class="pdparam">u</var>, |   |
|   | <var class="pdparam">octets</var>`)`; |   |

`string * <var class="pdparam">os</var>`;
`unsigned long <var class="pdparam">u</var>`;
`long <var class="pdparam">octets</var>`;<a name="idp61158096"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Encode an integer into an octet string.

**<a name="idp61160976"></a> Parameters**

<dl class="variablelist">

<dt>os</dt>

<dd>

The input octet string.

</dd>

<dt>u</dt>

<dd>

The value of the integer.

</dd>

<dt>octets</dt>

<dd>

The length of the octet string after encoding.

</dd>

</dl>

**<a name="idp61167376"></a> Return Values**

This function returns void.

**<a name="idp61168288"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61169392"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)