---
lastUpdated: "03/26/2020"
title: "rfc2047_utf8_encode_to_string"
description: "rfc 2047 utf 8 encode to string Applies MIME header encoding and stores the encoded result to a string int rfc 2047 utf 8 encode to string in in len out const char in int in len string out This reference page was automatically generated from functions found in the..."
---

<a name="apis.rfc2047_utf8_encode_to_string"></a> 
## Name

rfc2047_utf8_encode_to_string — Applies MIME header encoding and stores the encoded result to a string

## Synopsis

`#include "misc/rfc2047.h"`

| `int **rfc2047_utf8_encode_to_string** (` | <var class="pdparam">in</var>, |   |
|   | <var class="pdparam">in_len</var>, |   |
|   | <var class="pdparam">out</var>`)`; |   |

`const char * <var class="pdparam">in</var>`;
`int <var class="pdparam">in_len</var>`;
`string * <var class="pdparam">out</var>`;<a name="idp58474512"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Applies MIME header encoding and stores the encoded result to a string.

**<a name="idp58477424"></a> Parameters**

<dl class="variablelist">

<dt>in</dt>

<dd>

a UTF-8 encoded C-string

</dd>

<dt>in_len</dt>

<dd>

the length of in

</dd>

<dt>out</dt>

<dd>

the target string

</dd>

</dl>

**<a name="idp58483808"></a> Return Values**

1 if successful, 0 otherwise.

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.