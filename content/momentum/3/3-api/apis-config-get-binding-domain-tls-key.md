---
lastUpdated: "03/26/2020"
title: "config_get_binding_domain_tls_key"
description: "config get binding domain tls key Determine the value of the tls key option char config get binding domain tls key caller scope binding domain generic module infrastructure caller scope int binding const domain Determine the value of the tls key configuration option The caller scope argument is virtually always..."
---

<a name="apis.config_get_binding_domain_tls_key"></a> 
## Name

config_get_binding_domain_tls_key — Determine the value of the tls_key option

## Synopsis

`#include "ec_config.h"`

| `char * **config_get_binding_domain_tls_key** (` | <var class="pdparam">caller_scope</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;
`int <var class="pdparam">binding</var>`;
`const * <var class="pdparam">domain</var>`;<a name="idp48722448"></a> 
## Description

Determine the value of the [tls_key](/momentum/3/3-reference/conf-ref-tls-key) configuration option.

### Note

The `caller_scope` argument is virtually always `NULL`; there is no reason for a consumer to make it anything else.

**<a name="idp48726320"></a> Parameters**

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

**<a name="idp48733328"></a> Return Values**

This function returns the value of the `tls_key` option.

See [tls_key](/momentum/3/3-reference/conf-ref-tls-key) for more information.

**<a name="idp48735936"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48737040"></a> 
## See Also

[config_get_binding_domain_tls_cert](/momentum/3/3-api/apis-config-get-binding-domain-tls-cert), [config_get_binding_domain_tls_verify](/momentum/3/3-api/apis-config-get-binding-domain-tls-verify), [config_get_binding_domain_tls_ca](/momentum/3/3-api/apis-config-get-binding-domain-tls-ca), [config_get_binding_domain_tls_ciphers](/momentum/3/3-api/apis-config-get-binding-domain-tls-ciphers) and [config_get_binding_domain_use_tls](/momentum/3/3-api/apis-config-get-binding-domain-use-tls)