---
lastUpdated: "03/26/2020"
title: "sockaddr_to_string_opt"
description: "sockaddr to string opt Renders a socket address into a human readable form int sockaddr to string opt s buffer buf size opt struct sockaddr s char buffer int buf size int opt This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis.sockaddr_to_string_opt"></a> 
## Name

sockaddr_to_string_opt — Renders a socket address into a human readable form

## Synopsis

`#include "netlistener.h"`

| `int **sockaddr_to_string_opt** (` | <var class="pdparam">s</var>, |   |
|   | <var class="pdparam">buffer</var>, |   |
|   | <var class="pdparam">buf_size</var>, |   |
|   | <var class="pdparam">opt</var>`)`; |   |

`struct sockaddr * <var class="pdparam">s</var>`;
`char * <var class="pdparam">buffer</var>`;
`int <var class="pdparam">buf_size</var>`;
`int <var class="pdparam">opt</var>`;<a name="idp62234384"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Renders a socket address into a human readable form.

**<a name="idp62237264"></a> Parameters**

<dl class="variablelist">

<dt>s</dt>

<dd>

the socket address

</dd>

<dt>buffer</dt>

<dd>

the buffer into which to render.

</dd>

<dt>l</dt>

<dd>

the sizeof(buffer)

</dd>

<dt>opt</dt>

<dd>

options bitmap

</dd>

</dl>

Renders the address into the provided buffer. buffer must not be NULL. Currently, the only option is "EC_SA2S_NO_PORT."

**<a name="idp62246048"></a> Return Values**

Returns the length of the rendered address.

**Configuration Change. ** This feature is available starting from Momentum 3.4.0.

**<a name="idp62248640"></a> See Also**

[sockaddr_to_string2](/momentum/3/3-api/apis-sockaddr-to-string-2)