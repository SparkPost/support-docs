---
lastUpdated: "03/26/2020"
title: "sockaddr_to_string2"
description: "sockaddr to string 2 Renders a socket address into human readable form int sockaddr to string 2 sa buffer buf size struct sockaddr sa char buffer int buf size Renders the socket address to human readable form Uses the provided buffer to render the socket address to a string sa..."
---

<a name="apis.sockaddr_to_string2"></a> 
## Name

sockaddr_to_string2 — Renders a socket address into human-readable form

## Synopsis

`#include "netlistener.h"`

| `int **sockaddr_to_string2** (` | <var class="pdparam">sa</var>, |   |
|   | <var class="pdparam">buffer</var>, |   |
|   | <var class="pdparam">buf_size</var>`)`; |   |

`struct sockaddr * <var class="pdparam">sa</var>`;
`char * <var class="pdparam">buffer</var>`;
`int <var class="pdparam">buf_size</var>`;<a name="idp62188736"></a> 
## Description

Renders the socket address to human-readable form. Uses the provided buffer to render the socket address to a string.

**<a name="idp62190032"></a> Parameters**

<dl class="variablelist">

<dt>sa</dt>

<dd>

The socket address.

</dd>

<dt>buffer</dt>

<dd>

The target for the human-readable form of the socket address.

### Warning

This must not be `NULL`.

</dd>

<dt>buf_size</dt>

<dd>

The buffer length, in bytes.

</dd>

</dl>

**<a name="idp62197840"></a> Return Values**

Returns the length of the rendered form of the socket address.

**<a name="idp62198800"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62199904"></a> 
## See Also

[sockaddr_to_string](/momentum/3/3-api/apis-sockaddr-to-string)