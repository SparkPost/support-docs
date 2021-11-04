---
lastUpdated: "03/26/2020"
title: "smpp_free_string_and_buffer"
description: "smpp free string and buffer Free a string object created using smpp get string and buffer void smpp free string and buffer s string s Configuration Change This feature is available starting from Momentum 3 2 Free a string object created using smpp get string and buffer Use of this..."
---

<a name="apis.smpp_free_string_and_buffer"></a> 
## Name

smpp_free_string_and_buffer — Free a string object created using smpp_get_string_and_buffer

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `void **smpp_free_string_and_buffer** (` | <var class="pdparam">s</var>`)`; |   |

`string * <var class="pdparam">s</var>`;<a name="idp61447904"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Free a string object created using [smpp_get_string_and_buffer](/momentum/3/3-api/apis-smpp-get-string-and-buffer). Use of this function requires the smpp module.

**<a name="idp61451408"></a> Parameters**

<dl class="variablelist">

<dt>s</dt>

<dd>

The string. For a description of this data type see [“string”](/momentum/3/3-api/structs-string).

</dd>

</dl>

**<a name="idp61454720"></a> Return Values**

This function returns void.

**<a name="idp61455632"></a> Threading**

It is legal to call this function in any thread.