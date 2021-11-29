---
lastUpdated: "03/26/2020"
title: "ec_qp_encode_to_string"
description: "ec qp encode to string Apply quoted printable encoding to a string and append the output to an ec string int ec qp encode to string src src len dest toencode const char src size t src len string dest char toencode Configuration Change This feature is available starting from..."
---

<a name="apis.ec_qp_encode_to_string"></a> 
## Name

ec_qp_encode_to_string — Apply quoted printable encoding to a string and append the output to an ec_string

## Synopsis

`#include "misc/converter.h"`

| `int **ec_qp_encode_to_string** (` | <var class="pdparam">src</var>, |   |
|   | <var class="pdparam">src_len</var>, |   |
|   | <var class="pdparam">dest</var>, |   |
|   | <var class="pdparam">toencode</var>`)`; |   |

`const char * <var class="pdparam">src</var>`;
`size_t <var class="pdparam">src_len</var>`;
`string * <var class="pdparam">dest</var>`;
`char * <var class="pdparam">toencode</var>`;<a name="idp47702336"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.

Apply quoted printable encoding to a string and append the output to an ec_string.

**<a name="idp47705280"></a> Parameters**

<dl class="variablelist">

<dt>src</dt>

<dd>

The buffer to encode.

</dd>

<dt>src_len</dt>

<dd>

The size of the buffer to encode.

</dd>

<dt>dest</dt>

<dd>

The destination for the encoded result.

</dd>

<dt>toencode</dt>

<dd>

Optional set of characters that should have forced qp encoding, may be NULL.

</dd>

</dl>

**<a name="idp47713616"></a> Return Values**

A positive number of characters generated in the output on success, or a negative number on error; abs(retval) gives the number of characters emitted prior to the error.

**<a name="idp47714688"></a> Threading**

It is legal to call this function in any thread.