---
lastUpdated: "03/26/2020"
title: "ec_base64_encode_to_string"
description: "ec base 64 encode to string Apply base 64 encoding to a string and store the result to an ec string where the previous content will be replaced int ec base 64 encode to string src src len deststring fold const char src size t src len string deststring int..."
---

<a name="apis.ec_base64_encode_to_string"></a> 
## Name

ec_base64_encode_to_string — Apply base64 encoding to a string and store the result to an ec_string where the previous content will be replaced

## Synopsis

`#include "util.h"`

| `int **ec_base64_encode_to_string** (` | <var class="pdparam">src</var>, |   |
|   | <var class="pdparam">src_len</var>, |   |
|   | <var class="pdparam">deststring</var>, |   |
|   | <var class="pdparam">fold</var>`)`; |   |

`const char * <var class="pdparam">src</var>`;
`size_t <var class="pdparam">src_len</var>`;
`string * <var class="pdparam">deststring</var>`;
`int <var class="pdparam">fold</var>`;<a name="idp47530304"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Apply base64 encoding to a string and store the result to an ec_string where the previous content will be replaced.

**<a name="idp47533248"></a> Parameters**

<dl class="variablelist">

<dt>src</dt>

<dd>

the buffer to encode

</dd>

<dt>src_len</dt>

<dd>

the size of the buffer to encode

</dd>

<dt>deststring</dt>

<dd>

the destination for the encoded result

</dd>

<dt>fold</dt>

<dd>

if true, the encoded line will be folded so each line will not exceed 76 chars.

</dd>

</dl>