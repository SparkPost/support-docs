---
lastUpdated: "03/26/2020"
title: "config_get_binding_name_from_id"
description: "config get binding name from id Get the binding name associated with the specified identifier char config get binding name from id slot ec binding slot slot Get the binding name associated with the specified identifier slot This parameter is an ec binding slot which is defined as typedef int..."
---

<a name="apis.config_get_binding_name_from_id"></a> 
## Name

config_get_binding_name_from_id — Get the binding name associated with the specified identifier

## Synopsis

`#include "ec_config.h"`

| `char * **config_get_binding_name_from_id** (` | <var class="pdparam">slot</var>`)`; |   |

`ec_binding_slot <var class="pdparam">slot</var>`;<a name="idp48855488"></a> 
## Description

Get the binding name associated with the specified identifier.

**<a name="idp48856736"></a> Parameters**

<dl class="variablelist">

<dt>slot</dt>

<dd>

This parameter is an `ec_binding_slot` which is defined as: `typedef int ec_binding_slot;`.

</dd>

</dl>

**<a name="idp48860400"></a> Return Values**

This function returns the binding name associated with the specified slot.

**<a name="idp48861376"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48862800"></a> 
## See Also

[config_get_binding_id_from_name](/momentum/3/3-api/apis-config-get-binding-id-from-name)