---
lastUpdated: "03/26/2020"
title: "ec_ssl_set_verify_errmsg"
description: "ec ssl set verify errmsg Set the verify error message and code void ec ssl set verify errmsg ctx code msg ec ssl ctx ctx int code const char msg Set the verify error message and code The error message must be a single line without line endings it will..."
---

<a name="apis.ec_ssl_set_verify_errmsg"></a> 
## Name

ec_ssl_set_verify_errmsg — Set the verify error message and code

## Synopsis

`#include "ec_ssl.h"`

| `void **ec_ssl_set_verify_errmsg** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">code</var>, |   |
|   | <var class="pdparam">msg</var>`)`; |   |

`ec_ssl_ctx * <var class="pdparam">ctx</var>`;
`int <var class="pdparam">code</var>`;
`const char * <var class="pdparam">msg</var>`;<a name="idp62780592"></a> 
## Description

Set the verify error message and code. The error message **must** be a single line without line endings; it will be appropriately formatted and sent to the peer according to the protocol in use.

To clear the 'verify' error, call with code set to `0` and msg set to `NULL`.

**<a name="idp62784064"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

The SSL context.

</dd>

<dt>code</dt>

<dd>

The error code.

</dd>

<dt>msg</dt>

<dd>

The error message.

</dd>

</dl>

**<a name="idp62790432"></a> Return Values**

This function returns void.

**<a name="idp62791344"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp62792880"></a> 
## See Also

[“ec_ssl_ctx”](/momentum/3/3-api/structs-ec-ssl-ctx)