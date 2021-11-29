---
lastUpdated: "03/26/2020"
title: "ec_ssl_set_ctx_verify_mode"
description: "ec ssl set ctx verify mode sets the tls verify ec ssl ctx param member int ec ssl set ctx verify mode tls value ec ssl ctx params tls const char value This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.ec_ssl_set_ctx_verify_mode"></a> 
## Name

ec_ssl_set_ctx_verify_mode — sets the tls_verify ec_ssl_ctx_param member

## Synopsis

`#include "ec_ssl.h"`

| `int **ec_ssl_set_ctx_verify_mode** (` | <var class="pdparam">tls</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`ec_ssl_ctx_params * <var class="pdparam">tls</var>`;
`const char * <var class="pdparam">value</var>`;<a name="idp62766288"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

sets the tls_verify ec_ssl_ctx_param member.

Intended to be called from core_get_inbound_tls_parameters_hook() and core_get_outbound_tls_parameters_hook(). <parameter>tls</parameter> should point at the context <literal>ec_ssl_ctx_params</literal>. Vaid values are "none", "ifavailable" and "required".

**<a name="idp62769904"></a> Return Values**

true if the value could be stored