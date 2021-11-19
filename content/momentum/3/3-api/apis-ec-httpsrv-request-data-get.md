---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_data_get"
description: "ec httpsrv request data get Gets a handle on the request payload data int ec httpsrv request data get sess io ec httpsrv session sess io object io This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.ec_httpsrv_request_data_get"></a> 
## Name

ec_httpsrv_request_data_get — Gets a handle on the request payload data

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_request_data_get** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">io</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`io_object ** <var class="pdparam">io</var>`;<a name="idp52767808"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Gets a handle on the request payload data.

**<a name="idp52770672"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

<dt>io</dt>

<dd>

returns the IO object.

</dd>

</dl>

**<a name="idp52775232"></a> Return Values**

0 on success, or an errno value indicating the cause of the problem if unsuccessful.

The returned IO object will decode any transfer encoding that was applied to the incoming request and return the raw data on each io_wrapper_read() call invoked on the object.

Each call returns a new IO object that references the session. If buffered operations are used on this IO object, and multiple instances exist, the behavior of the stream will be undefined. Regular block IO reads should behave in a predictable manner (io_wrapper_read).

The system does not guarantee that the IO object is seekable; some incoming transfer encodings may make this impractical. If a handler requires the ability to seek, then it should consider copying the contents of the stream to some other storage.

Reading from the io object may result in EAGAIN if the upload has not yet completed.