---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_data_get_string"
description: "ec httpsrv request data get string Buffers request payload data to memory and returns a string pointer to it int ec httpsrv request data get string sess str ec httpsrv session sess string str This reference page was automatically generated from functions found in the header files in the development..."
---

<a name="apis.ec_httpsrv_request_data_get_string"></a> 
## Name

ec_httpsrv_request_data_get_string — Buffers request payload data to memory and returns a string pointer to it

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_request_data_get_string** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">str</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`string ** <var class="pdparam">str</var>`;<a name="idp52808560"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Buffers request payload data to memory and returns a string pointer to it.

**<a name="idp52811472"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

<dt>str</dt>

<dd>

returns the string object

</dd>

</dl>

**<a name="idp52816032"></a> Return Values**

0 on success, or an errno value indicating the cause of the problem if unsuccessful.

Reading from the io object may result in EAGAIN if the upload has not yet completed.

The system owns the string and will release its resources when the request is marked as complete.