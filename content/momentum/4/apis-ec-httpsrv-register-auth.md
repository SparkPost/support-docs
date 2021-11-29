---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_register_auth"
description: "ec httpsrv register auth Register an HTTP handler for authenticating a URI int ec httpsrv register auth instance method path closure handler const char instance const char method const char path ec blobject closure ec httpsrv auth handler func handler This function registers an HTTP handler for authenticating a URI..."
---

<a name="apis.ec_httpsrv_register_auth"></a> 
## Name

ec_httpsrv_register_auth — Register an HTTP handler for authenticating a URI

## Synopsis

`#include "/modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_register_auth** (` | <var class="pdparam">instance</var>, |   |
|   | <var class="pdparam">method</var>, |   |
|   | <var class="pdparam">path</var>, |   |
|   | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">handler</var>`)`; |   |

`const char * <var class="pdparam">instance</var>`;
`const char * <var class="pdparam">method</var>`;
`const char * <var class="pdparam">path</var>`;
`ec_blobject * <var class="pdparam">closure</var>`;
`ec_httpsrv_auth_handler_func <var class="pdparam">handler</var>`;<a name="idp8623600"></a> 
## Description

This function registers an HTTP handler for authenticating a URI.

**<a name="idp8624752"></a> Parameters**

<dl class="variablelist">

<dt>instance</dt>

<dd>

This is reserved for future use in virtual host support and must currently be NULL.

</dd>

<dt>method</dt>

<dd>

HTTP method to be handled

For example: `GET`

</dd>

<dt>path</dt>

<dd>

Base URI path

The trailing ‘`/`’ character is optional.

</dd>

<dt>closure</dt>

<dd>

Closure that is passed through to the handler via [ec_httpsrv_service_ctx_get](/momentum/3/3-api/apis-ec-httpsrv-service-ctx-get)

</dd>

<dt>handler</dt>

<dd>

Function that is invoked on matching requests

</dd>

</dl>

Authentication handlers are matched using the same algorithm as request handlers. See the description of [ec_httpsrv_register](/momentum/3/3-api/apis-ec-httpsrv-register) for details.

**<a name="idp7223520"></a> Return Values**

This function returns `0` on success. On failure, it returns an error number that indicates the nature of the failure.

**<a name="idp7224976"></a> Threading**

This hook can be called in any thread.