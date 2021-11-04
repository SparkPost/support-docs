---
lastUpdated: "03/26/2020"
title: "ec_base64_decode_space"
description: "ec base 64 decode space This function returns the number of bytes required to decode a Base 64 encoded string int ec base 64 decode space len int len This function returns the number of bytes required to decode a Base 64 encoded string len The length of the Base..."
---

<a name="apis.ec_base64_decode_space"></a> 
## Name

ec_base64_decode_space — This function returns the number of bytes required to decode a Base64 encoded string

## Synopsis

`#include "util.h"`

| `int **ec_base64_decode_space** (` | <var class="pdparam">len</var>`)`; |   |

`int <var class="pdparam">len</var>`;<a name="idp47447328"></a> 
## Description

This function returns the number of bytes required to decode a Base64 encoded string.

**<a name="idp47448592"></a> Parameters**

<dl class="variablelist">

<dt>len</dt>

<dd>

The length of the Base64 string to decode, in bytes.

</dd>

</dl>

**<a name="idp47451344"></a> Return Values**

This function returns the number of bytes required to decode a Base64 encoded string.

**<a name="idp47452320"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47453424"></a> 
## See Also

[ec_base64_encode](/momentum/3/3-api/apis-ec-base-64-encode), [ec_base64_decode](/momentum/3/3-api/apis-ec-base-64-decode), and [ec_base64_encode_space](/momentum/3/3-api/apis-ec-base-64-encode-space).