---
lastUpdated: "03/26/2020"
title: "config_get_binding_domain_tls_verify"
description: "config get binding domain tls verify Determine the value of the tls verify option int config get binding domain tls verify caller scope binding domain generic module infrastructure caller scope int binding const domain Determine the value of the tls verify configuration option The caller scope argument is virtually always..."
---

<a name="apis.config_get_binding_domain_tls_verify"></a> 
## Name

config_get_binding_domain_tls_verify — Determine the value of the tls_verify option

## Synopsis

`#include "ec_config.h"`

| `int **config_get_binding_domain_tls_verify** (` | <var class="pdparam">caller_scope</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;
`int <var class="pdparam">binding</var>`;
`const * <var class="pdparam">domain</var>`;<a name="idp48751136"></a> 
## Description

Determine the value of the [tls_verify](/momentum/3/3-reference/conf-ref-tls-verify) configuration option.

### Note

The `caller_scope` argument is virtually always `NULL`; there is no reason for a consumer to make it anything else.

**<a name="idp48755008"></a> Parameters**

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

**<a name="idp48762016"></a> Return Values**

This function returns one of the following values:

*   `EC_SSL_VERIFY_VALIDCA` – The certificate must only be signed by a valid certificate authority

*   `EC_SSL_VERIFY_HOSTNAME` – The certificate must be signed by a valid certificate authority and the hostname presented must match the host to which we connected

*   `EC_SSL_VERIFY_NONE` – No verification will be performed

See [tls_verify](/momentum/3/3-reference/conf-ref-tls-verify) for more information.

**<a name="idp48768960"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48770064"></a> 
## See Also

[config_get_binding_domain_tls_cert](/momentum/3/3-api/apis-config-get-binding-domain-tls-cert), [config_get_binding_domain_tls_ca](/momentum/3/3-api/apis-config-get-binding-domain-tls-ca), [config_get_binding_domain_tls_ciphers](/momentum/3/3-api/apis-config-get-binding-domain-tls-ciphers), [config_get_binding_domain_tls_key](/momentum/3/3-api/apis-config-get-binding-domain-tls-key) and [config_get_binding_domain_use_tls](/momentum/3/3-api/apis-config-get-binding-domain-use-tls)