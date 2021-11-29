---
lastUpdated: "03/26/2020"
title: "config_get_binding_domain_retry_interval"
description: "config get binding domain retry interval Return the value of the max retry interval option int config get binding domain retry interval caller scope binding domain generic module infrastructure caller scope int binding const domain Determine the value of the max retry interval configuration option The caller scope argument is..."
---

<a name="apis.config_get_binding_domain_retry_interval"></a> 
## Name

config_get_binding_domain_retry_interval — Return the value of the max_retry_interval option

## Synopsis

`#include "ec_config.h"`

| `int **config_get_binding_domain_retry_interval** (` | <var class="pdparam">caller_scope</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;
`int <var class="pdparam">binding</var>`;
`const * <var class="pdparam">domain</var>`;<a name="idp48610944"></a> 
## Description

Determine the value of the [max_retry_interval](/momentum/3/3-reference/3-reference-conf-ref-max-retry-interval) configuration option.

### Note

The `caller_scope` argument is virtually always `NULL`; there is no reason for a consumer to make it anything else.

**<a name="idp48614832"></a> Parameters**

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

**<a name="idp48621840"></a> Return Values**

This function returns an integer value that indicates the maximum interval in seconds between successive retries for a message.

**<a name="idp48622864"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48623968"></a> 
## See Also

[config_get_binding_domain_max_retries](/momentum/3/3-api/apis-config-get-binding-domain-max-retries) and [config_get_binding_domain_message_expiration](/momentum/3/3-api/apis-config-get-binding-domain-message-expiration)