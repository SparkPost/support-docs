---
lastUpdated: "03/26/2020"
title: "ec_base64_decode"
description: "ec base 64 decode Perform Base 64 decoding of a string int ec base 64 decode src src len dest dest len const char src int src len const char dest int dest len Perform Base 64 decoding of a string src The buffer containing the Base 64 string to..."
---

<a name="apis.ec_base64_decode"></a> 
## Name

ec_base64_decode — Perform Base64 decoding of a string

## Synopsis

`#include "util.h"`

| `int **ec_base64_decode** (` | <var class="pdparam">src</var>, |   |
|   | <var class="pdparam">src_len</var>, |   |
|   | <var class="pdparam">dest</var>, |   |
|   | <var class="pdparam">dest_len</var>`)`; |   |

`const char * <var class="pdparam">src</var>`;
`int <var class="pdparam">src_len</var>`;
`const char * <var class="pdparam">dest</var>`;
`int <var class="pdparam">dest_len</var>`;<a name="idp47423024"></a> 
## Description

Perform Base64 decoding of a string.

**<a name="idp47424240"></a> Parameters**

<dl class="variablelist">

<dt>src</dt>

<dd>

The buffer containing the Base64 string to decode.

</dd>

<dt>src_len</dt>

<dd>

The buffer length of the string to decode.

</dd>

<dt>dest</dt>

<dd>

The buffer to store the resultant decoded string.

</dd>

<dt>dest_len</dt>

<dd>

The length of the buffer.

</dd>

</dl>

**<a name="idp47432560"></a> Return Values**

This function returns the number of bytes used in the decoded string. If the buffer size determined by `dest_len` is shorter than what is needed to decode the `src` string, then `0` is returned.

**<a name="idp47434944"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47436048"></a> 
## See Also

[ec_base64_encode](/momentum/3/3-api/apis-ec-base-64-encode), [ec_base64_encode_space](/momentum/3/3-api/apis-ec-base-64-encode-space), and [ec_base64_decode_space](/momentum/3/3-api/apis-ec-base-64-decode-space).