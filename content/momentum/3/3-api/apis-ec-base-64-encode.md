---
lastUpdated: "03/26/2020"
title: "ec_base64_encode"
description: "ec base 64 encode Perform Base 64 encoding of a string int ec base 64 encode src src len dest dest len const char src int src len const char dest int dest len Perform Base 64 encoding of a string src The buffer containing the string to Base 64..."
---

<a name="apis.ec_base64_encode"></a> 
## Name

ec_base64_encode — Perform Base64 encoding of a string

## Synopsis

`#include "util.h"`

| `int **ec_base64_encode** (` | <var class="pdparam">src</var>, |   |
|   | <var class="pdparam">src_len</var>, |   |
|   | <var class="pdparam">dest</var>, |   |
|   | <var class="pdparam">dest_len</var>`)`; |   |

`const char * <var class="pdparam">src</var>`;
`int <var class="pdparam">src_len</var>`;
`const char * <var class="pdparam">dest</var>`;
`int <var class="pdparam">dest_len</var>`;<a name="idp47466800"></a> 
## Description

Perform Base64 encoding of a string.

**<a name="idp47468016"></a> Parameters**

<dl class="variablelist">

<dt>src</dt>

<dd>

The buffer containing the string to Base64 encode.

</dd>

<dt>src_len</dt>

<dd>

The length of the string to encode.

</dd>

<dt>dest</dt>

<dd>

The buffer to store the resultant Base64 encoded string.

</dd>

<dt>dest_len</dt>

<dd>

The length of the buffer.

</dd>

</dl>

**<a name="idp47476336"></a> Return Values**

This function returns the number of bytes required in the encoding of the string. If the buffer size determined by `dest_len` is shorter than what is needed to encode the `src` string then `0` is returned.

**<a name="idp47478736"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47479840"></a> 
## See Also

[ec_base64_decode](/momentum/3/3-api/apis-ec-base-64-decode), [ec_base64_encode_space](/momentum/3/3-api/apis-ec-base-64-encode-space), and [ec_base64_decode_space](/momentum/3/3-api/apis-ec-base-64-decode-space).