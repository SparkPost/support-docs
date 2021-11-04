---
lastUpdated: "03/26/2020"
title: "ec_base64_encode_string_to_string"
description: "ec base 64 encode string to string Apply base 64 encoding to an ec string and store the result to another ec string where the previous content will be replaced int ec base 64 encode string to string srcstring deststring fold string srcstring string deststring int fold This reference page..."
---

<a name="apis.ec_base64_encode_string_to_string"></a> 
## Name

ec_base64_encode_string_to_string — Apply base64 encoding to an ec_string and store the result to another ec_string where the previous content will be replaced

## Synopsis

`#include "util.h"`

| `int **ec_base64_encode_string_to_string** (` | <var class="pdparam">srcstring</var>, |   |
|   | <var class="pdparam">deststring</var>, |   |
|   | <var class="pdparam">fold</var>`)`; |   |

`string * <var class="pdparam">srcstring</var>`;
`string * <var class="pdparam">deststring</var>`;
`int <var class="pdparam">fold</var>`;<a name="idp47510112"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Apply base64 encoding to an ec_string and store the result to another ec_string where the previous content will be replaced.

**<a name="idp47513072"></a> Parameters**

<dl class="variablelist">

<dt>srcstring</dt>

<dd>

the ec_string to encode

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