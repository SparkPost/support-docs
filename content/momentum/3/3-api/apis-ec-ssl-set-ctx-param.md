---
lastUpdated: "03/26/2020"
title: "ec_ssl_set_ctx_param"
description: "ec ssl set ctx param Set an ec ssl ctx param member int ec ssl set ctx param param value char param const char value Set an ec ssl ctx param member Call this function from core get inbound tls parameters hook or core get outbound tls parameters hook param..."
---

<a name="apis.ec_ssl_set_ctx_param"></a> 
## Name

ec_ssl_set_ctx_param — Set an ec_ssl_ctx_param member

## Synopsis

`#include "ec_ssl.h"`

| `int **ec_ssl_set_ctx_param** (` | <var class="pdparam">param</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`char ** <var class="pdparam">param</var>`;
`const char * <var class="pdparam">value</var>`;<a name="idp62748336"></a> 
## Description

Set an ec_ssl_ctx_param member.

Call this function from `core_get_inbound_tls_parameters_hook` or `core_get_outbound_tls_parameters_hook`. `param` should point at one of the fields in `ec_ssl_ctx_params`. If `param`; is non-NULL, the memory is freed. Memory is allocated to store the `value`.

**<a name="idp62752832"></a> Return Values**

This function returns true if the value is stored.

**<a name="idp62753776"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp62755312"></a> 
## See Also

[“ec_ssl_ctx_params”](/momentum/3/3-api/structs-ec-ssl-ctx-params)