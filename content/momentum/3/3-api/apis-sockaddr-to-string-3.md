---
lastUpdated: "03/26/2020"
title: "sockaddr_to_string3"
description: "sockaddr to string 3 Renders a socket address into a human readable form int sockaddr to string 3 s str struct sockaddr s string str This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.sockaddr_to_string3"></a> 
## Name

sockaddr_to_string3 — Renders a socket address into a human readable form

## Synopsis

`#include "netlistener.h"`

| `int **sockaddr_to_string3** (` | <var class="pdparam">s</var>, |   |
|   | <var class="pdparam">str</var>`)`; |   |

`struct sockaddr * <var class="pdparam">s</var>`;
`string * <var class="pdparam">str</var>`;<a name="idp62210832"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Renders a socket address into a human readable form.

**<a name="idp62213712"></a> Parameters**

<dl class="variablelist">

<dt>s</dt>

<dd>

the socket address

</dd>

<dt>str</dt>

<dd>

the buffer into which to render.

</dd>

</dl>

Renders the address into the provided buffer. buffer must not be NULL.

**<a name="idp62218800"></a> Return Values**

Returns the length of the rendered address.

**Configuration Change. ** This feature is available starting from Momentum 3.0.9.

**<a name="idp62221968"></a> See Also**

[sockaddr_to_string2](/momentum/3/3-api/apis-sockaddr-to-string-2)