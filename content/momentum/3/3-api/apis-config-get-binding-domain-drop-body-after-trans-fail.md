---
lastUpdated: "03/26/2020"
title: "config_get_binding_domain_drop_body_after_trans_fail"
description: "config get binding domain drop body after trans fail Determine the value of the drop body after trans fail option int config get binding domain drop body after trans fail caller scope binding domain generic module infrastructure caller scope int binding const char domain Determine the value of the drop..."
---

<a name="apis.config_get_binding_domain_drop_body_after_trans_fail"></a> 
## Name

config_get_binding_domain_drop_body_after_trans_fail — Determine the value of the drop_body_after_trans_fail option

## Synopsis

`#include "ec_config.h"`

| `int **config_get_binding_domain_drop_body_after_trans_fail** (` | <var class="pdparam">caller_scope</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;
`int <var class="pdparam">binding</var>`;
`const char * <var class="pdparam">domain</var>`;<a name="idp48509840"></a> 
## Description

Determine the value of the `drop_body_after_trans_fail` option.

### Note

The `caller_scope` argument is virtually always `NULL`; there is no reason for a consumer to make it anything else.

**<a name="idp48513392"></a> Parameters**

<dl class="variablelist">

<dt>caller_scope</dt>

<dd>

For more information about this struct see [generic_module_infrastructure](/momentum/3/3-api/structs-generic-module-infrastructure).

</dd>

<dt>binding</dt>

<dd>

To determine the binding identifier see [config_get_binding_id_from_name](/momentum/3/3-api/apis-config-get-binding-id-from-name).

</dd>

<dt>domain</dt>

<dd>

The domain name.

</dd>

</dl>

**<a name="idp48521360"></a> Return Values**

This function returns an int. For the meaning of this value see [drop_body_after_trans_fail](/momentum/3/3-reference/3-reference-conf-ref-drop-body-after-trans-fail).

**<a name="idp48523120"></a> Threading**

It is legal to call this function in any thread.