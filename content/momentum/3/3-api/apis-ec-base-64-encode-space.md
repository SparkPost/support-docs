---
lastUpdated: "03/26/2020"
title: "ec_base64_encode_space"
description: "ec base 64 encode space Returns the number of bytes required to Base 64 encode a string int ec base 64 encode space len int len Returns the number of bytes required to Base 64 encode a string len The length of the string to Base 64 encode in bytes..."
---

<a name="apis.ec_base64_encode_space"></a> 
## Name

ec_base64_encode_space — Returns the number of bytes required to Base64 encode a string

## Synopsis

`#include "util.h"`

| `int **ec_base64_encode_space** (` | <var class="pdparam">len</var>`)`; |   |

`int <var class="pdparam">len</var>`;<a name="idp47491088"></a> 
## Description

Returns the number of bytes required to Base64 encode a string.

**<a name="idp47492336"></a> Parameters**

<dl class="variablelist">

<dt>len</dt>

<dd>

The length of the string to Base64 encode, in bytes.

</dd>

</dl>

**<a name="idp47495088"></a> Return Values**

This function returns the number of bytes required to Base64 encode a string.

**<a name="idp47496064"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47497168"></a> 
## See Also

[ec_base64_encode](/momentum/3/3-api/apis-ec-base-64-encode), [ec_base64_decode](/momentum/3/3-api/apis-ec-base-64-decode), and [ec_base64_decode_space](/momentum/3/3-api/apis-ec-base-64-decode-space).