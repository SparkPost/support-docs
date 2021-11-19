---
lastUpdated: "03/26/2020"
title: "smpp_wrap_in_string"
description: "smpp wrap in string Wrap a char string into a string object string smpp wrap in string c const char c Configuration Change This feature is available starting from Momentum 3 2 Wrap a char string into a string object The returned string object must be freed by calling smpp..."
---

<a name="apis.smpp_wrap_in_string"></a> 
## Name

smpp_wrap_in_string — Wrap a char string into a string object

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `string * **smpp_wrap_in_string** (` | <var class="pdparam">c</var>`)`; |   |

`const char * <var class="pdparam">c</var>`;<a name="idp61564720"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Wrap a char string into a string object.

The returned string object must be freed by calling [smpp_free_string_and_buffer](/momentum/3/3-api/apis-smpp-free-string-and-buffer).

**<a name="idp61568672"></a> Parameters**

<dl class="variablelist">

<dt>c</dt>

<dd>

The input string.

</dd>

</dl>

**<a name="idp61571680"></a> Return Values**

The output string.

**<a name="idp61572592"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61573696"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)