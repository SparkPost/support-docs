---
lastUpdated: "03/26/2020"
title: "rfc2822_header_stringwrite"
description: "rfc 2822 header stringwrite Renders the rfc 2822 header to a string as it will be sent over the network string rfc 2822 header stringwrite s field string s rfc 2822 field field This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis.rfc2822_header_stringwrite"></a> 
## Name

rfc2822_header_stringwrite — Renders the rfc2822 header to a string as it will be sent over the network

## Synopsis

`#include "rfc2822_parser.h"`

| `string * **rfc2822_header_stringwrite** (` | <var class="pdparam">s</var>, |   |
|   | <var class="pdparam">field</var>`)`; |   |

`string * <var class="pdparam">s</var>`;
`rfc2822_field * <var class="pdparam">field</var>`;<a name="idp58681648"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Renders the rfc2822 header to a string as it will be sent over the network.

**<a name="idp58684560"></a> Parameters**

<dl class="variablelist">

<dt>s</dt>

<dd>

is the string to write to

</dd>

<dt>field</dt>

<dd>

is the header to render

</dd>

</dl>

**<a name="idp58689120"></a> Return Values**

the same string passed in, or NULL on error