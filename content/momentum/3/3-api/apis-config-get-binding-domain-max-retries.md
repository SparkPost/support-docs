---
lastUpdated: "03/26/2020"
title: "config_get_binding_domain_max_retries"
description: "config get binding domain max retries Return the value of the max retries option int config get binding domain max retries caller scope binding domain generic module infrastructure caller scope int binding const domain Determine the value of the max retries configuration option The caller scope argument is virtually always..."
---

<a name="apis.config_get_binding_domain_max_retries"></a> 
## Name

config_get_binding_domain_max_retries — Return the value of the max_retries option

## Synopsis

`#include "ec_config.h"`

| `int **config_get_binding_domain_max_retries** (` | <var class="pdparam">caller_scope</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;
`int <var class="pdparam">binding</var>`;
`const * <var class="pdparam">domain</var>`;<a name="idp48557376"></a> 
## Description

Determine the value of the [max_retries](/momentum/3/3-reference/3-reference-conf-ref-max-retries) configuration option.

### Note

The `caller_scope` argument is virtually always `NULL`; there is no reason for a consumer to make it anything else.

**<a name="idp48561264"></a> Parameters**

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

**<a name="idp48568272"></a> Return Values**

This function returns the integer value of the `max_retries` option. A return value of `0` indicates 'auto' which calculates the maximum number of retries based on the value of [message_expiration](/momentum/3/3-reference/3-reference-conf-ref-message-expiration). A return value of `-1` indicates that there is no limit on the number of retries. Any other number is the number of retries that will be attempted.

**<a name="idp48571584"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48572688"></a> 
## See Also

[config_get_binding_domain_retry_interval](/momentum/3/3-api/apis-config-get-binding-domain-retry-interval) and [config_get_binding_domain_message_expiration](/momentum/3/3-api/apis-config-get-binding-domain-message-expiration)