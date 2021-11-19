---
lastUpdated: "03/26/2020"
title: "smpp_wrap_in_string_with_len"
description: "smpp wrap in string with len Wrap a char string into a string object string smpp wrap in string with len c len const char c int len Configuration Change This feature is available starting from Momentum 3 2 Wrap a char string into a string object The returned string..."
---

<a name="apis.smpp_wrap_in_string_with_len"></a> 
## Name

smpp_wrap_in_string_with_len — Wrap a char string into a string object

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `string * **smpp_wrap_in_string_with_len** (` | <var class="pdparam">c</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`const char * <var class="pdparam">c</var>`;
`int <var class="pdparam">len</var>`;<a name="idp61584704"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Wrap a char string into a string object.

The returned string object must be freed by calling [smpp_free_string_and_buffer](/momentum/3/3-api/apis-smpp-free-string-and-buffer).

**<a name="idp61588656"></a> Parameters**

<dl class="variablelist">

<dt>c</dt>

<dd>

The input character string

</dd>

<dt>len</dt>

<dd>

The length of the input string.

</dd>

</dl>

**<a name="idp61593488"></a> Return Values**

The output string. For a description of this data type see [“string”](/momentum/3/3-api/structs-string).

**<a name="idp61595008"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61596112"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp) and [*Memory Functions*](/momentum/3/3-api/3-api-memory)