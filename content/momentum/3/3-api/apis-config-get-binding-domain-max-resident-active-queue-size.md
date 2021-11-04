---
lastUpdated: "03/26/2020"
title: "config_get_binding_domain_max_resident_active_queue_size"
description: "config get binding domain max resident active queue size Return the value of the max resident active queue size option int config get binding domain max resident active queue size caller scope binding domain generic module infrastructure caller scope int binding const domain Determine the value of the max resident..."
---

<a name="apis.config_get_binding_domain_max_resident_active_queue_size"></a> 
## Name

config_get_binding_domain_max_resident_active_queue_size — Return the value of the max_resident_active_queue_size option

## Synopsis

`#include "ec_config.h"`

| `int **config_get_binding_domain_max_resident_active_queue_size** (` | <var class="pdparam">caller_scope</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;
`int <var class="pdparam">binding</var>`;
`const * <var class="pdparam">domain</var>`;<a name="idp48534176"></a> 
## Description

Determine the value of the [max_resident_active_queue](/momentum/3/3-reference/3-reference-conf-ref-max-resident-active-queue) configuration option.

### Note

The `caller_scope` argument is virtually always `NULL`; there is no reason for a consumer to make it anything else.

**<a name="idp48538080"></a> Parameters**

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

**<a name="idp48545088"></a> Return Values**

This function returns the integer value of the `max_resident_active_queue_size` option.

**<a name="idp48546496"></a> Threading**

It is legal to call this function in any thread.