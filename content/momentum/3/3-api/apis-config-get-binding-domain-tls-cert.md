---
lastUpdated: "03/26/2020"
title: "config_get_binding_domain_tls_cert"
description: "config get binding domain tls cert Get TLS certification data char config get tls cert caller scope binding domain generic module infrastructure caller scope int binding const char domain Get the TLS certification data for the specified domain and binding configuration The caller scope argument is virtually always NULL there..."
---

<a name="apis.config_get_binding_domain_tls_cert"></a> 
## Name

config_get_binding_domain_tls_cert — Get TLS certification data

## Synopsis

`#include "ec_config.h"`

| `char * **config_get_tls_cert** (` | <var class="pdparam">caller_scope</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;
`int <var class="pdparam">binding</var>`;
`const char * <var class="pdparam">domain</var>`;<a name="idp48664880"></a> 
## Description

Get the TLS certification data for the specified domain and binding configuration.

### Note

The `caller_scope` argument is virtually always `NULL`; there is no reason for a consumer to make it anything else.

**<a name="idp48668016"></a> Parameters**

<dl class="variablelist">

<dt>caller_scope</dt>

<dd>

A pointer to a [generic_module_infrastructure](/momentum/3/3-api/structs-generic-module-infrastructure) struct.

</dd>

<dt>binding</dt>

<dd>

The binding identifier. See [config_get_binding_id_from_name](/momentum/3/3-api/apis-config-get-binding-id-from-name).

</dd>

<dt>domain</dt>

<dd>

The domain name.

</dd>

</dl>

**<a name="idp48675952"></a> Return Values**

This function returns the TLS certification data.

**<a name="idp48676896"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48678320"></a> 
## See Also

[“generic_module_infrastructure”](/momentum/3/3-api/structs-generic-module-infrastructure), [tls_certificate](/momentum/3/3-reference/conf-ref-tls-certificate), [config_get_binding_domain_tls_verify](/momentum/3/3-api/apis-config-get-binding-domain-tls-verify), [config_get_binding_domain_tls_ca](/momentum/3/3-api/apis-config-get-binding-domain-tls-ca), [config_get_binding_domain_tls_ciphers](/momentum/3/3-api/apis-config-get-binding-domain-tls-ciphers), [config_get_binding_domain_tls_key](/momentum/3/3-api/apis-config-get-binding-domain-tls-key) and [config_get_binding_domain_use_tls](/momentum/3/3-api/apis-config-get-binding-domain-use-tls)