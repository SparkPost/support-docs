---
lastUpdated: "03/26/2020"
title: "smpp_decode_integer"
description: "smpp decode integer Decode an octet string into integer long smpp decode integer os pos octets string os long pos int octets Configuration Change This feature is available starting from Momentum 3 2 Decode an octet string into integer pos is the offset of the beginning of the octet string..."
---

<a name="apis.smpp_decode_integer"></a> 
## Name

smpp_decode_integer — Decode an octet string into integer

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `long **smpp_decode_integer** (` | <var class="pdparam">os</var>, |   |
|   | <var class="pdparam">pos</var>, |   |
|   | <var class="pdparam">octets</var>`)`; |   |

`string * <var class="pdparam">os</var>`;
`long <var class="pdparam">pos</var>`;
`int <var class="pdparam">octets</var>`;<a name="idp61263360"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Decode an octet string into integer. `pos` is the offset of the beginning of the octet string in string `os`. `octets` is the length of the data.

**<a name="idp61267664"></a> Parameters**

<dl class="variablelist">

<dt>os</dt>

<dd>

The input string holding the octet string.

</dd>

<dt>pos</dt>

<dd>

The offset of the octet string to be decoded.

</dd>

<dt>octets</dt>

<dd>

The length of the octet string to be decoded.

</dd>

</dl>

**<a name="idp61274096"></a> Return Values**

The integer (long) decoded value.

**<a name="idp61275024"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61276128"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)