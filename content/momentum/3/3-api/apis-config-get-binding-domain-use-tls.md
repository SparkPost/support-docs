---
lastUpdated: "03/26/2020"
title: "config_get_binding_domain_use_tls"
description: "config get binding domain use tls Determine the value of the tls option int config get binding domain use tls caller scope binding domain generic module infrastructure caller scope int binding const domain Determine the value of the tls configuration option The caller scope argument is virtually always NULL there..."
---

<a name="apis.config_get_binding_domain_use_tls"></a> 
## Name

config_get_binding_domain_use_tls — Determine the value of the tls option

## Synopsis

`#include "ec_config.h"`

| `int **config_get_binding_domain_use_tls** (` | <var class="pdparam">caller_scope</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;
`int <var class="pdparam">binding</var>`;
`const * <var class="pdparam">domain</var>`;<a name="idp48784096"></a> 
## Description

Determine the value of the [tls](/momentum/3/3-reference/conf-ref-tls) configuration option.

### Note

The `caller_scope` argument is virtually always `NULL`; there is no reason for a consumer to make it anything else.

**<a name="idp48787968"></a> Parameters**

<dl class="variablelist">

<dt>caller_scope</dt>

<dd>

For a definition of this data type see [“generic_module_infrastructure”](/momentum/3/3-api/structs-generic-module-infrastructure).

</dd>

<dt>binding</dt>

<dd>

The binding identifier.

</dd>

<dt>domain</dt>

<dd>

The domain name.

</dd>

</dl>

**<a name="idp48794976"></a> Return Values**

This function returns one of the following values:

*   EC_USE_TLS_NO – TLS must not be used for this message

*   EC_USE_TLS_IFAVAILABLE – If TLS is available (offered by the remote server) then the state machine should upgrade the current SMTP session to use TLS.

*   EC_USE_TLS_REQUIRED – The message in question requires TLS to be used. If it is unavailable, the message should not be sent.

See [tls](/momentum/3/3-reference/conf-ref-tls) for more information.

**<a name="idp48800672"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48801776"></a> 
## See Also

[config_get_binding_domain_tls_cert](/momentum/3/3-api/apis-config-get-binding-domain-tls-cert), [config_get_binding_domain_tls_verify](/momentum/3/3-api/apis-config-get-binding-domain-tls-verify), [config_get_binding_domain_tls_ca](/momentum/3/3-api/apis-config-get-binding-domain-tls-ca), [config_get_binding_domain_tls_ciphers](/momentum/3/3-api/apis-config-get-binding-domain-tls-ciphers) and [config_get_binding_domain_tls_key](/momentum/3/3-api/apis-config-get-binding-domain-tls-key)