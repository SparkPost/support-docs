---
lastUpdated: "03/26/2020"
title: "smpp_get_string_and_buffer"
description: "smpp get string and buffer Create a string object using memory type of memtype smpp string smpp get string and buffer len int len Configuration Change This feature is available starting from Momentum 3 2 Create a string object using memory type of memtype smpp The returned string object must..."
---

<a name="apis.smpp_get_string_and_buffer"></a> 
## Name

smpp_get_string_and_buffer — Create a string object using memory type of memtype_smpp

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `string * **smpp_get_string_and_buffer** (` | <var class="pdparam">len</var>`)`; |   |

`int <var class="pdparam">len</var>`;<a name="idp61390784"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Create a string object using memory type of `memtype_smpp`. The returned string object must be freed by calling [smpp_free_string_and_buffer](/momentum/3/3-api/apis-smpp-free-string-and-buffer). Use of this function requires the smpp module.

**<a name="idp61394800"></a> Parameters**

<dl class="variablelist">

<dt>len</dt>

<dd>

The size of the string buffer.

</dd>

</dl>

**<a name="idp61397520"></a> Return Values**

This function returns a pointer to the allocated string.

**<a name="idp61398464"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61399568"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)