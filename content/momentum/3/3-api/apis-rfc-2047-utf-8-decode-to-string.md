---
lastUpdated: "03/26/2020"
title: "rfc2047_utf8_decode_to_string"
description: "rfc 2047 utf 8 decode to string decodes MIME header encoding and stores the decoded result to a string int rfc 2047 utf 8 decode to string header hdrlen out const char header int hdrlen string out This reference page was automatically generated from functions found in the header files..."
---

<a name="apis.rfc2047_utf8_decode_to_string"></a> 
## Name

rfc2047_utf8_decode_to_string — decodes MIME header encoding and stores the decoded result to a string

## Synopsis

`#include "misc/rfc2047.h"`

| `int **rfc2047_utf8_decode_to_string** (` | <var class="pdparam">header</var>, |   |
|   | <var class="pdparam">hdrlen</var>, |   |
|   | <var class="pdparam">out</var>`)`; |   |

`const char * <var class="pdparam">header</var>`;
`int <var class="pdparam">hdrlen</var>`;
`string * <var class="pdparam">out</var>`;<a name="idp58452064"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

decodes MIME header encoding and stores the decoded result to a string

**<a name="idp58454976"></a> Parameters**

<dl class="variablelist">

<dt>header</dt>

<dd>

the header text to be decoded

</dd>

<dt>hdrlen</dt>

<dd>

the length of the header

</dd>

<dt>out</dt>

<dd>

the destination for the decoded result.

</dd>

</dl>

The output string will receive a utf-8 encoded string.

**<a name="idp58461888"></a> Return Values**

the length of the decoded string.

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.