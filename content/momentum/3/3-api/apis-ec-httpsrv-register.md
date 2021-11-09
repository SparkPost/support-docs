---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_register"
description: "ec httpsrv register Registers an HTTP URI handler int ec httpsrv register instance method path job class closure handler const char instance const char method const char path int job class ec blobject closure ec httpsrv handler func handler This reference page was automatically generated from functions found in the..."
---

<a name="apis.ec_httpsrv_register"></a> 
## Name

ec_httpsrv_register — Registers an HTTP URI handler

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_register** (` | <var class="pdparam">instance</var>, |   |
|   | <var class="pdparam">method</var>, |   |
|   | <var class="pdparam">path</var>, |   |
|   | <var class="pdparam">job_class</var>, |   |
|   | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">handler</var>`)`; |   |

`const char * <var class="pdparam">instance</var>`;
`const char * <var class="pdparam">method</var>`;
`const char * <var class="pdparam">path</var>`;
`int <var class="pdparam">job_class</var>`;
`ec_blobject * <var class="pdparam">closure</var>`;
`ec_httpsrv_handler_func <var class="pdparam">handler</var>`;<a name="idp52700752"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Registers an HTTP URI handler.

**<a name="idp52703616"></a> Parameters**

<dl class="variablelist">

<dt>instance</dt>

<dd>

is reserved for future use in virtual host support and must currently be NULL

</dd>

<dt>method</dt>

<dd>

identifies the HTTP method to be handled (eg: "GET")

</dd>

<dt>path</dt>

<dd>

base URI path (must end with a trailing '/' character)

</dd>

<dt>job_class</dt>

<dd>

a thread pool identifier

</dd>

<dt>closure</dt>

<dd>

passed through to handler via ec_httpsrv_service_ctx_get

</dd>

<dt>handler</dt>

<dd>

the function to be invoked on matching requests

</dd>

</dl>

When a request is made and authenticated, each registered handler is compared against the request; the first matching request is taken as the handler, and its handler function is invoked.

A request matches if all of the following are true:

*   request method exactly matches the method parameter, or the method parameter was specified as NULL

*   the request URI is to a path that is logically a child of the path parameter (eg: request /foo/bar will match a handler registered for /foo/)

The registration is coupled with the system configuration, this means that the registration is implicitly un-done each time a new configuration is applied, so implementors of HTTP functions must re-register them from their ext_init function when EC_MODULE_INIT_INIT is triggered.

If job_class is -1 (ECTP_CLASS_SHORT_LIVED), then the handler function will be invoked on the scheduler thread. Otherwise, the system will arrange for it to be called in the specified thread pool.

**<a name="idp52721088"></a> Return Values**

0 on success, or an errno value to indicate the nature of the failure.