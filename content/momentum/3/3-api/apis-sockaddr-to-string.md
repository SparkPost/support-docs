---
lastUpdated: "03/26/2020"
title: "sockaddr_to_string"
description: "sockaddr to string Renders a socket address into human readable form char sockaddr to string sa buffer len struct sockaddr sa char buffer int len Renders a socket address into human readable form You may find that sockaddr to string 2 is slightly easier to use sa The socket address..."
---

<a name="apis.sockaddr_to_string"></a> 
## Name

sockaddr_to_string — Renders a socket address into human-readable form

## Synopsis

`#include "netlistener.h"`

| `char * **sockaddr_to_string** (` | <var class="pdparam">sa</var>, |   |
|   | <var class="pdparam">buffer</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`struct sockaddr * <var class="pdparam">sa</var>`;
`char * <var class="pdparam">buffer</var>`;
`int * <var class="pdparam">len</var>`;<a name="idp62160160"></a> 
## Description

Renders a socket address into human-readable form.

### Note

You may find that [sockaddr_to_string2](/momentum/3/3-api/apis-sockaddr-to-string-2) is slightly easier to use.

**<a name="idp62162912"></a> Parameters**

<dl class="variablelist">

<dt>sa</dt>

<dd>

The socket address.

</dd>

<dt>buffer</dt>

<dd>

The target for the human-readable form of the socket address.

### Note

If the `buffer` is `NULL` on input, then a static, thread-**unsafe** buffer will be used and returned.

</dd>

<dt>len</dt>

<dd>

The buffer length.

### Note

`*l` **must** store the `buffer` size. As as side effect, `*l` will be updated with the length of the rendered string.

</dd>

</dl>

**<a name="idp62175024"></a> Return Values**

Returns the buffer that was used for rendering the socket address.

**<a name="idp62175984"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62177088"></a> 
## See Also

[sockaddr_to_string2](/momentum/3/3-api/apis-sockaddr-to-string-2)