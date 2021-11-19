---
lastUpdated: "03/26/2020"
title: "config_get_binding_domain_message_expiration"
description: "config get binding domain message expiration Return the value of the message expiration option int config get binding domain message expiration caller scope binding domain generic module infrastructure caller scope int binding const domain Determine the value of the message expiration configuration option The caller scope argument is virtually always..."
---

<a name="apis.config_get_binding_domain_message_expiration"></a> 
## Name

config_get_binding_domain_message_expiration — Return the value of the message_expiration option

## Synopsis

`#include "ec_config.h"`

| `int **config_get_binding_domain_message_expiration** (` | <var class="pdparam">caller_scope</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;
`int <var class="pdparam">binding</var>`;
`const * <var class="pdparam">domain</var>`;<a name="idp48585040"></a> 
## Description

Determine the value of the [message_expiration](/momentum/3/3-reference/3-reference-conf-ref-message-expiration) configuration option.

### Note

The `caller_scope` argument is virtually always `NULL`; there is no reason for a consumer to make it anything else.

**<a name="idp48588928"></a> Parameters**

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

**<a name="idp48595936"></a> Return Values**

This function returns the integer value of the `message_expiration` option, the maximum amount of time in seconds a message will remain undelivered in the system.

**<a name="idp48597424"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48598528"></a> 
## See Also

[config_get_binding_domain_retry_interval](/momentum/3/3-api/apis-config-get-binding-domain-retry-interval) and [config_get_binding_domain_max_retries](/momentum/3/3-api/apis-config-get-binding-domain-max-retries)