---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_response_io"
description: "ec httpsrv response io Set the session response to an IO object int ec httpsrv response io sess io immediate ec httpsrv session sess io object io int immediate This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_httpsrv_response_io"></a> 
## Name

ec_httpsrv_response_io — Set the session response to an IO object

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_response_io** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">immediate</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`io_object * <var class="pdparam">io</var>`;
`int <var class="pdparam">immediate</var>`;<a name="idp53026752"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Set the session response to an IO object.

**<a name="idp53029616"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to modify

</dd>

<dt>io</dt>

<dd>

the IO object

</dd>

<dt>immediate</dt>

<dd>

whether to buffer immediately or stream it.

</dd>

</dl>

Sets the response payload to the contents of the provided IO object.

If immediate is 0, the system may take a reference the provided IO object and will stream its contents out to the client as part of the response. When the streaming is complete, it will delref the IO object.

If immediate is non-zero, the contents will be read from the IO object and appended to the request via [ec_httpsrv_response_append](/momentum/3/3-api/apis-ec-httpsrv-response-append) before this function call returns. If reads from the IO object return EAGAIN, then this function will return EAGAIN, and the caller is responsible for managing the repeated call to complete the operation.

**<a name="idp53038560"></a> Return Values**

0 if successful, else returns an errno indicating what went wrong. In particular, ENOMEM indicates that insuficient memory was available.